import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { Fragment } from 'react';
import { Tooltip } from '@mui/material';


const EmployeeAttendance = ({ attendanceData }) => {

    const events = attendanceData.map(item => ({
        title: item.status === 'present' ? 'Present' : 'Absent',
        start: item.date,
        backgroundColor: item.status === 'present' ? 'green' : 'red',
        reason: item.reason,
    }));

    const renderEventContent = (eventInfo) => {
        const { event } = eventInfo;
        return (
            <Fragment>
                <Tooltip title={event.extendedProps?.reason}>
                    <div className='w-full' >{event.title}</div>
                </Tooltip>
            </Fragment>
        );
    };

    const dayCellContent = (arg) => {
        if (arg.date.getDate() === new Date().getDate()) {
            const todayCell = document.querySelector('.fc-day-today');
            if (todayCell) {
                todayCell.style.backgroundColor = 'lightblue';
            }
        }
        return arg.dayNumberText;
    };

    return (<FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventContent={renderEventContent}
        headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
        }
        }
        buttonText={{
            today: 'Today',
            month: 'Month',
            week: 'Week',
            day: 'Day',
            list: 'List',
        }}
        dayCellContent={dayCellContent}

    />)
}


export default EmployeeAttendance;
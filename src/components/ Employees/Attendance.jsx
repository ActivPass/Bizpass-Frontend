import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';


const EmployeeAttendance = ({ attendanceData }) => {

    const events = attendanceData.map(item => ({
        title: `${item.name} ${item.status === 'present' ? 'Present' : 'Absent'}`,
        start: item.date,
        backgroundColor: item.status === 'present' ? 'green' : 'red',
    }));

    const eventRender = ({ event, el }) => {
        el.style.backgroundColor = event.backgroundColor;
    };

    return (<FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventRender={eventRender}
        headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
        }}
    />)
}


export default EmployeeAttendance;
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

const attendanceData = [
    { date: '2024-03-01', status: 'present' },
    { date: '2024-03-05', status: 'absent' },
  ];

const ClientAttendance = () => {

    const events = attendanceData.map(item => ({
        title: `${item.status === 'present' ? 'Present' : 'Absent'}`,
        start: item.date,
        backgroundColor: item.status === 'present' ? 'green' : 'red',
    }));

    const eventRender = ({ event, el }) => {
        el.style.backgroundColor = event.backgroundColor;
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
        eventRender={eventRender}
        headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
        }}
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


export default ClientAttendance;
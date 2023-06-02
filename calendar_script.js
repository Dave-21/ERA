// Get the calendar container element
const calendarContainer = document.getElementById('calendar');

// Generate the calendar
function generateCalendar() {
  // Clear the calendar container
  calendarContainer.innerHTML = '';

  // Get the current date
  const currentDate = new Date();

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDate()

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const calendarHeader = document.createElement('h2');

  calendarHeader.innerText = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' });
  calendarContainer.appendChild(calendarHeader);

  // Generate the calendar days
  for (let i = 1; i <= daysInMonth; i++) {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day');

    dayElement.classList.add('available');
    if(i==currentDay) {
        dayElement.classList.add('booked');
    }

    dayElement.innerText = i;

    calendarContainer.appendChild(dayElement);
  }
}

// Generate the initial calendar
generateCalendar();
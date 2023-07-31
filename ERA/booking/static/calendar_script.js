// Get the calendar container element
const calendarContainer = document.getElementById('calendar');

// Get the month container element
const monthContainer = document.getElementById('month');

// Generate the calendar
function generateCalendar() {
  // Clear the calendar container
  calendarContainer.innerHTML = '';

  // Get the current date
  const currentDate = new Date();

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Set the month
  monthContainer.innerText = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' });

  // Add weekdays
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  for (let i = 0; i < weekdays.length; i++) {
    const weekdayElement = document.createElement('div');
    weekdayElement.classList.add('weekday');
    weekdayElement.innerText = weekdays[i];
    calendarContainer.appendChild(weekdayElement);
  }

  // Generate the calendar days
  for (let i = 1; i <= daysInMonth; i++) {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    dayElement.classList.add('available');
    dayElement.innerText = i;
    calendarContainer.appendChild(dayElement);
  }
}
  
// // Generate the calendar
// function generateCalendar() {
//   // Clear the calendar container
//   calendarContainer.innerHTML = '';

//   // Get the current date
//   const currentDate = new Date();

//   const currentMonth = currentDate.getMonth();
//   const currentYear = currentDate.getFullYear();
//   const currentDay = currentDate.getDate()

//   const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

//   const calendarHeader = document.createElement('h2');

//   calendarHeader.innerText = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' });
//   calendarContainer.appendChild(calendarHeader);

//   // Generate the calendar days
//   for (let i = 1; i <= daysInMonth; i++) {
//     const dayElement = document.createElement('div');
//     dayElement.classList.add('day');

//     dayElement.classList.add('available');
//     if(i==currentDay) {
//         dayElement.classList.add('booked');
//     }

//     dayElement.innerText = i;

//     calendarContainer.appendChild(dayElement);
//   }
// }

// Generate the initial calendar
generateCalendar();

// Get the form elements
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const switchToSignupButton = document.getElementById('switchToSignup');
const switchToSigninButton = document.getElementById('switchToSignin');

// Handle the login form submission
loginForm.addEventListener('submit', function(event) {
    // Prevent the form from being submitted normally
    event.preventDefault();

    // Get the email and password
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('/api/login/', {
        // ...
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    
    // Send the email and password to server
    fetch('/api/login/', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success', data);
    })
    .catch((error) => {
        console.log('Error:', error);
    })
});

// Handle the signup form submission
signupForm.addEventListener('submit', function(event) {
    // Prevent the form from being submitted normally
    event.preventDefault();

    // Get the email and password
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Send the email and password to your server
    fetch('/api/signup/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

// Handle the switch to signup button click
switchToSignupButton.addEventListener('click', function() {
    document.querySelector('.signin-form').style.display = 'none';
    document.querySelector('.signup-form').style.display = 'block';
});

// Handle the switch to signin button click
switchToSigninButton.addEventListener('click', function() {
    document.querySelector('.signup-form').style.display = 'none';
    document.querySelector('.signin-form').style.display = 'block';
});
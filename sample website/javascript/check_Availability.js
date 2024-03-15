const checkAvailability = document.getElementById('check-availability');
const calendarModal = document.getElementById('calendar-modal');
const calendarDates = document.querySelector('.calendar-dates');
const prevMonth = document.querySelector('.prev-month');
const nextMonth = document.querySelector('.next-month');
const selectedDatesBox = document.getElementById('selected-dates'); // Add an element to display selected dates

let selectedDates = [];

const months = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

const today = new Date();
let currentYear = today.getFullYear();
let currentMonth = today.getMonth();

checkAvailability.addEventListener('click', () => {
  calendarModal.classList.add('show');
  populateCalendar(currentYear, currentMonth);
});

prevMonth.addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  populateCalendar(currentYear, currentMonth);
});

nextMonth.addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  populateCalendar(currentYear, currentMonth);
});

function populateCalendar(year, month) {
  calendarDates.innerHTML = ''; // Clear previous dates

  const firstDay = (new Date(year, month)).getDay(); // Day of the week for the first day
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // Days in the month

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement('span');
    emptyCell.classList.add('empty');
    calendarDates.appendChild(emptyCell);
  }

  // Add dates for the current month
  for (let i = 1; i <= daysInMonth; i++) {
    const dateCell = document.createElement('span');
    dateCell.innerText = i;
    const fullDate = `${year}-${month + 1}-${i}`; // Combine year, month, day

    // Disable all days except Mondays
    dateCell.classList.add('disabled');
    if (new Date(fullDate).getDay() === 1) { // Check if Monday
      dateCell.classList.remove('disabled');
    }

    dateCell.addEventListener('click', () => {
      if (!dateCell.classList.contains('disabled')) {
        handleDateSelection(fullDate);
      }
    });

    calendarDates.appendChild(dateCell);
  }

  // Update calendar header with selected month
  document.querySelector('.calendar-header h3').innerText = months[month];
}

function handleDateSelection(fullDate) {
  const formattedDate = new Date(fullDate).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }); // Format date as dd-mm-yy 

  if (selectedDates.includes(fullDate)) {
    // Remove date if already selected
    const index = selectedDates.indexOf(fullDate);
    selectedDates.splice(index, 1);
    dateCell.classList.remove('selected');
  } else {
    // Add date and update selected dates box
    selectedDates.push(fullDate);
    dateCell.classList.add('selected');
    selectedDatesBox.textContent = selectedDates.map(date => new Date(date).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })).join(', ');
  }
}

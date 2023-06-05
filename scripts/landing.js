const searchDivs = document.querySelectorAll('.search-box-option')

searchDivs.forEach(searchDiv => {
    searchDiv.setAttribute('tabindex', '0')

    searchDiv.addEventListener('click', (event) => {
        const dropdown = searchDiv.querySelector('[data-dropdown]')

        if (dropdown) {
            searchDivs.forEach(otherSearchDiv => {
                if (otherSearchDiv !== searchDiv) {
                    const otherDropdown = otherSearchDiv.querySelector('[data-dropdown]')
                    if (otherDropdown) {
                        otherDropdown.classList.remove('show')
                    }
                }
            })

            dropdown.classList.toggle('show')

            // Stop event propagation to prevent document click handler from firing
            event.stopPropagation()
        }
    })

    const dropdown = searchDiv.querySelector('[data-dropdown]')
    if (dropdown) {
        dropdown.addEventListener('click', (event) => {
            // Stop event propagation to prevent document click handler from firing
            event.stopPropagation()
        })

        // const listItems = dropdown.querySelectorAll('li')
        // listItems.forEach(listItem => {
        //     listItem.addEventListener('click', () => {
        //         const spanElement = searchDiv.querySelector('span')
        //         spanElement.textContent = listItem.textContent
        //     })
        // })
    }
})




// Add click event listener to document to close dropdowns on outside click
document.addEventListener('click', () => {
    searchDivs.forEach(searchDiv => {
        const dropdown = searchDiv.querySelector('[data-dropdown]')
        if (dropdown) {
            dropdown.classList.remove('show')
        }
    })
})


// Add click event listener to document to close dropdowns on outside click
document.addEventListener('click', () => {
    searchDivs.forEach(searchDiv => {
        const dropdown = searchDiv.querySelector('[data-dropdown]')
        if (dropdown) {
            dropdown.classList.remove('show')
        }
    })
})



//Location Dropdown

const data = {
    'All': [],
    'City 1': ['Area 1', 'Area 2', 'Area 3', 'Area 4', 'Area 5'],
    'City 2': ['Area 6', 'Area 7', 'Area 8', 'Area 9', 'Area 10'],
    'City 3': ['Area 11', 'Area 12', 'Area 13', 'Area 14', 'Area 15'],
    'City 4': ['Area 16', 'Area 17', 'Area 18', 'Area 19', 'Area 20'],
    'City 5': ['Area 21', 'Area 22', 'Area 23', 'Area 24', 'Area 25'],
}

const dropdown = document.querySelector('.dropdown-sb')

const cities = Object.keys(data);
for (let i = 0; i < cities.length;) {
    const column = document.createElement('div')
    column.className = 'column'

    // decide the number of cities per column
    let numCities = (i === 0) ? 3 : 2;

    for (let j = 0; j < numCities && i < cities.length; j++, i++) {
        const city = cities[i];

        const title = document.createElement('h4')
        title.innerText = city
        // Assign the "all-city" class if city is "All"
        if (city === 'All') {
            title.className = 'all-city';
        }
        column.appendChild(title)

        // Skip adding ul if city is "All"
        if (city !== 'All') {
            const ul = document.createElement('ul')
            data[city].forEach(area => {
                const li = document.createElement('li')
                li.innerText = area
                ul.appendChild(li)
            })
            column.appendChild(ul)
        }
    }

    dropdown.appendChild(column)
}





// First, select all the clickable dropdown options
let citiesOptions = document.querySelectorAll('.dropdown-sb h4');
let serviceOptions = document.querySelectorAll('.dropdown-sb li');
let termOptions = document.querySelectorAll('.dropdown-sp li');
let bedroomOptions = document.querySelectorAll('#bedrooms-dropdown li');

// Merge the arrays into one
let options = [...citiesOptions, ...serviceOptions, ...termOptions, ...bedroomOptions];

console.log(options);

// Then, add a click event listener to each option
options.forEach(option => {
    option.addEventListener('click', () => {
        // When an option is clicked, get its text content
        let selectedOption = option.textContent;

        // Then, find the span element within the parent search-box-option and replace its text content with the selected option
        let spanElement = option.closest('.search-box-option').querySelector('span');
        spanElement.textContent = selectedOption;
    });
});

let arrivalDate
let departureDate

function createCalendar(id) {
    // Calendar

    // Object to hold selected dates for each month/year
    let selectedDates = {};

    //Check leap year
    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
    }

    //getFebDays
    function getFebDays(year, month) {
        if (month === 1) { // Now February is 1
            return isLeapYear(year) ? 29 : 28;
        }
        else {
            return 31 - (month % 7 % 2); // This will return the correct number of days for any month
        }
    }

    let calendar = document.querySelector('#' + id + ' .calendar')

    const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    let monthPicker = document.querySelector('#month-picker-' + id)

    monthPicker.onclick = () => {
        monthList.classList.toggle('show-months')
    }

    let selectedDate; // Move the declaration of selectedDate out of generateCalendar

    //Generate the calendar
    function generateCalendar(month, year) {
        let calendarDays = document.querySelector('#' + id + ' .calendar-days')
        calendarDays.innerHTML = ''

        let calendarHeaderYear = document.querySelector('#year-' + id)

        let daysOfMonth = [31, getFebDays(year, month), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

        let currentDate = new Date()

        monthPicker.innerText = month_names[month]
        calendarHeaderYear.innerText = year

        let firstDay = new Date(year, month, 1)

        // generate empty divs for the days of the week before the first day of the month
        for (let i = 0; i < firstDay.getDay(); i++) {
            let day = document.createElement('div')
            calendarDays.appendChild(day)
        }

        // generate divs for the days of the month
        for (let i = 1; i <= daysOfMonth[month]; i++) {
            let day = document.createElement('div');
            day.innerHTML = i;

            // Create a Date object for this day
            let thisDay = new Date(year, month, i);

            // If this day is today, add the 'current-date' class
            if (i === currentDate.getDate() && year === currentDate.getFullYear() && month === currentDate.getMonth()) {
                day.classList.add('current-date');
            }

            // Disable selection for dates before and on the current date
            if (thisDay <= currentDate) {
                day.classList.add('disabled-date');
            } else {
                // Check if this day is the currently selected date
                if (selectedDate && thisDay.getDate() === selectedDate.getDate() && thisDay.getMonth() === selectedDate.getMonth() && thisDay.getFullYear() === selectedDate.getFullYear()) {
                    day.classList.add('selected-date');
                }
                // Add event listener for click
                day.addEventListener('click', function () {
                    document.querySelector(`#${id} .search-box-option-wrapper span`).textContent = `${i} ${month_names[month]} ${year}`;

                    // Store this day as the selected date
                    selectedDate = thisDay;

                    // Reset the class for all days
                    let allDays = calendarDays.children;
                    for (let j = 0; j < allDays.length; j++) {
                        allDays[j].classList.remove('selected-date');
                    }

                    // Add the selected-date class to the clicked day
                    day.classList.add('selected-date');
                });
            }
            calendarDays.appendChild(day);
        }



    }

    let monthList = calendar.querySelector('.month-list')

    month_names.forEach((e, index) => {
        let month = document.createElement('div')
        month.innerHTML = `<div>${e}</div>`
        month.onclick = () => {
            monthList.classList.remove('show-months')
            generateCalendar(index, currentYear)
        }
        monthList.appendChild(month)
    })

    let currentMonth = new Date().getMonth()
    let currentYear = new Date().getFullYear()

    generateCalendar(currentMonth, currentYear)

    document.querySelector('#next-month-' + id).onclick = () => {
        currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear
        currentMonth = (currentMonth + 1) % 12
        generateCalendar(currentMonth, currentYear)
    }

    document.querySelector('#prev-month-' + id).onclick = () => {
        currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear
        currentMonth = (currentMonth === 0) ? 11 : (currentMonth - 1)
        generateCalendar(currentMonth, currentYear)
    }
}

window.onload = function () {
    createCalendar('arrival')
    createCalendar('departure')
}
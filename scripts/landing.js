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


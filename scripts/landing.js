const searchDivs = document.querySelectorAll('.search-box-option')

searchDivs.forEach(searchDiv => {
    searchDiv.setAttribute('tabindex', '0')

    searchDiv.addEventListener('click', event => {
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
        dropdown.addEventListener('click', event => {
            // Stop event propagation to prevent document click handler from firing
            event.stopPropagation()
        })
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



//Location Dropdown

const data = {
    'City 1': ['Area 1', 'Area 2', 'Area 3', 'Area 4', 'Area 5'],
    'City 2': ['Area 6', 'Area 7', 'Area 8', 'Area 9', 'Area 10'],
    'City 3': ['Area 11', 'Area 12', 'Area 13', 'Area 14', 'Area 15'],
    'City 4': ['Area 16', 'Area 17', 'Area 18', 'Area 19', 'Area 20'],
    'City 5': ['Area 21', 'Area 22', 'Area 23', 'Area 24', 'Area 25'],
}

const dropdown = document.querySelector('.dropdown-sb')

const cities = Object.keys(data);
for (let i = 0; i < cities.length; i += 2) {
    const column = document.createElement('div')
    column.className = 'column'
    for (let j = i; j < i + 2 && j < cities.length; j++) {
        const city = cities[j];

        const title = document.createElement('h4')
        title.innerText = city
        column.appendChild(title)

        const ul = document.createElement('ul')
        data[city].forEach(area => {
            const li = document.createElement('li')
            li.innerText = area
            ul.appendChild(li)
        })

        column.appendChild(ul)
    }

    dropdown.appendChild(column)
}



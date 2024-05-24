function displayLocations(locations) {
    const container = document.getElementById('location-container');
    container.innerHTML = ''; // Clear previous results

    locations.forEach(location => {
        const card = document.createElement('div');
        card.classList.add('location-card');
        card.innerHTML = `
            <h2>${location.Name}</h2>
            <p><strong>Location:</strong> ${location.Location}</p>
            <p><strong>Description:</strong> ${location.Description}</p>
            <p><strong>Category:</strong> ${location.Category}</p>
        `;
        container.appendChild(card);
    });
}

function hideLocationContainer() {
    const container = document.getElementById('location-container');
    container.style.display = 'none';
    const subtitle = document.querySelector('.Subtitle1');
    subtitle.style.display = 'none';
}

function showLocationContainer() {
    const container = document.getElementById('location-container');
    container.style.display = 'block';
    const subtitle = document.querySelector('.Subtitle1');
    subtitle.style.display = 'block';
}

function fetchLocationData(city) {
    fetch('Datasets/dataset.csv')
        .then(response => response.text())
        .then(csvData => {
            const rows = csvData.split('\n');
            const locations = [];
            const csvPattern = /"([^"]+)"|([^,]+)/g;

            for (let i = 1; i < rows.length; i++) {
                const row = rows[i].match(csvPattern);

                if (row && row.length >= 4) {
                    const name = row[0].replace(/"/g, '').trim();
                    const location = row[1].replace(/"/g, '').trim();
                    const description = row[2].replace(/"/g, '').trim();
                    const category = row[3].replace(/"/g, '').trim();

                    const locationData = {
                        Name: name,
                        Location: location,
                        Description: description,
                        Category: category
                    };

                    locations.push(locationData);
                }
            }

            const cityLocations = locations.filter(location => location.Location === city);
            displayLocations(cityLocations);
        })
        .catch(error => console.error('Error fetching CSV file:', error));
}

function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
   


    // Make a reverse geocoding request
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
        .then(response => response.json())
        .then(data => {
            if (data.address && data.address.city) {
                var city = data.address.city;
                document.getElementById("City").textContent = city;
                fetchLocationData(city);
            } else {
                document.getElementById("City").textContent = "City not found";
            }
        })
        .catch(error => {
            console.error("Error fetching reverse geocoding data:", error);
            document.getElementById("City").textContent = "Error fetching city data";
        });
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

window.onload = getLocation;



function displayOtherLocations(locations) {
    const container = document.getElementById('other-location-container');
    container.innerHTML = ''; // Clear previous results

    locations.forEach(location => {
        const card = document.createElement('div');
        card.classList.add('other-location-card');
        card.innerHTML = `
            <h2>${location.Name}</h2>
            <p><strong>Location:</strong> ${location.Location}</p>
            <p><strong>Description:</strong> ${location.Description}</p>
            <p><strong>Category:</strong> ${location.Category}</p>
        `;
        container.appendChild(card);
    });
}

function filterLocations(locations, query) {
    return locations.filter(location => {
        return (
            location.Name.toLowerCase().includes(query.toLowerCase()) ||
            location.Location.toLowerCase().includes(query.toLowerCase()) ||
            location.Description.toLowerCase().includes(query.toLowerCase()) ||
            location.Category.toLowerCase().includes(query.toLowerCase())
        );
    });
}

fetch('Datasets/dataset.csv')
    .then(response => response.text())
    .then(csvData => {
        const rows = csvData.split('\n');
        const locations = [];
        const csvPattern = /"([^"]+)"|([^,]+)/g;

        for (let i = 1; i < rows.length; i++) {
            const row = rows[i].match(csvPattern);

            if (row && row.length >= 4) {
                const name = row[0].replace(/"/g, '').trim();
                const location = row[1].replace(/"/g, '').trim();
                const description = row[2].replace(/"/g, '').trim();
                const category = row[3].replace(/"/g, '').trim();

                const locationData = {
                    Name: name,
                    Location: location,
                    Description: description,
                    Category: category
                };

                locations.push(locationData);
            }
        }

        displayOtherLocations(locations);

        // Add event listener for search input
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', function () {
            const query = this.value;
            const filteredLocations = filterLocations(locations, query);
            displayOtherLocations(filteredLocations);
            
            if (query.trim() !== '') {
                hideLocationContainer();
            } else {
                showLocationContainer();
            }
        });
    })
    .catch(error => console.error('Error fetching CSV file:', error));
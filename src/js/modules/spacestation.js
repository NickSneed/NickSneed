function init() {
    fetch('https://api.open-notify.org/iss-now.json')
        .then(response => response.json())
        .then(data => {
            const { latitude, longitude }= data.iss_position;

            // Add latitude to the inner HTML of the element with ID 'space-station'
            const spaceStationElement = document.querySelector('.js-space-station');
            if (spaceStationElement) {
                spaceStationElement.innerHTML = `${latitude}, ${longitude}`;
            }
        })
        .catch(error => {
            // Handle any errors
            console.error('Error:', error);
        });
}

export default init;
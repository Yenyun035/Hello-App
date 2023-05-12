window.addEventListener('DOMContentLoaded', () => {
    showGreetings();
    logoutHandler();
});

function showGreetings() {
    let ipURL = 'https://api.ipify.org?format=json';
    let geoURL = `http://ip-api.com/json/`;
    let helloURL = `https://hellosalut.stefanbohacek.dev/?ip=`;

    let output = document.getElementById('greet');
    let geoinfo = document.getElementById('geoinfo');
    let username = localStorage.getItem('username');

    fetch(ipURL).then(data => data.json())
    .then((ipJson) => {
        let ip = ipJson.ip;
        fetch(`${geoURL}${ip}`).then(info => info.json())
        .then((ipInfo) => {
            let toShow = `<ul>
                <li>IP Address: ${ipInfo.query}</li>
                <li>Country: ${ipInfo.country}</li>
                <li>Country Code: ${ipInfo.countryCode}</li>
                <li>City: ${ipInfo.city}</li>
                <li>Region: ${ipInfo.region}</li>
                <li>Region Name: ${ipInfo.regionName}</li>
                <li>City: ${ipInfo.city}</li>
                <li>Zip: ${ipInfo.zip}</li>
                <li>Location: (${ipInfo.lat}, ${ipInfo.lon})</li>
                <li>Time zone: ${ipInfo.timezone}</li>
            </ul>`;
                
            geoinfo.innerHTML = toShow;
            console.log(ipInfo);
        });

        fetch(`${helloURL}${ip}`).then(info => info.json())
        .then((info) => {
            output.innerText = `${info.hello} ${username}! You have successfully logged in!`;
            console.log(info);
        })
    });
}

function logoutHandler() {
    let logoutBtn = document.getElementById('logout');
    
    logoutBtn.addEventListener('click', () => {
        window.location.replace('./logout.html');
    });
}
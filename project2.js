function getData()
{
    const city = search.value;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ffeb9eb84fmsh1421571aa0b68e7p1ef5e5jsncf2bba5868e3',
            'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
        }
    };
    
    fetch('https://yahoo-weather5.p.rapidapi.com/weather?location='+city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            temp.innerHTML = response.temperature;
            ws.innerHTML = response.speed;
            hmdty.innerHTML = response.humidity;

        })
        .catch(err => console.error(err));
}
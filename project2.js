/*function getData()
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
}*/
const apiKey ="0e080868366d22c0bf13795320ffc332"

 async function fetchWether(){
    const city = search.value;
   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
  
   const data=  await response.json();
   temp.innerHTML =data.main.temp;
   ws.innerHTML = data.wind.speed;
   hmdty.innerHTML = data.main.humidity;
   

}
fetchWether()

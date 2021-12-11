var cityName=document.getElementById('cityName')
var submitBtn = document.getElementById('submitBtn');
var show=document.getElementById('show')

 

var getinfo = async function (event) {
 
    console.log("function is working") 

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=1bec974afc54babe6bba55156fb579f0`;
    setTimeout(() => {
        console.log('first line');
        
    }, 10000);
    console.log('second line');


    
    const respond = await fetch(url);
    const data = await respond.json();
    console.log(data);
    const arrdata = [data];
    console.log('arrdata : ',arrdata);
    const num = arrdata[0].main.temp - 273.15;
    show.innerHTML = num.toFixed(2) + "°C " + arrdata[0].weather[0].description;

}
submitBtn.addEventListener('click', getinfo);
const apiKey="a3dd15572d7d7dd51cee75990669e1cb";
        const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchBox=document.querySelector(".search input");
        const searchBtn=document.querySelector(".search button");
        const weatherIcon=document.querySelector(".weather-icon");
        async function checkWeather(city){
            //fetch data from the API
            const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
            //display error if city name is wrong
            if(response.status==404){
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none";
            }else{   //otherwise display results 
                var data=await response.json();
            //console.log(data);
            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
            document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
            document.querySelector(".wind").innerHTML=data.wind.speed+"Km/h";
            //if statements to display images according to the weather fetched in the API
             if(data.weather[0].main=="Clouds"){
                weatherIcon.src="Images/clouds.png"
            }else if(data.weather[0].main=="Clear"){
                weatherIcon.src="Images/clear.png"
            }else if(data.weather[0].main=="Mist"){
                weatherIcon.src="Images/mist.png"
            }else if(data.weather[0].main=="Drizzle"){
                weatherIcon.src="Images/drizzle.png"
            }else if(data.weather[0].main=="Snow"){
                weatherIcon.src="Images/snow.png"
            }else if(data.weather[0].main=="Rain"){
                weatherIcon.src="Images/rain.png"
            }
            document.querySelector(".weather").style.display="block";
            document.querySelector(".error").style.display="none";

            }
        }
        //event listener for when the the search button is clicked
        searchBtn.addEventListener("click", ()=>checkWeather(searchBox.value));
        //enter button functionality
        function handleEnterButton(event){
            if(event.key=="Enter"){
                event.preventDefault();
                checkWeather(searchBox.value);
            }
        }
        document.addEventListener("keydown",handleEnterButton)
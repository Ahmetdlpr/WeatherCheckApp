let url='Openweather Url';
let key='Openweather userkey';

const Searchinput=document.querySelector(".Search");
const City=document.querySelector(".City");
const temp=document.querySelector(".temp");
const desc=document.querySelector(".desc");
const minmaxvalue=document.querySelector(".minmaxvalue");

const Setquery=(e)=>{
    if(e.keyCode=='13')
    {
     getresult(Searchinput.value);
  
          
        
}
}
const getresult=(Cityname)=>{
    
     let Query=`${url}weather?q=${Cityname}&appid=${key}&units=metric&lang=tr`
     fetch(Query)
     .then((e)=>{
       return e.json();
     })
     .then(Displayresult)

 Searchinput.value="";
}


 const Displayresult=(Print)=>{
  City.textContent=`${Print.name}/Ülke:${Print.sys.country}`;
  City.style.borderBottom = "2px solid goldenrod";
  temp.textContent=`${Math.round(Print.main.temp)}°C`;
  temp.style.borderBottom = "2px solid goldenrod";
   desc.textContent=Print.weather[0].description;
   desc.style.borderBottom = "2px solid goldenrod";
   minmaxvalue.textContent=`Min ${Math.round(Print.main.temp_min)} °C / Max ${Math.round(Print.main.temp_max)}°C`;
   minmaxvalue.style.borderBottom = "2px solid goldenrod";

 }


Searchinput.addEventListener("keypress",Setquery);
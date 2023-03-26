let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let amPm = document.getElementById('am-pm');



setInterval(() => {
    let date = new Date();
let setAmPm = "am";
    let currentHours = date.getHours();
if(currentHours > 11){
    if(currentHours !== 12){
        currentHours -= 12
    }
    setAmPm = "pm"
}
hours.innerHTML = '<h2>'+ currentHours + ' : ' +'</h2>'
minutes.innerHTML = '<h2>'+date.getMinutes()+ ' : '+'</h2>';
seconds.innerHTML ='<h2>'+ date.getSeconds()+'</h2>';
amPm.innerHTML = '<h2>'+setAmPm+'</h2>';
}, 1000);




// alert(5)
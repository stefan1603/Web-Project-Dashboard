function displayTime(){
    var dateTime= new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById("session");

    if(hrs >= 12){
        session.innerHTML = "PM"
    }else{
        session.innerHTML = "AM"
    }
    if(hrs > 12){
        hrs -= 12;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}


function displayDate(){
    let today = new Date();

    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    document.getElementById('dd').innerHTML = day;
    document.getElementById('mm').innerHTML = month;
    document.getElementById('yy').innerHTML = year;
    

}
setInterval(displayTime,1000);
setInterval(displayDate,100);


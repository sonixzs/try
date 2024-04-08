function currentTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM";
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour);
    hour = changeTime(hour);
    min = changeTime(min);
    sec = changeTime(sec);
    document.getElementById("laiks").innerText = hour + " : " + min + " : " + sec + " " + midday;
  
    var months = ['Janvāris', 'Februāris', 'Marts', 'Aprīlis', 'Maijs', 'Jūnijs', 'Jūlijs', 'Augusts', 'Septembris', 'Oktobris', 'Novembris', 'Decemberis'];
    var days = ['Svēt', 'Pirmdiena', 'Otr', 'Treš', 'Cet', 'Piek', 'Sest'];
  
    var curWeekDay = days[date.getDay()];
    var curDay = date.getDate();
    var curMonth = months[date.getMonth()];
    var curYear = date.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("data").innerHTML = date;
  
    var t = setTimeout(currentTime, 1000);
  }
  
  function changeTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
  currentTime();
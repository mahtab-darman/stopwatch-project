    // define global variables
    let MyTimer;
    let totalSeconds = 0;
    let Status_1 = document.getElementById("start");
    let Status_2 = document.getElementById("stop");
    let Status_3 = document.getElementById("reset");
    let lap = document.getElementById("lap");

    //  define event for start button
    Status_1.addEventListener("click",function(){
        MyTimer = setInterval(countUpTimer, 1);
        if( Status_1.disabled == true ){
            Status_1.disabled = "";
            Status_2.disabled = "true";

        }else{
            Status_1.disabled = "true";
            Status_2.disabled = "";
            Status_3.disabled = "true";
        }
        Status_2.style.backgroundColor = "red";
        Status_1.style.backgroundColor = "gray";
        Status_3.style.backgroundColor = "gray";
    });

    // define event for stop button
    Status_2.addEventListener("click",function(){
        clearInterval(MyTimer);
        if( Status_1.disabled == true ){
            Status_1.disabled = "";
            Status_2.disabled = "true";
            Status_3.disabled = "";
        }else{
            Status_1.disabled = "true";
            Status_2.disabled = "";
        }
        Status_1.style.backgroundColor = "green";
        Status_2.style.backgroundColor = "gray";
        Status_3.style.backgroundColor = "yellow"
        Status_1.innerText = "Resume";
        lap.innerHTML += `<h2 style="color=white">Lap: ${count_up_timer.innerText} </h2>`;
    });

    // define event for reset button
    Status_3.addEventListener("click",function(){
        document.getElementById("count_up_timer").innerText = "00:00.00";
        lap.innerHTML ="";
        totalSeconds = 0;
        Status_1.innerText = "Start";
    });

    // define function for timer
    function countUpTimer() {
    let Result = document.getElementById("count_up_timer");
    totalSeconds++;
    let hour = Math.floor(totalSeconds / 3600);
    let minute = Math.floor((totalSeconds - hour * 3600) / 60);
    let seconds = totalSeconds - (hour * 3600 + minute * 60);
    if( hour < 10 ){
     hour = "0" + hour;
    } 
    if( minute < 10 ){
     minute = "0" + minute;
    }
    if( seconds < 10 ){
     seconds = "0" + seconds;
    } 
    Result.innerHTML = hour + ":" + minute + "." + seconds;
    }
function tick(){
    var mymusic = new Audio('notify.mp3');
    var timeDisplay=document.getElementById("time");
    
    var min=Math.floor(mySeconds/60);
    var sec=mySeconds-(min*60);
    
    if (sec < 10) {
        sec="0"+sec;
    }
    
    var message=min.toString()+":"+sec;
    
    timeDisplay.innerHTML=message;
    
    if(mySeconds===0){
        mymusic.play();
        alert("Countdown complete");
        clearInterval(intervalHandle);
        resetPage();
    }
    mySeconds--;
    
    
}
function startCounter(){
    var myInput=document.getElementById("minutes").value;
    if (isNaN(myInput) || myInput == 0){
        alert("Input a valid number please");
        return;
    }
    mySeconds=myInput*60;
    
    intervalHandle=setInterval(tick, 1000);
    
    document.getElementById("inputArea").style.display="none";
    document.getElementById("startimer").style.display="none";  
    
    
}

window.onload=function(){
    var myInput=document.createElement("input");
    myInput.setAttribute("type","text");
    myInput.setAttribute("id","minutes");
    
    document.getElementById("inputArea").appendChild(myInput);
    
    
}
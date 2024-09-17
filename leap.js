let year= parseFloat(document.getElementById("year"))

function showMess(){
    if(year<0){
        alert("Please enter valid year");
        return;
    }

    if(year%4===0){
        alert(year+" is a leap year")
    }
    else{
        alert(year+" is not a leap year")
    }

}
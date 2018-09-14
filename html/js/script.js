var date = new Date();
var value = date.getDay();
var output = "";

switch(value){
    case 1:
    case 2:
    case 4:
        output = "17:00 - 19:00";
        break;
    default:
        output = "Geschlossen";
        break;
}

document.getElementById('top-open').innerHTML = "Heute: " + output;
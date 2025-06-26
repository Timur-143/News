let today = new Date();
let hour = today.getHours();
let min = today.getMinutes();
let day = today.getDate();
let time = today.toTimeString();
let month = today.getMonth();
let year = today.getFullYear();

document.writeln('<p>' + day + ' ' + "мая" + ' ' + year + ', ' + hour + ":" + min + "</p>");
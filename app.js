let currentDay = $('#currentDay');

//Get buttons
let buttonNine = $('#btn-9');
let buttonTen = $('#btn-10');
let buttonEleven = $('#btn-11');
let buttonTwelve = $('#btn-12');
let buttonOne = $('#btn-1');
let buttonTwo = $('#btn-2');
let buttonThree = $('#btn-3');
let buttonFour = $('#btn-4');
let buttonFive = $('#btn-5');

//Load time and color code hours when window is loaded
document.addEventListener('DOMContentLoaded', function(){
    let today = new Date();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let dayOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday"];
    let currentDate = dayOfTheWeek[today.getDay()] + ', ' + months[today.getMonth()] + ' ' + today.getDate();
    currentDay.html(currentDate);

    //set color for 9:00
    if(today.getHours() === 9){
        $('#txt-9').attr('class', 'present');
    }
    else if(today.getHours() < 9){
        $('#txt-9').attr('class', 'future');
    }
    else{
        $('#txt-9').attr('class', 'past');
    }
    //set color for 10:00
    if(today.getHours() === 10){
        $('#txt-10').attr('class', 'present');
    }
    else if(today.getHours() < 10){
        $('#txt-10').attr('class', 'future');
    }
    else{
        $('#txt-10').attr('class', 'past');
    }
    //set color for 11:00
    if(today.getHours() === 11){
        $('#txt-11').attr('class', 'present');
    }
    else if(today.getHours() < 11){
        $('#txt-11').attr('class', 'future');
    }
    else{
        $('#txt-11').attr('class', 'past');
    }
    //set color for 12:00
    if(today.getHours() === 12){
        $('#txt-12').attr('class', 'present');
    }
    else if(today.getHours() < 12){
        $('#txt-12').attr('class', 'future');
    }
    else{
        $('#txt-12').attr('class', 'past');
    }
    //set color for 1:00
    if(today.getHours() === 13){
        $('#txt-1').attr('class', 'present');
    }
    else if(today.getHours() < 13){
        $('#txt-1').attr('class', 'future');
    }
    else{
        $('#txt-1').attr('class', 'past');
    }
    //set color for 2:00
    if(today.getHours() === 14){
        $('#txt-2').attr('class', 'present');
    }
    else if(today.getHours() < 14){
        $('#txt-2').attr('class', 'future');
    }
    else{
        $('#txt-2').attr('class', 'past');
    }
    //set color for 3:00
    if(today.getHours() === 15){
        $('#txt-3').attr('class', 'present');
    }
    else if(today.getHours() < 15){
        $('#txt-3').attr('class', 'future');
    }
    else{
        $('#txt-3').attr('class', 'past');
    }
    //set color for 4:00
    if(today.getHours() === 16){
        $('#txt-4').attr('class', 'present');
    }
    else if(today.getHours() < 16){
        $('#txt-4').attr('class', 'future');
    }
    else{
        $('#txt-4').attr('class', 'past');
    }
    //set color for 5:00
    if(today.getHours() === 17){
        $('#txt-5').attr('class', 'present');
    }
    else if(today.getHours() < 17){
        $('#txt-5').attr('class', 'future');
    }
    else{
        $('#txt-5').attr('class', 'past');
    }
});

//Save Buttons
buttonNine.click(function(){
    let txtNine = $('#txt-9').val();
    localStorage.setItem('txtNine', txtNine);
});
let getTxtNine = localStorage.getItem('txtNine');
$('#txt-9').html(getTxtNine);

buttonTen.click(function(){
    let txtTen = $('#txt-10').val();
    localStorage.setItem('txtTen', txtTen);
});
let getTxtTen = localStorage.getItem('txtTen');
$('#txt-10').html(getTxtTen);

buttonEleven.click(function(){
    let txtEleven = $('#txt-11').val();
    localStorage.setItem('txtEleven', txtEleven);
});
let getTxtEleven = localStorage.getItem('txtEleven');
$('#txt-11').html(getTxtEleven);

buttonTwelve.click(function(){
    let txtTwelve = $('#txt-12').val();
    localStorage.setItem('txtTwelve', txtTwelve);
});
let getTxtTwelve = localStorage.getItem('txtTwelve');
$('#txt-12').html(getTxtTwelve);

buttonOne.click(function(){
    let txtOne = $('#txt-1').val();
    localStorage.setItem('txtOne', txtOne);
});
let getTxtOne = localStorage.getItem('txtOne');
$('#txt-1').html(getTxtOne);

buttonTwo.click(function(){
    let txtTwo = $('#txt-2').val();
    localStorage.setItem('txtTwo', txtTwo);
});
let getTxtTwo = localStorage.getItem('txtTwo');
$('#txt-2').html(getTxtTwo);

buttonThree.click(function(){
    let txtThree = $('#txt-3').val();
    localStorage.setItem('txtThree', txtThree);
});
let getTxtThree = localStorage.getItem('txtThree');
$('#txt-3').html(getTxtThree);

buttonFour.click(function(){
    let txtFour = $('#txt-4').val();
    localStorage.setItem('txtFour', txtFour);
});
let getTxtFour = localStorage.getItem('txtFour');
$('#txt-4').html(getTxtFour);

buttonFive.click(function(){
    let txtFive = $('#txt-5').val();
    localStorage.setItem('txtFive', txtFive);
});
let getTxtFive = localStorage.getItem('txtFive');
$('#txt-5').html(getTxtFive);


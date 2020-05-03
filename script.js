var day = moment().format("dddd MMMM do YYYY");
var time = moment().hour();

$("#currentDay").append("<text>" +day +"</text>");
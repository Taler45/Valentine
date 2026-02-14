
function dateAndTime (){
    let end = new Date()
    const start = new Date("xxxx-xx-xx") // вкажіть дату коли ви почали зустрічатись у форматі xxxx-xx-xx
    let result = end-start

    years = Math.floor(result/31536000000)
    month =Math.floor((result%31536000000)/2630016000)
    days = Math.floor((result%2630016000)/86400000)
    hours = Math.floor((result % 86400000)/3600000)
    minutes = Math.floor((result%3600000)/60000)
    seconds = Math.floor((result%60000)/1000)

    let div = document.getElementById("timer")
    div.innerText = `Ми разом: ${years} р. ${month} міс. ${days} дн. ${hours} год. ${minutes} хв. ${seconds} сек.`; 

}
setInterval(dateAndTime, 1000);
dateAndTime()

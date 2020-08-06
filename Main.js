var text = document.getElementById('timeSince')
var title = document.getElementById('title')
function timeSince(date) {
var seconds = date / 1000
title.innerHTML = seconds + 'Seconds'
//Get years
var years = Math.floor(seconds / (60*60*24*7*4.21857142857*12))
seconds -= years * (60*60*24*7*4.21857142857*12)
if (years > 0){
	text.innerHTML = `${years} ${gramCheck(years,"Year")}<br>`
}
//Get months
var months = Math.floor(seconds / (60*60*24*7*4.21857142857))
seconds -= months * (60*60*24*7*4.21857142857)
if (months > 0){
	text.innerHTML += `${months} ${gramCheck(months,"Month")}<br>`
}
//Get weeks
var weeks = Math.floor(seconds / (60*60*24*7))
seconds -= weeks * (60*60*24*7)
if (weeks > 0){
	text.innerHTML += `${weeks} ${gramCheck(weeks,"Week")}<br>`
}
//Get days
var days = Math.floor(seconds / (60*60*24))
seconds -= days * (60*60*24)
if (days > 0){
	text.innerHTML += `${days} ${gramCheck(days,"Day")}<br>`
}
//Get hours
var hours = Math.floor(seconds / (60*60))
seconds -= hours * (60*60)
if (hours > 0){
	text.innerHTML += `${hours} ${gramCheck(hours,"Hour")}<br>`
}
//Get minutes
var minutes = Math.floor(seconds / (60))
seconds -= minutes * (60)
if (minutes > 0){
	text.innerHTML += `${minutes} ${gramCheck(minutes,"Minute")}<br>`
}
//Get seconds
if (Math.floor(seconds) > 0){
	text.innerHTML += `${Math.floor(seconds)} ${gramCheck(seconds, "Second")}`
}
}
function getTime(){
text.innerHTML = "We've Been Together For<br>"
var aDay = 1589843344304;
var d = new Date()
timeSince(d.getTime()-aDay)
}
function gramCheck(num,word){
if (num > 1){
return word + "s"
} else {
return word
}
}
getTime()
setInterval(getTime, 1000)

/*algo for making it functional

*/
setInterval(showTime, 1000);
function showTime() {
        let time = new Date();
        let hour = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();
        am_pm = "AM";
        if (hour > 12) {
                hour -= 12;
                am_pm = "PM";
        }
        if (hour == 0) {
                hr = 12;
                
        }
}
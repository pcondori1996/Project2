const dateFormat = require("dateformat");


module.exports = {
    timeandDateNow: (now) => {
  return dateFormat(now, "dddd, mmmm dS, yyyy");
    },

    timeFrom: (time) => {
        const now = new Date();
        const ago = now.getTime() - time.getTime();

        const seconds = Math.floor(ago / 1000);
        const minutes = Math.floor (seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours/24);
        const months = Math.floor(days/30.41);
        const years = Math.floor(months/365.25);
        
        const checkPlural = (num) => {
            if (num > 1) return 's';
            return "";
        }

        let displayTime = "1 second";
        if (years > 0) displayTime = `${years} year${checkPlural(years)}`;
        else if (months > 0) displayTime = `${months} month${checkPlural(months)}`;
        else if (days > 0) displayTime = `${days} day${checkPlural(days)}`;
        else if (hours > 0) displayTime = `${hours} hour${checkPlural(hours)}`;
        else if (minutes > 0) displayTime = `${minutes} minute${checkPlural(minutes)}`;
        else if (seconds > 0) displayTime = `${seconds} second${checkPlural(seconds)}` ;
        
        return displayTime;
    }
}
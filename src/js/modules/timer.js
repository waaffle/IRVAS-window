const timer = (selector, deadline) => {

    const container = document.querySelector(selector),
    seconds = container.querySelector('#seconds'),
    minutes = container.querySelector('#minutes'),
    hours = container.querySelector('#hours'),
    days = container.querySelector('#days');

    const addNull = (num) => {
        if (num <= 9) return '0' + num;
        else return num;
    }

    updateTimer();
    let timerId = setInterval(updateTimer, 1000);

    function getRemainingTime(endtime){
        const t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / (1000 * 60)) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            days = Math.floor(t / (1000 * 60 * 60 * 24));

        return {
            t : t,
            seconds: seconds,
            minutes: minutes,
            hours: hours,
            days: days
        }
    }


    function updateTimer(){
        let t = getRemainingTime(deadline);
        seconds.textContent = addNull(t.seconds);
        minutes.textContent = addNull(t.minutes);
        hours.textContent = addNull(t.hours);
        days.textContent = addNull(t.days);

        if (t.t <= 0) {
            seconds.textContent = '00';
            minutes.textContent = '00';
            hours.textContent = '00';
            days.textContent = '00';
            clearInterval(timerId);
        }
    }

    

}

export default timer;
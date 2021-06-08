
        const daysE = document.getElementById('days');
        const hoursE = document.getElementById('hours');
        const minutesE = document.getElementById('mins');
        const secondsE = document.getElementById('seconds');
        const newYears = "1 Jan 2022";

        function CountDown(){
            const newYearsDate = new Date(newYears);
            const currentDate = new Date();
            console.log(currentDate);

            const totalSeconds = (newYearsDate-currentDate) / 1000;
            console.log(totalSeconds);

            const days = Math.floor(totalSeconds/3600/24);
            const hours = Math.floor(totalSeconds/3600)%24;
            const mins = Math.floor(totalSeconds/60)%60;
            const seconds = Math.floor(totalSeconds)%60;

            daysE.innerHTML = days;
            hoursE.innerHTML = formatTime(hours);
            minutesE.innerHTML = formatTime(mins);
            secondsE.innerHTML = formatTime(seconds);
        }

        function formatTime(time){
            return time < 10 ? (`0${time}`) : time;
        }

        CountDown();
        setInterval(CountDown,1000);

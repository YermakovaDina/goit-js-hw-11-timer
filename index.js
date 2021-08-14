class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      daysRef: document.querySelector('[data-value="days"]'),
      hrRef: document.querySelector('[data-value="hours"]'),
      minRef: document.querySelector('[data-value="mins"]'),
      secRef: document.querySelector('[data-value="secs"]'),
      body: document.querySelector('.body'),
    };
  }

  start() {
    setInterval(() => {
      const nowTime = Date.now();
      const time = this.targetDate - nowTime;
      const day = Math.floor(time / (1000 * 60 * 60 * 24));
      const hr = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const min = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const sec = Math.floor((time % (1000 * 60)) / 1000);

      this.refs.daysRef.textContent = day < 10 ? `0${day}` : day;
      this.refs.hrRef.textContent = hr < 10 ? `0${hr}` : hr;
      this.refs.minRef.textContent = min < 10 ? `0${min}` : min;
      this.refs.secRef.textContent = sec < 10 ? `0${sec}` : sec;
      //< 10 ? `0${sec}`c - для того чтобы писалось 01, 02 ...
      this.refs.body.style.color = 'blue';
      this.refs.body.style.backgroundColor = 'pink';
    }, 1000);
  }
}

// Установка даты окончания
const watch = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('September 1, 2021 00:00:00'),
});

watch.start();

// Уведомление пользователя, когда закончился отсчёт:
// if (setInterval) (или start()) else {document.getElementById("timer").innerHTML = "The countdown is over!";}

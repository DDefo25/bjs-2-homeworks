class AlarmClock {
    constructor(alarmCollection = [], timerId = null) {
        this.alarmCollection = alarmCollection;
        this.timerId = timerId;
    }

    addClock(timeStart, action, alarmId) {
        if (alarmId === undefined) {
            throw new Error('TimerId не определен');
        }

        if (this.alarmCollection.find(alarm => alarm.alarmId === alarmId)) {
            console.error(`Будильник с TimerId ${alarmId} уже существует`);
        } else {
            this.alarmCollection.push({
                alarmId, 
                timeStart, 
                action
            });
        }
    }

    removeClock(alarmId) {
        return Boolean(this.alarmCollection.splice(this.alarmCollection.findIndex(alarm => alarm.alarmId === alarmId), 1));
    }

    getCurrentFormattedTime() {
        const now = new Date();
        const hours = now.getHours() < 10 ? `0${now.getHours()}` : `${now.getHours()}`;
        const minutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : `${now.getMinutes()}`;
        return `${hours}:${minutes}`
    }    

    start() {
        const bindedCheckClock = checkClock.bind(this);
        function checkClock(clock) {
            if (clock.timeStart === this.getCurrentFormattedTime()) {
                clock.action();
            }
        }

        if (this.timerId == null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach((clock) => bindedCheckClock(clock));
            })
        }
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`)
        this.alarmCollection.forEach((clock) => console.log(`Будильник №${clock.alarmId} заведен на ${clock.timeStart}`))
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (isNaN(id)) {
            throw new Error('error text');
        } else if (this.alarmCollection.find(item => item.id === id) !== undefined) {
                return console.error('Звонок уже существует!');
        } else {
            return this.alarmCollection.push({id, time, callback})
        }
    }

    removeClock(id) {
        let alarmCollectionStartLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(item => item.id != id);
        return alarmCollectionStartLength < this.alarmCollection.length;
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString('ru', {hour: '2-digit', minute: '2-digit'})
    }

    start() {
        let checkClock = (alarm) => {
            if (alarm.time === this.getCurrentFormattedTime()) {
                return alarm.callback();
            }
        }
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(alarm => checkClock(alarm));
            }, 2000);
        }
        return;
    }

    stop() {
        if(this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(item => console.log(item.id + ':' + item.time));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    let testAlarm = new AlarmClock;
    testAlarm.start();
    testAlarm.addClock('17:57', () => console.log ('Пора бы и отдохнуть'), 1);
    testAlarm.addClock('17:58', () => console.log ('Охохо'), 2);
    testAlarm.addClock('17:59', () => console.log ('Мяу'), 3);
    testAlarm.addClock('18:00', () => console.log ('Мяяяяяяяу'), 4);
    testAlarm.printAlarms();
    testAlarm.removeClock(4);
    testAlarm.addClock('18:01', () => {
        testAlarm.stop();
        console.log ('Я молодец!');
        }, 5);
    testAlarm.printAlarms();  
}
testCase();
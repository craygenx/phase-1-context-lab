/* Your Code Here */
function createEmployeeRecord(employeeData) {
const [firstName, familyName, title, payPerHour] = employeeData;
return {
    firstName,
    familyName,
    title,
    payPerHour,
    timeInEvents: [],
    timeOutEvents: []
};
}

function createEmployeeRecords(arrayOfArrays) {
return arrayOfArrays.map(employeeData => createEmployeeRecord(employeeData));
}

function createTimeInEvent(dateStamp) {
const [date, hour] = dateStamp.split(' ');
const timeInEvent = {
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date: date
};
this.timeInEvents.push(timeInEvent);
return this;
}

function createTimeOutEvent(dateStamp) {
const [date, hour] = dateStamp.split(' ');
const timeOutEvent = {
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date: date
};
this.timeOutEvents.push(timeOutEvent);
return this;
}

function hoursWorkedOnDate(date) {
const timeInEvent = this.timeInEvents.find(event => event.date === date);
const timeOutEvent = this.timeOutEvents.find(event => event.date === date);
const timeInHour = timeInEvent.hour;
const timeOutHour = timeOutEvent.hour;
const hoursWorked = (timeOutHour - timeInHour) / 100;
return hoursWorked;
}

function wagesEarnedOnDate(date) {
const hoursWorked = hoursWorkedOnDate.call(this, date);
const payRate = this.payPerHour;
const wagesEarned = hoursWorked * payRate;
return wagesEarned;
}

function findEmployeeByFirstName(srcArray, firstName) {
return srcArray.find(employee => employee.firstName === firstName);
}

function calculatePayroll(employeeRecords) {
return employeeRecords.reduce((totalPay, employeeRecord) => totalPay + allWagesFor.call(employeeRecord), 0);
}


/*
We're giving you this function. Take a look at it, you might see some usage
that's new and different. That's because we're avoiding a well-known, but
sneaky bug that we'll cover in the next few lessons!

As a result, the lessons for this function will pass *and* it will be available
for you to use if you need it!
*/

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


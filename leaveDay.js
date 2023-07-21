// Example Dates
const startDate = new Date('2023-07-10');
const endDate = new Date('2023-07-15');

/* Calculate Leave Days
1000 milliseconds, 60 seconds, 60 minutes, 24 hours
(endDate - startDate) / (1000 * 60 * 60 * 24) 
so we add 1 to include the start date and the end date
Math.ceil(5.041666666666667) will round to 5 

*/

const leaveDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;

console.log(leaveDays); 

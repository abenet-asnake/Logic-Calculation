// the entitlement of the employee for the first time joins is 16 days leave time\
const initialLeaveEntitlement = 16;
// create a function that calculate leave balance for the employee
function calculateLeaveBalance(joiningDate){
    const currentDate = new Date();
    const leaveYearStart = new Date(currentDate.getFullYear(),0,1);
    const fullYear= (360*24*60*60*1000);
}
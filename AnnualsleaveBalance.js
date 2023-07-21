// the entitlement of the employee for the first time joins is 16 days leave time
const initialLeaveEntitlement = 16;
// create a function that calculate leave balance for the employee
function calculateAnnualsLeaveBalance(joiningDate, leaveStartDate){
    const currentDate = new Date(leaveStartDate);
    const leaveYearStart = new Date(currentDate.getFullYear(),0,1);
    const fullYear= (365*24*60*60*1000);
     // Calculate the number of full years of service
  const fullYearsOfService = currentDate.getFullYear() - joiningDate.getFullYear();
// calculating the total number of leaves day for one year or full year of service
  const totalLeaves = initialLeaveEntitlement + fullYearsOfService;
  // it the first time to take the leaves initially 
  let leavesInitially=0;
  if(joiningDate <= leaveYearStart && currentDate>=leaveYearStart){
    
  }
 // Calculate the leave balance
 const leaveBalance = Math.floor(currentDate.getDate());

 return leaveBalance;
}

const employeeJoiningDate = new Date('2021-05-21'); // Employee joined on May 21, 2021
const requestedLeaveStartDate = new Date('2023-07-24'); // Requested leave start date: July 24, 2023
const leaveBalance = calculateAnnualsLeaveBalance(employeeJoiningDate, requestedLeaveStartDate);
console.log('Leave Balance:', leaveBalance); 
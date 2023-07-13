function weekendOrWorkingDay(input) {

   let day =input[0];

   switch(day) {
    case "Monday": console.log("Working day"); 
    case "Tuesday": console.log("Working day"); 
    case "Wednesday": console.log("Working day");
    case "Thursday": console.log("Working day"); 
    case "Friday": console.log("Working day"); break;
    case "Saturday": console.log("Weekend");  
    case "Sunday": console.log("Weekend"); break;

    deafult : console.log("Error");

   }

}
weekendOrWorkingDay(["gg"])
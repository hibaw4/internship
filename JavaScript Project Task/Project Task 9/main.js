let raceNumber = Math.floor(Math.random() * 1000);

let runnerRegistredEarly = true;

let runnerAge = 18;

if (runnerAge > 18 && runnerRegistredEarly == true) {
    raceNumber += 1000;
    let raceTime = "9:30 am";
    console.log(`You will race at ${raceTime}, your race number is: ${raceNumber}`);
  } else if (runnerAge > 18 && runnerRegistredEarly != true) {
    let raceTime = "11:00 am";
    console.log(`You will race at ${raceTime}, your race number is: ${raceNumber}`);
  } if (runnerAge < 18) {
    let raceTime = "12:30 am";
    console.log(`You will race at ${raceTime}, your race number is: ${raceNumber}`);
  } else if (runnerAge == 18) {
    console.log(`See the registration desk`)
}
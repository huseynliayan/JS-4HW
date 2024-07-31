//Task 1
// const carDescription = {
//   manufacturer: "Porsche",
//   model: "Cayenne Turbo E-Hybrid",
//   yearOfProduction: 2023,
//   averageSpeeed: 200,
// };

// const print = (car) => {
//   return console.log(
//     `Manufacturer:${carDescription.manufacturer} \nModel:${carDescription.model} \nYear Of Production:${carDescription.yearOfProduction} \nAverage Speed:${carDescription.averageSpeeed}`
//   );
// };
// console.log(print(carDescription));

// let distance = +prompt("Enter the distance:");
// const calculation = (km) => {
//   let time = km / carDescription.averageSpeeed;
//   if(time > 4 ){
//     time +=Math.floor(time / 4);
//   }
//   return time
// };

// console.log(calculation(distance));

//Task 2

const fraction = {
    numerator: 3,
    denominator: 6
  }
  
  const sum = (fractions) =>{
    return fractions.numerator + fractions.denominator;
  }
  const sub = (fractions) =>{
    return fractions.numerator - fractions.denominator;
  }
  const multi = (fractions) =>{
    return fractions.numerator * fractions.denominator;
  }
  const div = (fractions) =>{
    return fractions.numerator / fractions.denominator;
  }
  
  console.log(sum(fraction));
  console.log(sub(fraction));
  console.log(multi(fraction));
  console.log(div(fraction));
  
  //Task 3
  // const time = {
  //   hours: 7,
  //   minutes: 14,
  //   seconds: 21,
  // };
  
  // const print = (clock) => {
  //   return console.log(`${time.hours}:${time.minutes}:${time.seconds}`);
  // };
  
  // console.log(print(time));
  
  // const changeSec = (clock, sec) => {
  //   time.seconds += sec;
  //   if (time.seconds > 60) {
  //     time.minutes += Math.floor(time.seconds / 60);
  //     time.seconds %= 60;
  //   }
  //   return time;
  // };
  
  // const changeMin = (clock, min) => {
  //   time.minutes += min;
  //   if (time.minutes > 60) {
  //     time.hours += Math.floor(time.minutes / 60);
  //     time.minutes %= 60;
  //   }
  //   return time;
  // };
  
  // const changeHours = (clock, hour) => {
  //   time.hours += hour;
  //   if (time.hours > 23) {
  //     time.hours %= 24;
  //   }
  //   return time;
  // };
  
  // changeSec(time, 30);
  // console.log(print(time));
  // changeSec(time, 30);
  
  // changeHours(time, 17);
  // console.log(print(time));
  




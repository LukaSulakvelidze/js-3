// 1) დაწერეთ კოდი სადაც შეამოწმებთ დადებითია თუ უარყოფითი
// ეს რიცხვი!!

//asnwer:
// let number = Number(prompt("Enter Number Here"));
//   if (number < 0 ) {
//     console.log("ციფრი უარყოფითია")
//   } else if (number > 0 ) {
//     console.log ("ციფრი დადებითია");
//   } else {
//     console.log("Error")
//   }

//2)დაწერეთ მარტივი კალკულატორი სადაც გამოიყენებთ ოპერატორებს(+, -, *, /)
// switch case დახმარებით უბრალოდ დარწმუნდით რომ თითოეულ ქეისი ასრულებს ამ მეთოდებს

//asnwer:
// let num1 = Number(prompt());

// switch (num1) {
//   case num1:
//     console.log(num1 + 1);
//     break;
//   default:
//     console.log("Error");
// }

// let num2 = Number(prompt());

// switch (num2) {
//   case num2:
//     console.log(num2 - 1);
//     break;

//   default:
//     console.log("Error");
//     break;
// }

// let num3 = Number(prompt());

// switch (num3) {
//   case num3:
//     console.log(num3 / 2);
//     break;

//   default:
//     console.log("Error");
//     break;
// }

// let num4 = Number(prompt());

// switch (num4) {
//   case num4:
//     console.log(num4 * 2);
//     break;

//   default:
//     console.log("Error");
//     break;
// }

//3) დაწერეთ იგივე კალკულატორი if else დახმარებით!!

//asnwer:
// let num1 = Number(prompt());

// if (num1) {
//   console.log(num1+1);
// } else{
//   console.log("Error")
// }

// let num2 = Number(prompt());

// if (num2) {
//   console.log(num2-1);
// } else{
//   console.log("Error")
// }

// let num3 = Number(prompt());

// if (num3) {
//   console.log(num3/2);
// } else{
//   console.log("Error")
// }

// let num4 = Number(prompt());

// if (num4) {
//   console.log(num4*2);
// } else{
//   console.log("Error")
// }

//4) დაწერეთ ავტორიზაციის ლოგიკა სადაც უნდა დავარეგისტრიროთ User
// user უნდა შემოყავდეს firstName,lastName,email,password,phoneNumber
// firstName,lastName,email,password არის სავალდებულო ველები
// ამიტომ ერთიანად შეამოწმეთ ეს ოთხი ველი და დარწმუნდით თუ ცარიელი input
// არარის მაშინ დალოგეთ რომ შენ დარეგისტრირდი წარმატებით თუ ცარიელია მაშინ
// დალოგეთ "input is required" გამოიყენეთ if else

// answer:
// let user = {
//   firstName: prompt("Your Name"),
//   lastName: prompt("Your LastName"),
//   email: prompt("Enter Your Email"),
//   password: prompt("Enter Your Password"),
//   phoneNumber: Number(prompt("Enter Your Phone Number"))
// };

//   if (user != "") {
//     console.log("You Are Registered");
//   } else if (user == "") {
//     console.log ("Input Is Requiered");
//   } else {
//     console.log("Error")
//   }

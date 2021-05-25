// let i = 0;
// while( i < 7){
//     console.log(i);
//     i++
// }

// for (let i = 0; i < 7; i++)
// console.log(i)

// let n = Number( prompt("Nhập số:"))
//   for (let i = 0; i < n; i++ )    
// console.log(i)

// let n = Number(prompt(" Nhập số: "))
// for ( let i = 3; i < n; i++ )
// console.log(i)

// let a = Number(prompt(" Nhập số thứ nhất:"))
// let b = Number(prompt("Nhập số thứ hai:"))
// for( let i = a; i < b; i++)
// console.log(i)

// let a = Number(prompt(" Nhập số thứ nhất:"))
// let b = Number(prompt("Nhập số thứ hai:"))
//  for( let i = a;i < b; i = i + 3 )
//  console.log(i)

// let c = Number(prompt("Nhập số thứ nhất:"))
// let n = Number(prompt("Nhập số thứ hai:"))
// let s = Number(prompt("Nhập số thứ ba:"))
// for ( let i = c; i < n; i = i + s)
// console.log(i)

// BÀI 2:
// let a = Number(prompt("Nhập số:"))
// let n = 1
// for (let i = 1 ; i <= a; i++){
//   n*= i
// }
// alert (` giai thừa của ${a} là ${n}`)

// BÀI 3:Write a program asking users their age, and then decide if they are old enough to view a 14+ content
// let a = Number(prompt(" How old are you?"))
// if (a < 14){
//   console.log("You are not enought to view this content")
// } else {
//   console.log("Enjoy!")
// }

//BÀI 4:Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range
// let a = Number(prompt(" Enter a number"))
// if (a < 9/2){
//   console.log("lower haft of 9")
// }else{
//   console.log("Highter haft of 9")
// }

//BÀI 5:Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n
// let x = Number(prompt("x ="))
// let n = Number(prompt("n ="))
// if(x < n/2){
//   console.log(`${x} is in lower halft of ${n}`)
// } else{
//   console.log(`${x} is in highter halft of ${n}`)
// }

//BÀI 6:Write a script to check if a number is even (divisible by 2) or odd number
// let a = Number(prompt("a ="))
// if(a/2 !=1){
//   console.log(`${a} is an even number`)
// } else {
//   console.log(`${a} is an odd number`)
// }

//BÀI 7:
//a,6 L’s and H’s, half L’s, half H’s (L means low, H means high)
// for(let i = 0; i < 3; i++){
//     console.log("L");
// }
// for(let i = 0; i < 3; i++){
//     console.log("H");
//}
//b,n L’s and H’s in total, n entered by user
// let a = Number(prompt("Nhập số:"))
// let H=1
// let L=1
// for( let i = 0; i < a/2; i++){
// console.log(`${H} H `)
// console.log(`${L} L`)
// }
// let input = Number(prompt("Enter your number:"))
// for (let i = 0; i < input; i++) {
//     console.log(i)
//     if(i <= Math.ceil (input/2)){
//         console.log("L")
//     } else{
//         console.log("H")
//     }
// }

//c,8 1’s and 0’s in total, consecutively
// for(let i=1; i<=8/2; i++)
// console.log(0)
// console.log(1)

//d.n 1’s and 0’s in total, consecutively, n entered by user
// let a = Number(prompt("Nhập số:"))
// for (let i = 1; i< a/2; i++)
// if(a%2==0){
//     console.log(0)
// } else{
//     console.log(1)
// }

// BÀI 8:
// let a = Number(prompt("Your weight in kg?"))
// let b = Number(prompt("Your height in cm"))
// let BMI = a/(a*b)
// alert(`Your BMI is ${BMI}`)
// if(BMI<16){
//     alert("Severely underweight")
// } else if( 16< BMI && BMI<18.5) {
//     alert("Underweigh")
// }  else if(18.5<BMI && BMI<25) {
//     alert("Normal")
// } else if(25<BMI && BMI<30) {
//     alert("Overweight")
// } else if(BMI>30) {
//     alert("Obese")
// }


//CHỮA BÀI
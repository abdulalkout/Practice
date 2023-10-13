// 
// player 1 choice
// player 2 choice 
// If  player 1 choice equal to player 2 choice
    // then it is a drow 
// Else If player 1 choice equal to rock and player2 choice equal to scissors OR player 1 choice equal to paper and player2 choice equal to rock OR player 1 choice scissors to paper and player2 choice equal to paper  
    // then player 1 wins 
// Else 
    // then player 2 wins 


// 2nd 
// create a variable called number equal to 1
// while number is less then or equal to 100 
    // If number % 5 equal to 0
        // print number
    // number equal to number + 1



// let grad;

// if (grad >= 90){
//     console.log('A'); 
// }else if (grad <= 90 && grad >= 80 ){
//     console.log('B');
// }else if(grad <= 80 && grad >= 70){
//     console.log('C');
// }else if(grad <= 70 && grad >= 55){
//     console.log('C');
// }


// for (let i=0; i<=7; i++){
//     let string = ' '
//     for( let j=0; j<=i; j++){
//         string = string + '#';
//     }
//     console.log(string);
// }


arr = [1, 2, 3 , 5, 8 ,9, 8]

arr.splice(2, 3, 8, 8, 8, 0)
console.log(arr);

let newArr = arr.join('')
console.log(newArr)

let newArr2 = newArr.split('');
console.log(newArr2)

newArr2.forEach(element => {
    element +2 
    console.log(element)
});
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumber = numbers[0]
for (const index of numbers) {
  if (index < menorNumber){
    menorNumber = index
  }
}

console.log(menorNumber);
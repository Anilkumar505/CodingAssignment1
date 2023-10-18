const userInput = prompt("Enter a list of numbers separated by commas:");


const numbers = userInput.split(',').map(Number);


if (numbers.some(isNaN)) {
  console.log("Invalid input. Please enter a valid list of numbers.");
} else {

  const descendingSortedNumbers = numbers.sort((a, b) => b - a);

  console.log("Sorted in descending order: " + descendingSortedNumbers);
}
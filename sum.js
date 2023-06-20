//Create a function named addTwoNumbers to sum two numbers from command line argument. 
const addTwoNumbers = () => {
  //Slice process.argv to get two numbers and convert them to integers
  const [num1, num2] = process.argv.slice(2).map(Number);
  const sum = num1 + num2;
  return sum;
};

console.log(addTwoNumbers());



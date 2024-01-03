// Task 1


function findMedian(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
  
    const length = mergedArray.length;
  
    if (length % 2 === 0) {
      const mid1 = mergedArray[length / 2 - 1];
      const mid2 = mergedArray[length / 2];
      return (mid1 + mid2) / 2;
    } else {
      return mergedArray[Math.floor(length / 2)];
    }
  }

  console.log(findMedian([1, 3], [2]))
  console.log(findMedian([1, 2], [3, 4]) )
  console.log(findMedian([0], [0,1]))

  // Task 2

  const calculateFactorial = num => num === 0 || num === 0 ? 1 : num * calculateFactorial(num - 1)
  
  console.log(calculateFactorial(0))
  console.log(calculateFactorial(1))
  console.log(calculateFactorial(5))
  console.log(calculateFactorial(6))
  console.log(calculateFactorial(10))

  // Task 3

  const calculateGCD = (num1, num2) => {
    let arrDivisor1 = [];
    let arrDivisor2 = [];
    let result = Math.max(num1, num2); 
  
    for (let i = 1; i <= num1; i++) {
      if (num1 % i === 0) arrDivisor1.push(i);
    }
  
    for (let i = 1; i <= num2; i++) {
      if (num2 % i === 0) arrDivisor2.push(i);
    }
  
    for (let i = 0; i < arrDivisor1.length; i++) {
      if (arrDivisor2.includes(arrDivisor1[i])) {
        result = arrDivisor1[i]
      }
    }
  
    return result;
  };
  
  console.log(calculateGCD(8, 12))
  console.log(calculateGCD(17, 5))
  console.log(calculateGCD(48, 18))
  console.log(calculateGCD(0, 5))

  
  // Task 4

  const calculateLCM = (num1, num2) => (num1 * num2) / calculateGCD(num1, num2)
  console.log(calculateLCM(60, 48))
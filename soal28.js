function mirrorImage(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      // Check if the current and next numbers are mirror-image
      if (isMirrorImage(arr[i], arr[i + 1])) {
        return [arr[i], arr[i + 1]];
      }
    }
    
    // If no mirror-image pair is found
    return [-1, -1];
  }
  
  // Helper function to check if two numbers are mirror-image
  function isMirrorImage(num1, num2) {
    // Convert numbers to strings to compare digits
    const str1 = num1.toString();
    const str2 = num2.toString();
    
    // Check if the reverse of one number is equal to the other
    return str1 === str2.split('').reverse().join('');
  }
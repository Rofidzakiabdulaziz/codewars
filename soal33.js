function maxMin(arr1, arr2) {
    // Calculate the absolute differences between corresponding elements
    const differences = arr1.map((value, index) => Math.abs(value - arr2[index]));
  
    // Find the maximum and minimum values
    const maxValue = Math.max(...differences);
    const minValue = Math.min(...differences);
  
    return [maxValue, minValue];
  }
  
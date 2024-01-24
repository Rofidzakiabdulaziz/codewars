function roundIt(n) {
    const decimalIndex = String(n).indexOf('.');
  
    // Check the position of the decimal point and round accordingly
    if (decimalIndex < String(n).length - decimalIndex - 1) {
      // Decimal point is on the left side
      return Math.ceil(n);
    } else if (decimalIndex > String(n).length - decimalIndex - 1) {
      // Decimal point is on the right side
      return Math.floor(n);
    } else {
      // Decimal point is in the middle
      return Math.round(n);
    }
  }
  
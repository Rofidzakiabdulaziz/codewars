function blackAndWhite(arr) {
    // Check if arr is an array
    if (!Array.isArray(arr)) {
      return "It's a fake array";
    }
  
    // Check if arr contains both 5 and 13
    if (arr.indexOf(5) !== -1 && arr.indexOf(13) !== -1) {
      return "It's a black array";
    } else {
      return "It's a white array";
    }
  }
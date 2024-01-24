function findSimilarity(str, word) {
    const words = str.split(' ');
  
    const similarWords = words.filter(w =>
      w.length === word.length &&
      w[0].toLowerCase() === word[0].toLowerCase() &&
      w.slice(-1).toLowerCase() === word.slice(-1).toLowerCase()
    );
  
    return similarWords.join(' ');
  }
  
function countAnimals(animals, count) {
    const result = [];
  
    count.forEach(animal => {
      const regex = new RegExp(animal, "ig");
      const matches = animals.match(regex) || [];
      result.push(matches.length);
    });
  
    return result;
  }
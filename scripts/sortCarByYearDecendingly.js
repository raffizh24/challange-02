function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  // Manual - Bubble Sort
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length-i-1; j++) {
      if (result[j].year < result[j+1].year ) {
        [result[j], result[j+1]] = [result[j+1], result[j]];
      }
    }
  }

  // Array Method - Descendingly
  // result.sort((a, b) => {return b.year - a.year});

  // Rubah code ini dengan array hasil sorting secara descending
  console.log(result);
  return result;
}
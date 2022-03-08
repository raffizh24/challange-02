function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  // Manual
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].available === true) {
      result.push(cars[i]);
    }
  }

  // Array Method
  // result.push(...cars.filter(cars => cars.available === true));
  
  // Rubah code ini dengan array hasil filter berdasarkan availablity
  console.log(result);
  return result;
}

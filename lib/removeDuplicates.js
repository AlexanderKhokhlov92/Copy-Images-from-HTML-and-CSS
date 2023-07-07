function removeDuplicates(array) {
  const uniqueArray = [];
  array.forEach((item) => {
    if (!uniqueArray.includes(item)) {
      uniqueArray.push(item);
    }
  });
  console.log('Массив без повторений:');
  console.log(uniqueArray);
  return uniqueArray;
}

module.exports = removeDuplicates;

function processStrings(array) {
  const result = [];

  array.forEach((str) => {
    let substring = '';
    for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] === '/') {
        break;
      }
      substring = str[i] + substring;
    }
    result.push(substring);
  });

  console.log('Результат обработки строк:');
  console.log(result);

  return result;
}

module.exports = processStrings;

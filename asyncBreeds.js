const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (!error) callback(data);
  });
};

const callback = function (breed) {
  console.log('Return Value ', breed)
};

breedDetailsFromFile('Bombay', callback);
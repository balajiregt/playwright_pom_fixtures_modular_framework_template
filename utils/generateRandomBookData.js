const randomatic = require('randomatic');

function generateRandomBookData() {
  const genres = ['Fiction', 'Non-Fiction', 'Science Fiction', 'Fantasy', 'Mystery', 'Thriller'];
  
  // Using randomatic to generate random data
  const title = `Book ${randomatic('A0', 5, {})}`; // Generates a random string with alphabets and numbers, 5 characters long
  const genre = genres[Math.floor(Math.random() * genres.length)];
  const isbn = randomatic('0', 13, {}); // Generates a random 13-digit number as a string
  const summary = `Summary for ${title}`;

  return { title, genre, isbn, summary };
}

module.exports = generateRandomBookData;

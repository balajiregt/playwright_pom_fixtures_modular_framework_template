const axios = require('axios');
import generateRandomBookData from '../utils/generateRandomBookData';

const BOOKS_API_URL = process.env.BOOKS_API_URL || 'http://localhost:3001/books';

async function addBookViaAPI() {
  const bookData = generateRandomBookData();
  try {
    const response = await axios.post(BOOKS_API_URL, bookData, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    console.log('Book added via API:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error posting data via API:', error.response ? error.response.data : error.message);
    throw error;
  }
}


module.exports = { addBookViaAPI };
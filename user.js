// user.js
import { auth, database } from './firebase';

// Function to search data
const searchData = () => {
  // Example: Retrieve data from the Firebase database
  // Assuming 'pois' is a node in your Firebase database
  database.ref('pois').once('value')
    .then((snapshot) => {
      const data = snapshot.val();
      console.log('Retrieved data:', data);
    })
    .catch((error) => {
      console.error('Error retrieving data:', error);
    });
};

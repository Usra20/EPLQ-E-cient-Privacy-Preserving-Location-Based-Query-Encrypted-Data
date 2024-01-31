// admin.js
import { auth, database } from './firebase';

// Function to upload data
const uploadData = () => {
  // Example: Upload data to the Firebase database
  const data = {
    poiName: 'Example POI',
    latitude: 37.7749,
    longitude: -122.4194,
  };

  // Assuming 'pois' is a node in your Firebase database
  database.ref('pois').push(data)
    .then(() => {
      console.log('Data uploaded successfully');
    })
    .catch((error) => {
      console.error('Error uploading data:', error);
    });
};

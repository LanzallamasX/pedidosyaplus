import axios from 'axios';

const IPINFO_API_KEY = 'YOUR_API_KEY_HERE';


export async function getLocation() {
  try {
    const response = await axios.get(`https://ipinfo.io?token=${IPINFO_API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching location data:', error);
    return null;
  }
}

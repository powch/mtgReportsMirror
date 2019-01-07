import axios from 'axios';

export default {
  //Get user's role
  getUserRole: function (userData) {
    return axios.get(`/api/users/${userData.uid}`);
  },
  // Finds User if they exist, or creates User
  findOrCreateUser: function (userData) {
    return axios.post(`/api/users/${userData.uid}`, { fbId: userData.fbId })
  }
}
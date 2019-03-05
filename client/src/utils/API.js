import axios from 'axios';

export default {
  //Get user's role
  getUserReports: function (userData) {
    return axios.get(`/api/user/${userData.uid}`);
  },
  // Finds User if they exist, or creates User
  findOrCreateUser: function (userData) {
    return axios.post(`/api/user/${userData.uid}`, { 
      uid: userData.uid,
      userName: userData.userName
    })
  }
}
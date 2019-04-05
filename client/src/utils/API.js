import axios from 'axios';

export default {
  // creates User
  createUser: userData => {
    return axios.post(`/api/user/${userData.fbId}`, { 
      displayName: userData.displayName
    })
  },
  // Get user info
  getUserInfo: fbId => {
    return axios.get(`/api/user/${fbId}`)
  },
  // Get all reports
  getAllReports: () => {
    return axios.get(`/api/report/`)
  },
  // Submit report attached to user
  submitReport: report => {
    return axios.post(`/api/report/${report.fbId}`, report)
  }
}
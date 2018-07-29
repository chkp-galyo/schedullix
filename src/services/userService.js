import storageService from '@/services/storageService.js'
const STORAGE_KEY = 'loggedinUser';

const axios = require('axios')
const URL = (process.env.NODE_ENV !== 'development') ?
    '/users' :
    '//localhost:3000/users';

var loggedinUser = storageService.loadFromStorage(STORAGE_KEY) || null;

export default {
    login,
    logout,
    getLoggedInUser,
    addUser,
    updateUser,
    addCustomer
}

function updateUser(user) {
    
}

function addCustomer(userId, customer) {
    return axios.put(URL + `/${userId}/addCustomer`, customer)
        .then(res => {
            // _setLoggedinUser(res.data.email)
            // return (res.data)
        })
        .catch(err => {
            console.log(err)
        })

}

function addUser(user) {
    return axios.post(URL, user)
        .then(res => {
            return (res.data)
        })
        .catch(err => {
            console.log(err)
        })
}

function logout() {
    storageService.clearStorage(STORAGE_KEY)
}

function getLoggedInUser() {
    return loggedinUser;
}

function _setLoggedinUser(user) {
    loggedinUser = user;
    storageService.saveToStorage(STORAGE_KEY, loggedinUser)
}

function login(loginInfo) {
    return axios.post(URL + '/login', loginInfo)
        .then(res => {
            _setLoggedinUser(res.data.email)
            return (res.data)
        })
        .catch(err => {
            console.log(err)
        })
}
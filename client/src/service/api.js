import axios from "axios";

const URL = "http://localhost:8000"
export const addUser = async (data) => {
    try {
        return await axios.post(`${URL}/add`,data);
        
    } catch (error) {
        console.error("Error while calling add User API",error.message)
    }   
}
export const getUsers = async () => {
    try {
        return await axios.get(`${URL}/all`);
        
    } catch (error) {
        console.error("Error while calling getAllUsers API",error.message)
    }
}
export const getUser = async (uid) => {
    try {
        return await axios.get(`${URL}/${uid}`);
    } catch (error) {
        console.error("Error while calling getUser API",error.message)
    }
}
export const editUser = async (data, uid) => {
    try {
        return await axios.put(`${URL}/${uid}`, data);
        
    } catch (error) {
        console.error("Error while calling getUser API",error.message)
    }
}

export const deleteUser = async (uid) => {
    try {
        return await axios.delete(`${URL}/${uid}`);
        
    } catch (error) {
        console.error("Error while calling deleteUser API",error.message)
    }

}
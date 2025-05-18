import { domain } from "../../utils/constants";

export const verifyToken = async function() {
    const token = localStorage.getItem("jwt_token");


    if(!token) return false;

    try {
        const response = await fetch(domain + 'validtoken', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();

        return data;
    }
    catch(error) {
        console.log(error.message);
    }
}

export const studentSignUp = async function(userName, email, password, confirmPassword) {
    if(userName.trim() === '') return;
    if(email.trim() === '') return;
    if(password.trim() === '') return;
    if(password != confirmPassword) return;

    try {
        const response = await fetch(domain + 'api/auth/signup', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                'name': userName,
                'email': email,
                'password': password,
                'role': 'STUDENT'
            })
        });
        if(response.status === 201) {
            
        }
        if(response.status === 401) {

        }
    }
    catch {

    }

}
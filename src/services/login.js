import { axios } from '../common/config';
import { BASE_URL } from '../common/config';

export async function loginPost(data){
    // Login Users
    return await axios.post(BASE_URL + "/users/login",data);
}
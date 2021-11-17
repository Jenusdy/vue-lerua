import { axios } from '../common/config';
import { BASE_URL } from '../common/config';

export async function save(data){
    // Save document
    return await axios.post(BASE_URL + "/document",data);
}


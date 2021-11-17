import { axios, BASE_URL } from '../common/config';

export async function getAutoCompleteSatker(term){
    return await axios.get(`${BASE_URL}/organization/autocomplete?term=${term}`);
}
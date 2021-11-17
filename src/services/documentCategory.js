import { axios, BASE_URL } from '../common/config';

export async function getAutoCompleteDocumentCategory(term){
    return await axios.get(`${BASE_URL}/documentCategory/autocomplete?term=${term}`);
}
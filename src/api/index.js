import axios from 'axios'
import { validateLocaleAndSetLanguage } from 'typescript';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const { data } = await axios.get(url);

        const modifiedData = {
            confirmed:
            recovered:
            deaths:
            latestUpdate:
        }
        return response;
    } catch (error) {

    }
}
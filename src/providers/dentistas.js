import axios from 'axios';

export const BASE_URL = "http://dhodonto.ctdprojetos.com.br/";

export const fetchDentistas= async () => {
    try {
        return await axios.get(`${BASE_URL}/dentista`);
    } catch(e){
        return []
    }
};
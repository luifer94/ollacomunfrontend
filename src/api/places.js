
import { get } from './common';
import urlProvider from "../api/routes"; 

const urls = urlProvider();

export const getPlaces = async () => {

    const parserTest = async (response) => {
        return response.data.places;
    };

    const parserProduction = async (response) => {
        return response.data.places;
    };
    
    return await get(urls.getPlaces(), parserTest, parserProduction);
}

import isProd from "../../utils/DevDetect";
import * as dev from "./dev";
import * as prod from "./prod";

const urlProvider = () => {
    return {
        getPlaces: () => !isProd() ? dev.PLACES_DEV: prod.PLACES
    };
}


export default urlProvider;

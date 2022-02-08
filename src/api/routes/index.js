import isDev from "../../utils/DevDetect";
import * as dev from "./dev";
import * as prod from "./prod";

const urlProvider = () => {
    return {
        getPlaces: () => isDev() ? dev.PLACES_DEV: prod.PLACES
    };
}


export default urlProvider;

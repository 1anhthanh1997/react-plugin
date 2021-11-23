import Config from "../../../config";
import { APP_NEW_DOMAIN } from "../../../config_app";
import { callApi } from "../../../services";

export const getAllDataAppAPI = (stateName) => {
    return callApi({
        baseURl: Config.BASE_URL,
        method: "get",
        url:
            "data?type=get-all-topic-in-app&appId=" +
            APP_NEW_DOMAIN +
            (stateName?.length ? "&state=" + stateName : ""),
        params: null,
        headers: null,
    });
};

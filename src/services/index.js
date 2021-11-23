var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value);
                  });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done
                    ? resolve(result.value)
                    : adopt(result.value).then(fulfilled, rejected);
            }
            step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
            );
        });
    };
import Axios from "axios";
import APIConfig from "../api_config";
import Config from "../config";
import { VERSION } from "../config_app";
import { getBrowser } from "../utils";
const callApi = ({ method, url, params, baseURl, headers }) => {
    baseURl =  Config.BASE_URL;
    return new Promise((resolve, reject) =>
        __awaiter(void 0, void 0, void 0, function* () {
            Axios({
                baseURL: baseURl,
                timeout: Config.HTTP_REQUEST_TIMEOUT,
                url: url,
                method: method ? method : "POST",
                data: params ? params : null,
                headers,
            })
                .then((response) => {
                    if (response.status === Config.HTTP_REQUEST_SUCCESSS) {
                        resolve(response.data);
                    } else {
                        reject("failed");
                    }
                })
                .catch((e) => {
                    reject(e);
                });
        })
    );
};
const postReport = async ({
    appId,
    base64Image,
    reason,
    details,
    questionId,
    appName,
}) => {
    let image = base64Image.replace("data:image/png;base64,", "");
    var browser = getBrowser(); // browser.name = 'Chrome'
    let country = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return new Promise((resolve, reject) =>
        __awaiter(void 0, void 0, void 0, function* () {
            let param = {
                image: image,
                reason: reason,
                detail: details,
                questionId: questionId,
                appId: appId,
                appName: appName,
                version:
                    VERSION +
                    "-country:" +
                    (country ?? "") +
                    "-browser:" +
                    browser.name +
                    browser.version,
                buildNumber: -1,
                gameType: -1,
                dbVersion: 1,
                link: window.location.href,
            };
            Axios({
                url: APIConfig.REPORT_MISTAKE,
                method: "post",
                data: param,
                baseURL: Config.BASE_URL,
            }).then((response) => {
                if (response.status === Config.HTTP_REQUEST_SUCCESSS) {
                    resolve(response.data);
                } else {
                    reject("failed");
                }
            });
        })
    );
};
export { callApi, postReport };

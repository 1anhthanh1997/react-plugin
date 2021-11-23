import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Config from "../src/config";
import APIConfig from "./api_config";
import { APP_NEW_DOMAIN, APP_SHORT_NAME } from "./config_app";
import { callApi } from "./services";

export const getCookieFromServer = (key, req) => {
    if (!req.headers || !req.headers.cookie) {
        return undefined;
    }
    const rawCookie = req.headers.cookie
        .split(";")
        .find((c) => c.trim().startsWith(`${key}=`));
    if (!rawCookie) {
        return undefined;
    }
    return rawCookie.split("=")[1];
};
export function getContactLink(contactMethod) {
    let appName = APP_SHORT_NAME.toLowerCase();
    if (appName == "cdl") {
        if (contactMethod == "facebook") {
            return "https://www.facebook.com/CDL-prep-101878645343877";
        } else if (contactMethod == "twitter") {
            return "https://twitter.com/CLprep";
        } else if (contactMethod == "youtube") {
            return "https://www.youtube.com/channel/UCke4KGWOxPP8R2aPVQTUAlA";
        } else if (contactMethod == "email") {
            return "support@cdl-prep.com";
        }
    } else if (appName == "asvab") {
        if (contactMethod == "facebook") {
            return "https://www.facebook.com/ASVAB-Test-Prep-by-ABC-Elearning-104795498352899";
        } else if (contactMethod == "twitter") {
            return "https://twitter.com/PrepAsvab";
        } else if (contactMethod == "youtube") {
            return "https://www.youtube.com/channel/UC9F-vTfB9PCbxvBT8zqMMJw";
        } else if (contactMethod == "email") {
            return "support@asvab-prep.com";
        }
    } else if (appName == "dmv") {
        if (contactMethod == "youtube") {
            return "https://www.youtube.com/channel/UClGYoBo4B7IoffZXcwDdRUw";
        } else if (contactMethod == "twitter") {
            return "https://twitter.com/dmvprepabcteam";
        } else if (contactMethod == "email") {
            return "support@dmv-practicetests.com";
        }
    } else if (appName == "cna") {
        if (contactMethod == "email") {
            return "support@cna-prep.com";
        }
    } else if (appName == "drivingtheory") {
        if (contactMethod == "email") {
            return "support@drivingtheory-tests.com";
        }
    } else if (appName == "passemall") {
        if (contactMethod == "facebook") {
            return "https://www.facebook.com/ABC-E-learning-110654290809849";
        } else if (contactMethod == "twitter") {
            return "https://twitter.com/abcelearningapp";
        } else if (contactMethod == "youtube") {
            return "https://www.youtube.com/channel/UCkLKqup_8asTJGtQIgXCOZg";
        } else if (contactMethod == "email") {
            return "support@passemall.com";
        }
    } else if (appName == "realestate") {
        if (contactMethod == "facebook") {
            return "https://www.facebook.com/Real-Estate-Exam-Prep-by-ABC-Elearning-107910338185108";
        } else if (contactMethod == "youtube") {
            return "https://www.youtube.com/channel/UCFWA5MkzvzHlHYBFvT9BH9A/about";
        } else if (contactMethod == "email") {
            return "support@realestate-prep.com";
        }
    } else if (appName == "servsafe") {
        if (contactMethod == "facebook") {
            return "facebook.com/Servsafe-Exam-Prep-104667911889218";
        } else if (contactMethod == "youtube") {
            return "https://www.youtube.com/channel/UC7A8HrEXgdiR7otcxgAqZZQ/about";
        } else if (contactMethod == "email") {
            return "support@servsafe-prep.com";
        }
    } else if (appName == "aws") {
        if (contactMethod == "facebook") {
            return "https://www.facebook.com/AWS-Exam-Prep-102525238774581";
        } else if (contactMethod == "youtube") {
            return "https://www.youtube.com/channel/UCht1edKzc3jXi6RHu-kAXRA/about";
        } else if (contactMethod == "email") {
            return "support@aws-prep.com";
        }
    } else if (appName == "ptce") {
        if (contactMethod == "youtube") {
            return "https://www.youtube.com/channel/UCwk8caoOY4DiyteWcv17nbQ/about";
        } else if (contactMethod == "facebook") {
            return "https://www.facebook.com/PTCB-Exam-Prep-by-ABC-Elearning-102646622056698";
        } else if (contactMethod == "email") {
            return "support@ptceprep.com";
        }
    } else if (appName == "pmp") {
        if (contactMethod == "facebook") {
            return "https://www.facebook.com/PMP-Exam-Prep-100596645638322";
        } else if (contactMethod == "youtube") {
            return "https://www.youtube.com/channel/UCv3MA6wPjfvmctrQbrrWYrQ/about";
        } else if (contactMethod == "email") {
            return "support@pmp-testprep.com";
        }
    } else if (appName == "ged") {
        if (contactMethod == "facebook") {
            return "https://www.facebook.com/people/TestPrep-Ged/100068351480720/";
        } else if (contactMethod == "youtube") {
            return "https://www.youtube.com/channel/UCsVHfTGvOjveDJSx6c4hdNQ/about";
        } else if (contactMethod == "email") {
            return "support@ged-testprep.com";
        }
    } else if (appName == "teas") {
        if (contactMethod == "facebook") {
            return "https://www.facebook.com/TEAS-Exam-Prep-113142767696481";
        } else if (contactMethod == "email") {
            return "support@teas-prep.com";
        }
    }
    return null;
}
export const isSameDate = (date1, date2) => {
    if (!date1 || !date2) {
        return false;
    }
    let dateRedux = new Date(date1);
    return (
        dateRedux.getDate() == date2.getDate() &&
        dateRedux.getMonth() == date2.getMonth() &&
        dateRedux.getFullYear() == date2.getFullYear()
    );
};
// export const isFollowingDay = (date1, date2) => {
//     return (
//         date1.getDate() == date2.getDate() &&
//         date1.getMonth() == date2.getMonth() &&
//         dateRedux.getFullYear() == date2.getFullYear()
//     );
// };
export const calculateWeakIsDone = (listQuestionProgress) => {
    let result = 0;
    listQuestionProgress.forEach((questionProgress) => {
        let progress = questionProgress.progress;
        if (
            progress.length > 2 &&
            progress[progress.length - 1] ===
            Config.QUESTION_ANSWERED_CORRECT &&
            progress.indexOf(Config.QUESTION_ANSWERED_INCORRECT) !== -1
        ) {
            result++;
        }
    });
    return result;
};
export const initTimeStartStudy = () => {
    localStorage.removeItem(Config.KEY_TIME_START_LEARN);
    localStorage.setItem(
        Config.KEY_TIME_START_LEARN,
        new Date().getTime() + ""
    );
};
export const getAndSetNewTimeLearned = () => {
    let newTime = new Date().getTime();
    let timeStart = localStorage.getItem(Config.KEY_TIME_START_LEARN);
    localStorage.setItem(Config.KEY_TIME_START_LEARN, newTime + "");
    if (timeStart) {
        let result = (newTime - parseInt(timeStart)) / 1000;
        if (result > 5 * 60) {
            result = 5 * 60;
        }
        return result;
    }
    return null;
};

export const calculateQuestionProgress = (listQuestionProgress) => {
    let allWeakQuestions = 0, allWeekQuestionLearned = 0;
    for (let i = 0; i < listQuestionProgress.length; i++) {
        let questionProgress = listQuestionProgress[i];
        let progress = questionProgress.progress ?? [];
        if (progress.length > 0) {
            if (progress.indexOf(0) > -1) {
                allWeakQuestions++;
            }
            if (progress.indexOf(0) > -1 && progress[progress.length - 1] == 1) {
                allWeakQuestions++;
            }
        }
    }
    return { allWeakQuestions, allWeekQuestionLearned };
}

export const calculateWeakQuestion = (listQuestionProgress) => {
    let result = 0;
    listQuestionProgress.forEach((questionProgress) => {
        let progress = questionProgress.progress;
        if (
            progress[progress.length - 1] === Config.QUESTION_ANSWERED_INCORRECT
        ) {
            result++;
        }
    });
    return result;
};
export const calculateWeakQuestionTotal = (listQuestionProgress) => {
    let result = 0;

    listQuestionProgress.forEach((questionProgress) => {
        let progress = questionProgress.progress;
        if (progress.indexOf(Config.QUESTION_ANSWERED_INCORRECT) !== -1) {
            result++;
        }
    });
    return result;
};
export const calculateWeakQuestionReviewed = (listQuestionProgress) => {
    let result = 0;
    listQuestionProgress.forEach((questionProgress) => {
        let progress = questionProgress.progress;
        if (
            progress.indexOf(Config.QUESTION_ANSWERED_INCORRECT) !== -1 &&
            progress[progress.length - 1] === Config.QUESTION_ANSWERED_CORRECT
        ) {
            result++;
        }
    });
    return result;
};
export const calculateMasteredQuestion = (listQuestionProgress) => {
    let result = 0;
    listQuestionProgress.forEach((questionProgress) => {
        let progress = questionProgress.progress;
        if (
            progress[progress.length - 1] === Config.QUESTION_ANSWERED_CORRECT
        ) {
            result++;
        }
    });
    return result;
};
export function shuffle(list) {
    return list.sort((a, b) => {
        let num = Math.floor(Math.random() * 101);
        if (num % 3 === 0) {
            return -1;
        }
        if (num % 3 === 1) {
            return 1;
        }
        return 0;
    });
}
export const isAfter = (date1, date2) => { };
export const isNeedConvertHTML = (content) => {
    let regex = /<[^/a-z]/g;
    let matches = [...content.matchAll(regex)];
    let result = content;
    if (matches && matches.length > 0) {
        matches.forEach((match) => {
            result[match.index] = '{"<"}';
        });
        console.log("content", content);
        // return content.replaceAll(regex,)
    }
    // return content
};
export const convertDateString = (examDate) => {
    let month = examDate.getMonth();
    let monthName = Config.MONTH_NAMES[month];
    let date = examDate.getDate();
    let year = examDate.getFullYear();
    return monthName + " " + date + ", " + year;
};
export function getBrowser() {
    var ua = navigator.userAgent,
        tem,
        M =
            ua.match(
                /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
            ) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return { name: "IE", version: tem[1] || "" };
    }
    if (M[1] === "Chrome") {
        tem = ua.match(/\bOPR|Edge\/(\d+)/);
        if (tem != null) {
            return { name: "Opera", version: tem[1] };
        }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) {
        M.splice(1, 1, tem[1]);
    }
    return {
        name: M[0],
        version: M[1],
    };
}
export function setScrollDownAuto(screen) {
    if (typeof window !== "undefined") {
        if (screen === "home") {
            let currentHome = window.location.href;
            if (localStorage.getItem("lastPage")) {
                let temp = localStorage.getItem("lastPage");
                if (
                    temp.search(currentHome) !== -1 &&
                    temp.length > currentHome.length
                ) {
                    document.onreadystatechange = () => {
                        if (document.readyState === "complete") {
                            scrollToTopic();
                        }
                    };
                }
                localStorage.setItem("lastPage", window.location.href);
            }
        } else {
            localStorage.setItem("lastPage", window.location.href);
        }
    }
}

export const getFirstTimeDate = (startDate) => {
    let startDateObject = new Date(startDate);
    startDateObject.setHours(0, 0, 0, 0);
    return startDateObject.getTime();
};

export function formatTime(time) {
    if (time) {
        let hours = parseInt("" + Math.round(time / 3600));
        let _m = Math.round((time - hours * 3600) / 60);
        let minutes = parseInt("" + (_m > 0 ? _m : 0));
        let _s = Math.round(time - hours * 3600 - minutes * 60);
        let seconds = parseInt("" + (_s > 0 ? _s : 0));
        if (hours > 0) {
            return `${hours} hours`;
        }
        if (minutes > 0) {
            return `${minutes} minutes`;
        }
        return `${seconds} seconds`;
    }
    return time + "";
}
export function formatDateString() {
    let date = new Date(),
        month = "" + (date.getMonth() + 1),
        day = "" + date.getDate(),
        year = date.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
}
export function convertTime(time) {
    let hours = parseInt(time / 3600);
    let minutes = parseInt((time - hours * 3600) / 60);
    let seconds = time - hours * 3600 - minutes * 60;
    return (
        (hours.toString().length == 2
            ? hours.toString()
            : "0" + hours.toString()) +
        " : " +
        (minutes.toString().length == 2
            ? minutes.toString()
            : "0" + minutes.toString()) +
        " : " +
        (seconds.toString().length == 2
            ? seconds.toString()
            : "0" + seconds.toString())
    );
}
export function isMobileFunctions() {
    if (typeof window !== "undefined") {
        return window.innerWidth < 780;
    } else {
        const isAndroid = () => Boolean(userAgent.match(/Android/i));
        const isIos = () => Boolean(userAgent.match(/iPhone|iPad|iPod/i));
        const isOpera = () => Boolean(userAgent.match(/Opera Mini/i));
        const isWindows = () => Boolean(userAgent.match(/IEMobile/i));
        const isSSR = () => Boolean(userAgent.match(/SSR/i));
        const isMobile = () =>
            Boolean(isAndroid() || isIos() || isOpera() || isWindows());
        const isDesktop = () => Boolean(!isMobile() && !isSSR());
        return isMobile;
    }
    // return false;
}

export function scrollDown() {
    window.scroll({
        top: 100000000,
        behavior: "smooth",
    });
}
export function scrollToTopic() {
    if (typeof window !== "undefined") {
        let childElement = document.querySelector(".content-home-page-1");
        if (childElement) {
            window.scroll({
                top: childElement.offsetTop,
                behavior: "smooth",
            });
        }
        setTimeout(() => {
            let childElement = document.querySelector(".content-home-page");
            if (childElement) {
                window.scroll({
                    top: childElement.offsetTop,
                    behavior: "smooth",
                });
            }
        }, 310);
    }
}

export function scrollParentToElement({
    classNameId,
    parentClassNameId,
    offset,
}) {
    let childElement = document.querySelector(classNameId);
    let parentElement =
        (parentClassNameId
            ? document.querySelector(parentClassNameId)
            : window) || window;
    if (childElement && parentElement) {
        parentElement.scroll({
            top: childElement.offsetTop + (offset ? offset : 0),
            behavior: "smooth",
        });
    }
}

export function scrollToElement(id, offset) {
    if (typeof window !== "undefined") {
        let childElement = document.querySelector(id);
        if (childElement) {
            window.scroll({
                top: childElement.offsetTop + (offset ? offset : 0),
                behavior: "smooth",
            });
        }
    }
}

export function checkLoadedReceiveProps(prevProps, nextProps) {
    return (
        prevProps.loading === true &&
        nextProps.loading === false &&
        nextProps.data
    );
}

export function isObjEmpty(obj) {
    if (!obj) {
        return true;
    }
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) return false;
    }
    return true;
}

export function isLoading(data) {
    if (data.loading === true || isObjEmpty(data.data)) {
        return true;
    }
    return false;
}

export function isLoadingNew(data) {
    if (data.loading === true || !data.data) {
        return true;
    }
    return false;
}

export function getAppId() {
    return getIdParams("appId");
}

export function getIdParams(key) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    let idStr = urlSearchParams.get(key);
    try {
        return parseInt(idStr);
    } catch (e) { }
    return -1;
}

export const validateEmail = (email) => {
    const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
    // return true;
};

export function replaceItem(list, paramName, newItem) {
    if (!list) {
        console.error("List Item null ", list);
    }
    if (!newItem) {
        console.error("New Item null ", newItem);
    }
    if (!paramName) {
        console.error("ParamName null ", paramName);
    }
    let index = list.findIndex((item) => item[paramName] == newItem[paramName]);
    if (index > -1) {
        list[index] = newItem;
    } else {
        list.push(newItem);
    }
}

export function formatDate(date, showTime, showSecond, showYear) {
    if (!(date instanceof Date)) {
        date = new Date(date);
    }
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    var timeString =
        (day < 10 ? "0" + day : day) +
        "/" +
        (month < 10 ? "0" + month : month) +
        (showYear == false ? "" : "/" +
            year);
    if (!!showTime) {
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        return (
            (h < 10 ? "0" + h : h) +
            ":" +
            (m < 10 ? "0" + m : m) +
            (typeof showSecond === "undefined" || showSecond === true
                ? ":" + (s < 10 ? "0" + s : s)
                : "") +
            " " +
            timeString
        );
    }
    return timeString;
}

const SPECIAL_CHARACTERS = {
    À: 0,
    Á: 1,
    Â: 2,
    Ã: 3,
    È: 4,
    É: 5,
    Ê: 6,
    Ì: 7,
    Í: 8,
    Ò: 9,
    Ó: 10,
    Ô: 11,
    Õ: 12,
    Ù: 13,
    Ú: 14,
    Ý: 15,
    à: 16,
    á: 17,
    â: 18,
    ã: 19,
    è: 20,
    é: 21,
    ê: 22,
    ì: 23,
    í: 24,
    ò: 25,
    ó: 26,
    ô: 27,
    õ: 28,
    ù: 29,
    ú: 30,
    ý: 31,
    Ă: 32,
    ă: 33,
    Đ: 34,
    đ: 35,
    Ĩ: 36,
    ĩ: 37,
    Ũ: 38,
    ũ: 39,
    Ơ: 40,
    ơ: 41,
    Ư: 42,
    ư: 43,
    Ạ: 44,
    ạ: 45,
    Ả: 46,
    ả: 47,
    Ấ: 48,
    ấ: 49,
    Ầ: 50,
    ầ: 51,
    Ẩ: 52,
    ẩ: 53,
    Ẫ: 54,
    ẫ: 55,
    Ậ: 56,
    ậ: 57,
    Ắ: 58,
    ắ: 59,
    Ằ: 60,
    ằ: 61,
    Ẳ: 62,
    ẳ: 63,
    Ẵ: 64,
    ẵ: 65,
    Ặ: 66,
    ặ: 67,
    Ẹ: 68,
    ẹ: 69,
    Ẻ: 70,
    ẻ: 71,
    Ẽ: 72,
    ẽ: 73,
    Ế: 74,
    ế: 75,
    Ề: 76,
    ề: 77,
    Ể: 78,
    ể: 79,
    Ễ: 80,
    ễ: 81,
    Ệ: 82,
    ệ: 83,
    Ỉ: 84,
    ỉ: 85,
    Ị: 86,
    ị: 87,
    Ọ: 88,
    ọ: 89,
    Ỏ: 90,
    ỏ: 91,
    Ố: 92,
    ố: 93,
    Ồ: 94,
    ồ: 95,
    Ổ: 96,
    ổ: 97,
    Ỗ: 98,
    ỗ: 99,
    Ộ: 100,
    ộ: 101,
    Ớ: 102,
    ớ: 103,
    Ờ: 104,
    ờ: 105,
    Ở: 106,
    ở: 107,
    Ỡ: 108,
    ỡ: 109,
    Ợ: 110,
    ợ: 111,
    Ụ: 112,
    ụ: 113,
    Ủ: 114,
    ủ: 115,
    Ứ: 116,
    ứ: 117,
    Ừ: 118,
    ừ: 119,
    Ử: 120,
    ử: 121,
    Ữ: 122,
    ữ: 123,
    Ự: 124,
    ự: 125,
    Ỹ: 126,
    Ỳ: 127,
};
const REPLACEMENTS = [
    "A",
    "A",
    "A",
    "A",
    "E",
    "E",
    "E",
    "I",
    "I",
    "O",
    "O",
    "O",
    "O",
    "U",
    "U",
    "Y",
    "a",
    "a",
    "a",
    "a",
    "e",
    "e",
    "e",
    "i",
    "i",
    "o",
    "o",
    "o",
    "o",
    "u",
    "u",
    "y",
    "A",
    "a",
    "D",
    "d",
    "I",
    "i",
    "U",
    "u",
    "O",
    "o",
    "U",
    "u",
    "A",
    "a",
    "A",
    "a",
    "A",
    "a",
    "A",
    "a",
    "A",
    "a",
    "A",
    "a",
    "A",
    "a",
    "A",
    "a",
    "A",
    "a",
    "A",
    "a",
    "A",
    "a",
    "A",
    "a",
    "E",
    "e",
    "E",
    "e",
    "E",
    "e",
    "E",
    "e",
    "E",
    "e",
    "E",
    "e",
    "E",
    "e",
    "E",
    "e",
    "I",
    "i",
    "I",
    "i",
    "O",
    "o",
    "O",
    "o",
    "O",
    "o",
    "O",
    "o",
    "O",
    "o",
    "O",
    "o",
    "O",
    "o",
    "O",
    "o",
    "O",
    "o",
    "O",
    "o",
    "O",
    "o",
    "O",
    "o",
    "U",
    "u",
    "U",
    "u",
    "U",
    "u",
    "U",
    "u",
    "U",
    "u",
    "U",
    "u",
    "U",
    "u",
    "Y",
    "Y",
];
export async function createNotificationSubscription() {
    //wait for service worker installation to be ready

    const serviceWorker = await navigator.serviceWorker.ready;

    // subscribe and return the subscription
    return await serviceWorker.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: Config.PUSH_SERVER_PUBLICKEY,
    });
}

export function stringReplaceUrl(str, regexReplace) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        var c = str.charAt(i);
        if (SPECIAL_CHARACTERS[c]) {
            c = REPLACEMENTS[SPECIAL_CHARACTERS[c]];
        }
        result += c;
    }
    return result
        .replace(/[^a-zA-Z0-9_-]/g, regexReplace ? regexReplace : "-")
        .replace(/-{2,}/g, "-")
        .replace(/--/g, "-")
        .toLowerCase();
}

export function getCookie(key) {
    if (typeof window !== "undefined") {
        var name = key + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    return "";
}

export function setCookie(key, value, exdays) {
    if (typeof window !== "undefined") {
        if (!exdays) {
            exdays = 1;
        }
        var d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        var expires = "expires=" + d.toUTCString();
        document.cookie = key + "=" + value + ";" + expires + ";path=/";
    }
}

export function setSession(key, value) {
    if (typeof sessionStorage !== "undefined") {
        sessionStorage.setItem(key, value);
    }
}

export function getSession(key) {
    if (typeof sessionStorage !== "undefined") {
        return sessionStorage.getItem(key);
    }
    return "";
}

export function addRecentPost(id) {
    if (id) {
        var ids = getRecentPosts();
        if (ids.indexOf(id) == -1) {
            if (ids.length == 3) {
                ids[0] = id;
            } else {
                ids.push(id);
            }
        }
        setCookie(Config.RECENT_POSTS_KEY, JSON.stringify(ids), 30);
    }
}

export function getRecentPosts() {
    var json = getCookie(Config.RECENT_POSTS_KEY);
    if (json) {
        return JSON.parse(json);
    }
    return [];
}

export const isClientSide = () => {
    return typeof window !== "undefined";
};

export const checkCountryVN = () => {
    let currentCountry = localStorage.getItem("country");
    return currentCountry == "VN";
};

var checkProduction = false;
var currentCountry = "";
export const isProduction = () => {
    return process.env.NEXT_PUBLIC_WEB_PROD == "production";
    // return checkProduction;
};

export const setProduction = (url, country) => {
    checkProduction =
        url && !hasSubDomain(url) && url.indexOf("localhost") == -1;
    // console.log("setProduction", url, checkProduction)
};

function hasSubDomain(url) {
    // IF THERE, REMOVE WHITE SPACE FROM BOTH ENDS
    url = url.replace(new RegExp(/^\s+/), ""); // START
    url = url.replace(new RegExp(/\s+$/), ""); // END
    // IF FOUND, CONVERT BACK SLASHES TO FORWARD SLASHES
    url = url.replace(new RegExp(/\\/g), "/");
    // IF THERE, REMOVES 'http://', 'https://' or 'ftp://' FROM THE START
    url = url.replace(new RegExp(/^http\:\/\/|^https\:\/\/|^ftp\:\/\//i), "");
    // IF THERE, REMOVES 'www.' FROM THE START OF THE STRING
    url = url.replace(new RegExp(/^www\./i), "");
    // REMOVE COMPLETE STRING FROM FIRST FORWARD SLASH ON
    url = url.replace(new RegExp(/\/(.*)/), "");
    // REMOVES '.??.??' OR '.???.??' FROM END - e.g. '.CO.UK', '.COM.AU'
    if (url.match(new RegExp(/\.[a-z]{2,3}\.[a-z]{2}$/i))) {
        url = url.replace(new RegExp(/\.[a-z]{2,3}\.[a-z]{2}$/i), "");
        // REMOVES '.??' or '.???' or '.????' FROM END - e.g. '.US', '.COM', '.INFO'
    } else if (url.match(new RegExp(/\.[a-z]{2,4}$/i))) {
        url = url.replace(new RegExp(/\.[a-z]{2,4}$/i), "");
    }
    // CHECK TO SEE IF THERE IS A DOT '.' LEFT IN THE STRING
    let subDomain = url.match(new RegExp(/\./g)) ? true : false;
    return subDomain;
}

export const isPassemall = (appId) => !appId;
export const APP_ID_MOTORCYCLE = 5685506780168192;

export const isAppASVAB = (appId) =>
    appId == 5734055144325120 || appId == 4878338973761536;
export const isAppCDL = (appId) =>
    appId == 5722070642065408 || appId == 5513556919320576;
export const isAppTEAS = (appId) => appId == 5186025303310336;
export const isAppGED = (appId) => appId == 5296397775536128;
export const isAppCNA = (appId) => appId == 5747415311187968;
export const isAppMotorcycle = (appId) => appId == 5685506780168192;
export const isAppDMV = (appId) => appId == 5082322646859776;
export const isAppComptiaA = (appId) => appId == 5655480462475264;
export const isAppDrivingTheory = (appId) => appId == 5708468430307328;
export const isAppPMP = (appId) => appId == 5738309204574208;
export const isAppAccuplacer = (appId) => appId == 6425502466179072;
export const isAppG1 = (appId) => appId == 5681717746597888;
export const isAppServsafe = (appId) =>
    [5748957795844096, 5746867797229568].includes(appId);

export function isSuperApp(appId) {
    return (
        isAppASVAB(appId) ||
        isAppCDL(appId) ||
        isAppTEAS(appId) ||
        isAppGED(appId) ||
        isAppCNA(appId) ||
        isAppDMV(appId) ||
        isAppMotorcycle(appId)
    );
}
export function NewArray(size) {
    var x = [];
    for (var i = 0; i < size; ++i) {
        x[i] = i;
    }
    return x;
}

export const getNewDomain = (appId) => {
    let link;
    if (isAppASVAB(appId)) {
        link = "https://asvab-prep.com";
    } else if (isAppCDL(appId)) {
        link = "https://cdl-prep.com";
    } else if (isAppTEAS(appId)) {
        link = "https://teas-prep.com";
    } else if (isAppGED(appId)) {
        link = "https://ged-testprep.com";
    }
    return link;
};
export const firstTimeOfDate = (date) => {
    if (date.constructor.name == Date.name) {
        return new Date(date.getTime()).setHours(0, 0, 0, 0);
    }
    return new Date(date).setHours(0, 0, 0, 0);
};
export const getDaysOfDate = (date1, date2) => {
    if (date1 > date2) {
        return getDaysOfDate(date2, date1);
    }
    let index = 0;
    let date = new Date(date1);
    while (firstTimeOfDate(date) <= firstTimeOfDate(date2)) {
        index++;
        date.setDate(date.getDate() + 1);
    }
    return index;
};
export const compareDate = (date1, date2) => {
    return firstTimeOfDate(date1) - firstTimeOfDate(date2);
};

export function getHeaderBanner(appId, isMobile) {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down("sm"));
    const mobile = !!isMobile || sm ? "-mobile" : "";
    if (isAppASVAB(appId)) {
        return `images/apps/asvab/header-background${mobile}.jpg`;
    }
    if (isAppCDL(appId)) {
        return `images/apps/cdl/header-background${mobile}.jpg`;
    }
    if (isAppTEAS(appId)) {
        return `images/apps/teas/header-background${mobile}.jpg`;
    }
    if (isAppGED(appId)) {
        return `images/apps/ged/header-background${mobile}.jpg`;
    }
    if (isAppCNA(appId)) {
        return `images/apps/cna/header-background${mobile}.jpg`;
    }
    if (isAppDMV(appId)) {
        return `images/apps/dmv/header-background${mobile}.jpg`;
    }
    if (isAppMotorcycle(appId)) {
        return `images/apps/motorcycle/header-background${mobile}.jpg`;
    }
    return `images/apps/all/header-background${mobile}.jpg`;
}

export function getDarkModeCustom(appId) {
    return appId && isSuperApp(appId);
}

export function getImageBlock3(appId) {
    const theme = useTheme();
    if (isAppASVAB(appId)) {
        return [
            `images/apps/asvab/infographic/infographic-1.jpg`,
            "images/apps/asvab/infographic/infographic-2.jpg",
        ];
    }
    if (isAppCDL(appId)) {
        return [
            `images/apps/cdl/infographic/infographic-1.jpg`,
            "images/apps/cdl/infographic/infographic-2.jpg",
        ];
    }
    if (isAppTEAS(appId)) {
        return [
            `images/apps/teas/infographic/infographic-1.jpg`,
            "images/apps/teas/infographic/infographic-2.jpg",
        ];
    }
    if (isAppGED(appId)) {
        return [
            `images/apps/ged/infographic/infographic-1.jpg`,
            "images/apps/ged/infographic/infographic-2.jpg",
        ];
    }
    if (isAppCNA(appId)) {
        return [
            `images/apps/cna/infographic/infographic-1.jpg`,
            "images/apps/cna/infographic/infographic-2.jpg",
        ];
    }
    if (isAppDMV(appId)) {
        return [
            `images/apps/dmv/infographic/infographic-1.jpg`,
            "images/apps/dmv/infographic/infographic-2.jpg",
        ];
    }
    if (isAppMotorcycle(appId)) {
        return [
            `images/apps/motorcycle/infographic/infographic-1.jpg`,
            "images/apps/motorcycle/infographic/infographic-2.jpg",
        ];
    }
    return [
        `images/apps/all/scientifically-proven1.jpg`,
        "images/apps/all/scientifically-proven2.jpg",
    ];
}

export function isMobileUserAgent(request) {
    let userAgent = request && request.headers["user-agent"];
    let check = false;
    (function (a) {
        if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
                a
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                a.substr(0, 4)
            )
        )
            check = true;
    })(userAgent || "");
    return check;
}

export function getWebContext(context, params) {
    let url = getUrl(context.req, context.params);
    // console.log("params", params)
    return {
        props: {
            isMobile: isMobileUserAgent(context.req),
            url: url ? url : "",
            ...(params || {}),
        },
    };
}

function getUrl(request, params) {
    let proto = request.headers["x-forwarded-proto"];
    let host = request.headers["x-forwarded-host"] || request.headers["host"];
    let page = request.headers["x-nextjs-page"];
    console.log("fewlfkwlf");
    if (proto && host) {
        if (page == "/index") {
            page = "";
        }
        if (params) {
            if (page == "/[appNameId]") {
                page = "/" + params.appNameId;
            }
            if (page == "/[screenChild]") {
                page = "/" + params.screenChild;
            }
            if (page == "/blog/[blog]") {
                page = "/blog/" + params.blog;
            }
        }
        return proto + "://" + host + page;
    }
    let url = request.headers.referer;
    if (url) {
        return url;
    }
    if (request.rawHeaders) {
        for (let value of request.rawHeaders) {
            if (value.includes("http")) {
                return value;
            }
        }
    }
    return getNewDomain(APP_NEW_DOMAIN);
}

export function scrollFromElementToElement(fromElement, toElement, offset) {
    if (typeof window !== "undefined") {
        document.querySelector(fromElement)?.scroll({
            top:
                (document.querySelector(toElement)?.offsetTop ?? 0) +
                (offset ?? 0),
            behavior: "smooth",
        });
    }
}

export const showDownloadPopup = ({
    iosUrl,
    androidUrl,
    onClickIOS,
    onClickAndroid,
}) => {
    try {
        const cookieKey = "download-app-key";
        let value = JSON.parse(getCookie(cookieKey) || "{}");
        let nowTime = Date.now();
        if (
            !value.notShow &&
            (!value.showed ||
                !value.lastActive ||
                nowTime - value.lastActive > 30 * 60 * 1000)
        ) {
            // 30 minute //
            // show modal
            value.showed = true;
            value.lastActive = nowTime;
            setCookie(cookieKey, JSON.stringify(value), 1);
        } else {
            return;
        }
        let html = `
      <div id="modal-download-apps" class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <span class="close">&times;</span>
            <h3>Download App</h3>
          </div>
          <div class="modal-body">
            <p>Do you want to install the app on your IOS or Android device?</p>
            <p>All your learning progress on the browser will be synchronized!</p>
            <div class='links-app'>
              <div class="item">
                <a id="link-download-android-a" target="_blank" rel="noopener noreferrer" >
                  <img alt="download android" src="https://passemall.com/wp-content/themes/passemall_theme/assets/images/download_android.png" />
                </a>
              </div>
              <div class="item">
                <a id="link-download-ios-a" href="" target="_blank" rel="noopener noreferrer" >
                  <img alt="download ios" src="https://passemall.com/wp-content/themes/passemall_theme/assets/images/download_ios.png" />
                </a>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <input type="checkbox" name="remembernoshowdialogdownloadapp" id="remembernoshowdialogdownloadapp" />
            <label for="remembernoshowdialogdownloadapp">Do not show again?</label>
          </div>
        </div>
      </div>
    `;
        if (typeof document !== "undefined") {
            let modal = document.getElementById("modal-download-apps");
            if (!modal) {
                modal = document.createElement("div");
                document.body.appendChild(modal);
                modal.innerHTML = html;
            }
            let linkDownloadIosElem = modal.querySelector(
                "#link-download-ios-a"
            );
            if (linkDownloadIosElem) {
                linkDownloadIosElem.setAttribute("href", iosUrl);
                linkDownloadIosElem.onclick = onClickIOS;
            }
            let linkDownloadAndroidElem = modal.querySelector(
                "#link-download-android-a"
            );
            if (linkDownloadAndroidElem) {
                linkDownloadAndroidElem.setAttribute("href", androidUrl);
                linkDownloadAndroidElem.onclick = onClickAndroid;
            }
            let remembernoshowdialogdownloadapp = modal.querySelector(
                "#remembernoshowdialogdownloadapp"
            );
            if (remembernoshowdialogdownloadapp) {
                remembernoshowdialogdownloadapp.onclick = (e) => {
                    let value = JSON.parse(getCookie(cookieKey) || "{}");
                    value.notShow = remembernoshowdialogdownloadapp.checked;
                    setCookie(cookieKey, JSON.stringify(value), 1);
                };
            }
            let modalContent = modal.querySelector("#modal-download-apps");
            modalContent.style.display = "block";
            let span = document.querySelector(".modal-header .close");
            span &&
                (span.onclick = function () {
                    console.log("running");
                    modalContent.style.display = "none";
                });
            window.onclick = function (event) {
                if (event.target == modal) {
                    modalContent.style.display = "none";
                }
            };
        }
    } catch (e) {
        console.log("error download app popup", e);
    }
};

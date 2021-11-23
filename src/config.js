class Config {
    static ASVAB_NEW_APP_ID = 4878338973761536;
    static TEST_MODE = false;

    static USER_ID = "kienxxx";
    static SECRET_KEY = "koolsoft-web";
    static BASE_URL = `https://micro-enigma-235001.appspot.com`;
    static BASIC_SERVER_STORAGE = "https://datacenter.abc-elearning.org";
    static WEB_PUSH_URL = "http://localhost:3001/api";
    // static BASE_URL = `https://utestwebapi-dot-micro-enigma-235001.appspot.com`;
    static NULL_STRING = "";
    static API_GET_CARDS_BY_IDS = "/get-card-by-ids";
    static API_GET_CARDS_FOR_TEST_SETTING = "/data?type=get_cards_for_test";
    static HTTP_REQUEST_TIMEOUT = 30000;
    static HTTP_REQUEST_SUCCESSS = 200;
    static HTTP_REQUEST_ERROR = 500;
    static LIMIT_USER_RATING = 10;

    static GAME_STATUS_TESTING = 0;
    static WEAK_QUESTION = {
        id: 1,
        name: "Weak Question",
        image: "images/weak.svg",
    };
    static MEDIUM_QUESTION = {
        id: 2,
        name: "Medium Question",
        image: "images/medium.svg",
    };
    static STRONG_QUESTION = {
        id: 3,
        name: "Strong Question",
        image: "images/strong.svg",
    };
    static ALL_FAMILIAR_QUESTION = {
        id: 4,
        name: "All Familiar Question",
        image: "images/test.svg",
    };
    static YOUR_FAVORITE_QUESTION = {
        id: 5,
        name: "Your Favorite Question",
        image: "images/heart.svg",
    };
    static MILLISECONDS_PER_DAY = 86400000;
    static KEY_TIME_START_LEARN = "time-start-learn";
    static SAMPLE_VIN = "SCBFR7ZA5CC072256";
    static PUSH_SERVER_PUBLICKEY =
        "BIN2Jc5Vmkmy-S3AUrcMlpKxJpLeVRAfu9WBqUbJ70SJOCWGCGXKY-Xzyh7HDr6KbRDGYHjqZ06OcS3BjD7uAm8";
    static COLOR_TOPICS = [
        "#30749f",
        "#e68a50",
        "#8ccac7",
        "#dab542",
        "#cca68b",
        "#859051",
        "#779a6a",
        "#656c86",
        "#9c7353",
    ];
    static TABLE_ONE = {
        title: [29, 26, 28],
        content: [
            [
                {
                    valueName: "VIN",
                    valueId: -1,
                },
                {
                    valueName: "Make",
                    valueId: 26,
                },
                {
                    valueName: "Model",
                    valueId: 28,
                },
                {
                    valueName: "Year",
                    valueId: 29,
                },
                {
                    valueName: "Drive Type",
                    valueId: 15,
                },
            ],
            [
                {
                    valueName: "Style/Body",
                    valueId: 96,
                },
                {
                    valueName: "Engine",
                    valueId: 13,
                    formatValue: "L",
                },
                {
                    valueName: "Manufactured in",
                    valueId: [31, 75],
                },
                {
                    valueName: "Age",
                    valueId: 29,
                    formatValue: " Years",
                },
            ],
        ],
    };
    static TABLE_TWO = {
        content: [
            {
                valueName: "Manufactured By",
                valueId: 27,
            },
            {
                valueName: "Plant Company Name",
                valueId: 76,
            },
            {
                valueName: "Vehicle Type",
                valueId: 39,
            },

            {
                valueName: "Series",
                valueId: 34,
            },
            {
                valueName: "Body Class",
                valueId: 5,
            },
            {
                valueName: "Doors",
                valueId: 14,
            },
            {
                valueName: "Front Airbag Location",
                valueId: 65,
            },
            {
                valueName: "Seat Belts Type",
                valueId: 79,
            },
            {
                valueName: "Engine Displacement (CI)",
                valueId: 12,
            },
            {
                valueName: "Engine Displacement (CC)",
                valueId: 11,
            },
            {
                valueName: "Fuel Type",
                valueId: 24,
            },
            {
                valueName: "Engine Number of Cylinders",
                valueId: 9,
            },
        ],
    };
    static TABLE_THREE = {
        title: "Additional Vehicle Info",
        content: [
            27, 76, 39, 34, 5, 14, 65, 79, 12, 11, 24, 9, 143, 13, 15, 26, 28,
            29, 31, 75, 96,
        ],
        // content: [
        //     {
        //         valueName: "Gross Vehicle Weight Rating From",
        //         valueId: 25,
        //     },
        //     {
        //         valueName: "Trim",
        //         valueId: 38,
        //     },
        //     {
        //         valueName: "Engine Configuration",
        //         valueId: 64,
        //     },

        //     {
        //         valueName: "Pretensioner",
        //         valueId: 78,
        //     },
        //     {
        //         valueName: "NCSA Make",
        //         valueId: 97,
        //     },
        //     {
        //         valueName: "NCSA Model",
        //         valueId: 98,
        //     },
        //     {
        //         valueName: "Side Air Bag Locations",
        //         valueId: 107,
        //     },
        //     {
        //         valueName: "Trailer Type Connection",
        //         valueId: 116,
        //     },
        //     {
        //         valueName: "Trailer Body Type",
        //         valueId: 117,
        //     },
        //     {
        //         valueName: "Other Restraint System Info",
        //         valueId: 121,
        //     },
        //     {
        //         valueName: "Bus Floor Configuration Type",
        //         valueId: 148,
        //     },
        //     {
        //         valueName: "Bus Type",
        //         valueId: 149,
        //     },
        //     {
        //         valueName: "Custom Motorcycle Type",
        //         valueId: 151,
        //     },
        //     {
        //         valueName: "Motorcycle Suspension Type	",
        //         valueId: 152,
        //     },
        //     {
        //         valueName: "Tire Pressure Monitoring System (TPMS) Type	",
        //         valueId: 168,
        //     },
        //     {
        //         valueName: "Error Text",
        //         valueId: 191,
        //     },
        // ],
    };
    static STATES = [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
    ];
    static MONTH_NAMES = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    static GAME_STATUS_TESTING = 0;
    static WEAK_QUESTION = {
        id: 1,
        name: "Weak Question",
        image: "images/weak.svg",
    };
    static MEDIUM_QUESTION = {
        id: 2,
        name: "Medium Question",
        image: "images/medium.svg",
    };
    static STRONG_QUESTION = {
        id: 3,
        name: "Strong Question",
        image: "images/strong.svg",
    };
    static ALL_FAMILIAR_QUESTION = {
        id: 4,
        name: "All Familiar Question",
        image: "images/test.svg",
    };
    static YOUR_FAVORITE_QUESTION = {
        id: 5,
        name: "Your Favorite Question",
        image: "images/heart.svg",
    };
    static EXPERT_LEVEL_PASS = 1;
    static EXPERT_LEVEL_ADVANCED = 2;
    static EXPERT_LEVEL_PRO = 3;
    static CURRENT_LEVEL_BEGINNER = 1;
    static CURRENT_LEVEL_ADVANCED = 2;
    static CURRENT_LEVEL_PRO = 3;
    static FIRST_SCREEN_STUDY_PLAN = [
        {
            title: "Pass exam on the first try",
            description: "98% of our users pass their exam on the first try",
            image: "images/study-plan/study_plan_feature_1.webp",
            imageMobile: "images/study-plan/study-plan-feature-mobile-1.jpg",
        },
        {
            title: "Best simulation exams",
            description:
                "All our exam-like questions written by experts will best familiarize you with the real test format",
            image: "images/study-plan/study_plan_feature_2.webp",
            imageMobile: "images/study-plan/study-plan-feature-mobile-2.jpg",
        },
        {
            title: "Personal study plan",
            description:
                "Based on your current level, an in-depth study plan will be generated to save extremely your time and efforts",
            image: "images/study-plan/study_plan_feature_3.webp",
            imageMobile: "images/study-plan/study-plan-feature-mobile-3.jpg",
        },
    ];
    static SECOND_SCREEN_STUDY_PLAN = [
        {
            title: "Pass",
            description: "",
            image: "images/study-plan/study_plan_expert_1.webp",
            imageMobile: "images/study-plan/expert_mobile_1.jpg",
            value: this.EXPERT_LEVEL_PASS,
        },
        {
            title: "Advanced",
            description: "",
            image: "images/study-plan/study_plan_expert_2.webp",
            imageMobile: "images/study-plan/expert_mobile_2.jpg",
            value: this.EXPERT_LEVEL_ADVANCED,
        },
        {
            title: "Pro",
            description: "",
            image: "images/study-plan/study_plan_expert_3.webp",
            imageMobile: "images/study-plan/expert_mobile_3.jpg",
            value: this.EXPERT_LEVEL_PRO,
        },
    ];
    static THIRD_SCREEN_STUDY_PLAN = [
        {
            title: "Beginner",
            description: "",
            image: "images/study-plan/study_plan_level_1.webp",
            imageMobile: "images/study-plan/level_mobile_1.jpg",
            value: this.CURRENT_LEVEL_BEGINNER,
        },
        {
            title: "Advanced",
            description: "",
            image: "images/study-plan/study_plan_level_2.webp",
            imageMobile: "images/study-plan/level_mobile_2.jpg",
            value: this.CURRENT_LEVEL_ADVANCED,
        },
        {
            title: "Pro",
            description: "",
            image: "images/study-plan/study_plan_level_3.webp",
            imageMobile: "images/study-plan/level_mobile_3.jpg",
            value: this.CURRENT_LEVEL_PRO,
        },
    ];
    static FIRST_SCREEN_STUDY_PLAN_PC = [
        {
            title: [
                "Pass exam on the first try",
                "Best simulation exams",
                "Personal study plan",
            ],
            description: [
                "98% of our users pass their exam on the first try",
                "All our exam-like questions written by experts will best familiarize you with the real test format",
                "Based on your current level, an in-depth study plan will be generated to save extremely your time and efforts",
            ],
            image: "images/study-plan/Group 1700.jpg",
            value: this.CURRENT_LEVEL_BEGINNER,
        },
    ];
    static LIST_STUDY_PLAN_SCREEN_CONTENT = [
        {
            title: "Study Plan Feature",
            content: this.FIRST_SCREEN_STUDY_PLAN_PC,
            isHaveContent: true,
        },
        {
            title: "Choose your expect",
            content: this.SECOND_SCREEN_STUDY_PLAN,
            valueName: "expectLevel",
            isHaveContent: false,
        },
        {
            title: "Choose your current level",
            content: this.THIRD_SCREEN_STUDY_PLAN,
            valueName: "currentLevel",
            isHaveContent: false,
        },
    ];
    static LIST_STUDY_PLAN_SCREEN_CONTENT_MOBILE = [
        {
            title: "Study Plan Feature",
            content: [this.FIRST_SCREEN_STUDY_PLAN[0]],
            isHaveContent: true,
        },
        {
            title: "Study Plan Feature",
            content: [this.FIRST_SCREEN_STUDY_PLAN[1]],
            isHaveContent: true,
        },
        {
            title: "Study Plan Feature",
            content: [this.FIRST_SCREEN_STUDY_PLAN[2]],
            isHaveContent: true,
        },
        {
            title: "Choose your expect",
            content: this.SECOND_SCREEN_STUDY_PLAN,
            valueName: "expectLevel",
            isHaveContent: true,
        },
        {
            title: "Your current level",
            content: this.THIRD_SCREEN_STUDY_PLAN,
            valueName: "currentLevel",
            isHaveContent: true,
        },
    ];

    static LEVEL_QUESTION = [
        this.WEAK_QUESTION,
        this.MEDIUM_QUESTION,
        this.STRONG_QUESTION,
        this.ALL_FAMILIAR_QUESTION,
        this.YOUR_FAVORITE_QUESTION,
    ];
    static STUDY_GAME = 0;
    static TEST_GAME = 1;
    static REVIEW_GAME = 2;

    static QUESTION_BOOKMARK_NONE = 0;
    static QUESTION_BOOKMARKED = 1;
    static QUESTION_UN_BOOKMARK = 2;

    static GAME_STATUS_FAILED = -1;
    static GAME_STATUS_TESTING = 0;
    static GAME_STATUS_PASSED = 4;

    static QUESTION_NOT_ANSWERED = 0;
    static QUESTION_ANSWERED_INCORRECT = 1;
    static QUESTION_ANSWERED_CORRECT = 2;
    static QUESTION_ANSWERED_SKIP = 3;
    static QUESTION_SELECTED = 4;
    static START_STATUS = 0;
    static PLAYING_STATUS = 1;
    static FINISHED_STATUS = 2;

    static NEXT_PART_PROGRESS = 100;

    static TEST_TOTAL_QUESTION = 50;
    static TEST_ALLOW_MISTAKE = 15;
    static RECENT_POSTS_KEY = "RECENT_POSTS_KEY";
    static EASY_LEVEL = 1;
    static HARD_LEVEL = 2;
    static VERY_HARD_LEVEL = 3;

    static SHOW_DOWNLOAD_APP_COOKIE_KEY = "SHOW_DOWNLOAD_APP_COOKIE_KEY";
    static TEST_STATUS_NOTHING = 1;
    static TEST_STATUS_PLAYING = 3;
    static LISTBUCKET = ["ged", "cdl", "hesia2"];

    static TESTER_KEY = "TESTER_KEY";
    static REPLACE_CONTENT = "REPLACE_CONTENT";
}
export default Config;

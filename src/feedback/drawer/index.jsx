import React, { useEffect, useState } from "react";
import "./index.scss";
import { LinearProgress, SwipeableDrawer } from "@mui/material";
import ReviewPanel from "../review-panel";
import { useDispatch, useSelector } from "react-redux";
import { updateOpenDrawerValueAction } from "../../redux/actions";
import useMediaQuery from "@material-ui/core/useMediaQuery";
// import { APP_SHORT_NAME } from "../../../../config_app";
// import { isProduction, scrollParentToElement } from "../../../../utils";

const Drawer = ({ reviews , appShortName }) => {
    let numFiveStarVote = 0;
    let numFourStarVote = 0;
    let numThreeStarVote = 0;
    let numTwoStarVote = 0;
    let numOneStarVote = 0;
    const dispatch = useDispatch();
    const openDrawer = useSelector((state) => state.getProState.openDrawer);
    const appReview = useSelector((state) => state.getProState.app);
    const chosenReviewId = useSelector(
        (state) => state.getProState.chosenReviewId
    );
    const isMobile = useMediaQuery("(max-width:768px)");
    let filterReviews = reviews.filter((review) => review.rating === 5);

    // useEffect(() => {
    //     console.log(chosenReviewId);
    //     sortReviews();
    // }, [chosenReviewId]);

    const sortReviews = () => {
        let sortedReview = [];
        let chosenReview = "";
        filterReviews.map((review) => {
            if (review.id != chosenReviewId) {
                sortedReview.push(review);
            } else {
                chosenReview = review;
            }
        });
        if (chosenReview !== "") {
            sortedReview.unshift(chosenReview);
        }
        return sortedReview;
    };

    const getRateResult = () => {
        for (let index = 0; index < reviews.length; index++) {
            switch (reviews[index].rating) {
                case 1: {
                    numOneStarVote++;
                    break;
                }
                case 2: {
                    numTwoStarVote++;
                    break;
                }
                case 3: {
                    numThreeStarVote++;
                    break;
                }
                case 4: {
                    numFourStarVote++;
                    break;
                }
                case 5: {
                    numFiveStarVote++;
                    break;
                }
                default: {
                    break;
                }
            }
        }
    };
    getRateResult(reviews);
    let numOfVote = appReview?.userRatingCountForCurrentVersion ?? 0;
    let score = appReview?.averageUserRating ?? 0;
    let displayScore = score.toFixed(1);

    const toggleDrawer = (event, open) => {
        if (
            typeof event === "undefined" ||
            (event.type === "keydown" &&
                (event.key === "Tab" || event.key === "Shift"))
        ) {
            return;
        }
        dispatch(updateOpenDrawerValueAction(open));
    };

    const closeDrawer = () => {
        dispatch(updateOpenDrawerValueAction(false));
    };

    let appName = appShortName;
    if (appName.toLowerCase().includes("dmv")) {
        appName = "dmv";
    }
    let link =
        `/wp-content/themes/passemall_theme/assets/images/${appName}/` +
        (appName === "passemall" ? "logo-white.svg" : "logo.svg");
    link="https://cdl-prep.com/wp-content/themes/passemall_theme/assets/images/cdl/logo.svg";
    // if (!isProduction()) {
    //     link =
    //         "https://cdl-prep.com/wp-content/themes/passemall_theme/assets/images/cdl/logo.svg";
    // }

    return (
        <SwipeableDrawer
            anchor={"left"}
            open={openDrawer}
            onOpen={(event) => toggleDrawer(event, true)}
            onClose={(event) => toggleDrawer(event, false)}
        >
            <div className="get-pro-drawer-container">
                <div className="drawer-header">
                    <div
                        className="drawer_close_icon-container"
                        onClick={closeDrawer}
                    >
                        <img src="/images/close_icon.svg" />
                    </div>
                    <div className="drawer-app-icon-container">
                        <img src={link} width="auto" height="30px" />
                    </div>
                    <div className="drawer-feedback-text">Feedback</div>
                </div>
                <div className="drawer-result-vote">
                    <div className="drawer-vote-count">
                        <div className="num-of_vote">
                            <div className="vote-number">5</div>
                            <div className="get-pro-linear-progress-container">
                                <div className="get-pro-linear-progress">
                                    <LinearProgress
                                        variant="determinate"
                                        value={92}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="num-of_vote">
                            <div className="vote-number">4</div>
                            <div className="get-pro-linear-progress-container">
                                <div className="get-pro-linear-progress">
                                    <LinearProgress
                                        variant="determinate"
                                        value={4}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="num-of_vote">
                            <div className="vote-number">3</div>
                            <div className="get-pro-linear-progress-container">
                                <div className="get-pro-linear-progress">
                                    <LinearProgress
                                        variant="determinate"
                                        value={2}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="num-of_vote">
                            <div className="vote-number">2</div>
                            <div className="get-pro-linear-progress-container">
                                <div className="get-pro-linear-progress">
                                    <LinearProgress
                                        variant="determinate"
                                        value={1}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="num-of_vote">
                            <div className="vote-number">1</div>
                            <div className="get-pro-linear-progress-container">
                                <div className="get-pro-linear-progress">
                                    <LinearProgress
                                        variant="determinate"
                                        value={1}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="drawer-vote-result">
                        <div className="vote-result">{displayScore}</div>
                        <div className="total-vote">
                            {numOfVote + " reviews"}
                        </div>
                    </div>
                </div>
                <div className="get-pro-review-list">
                    {sortReviews(filterReviews).map((review) => {
                        if (review.rating === 5) {
                            return (
                                <ReviewPanel
                                    key={review.id}
                                    review={review}
                                    isDrawer={true}
                                    clickable={false}
                                />
                            );
                        }
                    })}
                </div>
            </div>
        </SwipeableDrawer>
    );
};

export default Drawer;

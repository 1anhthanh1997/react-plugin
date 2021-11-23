import { Rating } from "@mui/material";
import React from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import {
    getAppReviewsSuccessAction,
    updateChosenReviewIdAction,
    updateOpenDrawerValueAction,
} from "../../redux/actions";

const ReviewPanel = ({ review, isDrawer, clickable }) => {
    const reviews = useSelector((state) => state.getProState.reviews);
    const dispatch = useDispatch();
    let authorName = review.author;
    let name = authorName.slice(0, 7) + "...";
    let content =
        review.content.length > 200
            ? review.content.slice(0, 200) + " ..."
            : review.content;

    const openDrawer = () => {
        if (clickable) {
            let arrangeReview = [];
            let reviewIndex = 0;
            reviews.map((rev, index) => {
                if (rev.id === review.id) {
                    reviewIndex = index;
                }
            });
            for (let index = reviewIndex; index < reviews.length; index++) {
                arrangeReview.push(reviews[index]);
            }
            for (let index = 0; index < reviewIndex; index++) {
                arrangeReview.push(reviews[index]);
            }
            dispatch(updateChosenReviewIdAction(review.id));
            dispatch(updateOpenDrawerValueAction(true));
        }
    };

    return (
        <div
            key={review.id}
            className={isDrawer ? "review-item-drawer" : "review-item"}
        >
            <div
                className={isDrawer ? "review-panel-drawer" : "review-panel"}
                onClick={openDrawer}
            >
                <div className="user-info-container">
                    <div
                        className="avatar"
                        style={{ backgroundColor: review.color }}
                    >
                        {review.author[0]}
                    </div>
                    <div className="get-pro-info-container">
                        <div className="author-name">{name}</div>
                        <div className="last-update-text">
                            {review.lastUpdate}
                        </div>
                    </div>
                    {isDrawer && (
                        <div className="rating-container">
                            <Rating
                                name="disabled"
                                value={review.rating}
                                readOnly
                                size={"small"}
                            />
                        </div>
                    )}
                </div>
                {!isDrawer && (
                    <div className="rating-container">
                        <Rating
                            name="disabled"
                            value={review.rating}
                            readOnly
                            size={"small"}
                        />
                    </div>
                )}
                <div className="get-pro-comment">
                    {isDrawer ? review.content : content}
                </div>
                {review.content.length > 200 && !isDrawer && (
                    <div className={"get-pro-see-more-text"}>See more</div>
                )}
            </div>
        </div>
    );
};

export default ReviewPanel;

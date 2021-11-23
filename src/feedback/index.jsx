import React, {useRef, useState, useEffect} from "react";
import "./index.scss";
import Slider from "react-slick";
import {useDispatch, useSelector} from "react-redux";
import Drawer from "./drawer";
import ReviewPanel from "./review-panel";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {getAppReviewsAction, updateOpenDrawerValueAction} from "../redux/actions";

const Feedback = ({appShortName}) => {
    const reviews = useSelector((state) => state.getProState.reviews);
    const isMobile = useMediaQuery("(max-width:768px)");
    const [clickable, setClickable] = useState(true);
    let filterReviews = reviews.filter((review) => review.rating === 5);
    const [position, setPosition] = useState(0);
    const [previousPosition, setPreviousPostion] = useState(2);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAppReviewsAction("4878338973761536"));
    }, []);

    const settings = {
        className: "slider",
        dots: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        infinite: false,
        arrows: false,
        // onSwipe: (slide) => {
        //     setClickable(false);
        // },
        beforeChange: (slide) => {
            setPreviousPostion(position);
            setClickable(false);
        },
        afterChange: (slide) => {
            setClickable(true);
            // console.log(slide);
            setPosition(slide);
            if (slide === 5) {
                dispatch(updateOpenDrawerValueAction(true));
            }
        },
    };

    const mobileSettings = {
        className: "slider",
        dots: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        infinite: false,
        arrows: false,
        beforeChange: (slide) => {
            setPreviousPostion(position);
            // setPosition(slide);
            setClickable(false);
        },
        afterChange: (slide) => {
            setClickable(true);
            // console.log(slide);
            setPosition(slide);
            if (slide === 9) {
                dispatch(updateOpenDrawerValueAction(true));
            }
        },
    };
    let slider = useRef();

    const onClickPrev = () => {
        if (position !== 0) slider.current.slickPrev();
    };

    const onClickNext = () => {
        if (isMobile) {
            if (position !== 9) slider.current.slickNext();
        } else {
            if (position !== 5) slider.current.slickNext();
        }
    };

    const genButtonPrevStyle = () => {
        return position === 0 ? "change-button-max" : "change_button";
    };

    const genButtonNextStyle = () => {
        if (isMobile) {
            return position === 9 ? "change-button-max" : "change_button";
        } else {
            return position === 5 ? "change-button-max" : "change_button";
        }
    };

    return (
        <div className="get-pro-feedback-container">
            <Drawer reviews={reviews} appShortName={appShortName}/>
            <div className="get-pro-feedback-text">Feedback</div>
            <div className="get-pro-feedback-description">
                What our users are saying?
            </div>
            <Slider ref={slider} {...(isMobile ? mobileSettings : settings)}>
                {filterReviews.length === 0 && <div/>}
                {filterReviews.map((review, index) => {
                    if (index < 10) {
                        return (
                            <ReviewPanel
                                key={review.id}
                                review={review}
                                isDrawer={false}
                                clickable={clickable}
                            />
                        );
                    }
                })}
            </Slider>
            <div className="get-pro-change-slide-container">
                <div
                    className={genButtonPrevStyle()}
                    onClick={() => {
                        onClickPrev();
                    }}
                >
                    <img src={"/images/prev-icon.png"}/>
                </div>
                <div className={genButtonNextStyle()} onClick={() => onClickNext()}>
                    <img src={"/images/next_icon.svg"}/>
                </div>
            </div>
            <div className="get-pro-addition-info">
                Click on any review to see the full list.
            </div>
        </div>
    );
};

export default Feedback;

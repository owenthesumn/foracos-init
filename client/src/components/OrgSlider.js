import React, { useState } from 'react';
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import OrgCard from './OrgCard'

const OrgSlider = ({setToggleDetails}) => {
    function SampleNextArrow(props) {
        const { style, onClick } = props;
        return (            
        <span className="flex items-center justify-center absolute top-0 bottom-0 -right-10 md:-right-20 lg:-right-30 xl:-right-40 z-20">
            <BiChevronRight className="m-1 my-auto h-10 w-10 md:h-30 md:w-30 xl:h-40 xl:w-40 text-gray-300 transform hover:scale-110 cursor-pointer" style={{ ...style, color: "black"}} onClick={onClick}/>
        </span>
        );
    }

    function SamplePrevArrow(props) {
        const { style, onClick } = props;
        return (
            <span className="flex items-center justify-center absolute top-0 bottom-0 -left-10 md:-left-20 lg:-left-30 xl:-left-40 z-20">
                <BiChevronLeft className="m-1 my-auto h-10 w-10 md:h-30 md:w-30 xl:h-40 xl:w-40 text-gray-300 transform hover:scale-110 cursor-pointer" style={{ ...style, color: "black"}} onClick={onClick}/>
            </span>
        );
    }

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        prevArrow: <SamplePrevArrow/>,
        nextArrow: <SampleNextArrow/>,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    dots: false,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    prevArrow: <SamplePrevArrow/>,
                    nextArrow: <SampleNextArrow/>,
            }
            },
            {
                breakpoint: 1024,
                settings: {
                    dots: false,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    prevArrow: <SamplePrevArrow/>,
                    nextArrow: <SampleNextArrow/>,
            }
            },
            {
            breakpoint: 612,
            settings: {
                dots: false,
                infinite: false,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 2,
                prevArrow: <SamplePrevArrow/>,
                nextArrow: <SampleNextArrow/>,
            }
            }
        ]
    };

    return (
        <React.Fragment>
            <section className="w-auto flex flex-col items-center z-20">
                <article>
                    <div className="flex justify-center -mb-2">
                        <span className="w-headerMobile sm:w-headerQuarter md:w-headerHalf lg:w-header3Quart xl:w-header text-xl sm:text-3xl lg:text-4xl xl:text-5xl">
                            Priority
                        </span>
                    </div>
                    <div className="w-sliderMobile sm:w-sliderQuarter md:w-sliderHalf lg:w-slider3Quart xl:w-slider mx-auto">
                        <Slider className="sm:p-2 z-20" {...settings}>
                            <OrgCard setToggleDetails={setToggleDetails}/>
                            <OrgCard setToggleDetails={setToggleDetails}/>
                            <OrgCard setToggleDetails={setToggleDetails}/>
                            <OrgCard setToggleDetails={setToggleDetails}/>
                            <OrgCard setToggleDetails={setToggleDetails}/>
                            <OrgCard setToggleDetails={setToggleDetails}/>
                            <OrgCard setToggleDetails={setToggleDetails}/>
                            <OrgCard setToggleDetails={setToggleDetails}/>
                            <OrgCard setToggleDetails={setToggleDetails}/>
                            <OrgCard setToggleDetails={setToggleDetails}/>
                        </Slider>
                    </div>
                </article>
            </section>
        </React.Fragment>
    );
}

export default OrgSlider;
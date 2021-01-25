import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import { BiX } from "react-icons/bi";
import categoryData from '../json files/categories.json';

const categories = categoryData.data;

const SideBarCategories = ({setToggleCategories, toggleCategories}) => {
    const [mobile, setMobile] = useState(window.innerWidth > 800 ? false : true);

    const checkSize = () => {
        if (window.innerWidth > 800) { 
            setMobile(false);
        } else {
            setMobile(true);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', checkSize);
        console.log(window.innerWidth);
        console.log(mobile);
        return () => {
            window.removeEventListener('resize', checkSize);
        }
    });

    useEffect(() => {
        checkSize();
    }, [])

    // const DesktopCategories = () => {
    //     return (
    //         <section className={toggleCategories ? 
    //             "fixed w-screen pt-20 bg-gray-300 flex justify-center items-center transform transition-transform z-30" : 
    //             "fixed w-screen pt-20 bg-gray-300 flex justify-center items-center transform -translate-y-full transition-transform z-30"}>
    //             <article className="p-5 xl:px-16 h-full w-screen">
    //                 <div className="grid grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 auto-rows-auto gap-2">
    //                     {categories.map((category, index) => {
    //                         return (
    //                             <CategoryCard key={index} category={category}/>
    //                             );
    //                         })}
    //                 </div>
    //             </article>
    //         </section>
    //     );
    // }

    const MobileCategoires = () => {
        return (
            <section className={toggleCategories ? 
            "h-screen w-screen bg-gray-300 transform transition-transform z-50 fixed" : 
            "h-screen w-screen bg-gray-300 transform -translate-x-full transition-transform z-50 fixed"}>
                <div className="flex flex-col justify-center items-center">
                    <BiX className="h-20 w-20 absolute top-0 left-0 cursor-pointer" onClick={() => {setToggleCategories(false)}}/>
                    <article className="absolute top-20">
                        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-8 gap-4">
                            {categories.map((category, index) => {
                                return (
                                    <CategoryCard key={index} category={category}/>
                                    );
                                })}
                        </div>
                    </article>
                </div>
            </section>
        );
    }

    return (
        <React.Fragment>
            {mobile ? <section className={toggleCategories ? 
            "h-screen w-full bg-gray-300 transform transition-transform z-50 fixed" : 
            "h-screen w-full bg-gray-300 transform -translate-x-full transition-transform z-50 fixed"}>
                <div className="flex flex-col justify-center items-center">
                    <BiX className="h-12 w-12 sm:h-20 sm:w-20 absolute top-4 right-4 sm:top-0 sm:right-0 cursor-pointer" onClick={() => {setToggleCategories(false)}}/>
                    <article className="absolute top-20">
                        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-8 gap-4">
                            {categories.map((category, index) => {
                                return (
                                    <CategoryCard key={index} category={category}/>
                                    );
                                })}
                        </div>
                    </article>
                </div>
            </section> : <section className={toggleCategories ? 
                "fixed w-screen pt-20 bg-gray-300 flex justify-center items-center transform transition-transform z-30 shadow-lg" : 
                "fixed w-screen pt-20 bg-gray-300 flex justify-center items-center transform -translate-y-full transition-transform z-30 shadow-lg"}>
                <article className="p-5 xl:px-16 h-full w-screen">
                    <div className="grid grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 auto-rows-auto gap-4">
                        {categories.map((category, index) => {
                            return (
                                <CategoryCard key={index} category={category}/>
                                );
                            })}
                    </div>
                </article>
            </section>}
        </React.Fragment>
    );
}

export default SideBarCategories;
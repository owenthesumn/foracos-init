import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import SideBarCategories from '../components/SideBarCategories';

const Random = () => {
    const [index, setIndex] = useState("");
    const [toggleCategories, setToggleCategories] = useState(false);

    const randomize = () => {
        let randomNum = 0;
        randomNum = Math.floor((Math.random() * 100) + 0);
        setIndex(randomNum);
    }

    return (
        <React.Fragment>
            <Navigation setToggleCategories={setToggleCategories} toggleCategories={toggleCategories}/>
            <SideBarCategories setToggleCategories={setToggleCategories} toggleCategories= {toggleCategories}/>
            <section className="h-screen w-screen bg-gray-300 flex flex-col justify-center items-center text-sans">
                <article className="h-screen w-screen flex flex-col lg:flex-row bg-gray-300 pt-16 sm:pt-20">
                    <div className="flex-1 flex items-center justify-center">
                        <div className="p-10 flex flex-col justify-center">
                            <h1 className="text-3xl sm:text-5xl lg:text-7xl">Can't Decide?</h1>
                            <h2 className="text-md sm:text-xl lg:text-3xl mt-1">Press the button to find a random organization to donate to.</h2>
                            <span className="h-full w-full flex justify-center items-center mt-3 sm:mt-10">
                                <button className="h-8 w-30 sm:h-14 sm:w-44 text-xs sm:text-lg lg:text-xl bg-white rounded-full" onClick={randomize}>Find Organization</button>
                            </span>
                        </div>
                    </div>
                    <div className="flex-1 bg-black flex justify-center items-center pt-5.4 relative">
                        <h1 className="text-white text-logo">{index}</h1>
                        <p className="absolute bottom-5 right-5 text-navigation text-white">Photo by Anna Earl</p>
                    </div>
                </article>
            </section>
        </React.Fragment>
    );
}

export default Random;
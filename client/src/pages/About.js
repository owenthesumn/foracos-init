import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import SideBarCategories from '../components/SideBarCategories';

const About = () => {
    const [toggleCategories, setToggleCategories] = useState(false);

    useEffect(() => {
        {document.body.style.overflow = "hidden"}
    }, [])

    return (
        <React.Fragment>
            <Navigation setToggleCategories={setToggleCategories} toggleCategories={toggleCategories}/>
            <SideBarCategories setToggleCategories={setToggleCategories} toggleCategories= {toggleCategories}/>
            <main className="h-screen bg-gray-200 z-30 pt-16 sm:pt-20 flex flex-col justify-center items-center p-10">
                <h1 className="text-4xl sm:text-7xl md:text-10xl xl:text-13xl">foracos.org</h1>
                <h3 className="text-md sm:text-2xl md:text-4xl">A non-profit organization that aims to help various causes around the world.</h3>
            </main>
        </React.Fragment>
    );
}

export default About;
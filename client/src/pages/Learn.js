import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import LearnCard from '../components/LearnCard';
import SideBarCategories from '../components/SideBarCategories';

const Learn = () => {
    const [toggleCategories, setToggleCategories] = useState(false);

    useEffect(() => {
        {document.body.style.overflowX = "hidden"}
        {document.body.style.overflowY = "auto"}    
    }, [])

    useEffect(() => {
        if (window.innerWidth <= 800) {
            if (toggleCategories) {
                {document.body.style.overflow = "hidden"};
            } else {
                {document.body.style.overflowX = "hidden"}
                {document.body.style.overflowY = "auto"}
            }
        }
    })

    const LearnContainer = () => {
        return (
            <section className="w-screen flex justify-center">
                <article className="h-full w-90p grid grid-cols-1 auto-rows-auto gap-4">
                    <LearnCard/>
                    <LearnCard/>
                    <LearnCard/>
                    <LearnCard/>
                    <LearnCard/>
                    <LearnCard/>
                    <LearnCard/>
                    <LearnCard/>
                </article>
            </section>
        );
    }

    return (
        <React.Fragment>
            <Navigation setToggleCategories={setToggleCategories} toggleCategories={toggleCategories}/>
            <SideBarCategories setToggleCategories={setToggleCategories} toggleCategories= {toggleCategories}/>
            <main className="h-full w-screen bg-gray-200 pt-20 sm:pt-24">
                <LearnContainer/>
            </main>
        </React.Fragment>
    );
}

export default Learn;
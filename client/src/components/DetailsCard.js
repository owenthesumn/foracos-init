import React from 'react';
import { BiX } from "react-icons/bi";

const DetailsCard = ({setToggleDetails, toggleDetails}) => {
    return (
        <section className={toggleDetails ? "h-screen bg-gray-300 fixed z-50 transform transition-transform" : 
        "h-screen bg-gray-300 fixed z-50 transform -translate-x-full transition-transform"}>
            <BiX className="text-white h-20 w-20 absolute top-0 right-0 cursor-pointer z-30" onClick={() => {setToggleDetails(false)}}/>
            <div className="h-40 bg-black top-0 relative px-5">
                <h1 className="text-5xl text-white mb-2.5 absolute bottom-0">Org Name</h1>
            </div>
            <article className="px-1 grid grid-cols-1 divide-y divide-black">
                <div className="p-5 pt-5">
                    <span className="flex mb-2.5">
                        <h2 className="text-2xl mr-1 font-bold">Categories:</h2>
                        <h2 className="text-2xl">Category, Category</h2>
                    </span>
                    <h2 className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sit optio unde debitis eum consequatur amet error, dolorum minima possimus eveniet at quas vel tenetur officiis iure id labore. Assumenda!</h2>
                </div>
                <div className="p-5 pt-5">
                    <h1 className="text-3xl mb-2.5">Contact and find them here:</h1>
                    <p className="text-lg">URL</p>
                </div>
            </article>
        </section>
    );
}

export default DetailsCard;
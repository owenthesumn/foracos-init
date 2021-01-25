import React from 'react';

const OrgCard = ({setToggleDetails}) => {
    return (
        <section className="p-1 flex justify-center items-center cursor-pointer">
            <div className="h-18 w-34 sm:h-28 sm:w-44 md:h-42 md:w-66 xl:h-56 xl:w-88 bg-gray-100 m-1 md:m-1.5 xl:m-2 shadow rounded relative transform transition-transform hover:scale-105" onClick={() => {setToggleDetails(true)}}>
                <span className="absolute bottom-0 h-1/4 w-full bg-gray-300"></span>
            </div>
        </section>
    );
}

export default OrgCard;
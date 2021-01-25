import React from 'react';

const CategoryCard = ({category}) => {
    return (
        <div className="h-8 md:h-12 w-full bg-gray-400 rounded flex p-2 items-center cursor-pointer md:m-1 transform hover:scale-105 transition-transform shadow text-xs md:text-lg">{category}</div>
    );
}

export default CategoryCard;
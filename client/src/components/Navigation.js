import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiMenu, BiChevronDown } from 'react-icons/bi';

const Navigation = ({setToggleCategories, toggleCategories, toggleDetails}) => {
    useEffect(() => {
        if (window.innerWidth > 800) {
            setMobile(false);
        } else {
            setMobile(true);
        }
    }, [])

    const [toggle, setToggle] = useState(false);
    const [toggleAnim, setToggleAnim] = useState(false);
    const [mobile, setMobile] = useState();
    const [size, setSize] = useState(0);

    const checkSize = () => {
        setSize(window.innerWidth);
        if (size > 800) {
            setMobile(false);
        } else {
            setMobile(true);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', checkSize);
        return () => {
            window.removeEventListener('resize', checkSize);
        }
    });

    useEffect(() => {
        if (toggleCategories === true || toggleDetails === true) {
            setToggle(false);
            setToggleAnim(false);
        }
    });

    const toggleNav = () => {
        setToggleAnim(!toggleAnim);
        if (toggle) {
            setTimeout(() => {
                setToggle(false);
            }, 500);
        } else {
            setToggle(true);
        }
    }

    const NavButtons = () => {
        return (
            <React.Fragment>
                <nav className="w-96 bg-black text-lg md:w-96 md:flex md:justify-between md:items-center md:text-gray-100 md:text-lg">
                    <span className="w-auto">
                        <h2 className="cursor-pointer">
                            <Link to="/">
                                Home
                            </Link>
                        </h2>
                    </span>
                    <span className="w-auto">
                        <h2 className="cursor-pointer">
                            <Link to="/about">
                                About
                            </Link>
                        </h2>
                    </span>
                    <span className="w-auto">
                        <h2 className="cursor-pointer">
                            <Link to="/learn">
                                Learn
                            </Link>
                        </h2>
                    </span>
                    <span className="w-auto">
                        <h2 className="cursor-pointer">
                            <Link to="/random">
                                Can't Decide?
                            </Link>
                        </h2>
                    </span>
                    <span className="w-auto flex items-center cursor-pointer" onClick={() => {setToggleCategories(!toggleCategories)}}>
                        <h2>
                            Categories
                        </h2>
                        <BiChevronDown/>
                    </span>
                </nav>

                <button className="h-10 w-36 text-2xl text-black rounded-full bg-gray-100 flex justify-center items-center">
                    <Link to="/contact">
                        Contact us
                    </Link>
                </button>
            </React.Fragment>
        );
    }

    const MobileNavButtons = () => {
        return (
            <React.Fragment>
                <div className={toggleAnim ? "w-screen absolute top-16 sm:top-20 left-0 animate-toggleNav fixed z-30" : "w-screen absolute top-16 sm:top-20 left-0 animate-unToggleNav fixed z-30"}>
                <nav className="w-auto bg-black bg-opacity-90 text-md sm:text-xl grid-cols-1 auto-rows-auto divide-y divide-gray-600 text-gray-100">
                    <div className="h-8 w-auto">
                        <Link to="/">
                            <div className="h-8 w-auto flex items-center cursor-pointer">
                        <h2 className="ml-4 h-8 flex items-center">
                                        Home
                                </h2>
                            </div>
                        </Link>
                    </div>
                    <div className="h-8 w-auto">
                        <Link to="/about">
                            <div className="h-8 w-auto flex items-center">
                                <h2 className="cursor-pointer ml-4 h-8 flex items-center">
                                        About
                                </h2>
                            </div>
                        </Link>
                    </div>
                    <div className="h-8 w-auto">
                        <Link to="/learn">
                            <div className="h-8 w-auto flex items-center">
                                <h2 className="cursor-pointer ml-4 h-8 flex items-center">
                                        Learn
                                </h2>
                            </div>
                        </Link>
                    </div>
                    <div className="h-8 w-auto">
                        <Link to="/random">
                            <div className="h-8 w-auto flex items-center">
                                <h2 className="cursor-pointer ml-4 h-8 flex items-center">
                                        Can't Decide?
                                </h2>
                            </div>
                        </Link>
                    </div>
                    <div className="h-8 w-auto flex items-center cursor-pointer" onClick={() => {setToggleCategories(true)}}>
                        <h2 className="ml-4 h-8 flex items-center">
                                Categories
                    </h2>
                    </div>
                    <div className="h-8 w-auto">
                        <Link to="/contact">
                            <div className="h-8 w-auto flex items-center">
                                <h2 className="cursor-pointer ml-4 h-8 flex items-center">
                                        Contact us
                                </h2>
                            </div>
                        </Link>
                    </div>
                </nav>
                </div>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <div className="fixed z-40">
            {toggle && <MobileNavButtons/>}
            <section className="z-40 fixed shadow-lg">
                <article className="h-15 sm:h-20 w-screen bg-black flex justify-between items-center px-4 sm:px-10 text-gray-100">
                    <h2 className="text-3xl sm:text-4xl">
                        <Link to="/">
                            foracos
                        </Link>
                    </h2>
                    {mobile ? <BiMenu className="h-8 w-8 sm:h-10 sm:w-10 cursor-pointer" onClick={() => {toggleNav()}}/> : <NavButtons/>}
                </article>
            </section>
            </div>
        </React.Fragment>
    );
}

export default Navigation;
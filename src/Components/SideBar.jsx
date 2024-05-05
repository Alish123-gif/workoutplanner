import React, { useState } from 'react';
import { RiMenu2Line } from "react-icons/ri";
import { Transition } from '@headlessui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/contextProvider';
import { isMobile } from 'react-device-detect';


export default function SideBar() {
    const underDevelopment = ["Contact Us", "Gym", "Under Development"]
    const { isOpen, setIsOpen, content, setContent, active, setActive, activeID, setActiveID } = useAppContext();
    const Navigate = useNavigate();

    const handleLinkClick = (content) => {
        setActive(true)
        if (isMobile) {
            setTimeout(() => {
                setContent(content);
            }, 2000)
            setActiveID(content)
        }
        else {
            setContent(content);
        }

        setTimeout(() => {
            setIsOpen(false);
            setTimeout(() => {
                setContent(null);
                Navigate('/' + content.toLowerCase().split(" ").join(""));
            }, isMobile ? 3000 : 1000);
            setActive(false);
        }, isMobile ? 3000 : 1000);
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=" flex overflow-hidden">
            {/* Sidebar */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-400"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in duration-450"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
                className="fixed inset-y-0 left-0 lg:w-5/12 w-full custom-background"
            >
                <div className="flex flex-col mt-5 scrollable">
                    {['Home', 'Your Plan', 'Contact Us', 'Gym', "Workouts", "Under Development"].map((link, index) => (
                        <Link
                            onClick={() => handleLinkClick(link)}
                            to="#"
                            key={link}
                            className={`pl-12 py-4 text-5xl liquid-text${active && activeID === link ? " liquid-text-active" : ""} transition-effect text-stroke font-custom`}
                        >
                            {link} {underDevelopment.includes(link) && <span className='text-xs'>Under Development</span>}
                        </Link>
                    ))}
                    <hr className='m-2' />
                    <div className="flex flex-col w-fit self-end mr-10">
                        {["Login", "Sign Up"].map((link, index) => (
                            <Link
                                onClick={() => handleLinkClick(link)}
                                to="#"
                                key={link}
                                className="pl-12 py-1 text-2xl font-custom text-white hover:text-sky-600" // Added text-left for alignment
                            >
                                {link}
                            </Link>
                        ))}
                    </div>
                </div>
            </Transition>

            {/* Menu Icon */}
            <div
                className={`z-50 fixed inset-y-0 flex p-1 pl-3 h-fit mt-3  ${isMobile ? 'left-0' : isOpen ? 'left-[85%] lg:left-[42%]' : 'left-0'}`}>
                <RiMenu2Line
                    style={{ height: "27px", width: "27px" }}
                    className="text-4xl text-white cursor-pointer"
                    onClick={toggleSidebar}
                />
            </div>

            {/* Content */}
            <Transition
                show={!!content}
                enter="transition ease-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
                className="fixed inset-0 w-full bg-white z-30"
                style={{ paddingLeft: isOpen ? '50%' : '0' }} // Use an object and camelCase for style properties            
            >
                <div className="p-8">

                </div>
            </Transition>
        </div>
    );
}

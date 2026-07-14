import { AiOutlineUsergroupAdd } from "react-icons/ai"
import { CiHeart } from "react-icons/ci"
import { FiTarget } from "react-icons/fi"
import { IoMdArrowForward } from "react-icons/io"
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.main
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            className="">
            <section className="bg-[#001B3A] h-100 relative flex items-center py-16 md:py-24 overflow-hidden">
                <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-12 lg:px-16">
                    <div className="text-white max-w-xl md:max-w-2xl">

                        {/* ABOUT US */}
                        <h3 className="text-blue-300 font-semibold tracking-widest text-sm md:text-base mb-4">
                            ABOUT US
                        </h3>

                        {/* Main Heading */}
                        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                            A studio built on bold ideas.
                        </h1>

                        {/* Description */}
                        <p className="mt-6 text-gray-400 text-[15px] sm:text-base md:text-lg leading-relaxed pr-4 md:pr-0">
                            Founded in 2014, Luminary has grown from two-person shop to a 40-strong team
                            of designers, engineers, and strategists who believe that great digital
                            products change the world.
                        </p>

                    </div>
                </div>
            </section>
            <section className=" py-16 md:py-24 dark:bg-black dark:text-white transition-all duration-300">
                <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
                    <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-20 items-center relative">

                        {/* Content */}
                        <div className="flex-1">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight pb-6">
                                We started with a simple belief
                            </h1>
                            <div className="space-y-6 text-black text-[15px] md:text-base leading-relaxed dark:text-white transition-all duration-300">
                                <p>
                                    That the gap between good design and great engineering was where most agencies failed their clients. We set out to close that gap by building a team that excelled at both.
                                </p>
                                <p>
                                    Over a decade later, we've partnered with startups finding their footing and enterprises reinventing themselves — always bringing the same intensity and curiosity to each engagement.
                                </p>
                                <p>
                                    Our work has been recognized by industry leaders, but what we're most proud of is the long-term relationships we've built with our clients.
                                </p>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="flex-1 w-full">
                            <img
                                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Team or Studio"
                                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                            />
                        </div>

                        {/* Stats Box */}
                        {/* <div className="absolute bottom-6 left-6 md:left-20 lg:bottom-10 lg:left-12 bg-blue-600 px-6 py-4 rounded-2xl shadow-xl">
                            <h1 className="text-4xl md:text-5xl font-bold text-white">12+</h1>
                            <p className="text-white text-sm md:text-base mt-1">Years of excellence</p>
                        </div> */}

                    </div>
                </div>
            </section>
            {/* Values */}
            <section className=" bg-gray-200 pt-25 dark:bg-black transition-all duration-300 ">
                <div className="flex flex-col justify-center items-center">
                    {/* title */}
                    <div className="flex  flex-col justify-center items-center">
                        <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl pb-5d dark:text-white transition-all duration-300">Our Values</h1>
                        <p className="text-gray-400 text-xl">These aren't just words on a wall. They guide every decision we make.</p>
                    </div>
                    <div className="my-20 grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto gap-10 px-5 ">
                        <div className="bg-white px-5 py-5 rounded-2xl hover:shadow-2xl transition-all duration-300 ">
                            <span className="inline-flex bg-blue-100 px-3 py-3 rounded-2xl text-blue-600 text-3xl mb-8"><CiHeart /></span>
                            <h1 className="font-bold text-2xl pb-3">Craft & Care</h1>
                            <p className="text-gray-400">We treat every project as if it were our own. The details matter, and we never cut corners.</p>
                        </div>
                        <div className="bg-white px-5 py-5  rounded-2xl hover:shadow-2xl transition-all duration-300">
                            <span className="inline-flex bg-blue-100 px-3 py-3 rounded-2xl text-blue-600 text-3xl mb-8"><FiTarget /></span>
                            <h1 className="font-bold text-2xl pb-3">Outcome-Driven</h1>
                            <p className="text-gray-400">Beautiful work is only meaningful when it delivers real, measurable results for our clients.</p>
                        </div>
                        <div className="bg-white px-5 py-5  rounded-2xl hover:shadow-2xl transition-all duration-300">
                            <span className="inline-flex bg-blue-100 px-3 py-3 rounded-2xl text-blue-600 text-3xl mb-8"><AiOutlineUsergroupAdd /></span>
                            <h1 className="font-bold text-2xl pb-3">True Partnership</h1>
                            <p className="text-gray-400">Beautiful work is only meaningful when it delivers real, measurable results for our clients.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Team */}
            <section className="py-20 px-5 dark:bg-black transition-all duration-300 ">
                <div className="max-w-7xl mx-auto">

                    {/* Heading */}
                    <div className="flex justify-center items-center flex-col mb-14 text-center">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold pb-4 dark:text-white transition-all duration-300">
                            Meet the teams
                        </h1>

                        <p className="text-gray-500 text-lg max-w-2xl">
                            Talented people who are passionate about doing great work.
                        </p>
                    </div>

                    {/* Team Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* Card */}
                        <div className="group">
                            <div className="relative overflow-hidden rounded-3xl">

                                <img
                                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                                    alt="Alex Morgan"
                                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            </div>

                            <div className="mt-5 flex flex-col justify-between items-center">
                                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                                    Alex Morgan
                                </h1>

                                <p className="text-gray-500 mt-1">
                                    CEO & Co-Founder
                                </p>
                            </div>
                        </div>

                        {/* Card */}
                        <div className="group">
                            <div className="relative overflow-hidden rounded-3xl">

                                <img
                                    src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                                    alt="Priya Nair"
                                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            </div>

                            <div className="mt-5 flex flex-col justify-between items-center">
                                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                                    Priya Nair
                                </h1>

                                <p className="text-gray-500 mt-1">
                                    Head of Design
                                </p>
                            </div>
                        </div>

                        {/* Card */}
                        <div className="group">
                            <div className="relative overflow-hidden rounded-3xl">

                                <img
                                    src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                                    alt="Jordan Kim"
                                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            </div>

                            <div className="mt-5 flex flex-col justify-between items-center">
                                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                                    Jordan Kim
                                </h1>

                                <p className="text-gray-500 mt-1">
                                    Lead Engineer
                                </p>
                            </div>
                        </div>

                        {/* Card */}
                        <div className="group">
                            <div className="relative overflow-hidden rounded-3xl">

                                <img
                                    src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                                    alt="Dana Brooks"
                                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            </div>

                            <div className="mt-5 flex flex-col justify-between items-center">
                                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                                    Dana Brooks
                                </h1>

                                <p className="text-gray-500 mt-1">
                                    Strategy Director
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* Work */}
            <section className="bg-blue-600 text-white dark:bg-black transition-all duration-300">
                <div className="max-w-7xl mx-auto flex justify-center items-center flex-col py-30">
                    <div className="flex justify-center items-center flex-col">
                        <h1 className="text-4xl font-extrabold pb-5">Interested in working together?</h1>
                        <p className="text-xl font-medium">Let's find out if we're the right fit for your next big project.</p>
                    </div>
                    <div className="my-10 bg-white px-5 py-5 rounded-2xl flex justify-center items-center gap-4 cursor-pointer hover:bg-gray-100 transition-all duration-300">
                        <button className=" text-blue-600 font-semibold animate-pulse">Get in Touch </button>
                        <span className=""><IoMdArrowForward color="blue" /></span>
                    </div>
                </div>
            </section>
        </motion.main >
    )
}

export default About
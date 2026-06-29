import { useEffect, useState } from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { ImDatabase } from "react-icons/im";
import { RiSecurePaymentFill } from "react-icons/ri";
import { motion } from "framer-motion"

function Counter({ target, suffix = "", duration = 1000 }: { target: number; suffix?: string; duration?: number }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const startTime = performance.now();

        const updateCounter = (currentTime: number) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const value = Math.floor(progress * target);
            setCount(value);

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        };

        requestAnimationFrame(updateCounter);
    }, [target, duration]);

    return (
        <h1 className="text-5xl md:text-6xl font-bold text-center">
            {count}{suffix}
        </h1>
    );
}

const Home = () => {
    const date = new Date().getFullYear();

    return (
        <motion.main
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}>
            {/* Hero Section */}
            <section className="bg-[#001B3A] dark:bg-black h-[calc(100vh-90px)] py-16 md:py-24 relative overflow-hidden">
                {/* Badge */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 md:left-1/4 md:translate-x-0 z-10">
                    <span className="inline-flex items-center gap-3 bg-linear-to-r from-[#001B3A] to-[#00316E] w-2xs md:w-80 px-5 py-2.5 rounded-2xl border border-blue-500/40 text-blue-100 font-semibold shadow-lg shadow-blue-900/30 text-sm md:text-base ">
                        <span className="w-3 h-3 rounded-full bg-cyan-300 animate-pulse shadow-[0_0_12px_#67e8f9] "></span>
                        Now accepting clients for Q3 {date}
                    </span>
                </div>

                {/* Hero Content */}
                <div className="max-w-7xl mx-auto px-6 pt-32 md:pt-20">
                    <div className="max-w-2xl md:max-w-3xl">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight md:leading-[1.1]">
                            We build digital <span className="text-blue-400">experiences</span> that matter.
                        </h1>

                        <p className="pt-8 text-gray-400 text-base md:text-xl font-medium leading-relaxed">
                            Luminary is a full-service digital agency helping ambitious brands design, build, and scale products that captivate users and drive results.
                        </p>

                        {/* Buttons */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-10">
                            <button className="bg-blue-500 px-8 py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-3  hover:bg-blue-600 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer">
                                View Our Work <FaArrowRight />
                            </button>
                            <button className="bg-transparent border-2 border-gray-400 px-8 py-4 rounded-xl text-gray-300 font-semibold animate-pulse hover:bg-gray-400/10 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer">
                                Start a Project
                            </button>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="hidden md:flex flex-col items-center absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-400/50">
                    <div>SCROLL</div>
                    <div className="h-12 w-px bg-linear-to-b from-gray-400/50 to-transparent mt-2"></div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
                <div className="flex flex-col items-center text-center">
                    <Counter target={350} suffix="+" />
                    <p className="text-gray-500 pt-3">Projects Delivered</p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <Counter target={98} suffix="%" />
                    <p className="text-gray-500 pt-3">Client Satisfaction</p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <Counter target={12} suffix="+" />
                    <p className="text-gray-500 pt-3">Years Experience</p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <Counter target={40} suffix="+" />
                    <p className="text-gray-500 pt-3">Team Members</p>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-gray-100 py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold">
                        Why teams choose Luminary
                    </h1>
                    <p className="pt-6 text-gray-600 max-w-2xl mx-auto text-lg">
                        We combine strategy, design, and engineering to create outcomes that matter for your business.
                    </p>
                </div>
            </section>

            {/* Features Grid */}
            <section className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-100 px-8 py-10 rounded-3xl">
                    <span className="text-blue-500 mb-6 block"><BsGraphUpArrow size={42} /></span>
                    <h1 className="font-bold text-2xl pb-4">Growth-Focused</h1>
                    <p>Every decision we make is rooted in measurable outcomes and sustainable growth.</p>
                </div>

                <div className="bg-gray-100 px-8 py-10 rounded-3xl">
                    <span className="text-blue-500 mb-6 block"><RiSecurePaymentFill size={42} /></span>
                    <h1 className="font-bold text-2xl pb-4">Reliable & Secure</h1>
                    <p>Enterprise-grade reliability with best-in-class security practices built in.</p>
                </div>

                <div className="bg-gray-100 px-8 py-10 rounded-3xl">
                    <span className="text-blue-500 mb-6 block"><ImDatabase size={42} /></span>
                    <h1 className="font-bold text-2xl pb-4">Scalable System</h1>
                    <p>We build for where you are today and where you want to be in five years.</p>
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-gray-100 py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-center text-4xl md:text-5xl font-bold mb-12">
                        What our clients say
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <div className="bg-white px-8 py-8 rounded-3xl">
                            <div className="flex pb-6">
                                {[...Array(5)].map((_, i) => <FaStar key={i} color="orange" size={22} />)}
                            </div>
                            <p className="pb-8 text-gray-700 leading-relaxed">
                                "Luminary transformed our digital presence entirely. The results exceeded every expectation we had."
                            </p>
                            <div className="flex gap-4 items-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpT_ljsPtUre6DcAfZvx-obUMoXfNR8U3x-Q&s" alt="" className="rounded-full w-14 h-14 object-cover" />
                                <div>
                                    <h1 className="font-semibold">Sarah Chen</h1>
                                    <p className="text-sm text-gray-500">CEO, NovaTech</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-white px-8 py-8 rounded-3xl">
                            <div className="flex pb-6">
                                {[...Array(5)].map((_, i) => <FaStar key={i} color="orange" size={22} />)}
                            </div>
                            <p className="pb-8 text-gray-700 leading-relaxed">
                                "From strategy to execution, Luminary is the partner every growth-focused company needs."
                            </p>
                            <div className="flex gap-4 items-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzI2tfqwpfDKS4WkRMMQSI4nAZjk3BqxSsvQ&s" alt="" className="rounded-full w-14 h-14 object-cover" />
                                <div>
                                    <h1 className="font-semibold">Lena Hoffman</h1>
                                    <p className="text-sm text-gray-500">CMO, Prisma Labs</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="bg-white px-8 py-8 rounded-3xl">
                            <div className="flex pb-6">
                                {[...Array(5)].map((_, i) => <FaStar key={i} color="orange" size={22} />)}
                            </div>
                            <p className="pb-8 text-gray-700 leading-relaxed">
                                "The team is exceptional. They delivered on time, on budget, and the quality was outstanding."
                            </p>
                            <div className="flex gap-4 items-center">
                                <img src="https://media.istockphoto.com/id/1473852991/photo/biometric-passport-photo-of-attractive-female-natural-look-healthy-skin.jpg?s=612x612&w=0&k=20&c=vGm_gpAC8CNFqbQm5AzxUMrLJZRbqj4xq_QiGiPRqtY=" alt="" className="rounded-full w-14 h-14 object-cover" />
                                <div>
                                    <h1 className="font-semibold">Marcus Reid</h1>
                                    <p className="text-sm text-gray-500">Founder, Elevate Co.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-black py-24 md:py-32">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Ready to build something <span className="text-blue-400">remarkable?</span>
                    </h1>
                    <p className="text-gray-400 pt-6 text-lg md:text-xl">
                        Let's talk about your project and see how we can help.
                    </p>
                    <button className="mt-12 bg-blue-500 px-8 py-4 rounded-2xl text-white font-semibold flex items-center gap-3 mx-auto hover:bg-blue-600 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-blue-500/30">
                        Start the Conversation <FaArrowRight />
                    </button>
                </div>
            </section>
        </motion.main>
    );
};

export default Home;
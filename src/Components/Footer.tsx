// src/components/Footer.tsx
import icons from '../Constant/footer';
import { useState } from 'react';
// import Logo from '../assets/Logo.PNG'

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail('');
            // Here you can later connect to your backend / newsletter service
            setTimeout(() => setSubscribed(false), 3000);
        }
    };

    return (
        <footer className="bg-white text-black pt-20 pb-12  dark:bg-gray-900 transition-all duration-300 ">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

                    {/* Brand Column */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="flex items-center gap-3">
                            {/* <img 
                                src={Logo} 
                                alt="Luminary" 
                                className="h-10 w-auto" 
                            /> */}
                            <h1 className="text-4xl font-bold tracking-tighter dark:text-white transition-all duration-300">luminary</h1>
                        </div>

                        <p className=" text-lg max-w-md dark:text-white/70 text-black">
                            We design and build digital products that help ambitious brands grow. 
                            Strategy, design, and engineering — all under one roof.
                        </p>

                        {/* Newsletter */}
                        <div className="pt-6">
                            <h4 className="font-semibold mb-3">Stay in the light</h4>
                            <p className="dark:text-white/70 text-black text-sm mb-4">
                                Monthly insights on design, technology, and business.
                            </p>

                            {!subscribed ? (
                                <form onSubmit={handleSubscribe} className="flex">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="your@email.com"
                                        className="bg-white/10 border border-black/20 rounded-l-xl px-5 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500 flex-1"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="bg-blue-600 hover:bg-blue-700 transition px-8 rounded-r-xl font-medium"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            ) : (
                                <div className="bg-green-600/20 border border-green-500 text-green-400 px-6 py-3 rounded-xl">
                                    Thank you! You're now subscribed ✨
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h4 className="font-semibold mb-6 dark:text-white/70 text-black">Company</h4>
                        <div className="flex flex-col gap-4 dark:text-white/70 text-black">
                            <a href="/about" className="hover:text-gray-500 transition-all duration-300">About Us</a>
                            <a href="/work" className="hover:text-gray-500 transition-all duration-300">Our Work</a>
                            <a href="/services" className="hover:text-gray-500 transition-all duration-300">Services</a>
                            <a href="/journal" className="hover:text-gray-500 transition-all duration-300">Journal</a>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-2">
                        <h4 className="font-semibold mb-6 dark:text-white/70 text-black">Services</h4>
                        <div className="flex flex-col gap-4 dark:text-white/70 text-black">
                            <a href="#" className="hover:text-gray-500 transition-all duration-300">Brand Strategy</a>
                            <a href="#" className="hover:text-gray-500 transition-all duration-300">Web Design</a>
                            <a href="#" className="hover:text-gray-500 transition-all duration-300">Development</a>
                            <a href="#" className="hover:text-gray-500 transition-all duration-300">Digital Marketing</a>
                        </div>
                    </div>

                    {/* Connect */}
                    <div className="lg:col-span-3">
                        <h4 className="font-semibold mb-6 dark:text-white/70 text-black">Connect</h4>
                        
                        <div className="flex gap-6 text-3xl mb-10">
                            {icons.map((item, i) => (
                                <a
                                    key={i}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="dark:text-white/70 text-black hover:text-gray-500 transition-all duration-300 hover:scale-110 "
                                >
                                    <item.icon />
                                </a>
                            ))}
                        </div>

                        <div>
                            <p className="dark:text-white/70 text-black text-sm">Kathmandu, Nepal</p>
                            <a href="mailto:hello@luminary.com" className="dark:text-white/70 text-black hover:text-gray-500 transition-all duration-300 mt-1 block">
                                hello@luminary.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-black/10 dark:border-white mt-20 pt-8 flex flex-col md:flex-row justify-between items-center dark:text-white/70 text-black text-sm">
                    <p>© {new Date().getFullYear()} Luminary Studio. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
import { motion } from 'framer-motion';
import projects from '../Constant/projects';
import { useState } from 'react';

import { ArrowRight, ExternalLink } from 'lucide-react';




const categories = ['All', 'Web', 'Mobile', 'Brand', 'Strategy'];
const Work = () => {
        const [activeCategory, setActiveCategory] = useState('All');

    const filtered = activeCategory === 'All'
        ? projects
        : projects.filter((p) => p.category === activeCategory);

    return (
        <motion.main className=""
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
        >
            {/* title */}
            <section className='bg-black text-white'>
                <div className='max-w-7xl mx-auto px-5 py-20 '>
                    <span className='text-blue-500 text-md '>OUR WORK</span>
                    <h1 className='text-5xl py-5 md:py-10 font-extrabold'>Projects we're proud of.</h1>
                    <p className='md:w-xl'>A selection of client work spanning product design, engineering, branding, and strategy. Each project is a story of collaboration and impact.</p>
                </div>
            </section>
            <section className="bg-gray-50 py-16 dark:bg-black">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Filter tabs */}
                    <div className="flex flex-wrap gap-2 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === cat
                                    ? 'bg-blue-600 text-white shadow-sm'
                                    : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Projects grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filtered.map(item => (
                            <div
                                key={item.id}
                                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                            >
                                <div className="relative overflow-hidden h-56">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/20 transition-colors duration-300" />
                                    <button className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-50">
                                        <ExternalLink size={14} className="text-gray-700" />
                                    </button>
                                </div>
                                <div className="p-6">
                                    <div className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-1">{item.client}</div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {item.tags.map((tag) => (
                                            <span key={tag} className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white py-24  dark:bg-black">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
                        Want to be our next case study?
                    </h2>
                    <p className="text-gray-500 text-lg mb-10">
                        We'd love to hear about your project and explore how we can help.
                    </p>
                    <button
                        
                        className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-500 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
                    >
                        Start a Project <ArrowRight size={18} />
                    </button>
                </div>
            </section>


        </motion.main>
    )
}

export default Work
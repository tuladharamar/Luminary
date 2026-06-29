import { motion } from 'framer-motion'
import services from '../Constant/services'
import process from '../Constant/process';
const Services = () => {
    return (
        <motion.main
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            className=''
        >
            <section className='max-w-7xl mx-auto px-5  '>
                {/* title */}
                <div className='h-130 flex flex-col justify-center '>
                    <div className='py-10'>
                        <h1 className='text-md text-blue-700 font-semibold pb-5'>WHAT WE DO</h1>
                        <h1 className='text-3xl md:text-4xl lg:text-6xl font-extrabold md:w-150 pb-8 '>Services built for modern products.</h1>
                        <p className='w-100 md:w-150 text-gray-500 text-lg'>We offer a comprehensive suite of digital services, from initial concept to ongoing growth. Every engagement is tailored to your specific needs.</p>
                    </div>
                </div>
                {/* grid */}
                <div className=''></div>
                {/* process */}
                <div className=''></div>
                {/* notsure */}
                <div className=''></div>
            </section>
            <section className='bg-gray-100'>
                <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 py-30'>
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-violet-200 group hover:-translate-y-2"
                    >
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-violet-700 transition-colors">
                            {service.title}
                        </h3>

                        <p className="text-gray-600 mb-8 leading-relaxed">
                            {service.text}
                        </p>

                        <ul className="space-y-3">
                            {service.services.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 text-gray-700"
                                >
                                    <span className="text-violet-600 mt-1.5">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                </div>
            </section>
            <section className=''>
                <div className=' flex flex-col justify-center items-center py-20  gap-5'>
                    <h1 className='font-extrabold text-4xl'>Our process</h1>
                    <p className='text-gray-400  '>A structured approach that delivers predictable high-quality results ever time</p>
                </div>
                <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-10'>
                    {process.map(item=>(
                        <li key={item.id} className='px-5'>
                            <span className='text-6xl text-gray-200 font-extrabold '>{item.head}</span>
                            <h1 className='py-3 font-bold text-3xl'>{item.title}</h1>
                            <p className='text-gray-400'>{item.content}</p>
                        </li>
                    ))}
                </ul>
            </section>

        </motion.main>
    )
}

export default Services
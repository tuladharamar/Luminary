import { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import {motion} from 'framer-motion'

const offices = [
    {
        city: 'San Francisco',
        address: '100 Market St, Suite 400',
        phone: '+1 (415) 555-0190',
        email: 'sf@luminary.studio',
    },
    {
        city: 'New York',
        address: '350 Fifth Avenue, 21st Floor',
        phone: '+1 (212) 555-0147',
        email: 'nyc@luminary.studio',
    },
    {
        city: 'London',
        address: '1 Canada Square, Canary Wharf',
        phone: '+44 20 7946 0958',
        email: 'london@luminary.studio',
    },
];

const Contact=()=> {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        company: '',
        budget: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const inputClass =
        'w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200';

    return (
        <motion.div className="pt-16 lg:pt-20"
        initial={{opacity:0, y:-30}}
        animate={{opacity:1, y:0}}
        exit={{opacity:0, y:30}}
        transition={{duration:0.5}}>
            {/* Hero */}
            <section className="bg-white py-24 lg:py-32 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">Contact Us</span>
                        <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mt-4 mb-6 leading-tight">
                            Let's start a conversation.
                        </h1>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            Whether you have a project in mind, a question about our services, or just want to say hello — we'd love to hear from you.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-gray-50 py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Form */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100">
                                {submitted ? (
                                    <div className="flex flex-col items-center justify-center py-16 text-center">
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                            <CheckCircle size={32} className="text-green-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Message sent!</h3>
                                        <p className="text-gray-500 max-w-sm">
                                            Thanks for reaching out. We'll get back to you within one business day.
                                        </p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="mt-8 px-6 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-500 transition-colors"
                                        >
                                            Send another message
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Tell us about your project</h2>
                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            <div className="grid sm:grid-cols-2 gap-5">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Your name *</label>
                                                    <input
                                                        type="text"
                                                        required
                                                        placeholder="Jane Smith"
                                                        value={form.name}
                                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                        className={inputClass}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email address *</label>
                                                    <input
                                                        type="email"
                                                        required
                                                        placeholder="jane@company.com"
                                                        value={form.email}
                                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                        className={inputClass}
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid sm:grid-cols-2 gap-5">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Company</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Acme Inc."
                                                        value={form.company}
                                                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                                                        className={inputClass}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Budget range</label>
                                                    <select
                                                        value={form.budget}
                                                        onChange={(e) => setForm({ ...form, budget: e.target.value })}
                                                        className={inputClass}
                                                    >
                                                        <option value="">Select a range</option>
                                                        <option>Under $25k</option>
                                                        <option>$25k – $75k</option>
                                                        <option>$75k – $150k</option>
                                                        <option>$150k+</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Tell us about your project *</label>
                                                <textarea
                                                    required
                                                    rows={5}
                                                    placeholder="What are you trying to build or solve? The more detail, the better."
                                                    value={form.message}
                                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                                    className={`${inputClass} resize-none`}
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-500 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
                                            >
                                                Send Message <Send size={16} />
                                            </button>
                                        </form>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Our offices</h3>
                                <div className="space-y-6">
                                    {offices.map(({ city, address, phone, email }) => (
                                        <div key={city} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                            <div className="font-bold text-gray-900 mb-3">{city}</div>
                                            <div className="space-y-2">
                                                <div className="flex items-start gap-2 text-sm text-gray-500">
                                                    <MapPin size={14} className="mt-0.5 shrink-0 text-gray-400" />
                                                    {address}
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                                    <Phone size={14} className="shrink-0 text-gray-400" />
                                                    {phone}
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-blue-600">
                                                    <Mail size={14} className="shrink-0" />
                                                    {email}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-blue-600 rounded-2xl p-6 text-white">
                                <div className="text-base font-bold mb-2">Prefer a call?</div>
                                <p className="text-blue-100 text-sm leading-relaxed mb-4">
                                    Book a 30-minute discovery call directly with one of our senior team members.
                                </p>
                                <button className="px-5 py-2.5 bg-white text-blue-600 text-sm font-semibold rounded-xl hover:bg-blue-50 transition-colors">
                                    Book a Call
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}

export default Contact;

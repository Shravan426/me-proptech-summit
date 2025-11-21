'use client'; 

import { motion } from 'framer-motion';
import Image from 'next/image';

import Link from 'next/link';


const MotionLink = motion(Link);

// Variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};



export default function ProptechSummitLanding() {
  return (
    <>
      {/* Header / Hero */}
      <header className="relative min-h-screen bg-gradient-to-br from-cyan-600 via-cyan-700 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
          <motion.div 
            className="max-w-5xl mx-auto text-center"
            
            initial="hidden"
            animate="visible"
          >
            {/* Main Logo */}
            <motion.div 
              
              className="mb-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              <Image 
                src="/Screenshot 2025-11-21 103722.png" 
                alt="Middle East Proptech Innovation Summit Logo" 
                width={650} 
                height={350} 
                className="mx-auto drop-shadow-2xl"
                priority
              />
            </motion.div>

            <motion.h1 
              
              className="text-5xl md:text-7xl font-black leading-tight mb-6"
            >
              Middle East<br />Proptech Innovation Summit
            </motion.h1>

            <motion.p 
              
              className="text-2xl md:text-4xl font-light mb-8 opacity-90"
            >
              Embracing Proptech to drive Innovation in Real Estate
            </motion.p>

            <motion.p 
              
              className="text-3xl md:text-5xl font-bold mb-12 tracking-wider"
            >
              23 – 24 May 2026 | Dubai, UAE
            </motion.p>

            <motion.div 
              
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <MotionLink 
                href="mailto:info@vervemanagement.com?subject=Proptech Summit 2026 Interest" 
                className="bg-red-600 hover:bg-red-700 px-12 py-5 rounded-full text-xl font-semibold shadow-xl transition transform"
                whileHover={{ scale: 1.08, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                Register Interest for 2026 Edition
              </MotionLink>
              <MotionLink 
                href="#topics" 
                className="border-2 border-white px-12 py-5 rounded-full text-xl font-semibold hover:bg-white hover:text-cyan-700 transition"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Topics
              </MotionLink>
            </motion.div>
          </motion.div>
        </div>

        
        <svg className="w-full -mt-1" viewBox="0 0 1440 200" fill="none">
          <path fill="#000000" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"></path>
        </svg>
      </header>

      
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.h2 
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center text-cyan-400 mb-12"
          >
            About the Summit
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
              className="prose prose-lg text-gray-300 max-w-none"
            >
              <p>Despite global headwinds, the real estate market in Dubai continues to leap over other metropolises amid global economic challenges.</p>
              <p className="mt-4">The influx of HNWIs and overseas buyers, combined with new freehold and visa reforms, has created unprecedented demand and proven Dubai’s resiliency as the global hub for business, tourism, and innovation.</p>
              <p className="mt-4 font-semibold">Dubai recorded over 84,196 transactions in 2021 worth nearly AED 300 billion — the highest in its history. Q2 2022 showed +61.56% value growth vs Q2 2021.</p>
              <p className="mt-6">Proptech (Property + Technology) is revolutionizing the industry with AI, blockchain, IoT, predictive analytics, and automation. The Middle East Proptech Innovation Summit will bring together the region’s real estate leaders to explore these transformations and shape the future.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <Image 
                src="/womens-leaders-summit-2022-logo-WHITE-06.png" 
                alt="Middle East Proptech Innovation Summit" 
                width={650} 
                height={450} 
                className="rounded-xl shadow-2xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-gray-900 text-white"
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center text-cyan-400 mb-12"
          >
            Who You Will Meet
          </motion.h2>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto text-center"
          >
            {['CEOs / MDs', 'CTOs / CIOs', 'Heads of Technology', 'Property Management', 'Sales & Marketing', 'Investments / VCs'].map((title) => (
              <motion.div 
                key={title} 
                
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gray-800/50 backdrop-blur p-6 rounded-xl border border-cyan-800/30 hover:border-cyan-500 transition"
              >
                <p className="font-semibold text-white">{title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-slate-900 text-white"
      >
        <motion.h2 
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-cyan-400 mb-12"
        >
          Industries Covered
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center"
        >
          {['Property Developers', 'Property Management Companies', 'Real-Estate Consultants', 'Community Management', 'Real-Estate Brokers', 'Investors & VCs'].map((industry) => (
            <motion.div 
              key={industry}
              
              whileHover={{ scale: 1.06, y: -8 }}
              className="bg-cyan-800/70 text-white py-6 px-8 rounded-xl text-lg font-medium hover:bg-cyan-700 transition"
            >
              {industry}
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      
      <motion.section 
        id="topics"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-black"
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center text-cyan-400 mb-12"
          >
            Topic Highlights
          </motion.h2>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {[
              'Big Data & Property Analytics',
              'AI & Cloud Automation',
              'Virtual Reality Viewings',
              'Automated Property Management',
              'Blockchain Transactions',
              'IoT & Smart Buildings',
              'Chatbots & Online Platforms',
              'Crowdfunding Innovations',
              'Mobile Apps for Tenants/Landlords',
              'Cryptocurrency in Real Estate'
            ].map((topic) => (
              <motion.div 
                key={topic}
                
                whileHover={{ scale: 1.05, y: -10, boxShadow: "0 20px 40px rgba(0,255,255,0.2)" }}
                className="bg-gray-900/70 backdrop-blur border border-cyan-800/40 p-8 rounded-2xl hover:border-cyan-500 transition"
              >
                <h3 className="font-semibold text-lg text-cyan-300">{topic}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      
      <section className="py-20 bg-gradient-to-r from-cyan-900 to-blue-950 text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 max-w-6xl">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 className="text-4xl md:text-5xl font-bold mb-8">Why Attend</motion.h2>
            <ul className="space-y-6 text-lg">
              {[
                'Gain insights from global industry leaders',
                'Network in a solution-oriented environment',
                'Explore partnerships & collaborations',
                'Real-life case studies & lessons learned',
                'Build ecosystem collaboration'
              ].map((text) => (
                <motion.li key={text}  className="flex items-start">
                  <span className="text-2xl mr-4 text-cyan-400">✓</span>
                  {text}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 className="text-4xl md:text-5xl font-bold mb-8">Why Sponsor</motion.h2>
            <ul className="space-y-6 text-lg">
              {[
                'Demonstrate thought leadership',
                'Generate high-quality leads',
                'Brand positioning in front of decision-makers',
                'Speaking & panel opportunities'
              ].map((text) => (
                <motion.li key={text}  className="flex items-start">
                  <span className="text-2xl mr-4 text-cyan-400">✓</span>
                  {text}
                </motion.li>
              ))}
            </ul>
            <motion.p className="mt-10 text-xl">
              Contact: +971 4 243 4677 │ info@vervemanagement.com
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-gray-950 text-white py-12"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image src="/Screenshot 2025-11-21 103722.png" alt="Logo" width={300} height={160} className="mx-auto mb-6" />
          </motion.div>
          <p>&copy; {new Date().getFullYear()} Middle East Proptech Innovation Summit. All rights reserved.</p>
          <p className="mt-4 text-gray-500">Powered by Verve Management</p>
        </div>
      </motion.footer>
    </>
  );
}
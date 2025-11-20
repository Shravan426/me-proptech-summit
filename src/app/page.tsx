'use client';

import {motion} from 'framer-motion';
import { Calendar, MapPin, ArrowRight, Users, Lightbulb, TrendingUp, Shield, Globe, Zap } from 'lucide-react';

export default function Home() {
  return (
    <>
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      <div className='absolute inset-0 bg-black/40 z-10' />
      <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent' />

      <div className='relative z-20 container mx-auto px-6 text-center'>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-5xl md:text-7xl font-bold mb-6 leading-tight'
        >
          MIDDLE EAST PROPTECH
          <br />
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500'>
            INNOVATION SUMMIT 2023
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='flex flex-col md:flex-row items-center justify-center gap-6 text-xl md:text-2xl mb-8'
        >
          <div className='flex items-center gap-3'>
            <Calendar className='w-8 h-8 text-yellow-400'/>
            <span>23rd & 24th May 2023</span>
          </div>
          <div className='flex items-center gap-3'>
            <MapPin className='w-8 h-8 text-yellow-400'/>
            <span>Dubai, UAE</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className='text-2xl md:text-4xl font-light italic mb-12 max-w-5xl mx-auto'>
          Embracing PropTech to Drive Innovation in Real Estate
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <button className='bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black font-bold text-xl px-12 py-6 rounded-full transition-all transform hover:scale-105 shadow-2xl flex items-center gap-4 mx-auto'>
              Register Now <ArrowRight className='w-6 h-6'/>
            </button>
          </motion.div>
      </div>
    </section>

    <section className='py-20 px-6'>
      <div className='container mx-auto max-w-6xl'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once:true }}
          className='glass-card p-12 text-center'
          >
            <h2 className='text-4xl md:text-6xl font-bold mb-8'>
              Dubai Real Estate Breaks All Records
            </h2>
            <div className='grid md:grid-cols-3 gap-8 text-2xl'>
              <div>
                <div className='text-5xl font-bold text-yellow-400'>84,156+</div>
                <p className='mt-2'>Total Transactions in 2021</p>
              </div>
              <div>
                <div className='text-5xl font-bold text-yellow-400'>AED 300B</div>
                <p className='mt-2'>Total Transaction Value</p>
              </div>
              <div>
                <div className='text-5xl font-bold text-yellow-400'>+61.56%</div>
                <p className='mt-4'>Value Growth Q2 2022 vs Q2 2021</p>
              </div>
            </div>
          </motion.div>
      </div>
    </section>

    <section className='py-20 px-6'>
      <div className='container mx-auto maw-w-5xl text-center'>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity:1 }}
          className='text-4xl md:text-5xl font-bold mb-12'
        >
          The Future of Real Estate is Here
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity:1 }}
          transition={{ delay: 0.2 }}
          className='text-xl leading-relaxed mb-12'
        >
          PropTech - the fusion of property and cutting-edge technology - is revolutionalizing how we manage, buy, sell, and monetize real estate.
          From AI-powered valuations and blockchain transactions to virtual viewings and IoT smart buildings, the digital transformation is unstoppable.
        </motion.p>
        <p className='text-xl leading-relaxed'>
          Join us at the<strong>Middle East Proptech Innovation Summit 2023</strong> - the region's premier platform where real estate leaders converge to shape the future.
        </p>
      </div>
    </section>

    <section className='py-20 px-6 bg-black/50'>
      <div className='container mx-auto max-w-6xl'>
        <h2 className='text-4xl md:text-5xl font-bold text-center mb-16'>Who Will You Meet?</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {[
            "CEOs / Managing Directors",
              "CTOs / CIOs / Heads of Innovation",
              "Heads of Property Management",
              "Heads of Sales & Marketing",
              "Heads of Investments",
              "Heads of Facility Management"
          ].map((role,i) => (
            <motion.div
              key={i}
              initial= {{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0}}
              transition={{ delay : i * 0.1 }}
              className='glass-card p-8 text-center'
              >
                <Users className='w-12 h-12 mx-auto mb-4 text-yellow-400' />
                <p className='text-xl font-semibold'>{role}</p>
              </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Topic Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, text: "Big Data & Predictive Analytics" },
              { icon: Zap, text: "AI-Powered Valuations & Administration" },
              { icon: Globe, text: "Virtual Reality Property Viewings" },
              { icon: Shield, text: "Blockchain Real Estate Transactions" },
              { icon: Lightbulb, text: "IoT Smart Building Management" },
              { icon: Users, text: "Crowdfunding & Alternative Funding" }
            ].map((topic, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 flex items-center gap-6 hover:bg-white/20 transition-all"
              >
                <topic.icon className="w-16 h-16 text-yellow-400 flex-shrink-0" />
                <p className="text-xl font-medium">{topic.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-black/70">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Why Attend?</h2>
          <div className="space-y-8 text-xl">
            {[
              "Gain insights from global PropTech pioneers",
              "Network with 300+ real estate decision-makers",
              "Explore real-world case studies and ROI success stories",
              "Discover partnerships and investment opportunities",
              "Stay ahead of the digital transformation curve"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0}}
                transition={{ delay: i * 0.1 }}
                className='flex items-center justify-center gap-6'
                >
                  <div className='w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold'>
                    {i + 1}
                  </div>
                  <span>{item}</span>
                </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-20 px-6 text-center'>
        <div className='container mx-auto'>
          <h2 className='text-5xl font-bold mb-8'>Be Part of the PropTech Revolution</h2>
          <p className='text-2xl mb-12'>23-24 May 2023 | Dubai, UAE</p>
          <button className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black font-bold text-2xl px-16 py-8 rounded-full transition-all transform hover:scale-105 shadow-2xl">
            Secure Your Seat Today
          </button>
          <p className='mt-12 text-lg'>
            For sponsorship opportunities: <strong>+971 4 243 4677</strong>
          </p>
        </div>
      </section>
    </>
  );
}
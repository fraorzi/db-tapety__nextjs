'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';

const FramerMotionExample = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [triggerStagger, setTriggerStagger] = useState(0);
  const dragContainerRef = useRef<HTMLDivElement>(null);

  const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className='space-y-6'>
      {/* Basic Hover & Tap */}
      <div>
        <h5 className='mb-2 text-sm font-medium'>Basic Hover & Tap</h5>
        <motion.div
          className='h-16 w-16 cursor-pointer rounded bg-blue-500'
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        />
      </div>

      {/* Layout Animation */}
      <div>
        <h5 className='mb-2 text-sm font-medium'>Layout Animation</h5>
        <motion.div
          className='flex cursor-pointer items-center justify-center rounded bg-green-500 p-4 text-white'
          layout
          onClick={() => setShowModal(!showModal)}
          whileHover={{ scale: 1.02 }}
        >
          {showModal ? 'Hide Content' : 'Show Content'}
        </motion.div>
        <AnimatePresence>
          {showModal && (
            <motion.div
              className='mt-2 overflow-hidden rounded bg-gray-100'
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <div className='p-4'>
                <p>This content animates in and out smoothly!</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Stagger Animation */}
      <div>
        <h5 className='mb-2 text-sm font-medium'>Stagger Animation (click to trigger)</h5>
        <button
          className='mb-4 rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-700'
          onClick={() => setTriggerStagger((prev) => prev + 1)}
        >
          Trigger Stagger Animation
        </button>
        <motion.div
          className='grid grid-cols-3 gap-4'
          variants={staggerContainer}
          initial='hidden'
          animate='visible'
          key={triggerStagger} // Re-trigger animation
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              className='h-12 rounded bg-purple-400'
              variants={staggerItem}
              whileHover={{ scale: 1.05, backgroundColor: '#8b5cf6' }}
            />
          ))}
        </motion.div>
      </div>

      {/* Tab Animation */}
      <div>
        <h5 className='mb-2 text-sm font-medium'>Animated Tabs</h5>
        <div className='relative'>
          <div className='flex space-x-1 rounded-lg bg-gray-200 p-1'>
            {tabs.map((tab, index) => (
              <button
                key={index}
                className='relative z-10 px-3 py-1 text-sm font-medium'
                onClick={() => setSelectedTab(index)}
              >
                {selectedTab === index && (
                  <motion.div
                    className='absolute inset-0 rounded-md bg-white shadow-sm'
                    layoutId='activeTab'
                    transition={{ duration: 0.2 }}
                  />
                )}
                <span className='relative'>{tab}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Card with Complex Animation */}
      <div>
        <h5 className='mb-2 text-sm font-medium'>Complex Card Animation</h5>
        <motion.div
          className='relative overflow-hidden rounded-lg bg-gradient-to-r from-pink-500 to-violet-500 p-6 text-white'
          whileHover='hover'
          initial='rest'
          animate='rest'
        >
          <motion.div
            variants={{
              rest: { opacity: 0.8, scale: 1, x: 0 },
              hover: { opacity: 1, scale: 1.02, x: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            <h6 className='text-lg font-bold'>Animated Card</h6>
            <p className='text-sm opacity-90'>Hover to see the effect</p>
          </motion.div>

          <motion.div
            className='absolute -right-4 -bottom-4 h-16 w-16 rounded-full bg-white/20'
            variants={{
              rest: { scale: 0, rotate: 0 },
              hover: { scale: 1, rotate: 180 },
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>

      {/* Drag Animation */}
      <div>
        <h5 className='mb-2 text-sm font-medium'>Draggable Element</h5>
        <div className='h-32 w-full rounded border-2 border-dashed border-gray-300 p-1'>
          <div ref={dragContainerRef} className='h-full w-full'>
            <motion.div
              className='h-12 w-12 cursor-grab rounded-full bg-red-500 active:cursor-grabbing'
              drag
              dragConstraints={dragContainerRef}
              dragElastic={0.1}
              // dragMomentum={false}
              whileDrag={{ scale: 1.1 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FramerMotionExample;

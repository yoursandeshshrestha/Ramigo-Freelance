'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const QuestionnaireIcon = () => (
  <div className="w-full aspect-4/3 bg-brand-white rounded-xl border border-gray-200 p-4 overflow-hidden relative">
    {/* Form header */}
    <div className="text-[8px] text-brand-black/75 font-medium mb-3">QUICK QUESTIONS</div>

    <div className="space-y-2.5">
      {/* Question 1 - Radio buttons */}
      <motion.div
        className="bg-gray-100 border border-gray-200 rounded-lg p-2.5"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, repeat: Infinity, repeatDelay: 4 }}
      >
        <div className="text-[9px] text-brand-black/70 font-medium mb-2">What are you looking for?</div>
        <div className="space-y-1.5">
          {['Remortgage', 'First home', 'Self-employed'].map((option, i) => (
            <motion.div
              key={option}
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: i === 0 ? 1 : 0.4 }}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.1, repeat: Infinity, repeatDelay: 4 }}
            >
              <div className={`w-3 h-3 rounded-full border ${i === 0 ? 'border-remigo-red/40 bg-remigo-red/10' : 'border-gray-300'} flex items-center justify-center`}>
                {i === 0 && (
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-remigo-red"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8, repeat: Infinity, repeatDelay: 4 }}
                  />
                )}
              </div>
              <span className="text-[8px] text-brand-black/75">{option}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Progress indicator */}
      <motion.div
        className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.2, repeat: Infinity, repeatDelay: 4 }}
      >
        <span className="text-[8px] text-brand-black/75">Question 1 of 5</span>
        <div className="flex gap-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-1 h-1 rounded-full bg-gray-300"
              initial={{ backgroundColor: 'var(--color-gray-300)' }}
              animate={{ backgroundColor: i === 0 ? 'var(--color-remigo-red)' : 'var(--color-gray-300)' }}
              transition={{ duration: 0.3, delay: 1.4, repeat: Infinity, repeatDelay: 4 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

export const ComparisonIcon = () => (
  <div className="w-full aspect-4/3 bg-brand-white rounded-xl border border-gray-200 p-4 overflow-hidden relative">
    {/* Search header */}
    <div className="flex items-center gap-2 mb-3">
      <div className="text-[8px] text-brand-black/75 font-medium">SEARCHING 90+ LENDERS</div>
      <motion.div
        className="flex gap-0.5"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-1 h-1 rounded-full bg-brand-black/40"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.2, delay: i * 0.2, repeat: Infinity }}
          />
        ))}
      </motion.div>
    </div>

    <div className="space-y-2">
      {/* Lender cards sliding in */}
      {[
        { rate: '3.89%', name: 'Lender A', best: true },
        { rate: '4.12%', name: 'Lender B', best: false },
        { rate: '4.35%', name: 'Lender C', best: false },
      ].map((lender, i) => (
        <motion.div
          key={lender.name}
          className={`border rounded-lg p-2.5 flex items-center justify-between ${
            lender.best
              ? 'bg-white border-gray-300'
              : 'bg-gray-100 border-gray-200'
          }`}
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: i * 0.3, repeat: Infinity, repeatDelay: 4 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-gray-300 rounded" />
            <span className="text-[9px] text-brand-black/70 font-medium">{lender.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-[11px] font-bold ${lender.best ? 'text-brand-black' : 'text-brand-black/70'}`}>
              {lender.rate}
            </span>
            {lender.best && (
              <motion.div
                className="text-[7px] px-1.5 py-0.5 bg-green-500/10 text-green-600 rounded-full border border-green-500/20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1, repeat: Infinity, repeatDelay: 4 }}
              >
                Best
              </motion.div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export const CallNotificationIcon = () => (
  <div className="w-full aspect-4/3 bg-brand-white rounded-xl border border-gray-200 p-4 overflow-hidden relative">
    {/* Notification header */}
    <div className="text-[8px] text-brand-black/75 font-medium mb-3">EXPERT RESPONSE</div>

    {/* Incoming call card */}
    <motion.div
      className="bg-white border border-gray-300 rounded-lg p-3 relative overflow-hidden"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3, repeat: Infinity, repeatDelay: 4 }}
    >
      {/* Pulsing ring indicator */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-0.5 bg-green-500/50"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: [0, 1, 1, 0] }}
        transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatDelay: 4 }}
        style={{ transformOrigin: 'left' }}
      />

      {/* Avatar and info */}
      <div className="flex items-center gap-3 mb-3">
        <motion.div
          className="w-8 h-8 bg-gray-200 rounded-full border border-gray-300 relative"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1.5, delay: 0.8, repeat: Infinity, repeatDelay: 4 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-gray-400 rounded-full" />
          </div>
        </motion.div>
        <div>
          <div className="text-[9px] text-brand-black font-medium">Sarah - Mortgage Expert</div>
          <div className="text-[8px] text-brand-black/70">Calling you now...</div>
        </div>
      </div>

      {/* Call timer */}
      <motion.div
        className="flex items-center justify-center gap-2 bg-gray-100 border border-gray-200 rounded-lg p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.2, repeat: Infinity, repeatDelay: 4 }}
      >
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-green-500"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <span className="text-[9px] text-brand-black/70 font-medium">00:00</span>
      </motion.div>
    </motion.div>

    {/* Response time badge */}
    <motion.div
      className="flex items-center justify-between bg-gray-100 border border-gray-200 rounded-lg p-2 mt-2.5"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 1.5, repeat: Infinity, repeatDelay: 4 }}
    >
      <span className="text-[8px] text-brand-black/70">Avg. response time</span>
      <span className="text-[9px] text-brand-black font-medium">&lt; 1 hour</span>
    </motion.div>
  </div>
);

export const ProgressTrackerIcon = () => (
  <div className="w-full aspect-4/3 bg-brand-white rounded-xl border border-gray-200 p-4 overflow-hidden relative">
    {/* Progress header */}
    <div className="text-[8px] text-brand-black/75 font-medium mb-3">YOUR PROGRESS</div>

    <div className="space-y-2.5">
      {/* Progress steps */}
      {[
        { label: 'Application submitted', status: 'complete' },
        { label: 'Documents verified', status: 'complete' },
        { label: 'Lender processing', status: 'active' },
        { label: 'Completion', status: 'pending' },
      ].map((step, i) => (
        <motion.div
          key={step.label}
          className="flex items-center gap-2.5"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: i * 0.3, repeat: Infinity, repeatDelay: 4 }}
        >
          {/* Step indicator */}
          <div className="relative">
            {step.status === 'complete' ? (
              <motion.div
                className="w-4 h-4 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.4, delay: i * 0.3 + 0.2, repeat: Infinity, repeatDelay: 4 }}
              >
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M2 4 L3.5 5.5 L6.5 2.5" stroke="var(--color-success-light)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
            ) : step.status === 'active' ? (
              <motion.div
                className="w-4 h-4 rounded-full bg-remigo-red/10 border border-remigo-red/30 flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <motion.div
                  className="w-2 h-2 rounded-full bg-remigo-red"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
            ) : (
              <div className="w-4 h-4 rounded-full bg-gray-200 border border-gray-300" />
            )}
          </div>

          {/* Step label */}
          <div className="flex-1">
            <span className={`text-[9px] font-medium ${
              step.status === 'complete' ? 'text-brand-black' :
              step.status === 'active' ? 'text-brand-black' :
              'text-brand-black/40'
            }`}>
              {step.label}
            </span>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Completion percentage */}
    <motion.div
      className="mt-3 bg-white border border-gray-300 rounded-lg p-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 1.4, repeat: Infinity, repeatDelay: 4 }}
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[8px] text-brand-black/75">Overall progress</span>
        <span className="text-[9px] text-brand-black font-medium">75%</span>
      </div>
      <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-remigo-red rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: '75%' }}
          transition={{ duration: 1, delay: 1.6, repeat: Infinity, repeatDelay: 4 }}
        />
      </div>
    </motion.div>
  </div>
);

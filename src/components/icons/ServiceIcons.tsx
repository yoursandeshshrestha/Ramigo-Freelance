'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const RemortgageIcon = () => (
  <div className="w-full aspect-4/3 bg-[#0A0A0A] rounded-xl border border-gray-800/30 p-4 overflow-hidden relative">
    {/* Browser-like header */}
    <div className="flex gap-1 mb-3">
      <div className="w-1.5 h-1.5 rounded-full bg-gray-700" />
      <div className="w-1.5 h-1.5 rounded-full bg-gray-700" />
      <div className="w-1.5 h-1.5 rounded-full bg-gray-700" />
    </div>

    {/* Comparison interface */}
    <div className="space-y-2.5">
      <motion.div
        className="bg-[#111] border border-gray-800 rounded-lg p-2.5 flex justify-between items-center"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, repeatDelay: 4 }}
      >
        <div className="text-[9px] text-gray-500 font-medium">Current Rate</div>
        <div className="text-sm font-bold text-gray-400">5.49%</div>
      </motion.div>

      <motion.div
        className="bg-[#0D1117] border border-gray-700 rounded-lg p-2.5 flex justify-between items-center relative overflow-hidden"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5, repeat: Infinity, repeatDelay: 4 }}
      >
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '200%' }}
          transition={{ duration: 1.5, delay: 1, repeat: Infinity, repeatDelay: 4 }}
        />
        <div className="text-[9px] text-gray-400 font-medium relative z-10">New Rate</div>
        <div className="text-sm font-bold text-brand-white relative z-10">3.89%</div>
      </motion.div>

      <motion.div
        className="bg-brand-white/5 border border-brand-white/10 rounded-lg p-2.5 flex justify-between items-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8, repeat: Infinity, repeatDelay: 4 }}
      >
        <div className="text-[9px] text-gray-300 font-medium">Monthly Savings</div>
        <div className="text-sm font-bold text-brand-white">£240</div>
      </motion.div>
    </div>
  </div>
);

export const FirstTimeBuyerIcon = () => (
  <div className="w-full aspect-4/3 bg-[#0A0A0A] rounded-xl border border-gray-800/30 p-4 overflow-hidden relative">
    {/* Mobile app-like header */}
    <div className="flex items-center justify-between mb-3">
      <div className="flex gap-1">
        <div className="w-1 h-1 rounded-full bg-gray-700" />
        <div className="w-1 h-1 rounded-full bg-gray-700" />
        <div className="w-1 h-1 rounded-full bg-gray-700" />
      </div>
      <div className="text-[8px] text-gray-600 font-medium">PROPERTY</div>
    </div>

    {/* Property card */}
    <motion.div
      className="bg-[#111] border border-gray-800 rounded-lg overflow-hidden"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2, repeat: Infinity, repeatDelay: 4 }}
    >
      {/* Image area */}
      <div className="h-16 bg-[#0D1117] relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-linear-to-br from-gray-800/40 to-gray-900/40"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.5, repeat: Infinity, repeatDelay: 4 }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-6 h-6 border-2 border-gray-700 rounded"
            initial={{ rotate: 0, opacity: 0.3 }}
            animate={{ rotate: 360, opacity: 0.6 }}
            transition={{ duration: 2, delay: 0.7, repeat: Infinity, repeatDelay: 4 }}
          />
        </div>
      </div>

      {/* Details */}
      <div className="p-2.5 space-y-2">
        <motion.div
          className="h-1.5 bg-gray-800 rounded-full w-2/3"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 1, repeat: Infinity, repeatDelay: 4 }}
          style={{ transformOrigin: 'left' }}
        />
        <motion.div
          className="h-1 bg-gray-800 rounded-full w-1/2"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 1.2, repeat: Infinity, repeatDelay: 4 }}
          style={{ transformOrigin: 'left' }}
        />
        <motion.div
          className="flex justify-between items-center pt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.5, repeat: Infinity, repeatDelay: 4 }}
        >
          <span className="text-[11px] font-bold text-gray-300">£250,000</span>
          <span className="text-[8px] px-2 py-0.5 bg-green-500/10 text-green-400 rounded-full border border-green-500/20">Approved</span>
        </motion.div>
      </div>
    </motion.div>
  </div>
);

export const SelfEmployedIcon = () => (
  <div className="w-full aspect-4/3 bg-[#0A0A0A] rounded-xl border border-gray-800/30 p-4 overflow-hidden relative">
    {/* Document upload interface */}
    <div className="text-[8px] text-gray-600 font-medium mb-3">DOCUMENTS</div>

    <div className="space-y-2">
      {['SA302 Tax Return', 'Company Accounts', 'Bank Statements'].map((doc, i) => (
        <motion.div
          key={doc}
          className="bg-[#111] border border-gray-800 rounded-lg p-2.5 flex items-center justify-between group"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: i * 0.3, repeat: Infinity, repeatDelay: 4 }}
        >
          <div className="flex items-center gap-2 flex-1">
            <div className="w-1.5 h-1.5 bg-gray-700 rounded" />
            <span className="text-[9px] text-gray-400 font-medium truncate">{doc}</span>
          </div>

          <motion.div
            className="flex items-center justify-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.4, delay: i * 0.3 + 0.5, repeat: Infinity, repeatDelay: 4 }}
          >
            <div className="w-4 h-4 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path d="M2 4 L3.5 5.5 L6.5 2.5" stroke="#22c55e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>

    {/* Status indicator */}
    <motion.div
      className="mt-3 flex items-center justify-between bg-[#0D1117] border border-gray-700 rounded-lg p-2"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.2, repeat: Infinity, repeatDelay: 4 }}
    >
      <span className="text-[8px] text-gray-400">Verification Status</span>
      <span className="text-[9px] text-green-400 font-medium">Complete</span>
    </motion.div>
  </div>
);

export const ProtectionIcon = () => (
  <div className="w-full aspect-4/3 bg-[#0A0A0A] rounded-xl border border-gray-800/30 p-4 overflow-hidden relative">
    {/* Settings interface */}
    <div className="text-[8px] text-gray-600 font-medium mb-3">COVERAGE OPTIONS</div>

    <div className="space-y-2.5">
      {/* Life Cover - Active */}
      <motion.div
        className="bg-[#0D1117] border border-gray-700 rounded-lg p-2.5"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, repeat: Infinity, repeatDelay: 4 }}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-[9px] text-gray-300 font-medium">Life Cover</span>
          <motion.div
            className="relative w-8 h-4 bg-brand-white/10 rounded-full border border-brand-white/20 cursor-pointer flex items-center"
            initial={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
            animate={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
            transition={{ duration: 0.3, delay: 0.5, repeat: Infinity, repeatDelay: 4 }}
          >
            <motion.div
              className="absolute w-3 h-3 bg-brand-white rounded-full shadow-lg"
              initial={{ left: '2px' }}
              animate={{ left: 'calc(100% - 14px)' }}
              transition={{ duration: 0.3, delay: 0.5, repeat: Infinity, repeatDelay: 4 }}
            />
          </motion.div>
        </div>
        <motion.div
          className="text-[11px] font-bold text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8, repeat: Infinity, repeatDelay: 4 }}
        >
          £500,000
        </motion.div>
      </motion.div>

      {/* Critical Illness - Inactive */}
      <motion.div
        className="bg-[#111] border border-gray-800 rounded-lg p-2.5 opacity-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 0.4, delay: 1, repeat: Infinity, repeatDelay: 4 }}
      >
        <div className="flex items-center justify-between">
          <span className="text-[9px] text-gray-500 font-medium">Critical Illness</span>
          <div className="w-8 h-4 bg-gray-800 rounded-full border border-gray-700 flex items-center">
            <div className="w-3 h-3 bg-gray-700 rounded-full ml-0.5" />
          </div>
        </div>
      </motion.div>

      {/* Premium display */}
      <motion.div
        className="flex items-center justify-between bg-[#0D1117] border border-gray-700 rounded-lg p-2.5 mt-3"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.3, repeat: Infinity, repeatDelay: 4 }}
      >
        <span className="text-[8px] text-gray-400">Monthly Premium</span>
        <span className="text-[11px] font-bold text-gray-200">£45/mo</span>
      </motion.div>
    </div>
  </div>
);

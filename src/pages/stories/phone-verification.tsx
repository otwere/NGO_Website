"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { X, Lock } from "lucide-react"

interface PhoneVerificationProps {
  onClose: () => void
  onSuccess: () => void
}

export function PhoneVerification({ onClose, onSuccess }: PhoneVerificationProps) {
  const [pin, setPin] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (pin.length === 6) {
      onSuccess()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="bg-gray-50/90 rounded-lg p-8 max-w-md w-full relative"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <X className="w-6 h-6" />
        </button>
        <div className="text-center mb-6">
          <Lock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold">Verify Your Phone</h2>
          <p className="text-gray-600 mt-2">Enter the 6-digit code sent to your phone to complete the transaction.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="pin" className="block text-sm font-medium text-gray-700 mb-2">
              One Time PIN (OTP)
            </label>
            <input
              type="text"
              id="pin"
              value={pin}
              onChange={(e) => setPin(e.target.value.replace(/\D/g, "").slice(0, 6))}
              placeholder="******"
              className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent text-center text-2xl tracking-widest"
              maxLength={6}
            />
          </div>
          <button
            type="submit"
            disabled={pin.length !== 6}
            className={`w-full py-3 rounded-md font-semibold transition-colors ${
              pin.length === 6
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
          >
            Verify OTP
          </button>
        </form>
      </motion.div>
    </motion.div>
  )
}


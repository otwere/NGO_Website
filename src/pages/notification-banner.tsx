import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle, AlertCircle } from "lucide-react"

interface NotificationBannerProps {
  show: boolean
  message: string
  onClose: () => void
}

export function NotificationBanner({ show, message, onClose }: NotificationBannerProps) {
  const isSuccess = message.toLowerCase().includes("success")

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md ${
            isSuccess ? "bg-green-100" : "bg-red-100"
          } border ${isSuccess ? "border-green-400" : "border-red-400"} rounded-lg shadow-lg`}
        >
          <div className="p-4 flex items-center">
            {isSuccess ? (
              <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
            ) : (
              <AlertCircle className="w-6 h-6 text-red-500 mr-3" />
            )}
            <p className={`flex-grow ${isSuccess ? "text-green-700" : "text-red-700"}`}>{message}</p>
            <button
              onClick={onClose}
              className={`ml-3 ${
                isSuccess ? "text-green-500 hover:text-green-600" : "text-red-500 hover:text-red-600"
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


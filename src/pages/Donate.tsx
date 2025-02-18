"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  CreditCard,
  Calendar,
  AlertCircle,
  Heart,
  Book,
  Droplets,
  ArrowRight,
  CheckCircle,
  Mail,
  Download,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Smartphone,
  Building,
  Wallet,
  Loader2,
  Link,
  Users,
} from "lucide-react"
import { PhoneVerification } from "./stories/phone-verification"
import { NotificationBanner } from "./notification-banner"

export function Donate() {
  const [amount, setAmount] = useState("")
  const [frequency, setFrequency] = useState("one-time")
  const [category, setCategory] = useState("")
  const [step, setStep] = useState(1)
  const [phoneNumber, setPhoneNumber] = useState("")
  const suggestedAmounts = ["25", "50", "100", "250"]
  const categories = [
    {
      id: "education",
      name: "Education",
      description: "Support educational programs and resources",
      progress: 75,
      goal: 50000,
      raised: 37500,
      icon: <Book className="w-6 h-6" />,
      impact: "Provides education materials for 10 children",
      color: "blue",
    },
    {
      id: "healthcare",
      name: "Healthcare",
      description: "Fund medical supplies and healthcare initiatives",
      progress: 60,
      goal: 75000,
      raised: 45000,
      icon: <div className="w-6 h-6" />,
      impact: "Supports medical care for 5 families",
      color: "red",
    },
    {
      id: "water",
      name: "Clean Water",
      description: "Help provide clean water access to communities",
      progress: 45,
      goal: 100000,
      raised: 45000,
      icon: <Droplets className="w-6 h-6" />,
      impact: "Provides clean water for an entire village",
      color: "cyan",
    },
  ]
  const [showSuccess, setShowSuccess] = useState(false)
  const [donationDetails, setDonationDetails] = useState({
    amount: "",
    frequency: "",
    cause: "",
    transactionId: "",
    date: "",
  })
  const [copied, setCopied] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("")
  const paymentMethods = [
    {
      id: "mpesa",
      name: "M-Pesa",
      icon: <Smartphone className="w-6 h-6" />,
      description: "Pay using M-Pesa mobile money",
    },
    {
      id: "card",
      name: "Credit | Debit Card",
      icon: <CreditCard className="w-6 h-6" />,
      description: "Pay securely with your credit or debit card",
    },
    {
      id: "paypal",
      name: "PayPal",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.641.641 0 0 1 .633-.54h6.433c2.063 0 3.725.52 4.867 1.533.524.465.904 1.02 1.133 1.648.24.663.293 1.454.157 2.355l-.006.037v.34l.268.159c.375.217.695.471.947.763.277.324.466.707.557 1.129.096.447.096.937 0 1.457-.111.586-.322 1.101-.63 1.533-.317.444-.728.805-1.222 1.076-.48.263-1.017.446-1.599.542a9.451 9.451 0 0 1-1.855.147h-.438c-.307 0-.601.124-.816.343a1.04 1.04 0 0 0-.29.565L11.679 20.71a.643.643 0 0 1-.634.627H7.076v-.002Z" />
        </svg>
      ),
      description: "Pay with your PayPal account",
    },
    {
      id: "bank",
      name: "Bank Transfer (RTGS)",
      icon: <Building className="w-6 h-6" />,
      description: "Make a direct bank transfer",
    },
    {
      id: "wallet",
      name: "Digital Wallet",
      icon: <Wallet className="w-6 h-6" />,
      description: "Pay with various digital wallets",
    },
  ]
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentError, setPaymentError] = useState<string | null>(null)
  const [showPhoneVerification, setShowPhoneVerification] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState("")

  const handlePhoneNumberSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (phoneNumber.length === 10) {
      setStep(2)
    }
  }

  const handleSubmit = async () => {
    try {
      setIsProcessing(true)
      setPaymentError(null)
      if (!amount || !frequency || !category || !paymentMethod) {
        throw new Error("Please fill in all required fields")
      }
      // Show phone verification only for M-Pesa
      if (paymentMethod === "mpesa") {
        setShowPhoneVerification(true)
      } else {
        // For other payment methods, proceed directly
        await processPayment()
      }
    } catch (error) {
      setPaymentError(error instanceof Error ? error.message : "Payment failed. Please try again.")
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }, 100)
    } finally {
      setIsProcessing(false)
    }
  }

  const processPayment = async () => {
    try {
      const result = await simulatePaymentProcessing();
      if (!result.success) {
        throw new Error(result.message);
      }

      // Format date as DD-MM-YYYY
      const today = new Date();
      const formattedDate = `${today.getDate().toString().padStart(2, "0")}-${(today.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${today.getFullYear()}`;

      setDonationDetails({
        amount,
        frequency,
        cause: categories.find((c) => c.id === category)?.name || "",
        transactionId: `DON-${Math.random().toString(36).substring(2, 11).toUpperCase()}`,
        date: formattedDate,
      });

      setShowSuccess(true);
      setNotificationMessage("Payment successful! Thank you for your donation.");
      setShowNotification(true);
    } catch (error) {
      setPaymentError(error instanceof Error ? error.message : "Payment failed. Please try again.");
      setNotificationMessage("Payment failed. Please try again.");
      setShowNotification(true);
    }
  };


  const handlePhoneVerificationSuccess = async () => {
    setShowPhoneVerification(false)
    await processPayment()
  }

  const handleShare = (platform: string) => {
    const message = `I just supported ${donationDetails.cause} with a donation of $${donationDetails.amount} through HopeWorks! Join me in making a difference.`
    const url = window.location.href
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${message}`,
      twitter: `https://twitter.com/intent/tweet?text=${message}&url=${url}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=Support%20HopeWorks&summary=${message}`,
    }
    window.open(shareUrls[platform as keyof typeof shareUrls], "_blank")
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const simulatePaymentProcessing = async () => {
    const scenarios = [
      {
        success: true,
        message: "Payment processed successfully",
      },
      {
        success: false,
        message: "Insufficient funds",
      },
      {
        success: false,
        message: "Card declined",
      },
      {
        success: false,
        message: "Network error",
      },
    ]
    const scenario =
      Math.random() < 0.8 ? scenarios[0] : scenarios[Math.floor(Math.random() * (scenarios.length - 1)) + 1]
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return scenario
  }

  if (showSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="max-w-2xl mx-auto px-4 py-12"
      >
        <div className="bg-inherit border rounded-lg shadow-sm p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-green-500"></div>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-4">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You for Your Donation!</h2>
            <p className="text-gray-600">Your generosity makes our work possible.</p>
          </motion.div>
          <div className="bg-gray-100 rounded-lg p-6 mb-8">
            <h3 className="font-semibold mb-4">Donation Summary</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Amount Donated :</span>
                <span className="font-medium">${donationDetails.amount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Frequency :</span>
                <span className="font-medium capitalize">{donationDetails.frequency}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Cause :</span>
                <span className="font-medium">{donationDetails.cause}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Transaction ID :</span>
                <span className="font-medium">{donationDetails.transactionId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date :</span>
                <span className="font-medium">{donationDetails.date}</span>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="font-semibold mb-4">Your Impact</h3>
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <p className="text-blue-800">
                Your donation will help provide:
                {donationDetails.amount && (
                  <span className="block font-bold mt-2">
                    {Number(donationDetails.amount) >= 100
                      ? "Essential supplies for 10 students"
                      : Number(donationDetails.amount) >= 50
                        ? "School materials for 5 students"
                        : "Educational resources for 2 students"}
                  </span>
                )}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md transition duration-300 ease-in-out hover:bg-blue-700 hover:scale-95">
                <Mail className="w-4 h-4" />
                Email Receipt
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md transition duration-300 ease-in-out hover:bg-green-700 hover:scale-95">
                <Download className="w-4 h-4" />
                Download PDF
              </button>
            </div>
            <div className="border-t pt-4">
              <p className="text-sm text-gray-600 mb-3 text-center">Share your support and inspire others</p>
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => handleShare("facebook")}
                  className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200"
                >
                  <Facebook className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleShare("twitter")}
                  className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200"
                >
                  <Twitter className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleShare("linkedin")}
                  className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200"
                >
                  <Linkedin className="w-5 h-5" />
                </button>
                <button
                  onClick={handleCopyLink}
                  className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 relative"
                >
                  <Copy className="w-5 h-5" />
                  {copied && (
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                      Copied!
                    </span>
                  )}
                </button>
              </div>
            </div>
            <div className="border-t pt-4">
              <h3 className="mb-3 text-center italic text-gray-500 text-sm">You have made it happen</h3>
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/volunteer"
                  className="text-center p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors"
                >
                  <Users className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                  <span className="text-sm font-medium">Volunteer With Us</span>
                </Link>
                <Link
                  href="/newsletter"
                  className="text-center p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors"
                >
                  <Mail className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                  <span className="text-sm font-medium">Stay Updated</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto px-4 py-12"
    >
      <NotificationBanner
        show={showNotification}
        message={notificationMessage}
        onClose={() => setShowNotification(false)}
      />
      <div className="text-center mb-12">
        <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Make a Donation</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Your generosity can transform lives. Choose where you'd like your donation to make an impact.
        </p>
      </div>
      <div className="mb-12">
        <div className="flex justify-center items-center max-w-xs mx-auto">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center">
              <div
                className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-colors ${step === i
                  ? "bg-blue-600 text-white"
                  : step > i
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-600"
                  }`}
              >
                {step > i ? <CheckCircle className="w-6 h-6" /> : <span>{i}</span>}
                <span className="absolute -bottom-6 text-xs font-medium text-gray-600 w-20 text-center">
                  {i === 1 ? "Phone" : i === 2 ? "Cause" : i === 3 ? "Amount" : "Payment"}
                </span>
              </div>
              {i < 4 && <div className={`w-16 h-1 ${step > i ? "bg-green-500" : "bg-gray-200"}`} />}
            </div>
          ))}
        </div>
      </div>
      {step === 1 && (
        <div className="bg-inherit border rounded-lg shadow-none p-8">
          <h2 className="text-2xl font-semibold mb-6">Enter Your Phone Number</h2>
          <form onSubmit={handlePhoneNumberSubmit}>
            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 10))}
                placeholder="Enter your 10-digit phone number"
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
                pattern="[0-9]{10}"
              />
              <p className="mt-1 text-sm text-gray-500">Enter a 10-digit phone number</p>
            </div>
            <button
              type="submit"
              disabled={phoneNumber.length !== 10}
              className={`w-full py-3 rounded-md font-semibold transition-all duration-300 ${phoneNumber.length === 10
                ? "bg-blue-600 text-white hover:bg-blue-700 hover:scale-95"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
            >
              Continue
            </button>
          </form>
        </div>
      )}
      {step === 2 && (
        <div className="space-y-6">
          <div className="grid gap-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`p-6 border rounded-xl cursor-pointer transition-all transform hover:scale-[1.02] ${category === cat.id ? "border-blue-600 bg-blue-50 shadow-none" : "hover:border-gray-300 hover:shadow-md"
                  }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-${cat.color}-100`}>{cat.icon}</div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{cat.name}</h3>
                        <p className="text-gray-600 text-sm">{cat.description}</p>
                      </div>
                      <span className="text-blue-600 font-semibold">${cat.goal.toLocaleString()}</span>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Raised: ${cat.raised.toLocaleString()}</span>
                        <span className="font-medium">{cat.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-600 rounded-full transition-all"
                          style={{
                            width: `${cat.progress}%`,
                          }}
                        />
                      </div>
                      <p className="text-sm text-gray-500">
                        <Heart className="w-4 h-4 inline mr-1 text-red-500" />
                        {cat.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setStep(3)}
            disabled={!category}
            className={`w-full py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center ${category
              ? "bg-blue-600 text-white hover:bg-blue-700 hover:scale-95"
              : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
          >
            Continue
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      )}
      {step === 3 && (
        <div className="bg-inherit border rounded-lg shadow-none p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Donation Frequency</h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button
                onClick={() => setFrequency("one-time")}
                className={`p-4 border rounded-lg flex items-center justify-center space-x-2 ${frequency === "one-time" ? "border-blue-600 bg-blue-50" : "hover:border-gray-400"
                  }`}
              >
                <CreditCard className="w-5 h-5" />
                <span>One-time</span>
              </button>
              <button
                onClick={() => setFrequency("monthly")}
                className={`p-4 border rounded-lg flex items-center justify-center space-x-2 ${frequency === "monthly" ? "border-blue-600 bg-blue-50" : "hover:border-gray-400"
                  }`}
              >
                <Calendar className="w-5 h-5" />
                <span>Monthly</span>
              </button>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Choose Amount</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {suggestedAmounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => setAmount(amt)}
                  className={`py-3 rounded-md text-center transition-colors ${amount === amt ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"
                    }`}
                >
                  ${amt}
                </button>
              ))}
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2">$</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter custom amount"
                className="w-full pl-8 pr-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <button onClick={() => setStep(2)} className="px-6 py-2 text-gray-600 hover:text-gray-900">
              Back
            </button>
            <button
              onClick={() => setStep(4)}
              disabled={!amount}
              className={`px-8 py-3 rounded-md font-semibold transition-all duration-300 ${amount
                ? "bg-blue-600 text-white hover:bg-blue-700 hover:scale-95"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
            >
              Continue
            </button>

          </div>
        </div>
      )}
      {step === 4 && (
        <div className="bg-inherit border rounded-lg shadow-none p-8">
          {paymentError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
            >
              <div className="flex items-center space-x-2 text-red-600">
                <AlertCircle className="w-5 h-5" />
                <span className="font-medium">{paymentError}</span>
              </div>
            </motion.div>
          )}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Select Payment Method</h2>
            <div className="grid gap-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  onClick={() => setPaymentMethod(method.id)}
                  className={`p-4 border rounded-lg cursor-pointer transition-all ${paymentMethod === method.id
                    ? "border-blue-600 bg-blue-50 shadow-md"
                    : "hover:border-gray-300 hover:shadow-md  transform transition-transform"
                    }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${paymentMethod === method.id ? "bg-blue-100" : "bg-gray-100"}`}>
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">{method.name}</h3>
                      <p className="text-sm text-gray-600">{method.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {paymentMethod && (
            <div className="space-y-6">
              {paymentMethod === "card" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Card Information</label>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Card Number</label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            maxLength={19}
                            className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent pl-12"
                          />
                          <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">Expiry Date</label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            maxLength={5}
                            className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">Security Code (CVV)</label>
                          <div className="relative">
                            <input
                              type="text"
                              placeholder="123"
                              maxLength={4}
                              className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                              <span
                                className="text-gray-400 hover:text-gray-600 cursor-help"
                                title="3 or 4 digit code on the back of your card"
                              >
                                ?
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Cardholder Name</label>
                        <input
                          type="text"
                          placeholder="Name as shown on card"
                          className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        />
                      </div>
                      <div className="flex items-center mt-4">
                        <input
                          type="checkbox"
                          id="saveCard"
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <label htmlFor="saveCard" className="ml-2 text-sm text-gray-600">
                          Save this card for future donations
                        </label>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {paymentMethod === "mpesa" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="Enter M-Pesa registered number"
                      value={phoneNumber}
                      readOnly
                      className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-100"
                    />
                    <p className="mt-1 text-sm text-gray-500">We'll use this number for M-Pesa (prompt - STK Push) payment</p>
                  </div>
                </>
              )}
              {paymentMethod === "bank" && (
                <div className="bg-gray-50 p-4 rounded-lg flex flex-col">
                  <h3 className="font-semibold mb-2">Bank Transfer Details</h3>
                  <div className="flex flex-col space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Bank Name :</span> <span>Example Bank</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Bank Branch :</span> <span>Example Branch</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Bank Branch Code :</span> <span>00000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Account Name :</span> <span>HopeWorks Foundation</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Account Number :</span> <span>1234567890</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Swift Code :</span> <span>EXAMPXX</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Reference :</span> <span>DON-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>

                    </div>
                  </div>
                </div>

              )}
              {paymentMethod === "wallet" && (
                <div className="grid grid-cols-2 gap-4">
                  <button className="p-4 border rounded-lg hover:bg-gray-50">Apple Pay</button>
                  <button className="p-4 border rounded-lg hover:bg-gray-50">Google Pay</button>
                  <button className="p-4 border rounded-lg hover:bg-gray-50">Samsung Pay</button>
                  <button className="p-4 border rounded-lg hover:bg-gray-50">Other Wallets</button>
                </div>
              )}
              <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">Donation Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Amount :</span>
                    <span>${amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Frequency :</span>
                    <span className="capitalize">{frequency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cause :</span>
                    <span>{categories.find((c) => c.id === category)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payment Method :</span>
                    <span>{paymentMethods.find((m) => m.id === paymentMethod)?.name}</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-11">
                <button
                  onClick={() => setStep(3)}
                  className="px-6 py-2 text-gray-600 hover:text-gray-900"
                  disabled={isProcessing}
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!paymentMethod || isProcessing}
                  className={`px-8 py-3 rounded-md font-semibold transition-all transform flex items-center space-x-2 ${isProcessing
                      ? "bg-blue-400 cursor-not-allowed"
                      : paymentMethod
                        ? "bg-blue-600 hover:bg-blue-700 hover:scale-95"
                        : "bg-gray-200 cursor-not-allowed"
                    } text-white`}
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>Complete Donation</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

              </div>
              <p className="mt-4 text-sm text-green-600 flex items-center justify-center">
                <AlertCircle className="w-4 h-4 mr-2" />
                Your payment is secured and encrypted
              </p>
              {paymentMethod === "card" && (
                <div className="mt-2 flex items-center justify-center space-x-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/179/179431.png" alt="Visa" className="h-6" />
                  <img src="https://cdn-icons-png.flaticon.com/512/179/179457.png" alt="Mastercard" className="h-6" />
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/179/179436.png"
                    alt="American Express"
                    className="h-6"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      )}
      <AnimatePresence>
        {showPhoneVerification && (
          <PhoneVerification
            onClose={() => setShowPhoneVerification(false)}
            onSuccess={handlePhoneVerificationSuccess}
          />
        )}
      </AnimatePresence>
    </motion.div>
  )
}


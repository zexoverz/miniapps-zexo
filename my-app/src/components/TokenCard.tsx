"use client"

import type React from "react"
import { Heart, Send } from "lucide-react"
import toast from "react-hot-toast"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Token, tokenOptions } from "./TokenFactory"

interface TokenCardProps {
  token: Token
}

export default function TokenCard({ token }: TokenCardProps) {
  const router = useRouter()


  const handleSend = (e: React.MouseEvent) => {
    e.stopPropagation()
    router.push(`/transfer/${token.address}`)
  }

  // Format large numbers with commas
  const formatNumber = (num: string) => {
    return Number.parseInt(num).toLocaleString()
  }

  // Format as currency
  const formatCurrency = (num: string) => {
    const value = Number.parseInt(num)
    
    if (value >= 1000000000000) {
      return `${(value / 1000000000000).toFixed(2)}T` // Trillion
    } else if (value >= 1000000000) {
      return `${(value / 1000000000).toFixed(2)}B` // Billion
    } else if (value >= 1000000) {
      return `${(value / 1000000).toFixed(2)}M` // Million
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(2)}K` // Thousand
    } else {
      return `${value.toFixed(2)}`
    }
  }

  return (
    <div className="overflow-hidden border-none rounded-3xl shadow-sm bg-white">
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-gray-800">{token.name}</h3>
          <div className="flex gap-2">
            <button onClick={handleSend} className="text-gray-400 hover:text-gray-600">
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center py-4">
          <div className={`w-20 h-20 ${tokenOptions[token.iconId].bgColor} rounded-full flex items-center justify-center`}>
            <div className="w-12 h-12 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
              {tokenOptions[token.iconId].icon}
            </div>
          </div>
        </div>

        <div className="mt-2">
            <p className="text-sm text-gray-500">
              {token.address.slice(0, 6)}...{token.address.slice(-4)}
            </p>
          <p className="text-2xl font-bold text-gray-800">{formatCurrency(token.balance.toString())}</p>
        </div>
      </div>
    </div>
  )
}

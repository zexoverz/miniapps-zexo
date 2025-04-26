"use client"

import { useState } from "react"
import { Leaf, Sparkles, Zap, Gem, Diamond, Rocket, Star, Search, ArrowLeft, Home, Grid3X3, RefreshCcwIcon, SearchIcon } from "lucide-react"
import toast from "react-hot-toast"
import TokenCard from "./TokenCard"
import { useSession } from "next-auth/react"

export type Token = {
    name: string;
    symbol: string;
    balance: number;
    address: `0x${string}`
    iconId: number
}

// Combined token options - icon and color in one array
export const tokenOptions = [
  { 
    icon: <Leaf className="h-6 w-6" />, 
    name: "Leaf", 
    textColor: "text-[#5eb394]",
    bgColor: "bg-[#d8f3e6]" 
  },
  { 
    icon: <Sparkles className="h-6 w-6" />, 
    name: "Sparkles", 
    textColor: "text-[#5b7db1]",
    bgColor: "bg-[#c4ddff]" 
  },
  { 
    icon: <Zap className="h-6 w-6" />, 
    name: "Zap", 
    textColor: "text-[#d4a746]",
    bgColor: "bg-[#ffe8b3]" 
  },
  { 
    icon: <Gem className="h-6 w-6" />, 
    name: "Gem", 
    textColor: "text-[#c97878]",
    bgColor: "bg-[#ffd6d6]" 
  },
  { 
    icon: <Diamond className="h-6 w-6" />, 
    name: "Diamond", 
    textColor: "text-[#6a9bc2]",
    bgColor: "bg-[#d7e9f6]" 
  },
  { 
    icon: <Rocket className="h-6 w-6" />, 
    name: "Rocket", 
    textColor: "text-[#8a70c9]",
    bgColor: "bg-[#e0d7f6]" 
  },
  { 
    icon: <Star className="h-6 w-6" />, 
    name: "Star", 
    textColor: "text-[#e67e22]",
    bgColor: "bg-[#fde3cd]" 
  }
]


interface TokenFactoryrops {
    handleAddToken: ( tokenName: string, tokenSymbol: string, tokenSupply:string, iconIndex: number) => void,
    isLoading: boolean
    tokens: Token[] | []
}



export default function TokenFactory({handleAddToken, isLoading, tokens}: TokenFactoryrops ) {
  const [tokenName, setTokenName] = useState("")
  const [tokenSymbol, setTokenSymbol] = useState("")
  const [initialSupply, setInitialSupply] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0) // Single index for both icon and color
  const [activeTab, setActiveTab] = useState("create")
    const { data: session, status } = useSession();
  

  const handleCreateToken = () => {
    if (!tokenName || !tokenSymbol || !initialSupply) {
      toast.error("Please fill in all fields")
      return
    }

    handleAddToken(tokenName, tokenSymbol, initialSupply, selectedIndex)

    // Reset form
    setTokenName("")
    setTokenSymbol("")
    setInitialSupply("")

  }

  return (
    <div className="container max-w-md mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
            <Diamond className="h-5 w-5 text-black" />
          </div>
          <h1 className="text-xl font-bold text-gray-800">Token Factory</h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
            <SearchIcon className="h-5 w-5 text-gray-600" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="grid grid-cols-2 bg-white rounded-full p-1 shadow-sm">
          <button
            onClick={() => setActiveTab("create")}
            className={`py-2 px-4 rounded-full ${
              activeTab === "create" ? "bg-black text-white" : "text-gray-600"
            } transition-colors`}
          >
            Create
          </button>
          <button
            onClick={() => setActiveTab("tokens")}
            className={`py-2 px-4 rounded-full ${
              activeTab === "tokens" ? "bg-black text-white" : "text-gray-600"
            } transition-colors`}
          >
            My Tokens
          </button>
        </div>
      </div>

      {/* Create Tab Content */}
      {activeTab === "create" && (
        <div className="bg-white border-none rounded-3xl shadow-sm">
          <div className="p-6 space-y-5">
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-1">Create New Token</h2>
              <p className="text-gray-500 text-sm">Deploy your own ERC20 token</p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Token Name</label>
                <input
                  type="text"
                  placeholder="e.g. My Awesome Token"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm"
                  value={tokenName}
                  onChange={(e) => setTokenName(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Token Symbol</label>
                <input
                  type="text"
                  placeholder="e.g. MAT"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm"
                  value={tokenSymbol}
                  onChange={(e) => setTokenSymbol(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Initial Supply</label>
                <input
                  type="number"
                  placeholder="e.g. 1000000"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm"
                  value={initialSupply}
                  onChange={(e) => setInitialSupply(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Token Icon & Color</label>
                <div className="grid grid-cols-7 gap-2">
                  {tokenOptions.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedIndex(index)}
                      className={`p-2 rounded-xl flex items-center justify-center ${
                        selectedIndex === index
                          ? `${option.textColor} ${option.bgColor} ring-2 ring-gray-200`
                          : "bg-gray-50 text-gray-400"
                      }`}
                    >
                      {option.icon}
                    </button>
                  ))}
                </div>
              </div>

              <button
                disabled={isLoading}
                className="w-full mt-4 rounded-xl bg-black hover:bg-gray-800 text-white h-12 transition-colors"
                onClick={handleCreateToken}
              >
                Create Token
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tokens Tab Content */}
      {activeTab === "tokens" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">Your Tokens</h2>
            <p className="text-sm text-gray-500">{tokens.length} tokens</p>
          </div>

          {tokens.length === 0 ? (
            <div className="bg-white border-none rounded-3xl p-6 text-center text-gray-500 shadow-sm">
              <p>You haven't created any tokens yet</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {tokens.map((token) => (
                <TokenCard key={token.address} token={token} />
              ))}
            </div>
          )}
        </div>
      )}

    </div>
  )
}
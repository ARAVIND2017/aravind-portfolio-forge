
"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleClick = (item: NavItem) => {
    setActiveTab(item.name)
    const element = document.getElementById(item.url.replace('#', ''))
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      className={cn(
        "fixed bottom-6 sm:top-6 left-1/2 -translate-x-1/2 z-50",
        className,
      )}
    >
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center gap-2 bg-slate-900/60 border border-slate-700/30 backdrop-blur-2xl py-2 px-2 rounded-2xl shadow-2xl shadow-blue-500/5"
      >
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <button
              key={item.name}
              onClick={() => handleClick(item)}
              className={cn(
                "relative cursor-pointer text-sm font-medium px-6 py-3 rounded-xl transition-all duration-300 ease-out",
                "text-slate-400 hover:text-blue-400",
                isActive && "text-blue-400",
                "group"
              )}
            >
              <span className="hidden md:inline relative z-10">{item.name}</span>
              <span className="md:hidden relative z-10">
                <Icon size={20} strokeWidth={2} />
              </span>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-slate-800/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Active state with enhanced tubelight effect */}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                >
                  {/* Enhanced tubelight glow */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full">
                    <div className="absolute w-16 h-8 bg-blue-400/10 rounded-full blur-xl -top-3 -left-2" />
                    <div className="absolute w-12 h-6 bg-purple-400/15 rounded-full blur-lg -top-2" />
                    <div className="absolute w-8 h-4 bg-blue-400/20 rounded-full blur-md -top-1 left-2" />
                  </div>
                  
                  {/* Side glows */}
                  <div className="absolute top-1/2 -translate-y-1/2 -left-1 w-1 h-8 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent rounded-full" />
                  <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-1 h-8 bg-gradient-to-b from-transparent via-purple-400/30 to-transparent rounded-full" />
                </motion.div>
              )}
            </button>
          )
        })}
      </motion.div>
    </div>
  )
}

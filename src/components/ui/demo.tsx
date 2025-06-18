
'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-auto min-h-[500px] bg-black/[0.96] relative overflow-hidden" id="about">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
            About Me
          </h1>
          <p className="text-slate-300 leading-relaxed mb-8">
            I'm an AI & ML Engineering student with hands-on experience in full stack and app development, 
            skilled in Python, Flask, React, Next.js, Firebase, MongoDB, Gemini AI, and Docker. I've built 
            real-world AI-powered solutions such as mock interview platforms, civic engagement tools, cloud 
            estimators, and automation bots using n8n, with multiple national and international hackathon wins, 
            strong leadership in tech communities, and a deep passion for creating impactful, intelligent, 
            and user-focused applications.
          </p>
          <div className="flex space-x-4 animate-delayed-fade-in">
            <a href="https://linkedin.com/in/aravind2107" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="border-slate-600 hover:border-blue-500 hover-scale">
                <Linkedin className="h-4 w-4" />
              </Button>
            </a>
            <a href="https://github.com/ARAVIND2017" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="border-slate-600 hover:border-blue-500 hover-scale">
                <Github className="h-4 w-4" />
              </Button>
            </a>
            <a href="mailto:baravind196@gmail.com">
              <Button variant="outline" size="icon" className="border-slate-600 hover:border-blue-500 hover-scale">
                <Mail className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative min-h-[300px]">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}

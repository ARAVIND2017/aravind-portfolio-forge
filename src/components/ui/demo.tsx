
'use client';

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SplineSceneBasic() {
  return <Card className="w-full h-auto min-h-[500px] bg-transparent relative overflow-hidden" id="about">
      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
            About Me
          </h1>
          <p className="text-slate-300 leading-relaxed mb-8">I'm an AI &amp; ML engineering student with hands-on experience in developing intelligent, user-focused solutions across web, mobile, and AI platforms. I combine strong full stack and UI/UX skills with a self-motivated mindset and have built real-world projects recognized in national and international hackathons. I'm passionate about creating scalable tech that solves meaningful problems.</p>
          <div className="flex space-x-4">
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
          <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
        </div>
      </div>
    </Card>;
}

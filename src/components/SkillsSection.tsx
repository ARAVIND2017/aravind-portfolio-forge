
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useState } from 'react';

const SkillsSection = () => {
  const skillCategories = [
    {
      category: 'Languages',
      color: 'from-blue-500 to-purple-500',
      skills: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: 'bg-blue-500/20 text-blue-300' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: 'bg-orange-500/20 text-orange-300' },
        { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg', color: 'bg-purple-500/20 text-purple-300' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: 'bg-yellow-500/20 text-yellow-300' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: 'bg-blue-500/20 text-blue-300' }
      ]
    },
    {
      category: 'Frontend',
      color: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: 'bg-cyan-500/20 text-cyan-300' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: 'bg-slate-500/20 text-slate-300' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', color: 'bg-teal-500/20 text-teal-300' },
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: 'bg-orange-500/20 text-orange-300' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: 'bg-blue-500/20 text-blue-300' }
      ]
    },
    {
      category: 'Backend',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', color: 'bg-green-500/20 text-green-300' },
        { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', color: 'bg-orange-500/20 text-orange-300' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: 'bg-green-500/20 text-green-300' },
        { name: 'Prisma ORM', icon: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=80&h=80&fit=crop', color: 'bg-indigo-500/20 text-indigo-300' }
      ]
    },
    {
      category: 'AI/ML',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Gemini AI', icon: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=80&h=80&fit=crop', color: 'bg-purple-500/20 text-purple-300' },
        { name: 'scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg', color: 'bg-orange-500/20 text-orange-300' },
        { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', color: 'bg-blue-500/20 text-blue-300' }
      ]
    },
    {
      category: 'Dev Tools',
      color: 'from-gray-500 to-slate-500',
      skills: [
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: 'bg-blue-500/20 text-blue-300' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: 'bg-gray-500/20 text-gray-300' },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', color: 'bg-blue-500/20 text-blue-300' },
        { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg', color: 'bg-green-500/20 text-green-300' },
        { name: 'n8n', icon: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=80&h=80&fit=crop', color: 'bg-red-500/20 text-red-300' }
      ]
    },
    {
      category: 'Design/Modeling',
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', color: 'bg-purple-500/20 text-purple-300' },
        { name: 'Canva', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg', color: 'bg-blue-500/20 text-blue-300' },
        { name: 'StarUML', icon: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=80&h=80&fit=crop', color: 'bg-indigo-500/20 text-indigo-300' }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        
        <div className="max-w-6xl mx-auto">
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category, index) => (
              <button
                key={category.category}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600'
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>

          {/* Skills Carousel */}
          <div className="relative">
            <Carousel className="w-full" opts={{ align: "start", loop: true }}>
              <CarouselContent className="-ml-2 md:-ml-4">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <CarouselItem key={`${skill.name}-${index}`} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                    <Card className="bg-slate-800/50 backdrop-blur-lg border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/20 group cursor-pointer">
                      <CardContent className="flex flex-col items-center justify-center p-6 h-32">
                        <div className="w-12 h-12 mb-3 flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                          <img 
                            src={skill.icon} 
                            alt={`${skill.name} logo`}
                            className="w-10 h-10 object-contain filter group-hover:drop-shadow-lg group-hover:brightness-110"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=80&h=80&fit=crop';
                            }}
                          />
                        </div>
                        <Badge variant="secondary" className={`${skill.color} text-xs font-medium transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                          {skill.name}
                        </Badge>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12 border-slate-600 bg-slate-800/50 hover:bg-slate-700 text-white hover:border-blue-500" />
              <CarouselNext className="hidden md:flex -right-12 border-slate-600 bg-slate-800/50 hover:bg-slate-700 text-white hover:border-blue-500" />
            </Carousel>
          </div>

          {/* Category Description */}
          <div className="text-center mt-8">
            <p className="text-slate-400 max-w-2xl mx-auto">
              {activeCategory === 0 && "Programming languages I use to build robust and scalable applications"}
              {activeCategory === 1 && "Frontend technologies for creating beautiful and interactive user interfaces"}
              {activeCategory === 2 && "Backend tools and databases for building powerful server-side applications"}
              {activeCategory === 3 && "AI and Machine Learning tools for intelligent application development"}
              {activeCategory === 4 && "Development tools that enhance productivity and code quality"}
              {activeCategory === 5 && "Design and modeling tools for creating stunning visual experiences"}
            </p>
          </div>

          {/* Mobile Swipe Indicator */}
          <div className="flex justify-center mt-6 md:hidden">
            <div className="flex items-center space-x-2 text-slate-400 text-sm">
              <span>←</span>
              <span>Swipe to explore</span>
              <span>→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

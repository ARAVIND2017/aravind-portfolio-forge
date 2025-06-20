
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: 'bg-green-500/20 text-green-300' }
      ]
    },
    {
      category: 'AI/ML',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', color: 'bg-orange-500/20 text-orange-300' },
        { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', color: 'bg-red-500/20 text-red-300' },
        { name: 'scikit-learn', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg', color: 'bg-orange-500/20 text-orange-300' },
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
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: 'bg-red-500/20 text-red-300' },
        { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg', color: 'bg-green-500/20 text-green-300' }
      ]
    },
    {
      category: 'Design/Modeling',
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', color: 'bg-purple-500/20 text-purple-300' },
        { name: 'Canva', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg', color: 'bg-blue-500/20 text-blue-300' },
        { name: 'Adobe XD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg', color: 'bg-pink-500/20 text-pink-300' }
      ]
    }
  ];

  // Flatten all skills for marquee
  const allSkills = skillCategories.flatMap(category => category.skills);
  
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-20 bg-slate-900/50 dark:bg-slate-900/50 light:bg-slate-50/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        {/* Marquee Animation Section */}
        <div className="mb-16 overflow-hidden">
          <div className="flex animate-marquee space-x-8 py-8">
            {/* First set of logos */}
            {allSkills.map((skill, index) => (
              <div
                key={`first-${skill.name}-${index}`}
                className="flex-shrink-0 flex flex-col items-center justify-center group cursor-pointer"
              >
                <div className="w-16 h-16 mb-2 flex items-center justify-center bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border border-slate-700/50 dark:border-slate-700/50 light:border-slate-300/50 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                  <img 
                    src={skill.icon} 
                    alt={`${skill.name} logo`}
                    className="w-10 h-10 object-contain filter group-hover:brightness-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=40&h=40&fit=crop';
                    }}
                  />
                </div>
                <span className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 font-medium">{skill.name}</span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {allSkills.map((skill, index) => (
              <div
                key={`second-${skill.name}-${index}`}
                className="flex-shrink-0 flex flex-col items-center justify-center group cursor-pointer"
              >
                <div className="w-16 h-16 mb-2 flex items-center justify-center bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border border-slate-700/50 dark:border-slate-700/50 light:border-slate-300/50 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                  <img 
                    src={skill.icon} 
                    alt={`${skill.name} logo`}
                    className="w-10 h-10 object-contain filter group-hover:brightness-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=40&h=40&fit=crop';
                    }}
                  />
                </div>
                <span className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === index
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-slate-800/50 dark:bg-slate-800/50 light:bg-white text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 light:hover:bg-slate-100 border border-slate-600 dark:border-slate-600 light:border-slate-300'
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Skills Grid for Selected Category */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-8">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <Card key={`${skill.name}-${index}`} className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white backdrop-blur-lg border-slate-700 dark:border-slate-700 light:border-slate-300 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/20 group cursor-pointer">
              <CardContent className="flex flex-col items-center justify-center p-6 h-32">
                <div className="w-12 h-12 mb-3 flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                  <img 
                    src={skill.icon} 
                    alt={`${skill.name} logo`}
                    className="w-10 h-10 object-contain filter group-hover:drop-shadow-lg group-hover:brightness-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=40&h=40&fit=crop';
                    }}
                  />
                </div>
                <Badge variant="secondary" className={`${skill.color} text-xs font-medium transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                  {skill.name}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Category Description */}
        <div className="text-center">
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl mx-auto">
            {activeCategory === 0 && "Programming languages I use to build robust and scalable applications"}
            {activeCategory === 1 && "Frontend technologies for creating beautiful and interactive user interfaces"}
            {activeCategory === 2 && "Backend tools and databases for building powerful server-side applications"}
            {activeCategory === 3 && "AI and Machine Learning tools for intelligent application development"}
            {activeCategory === 4 && "Development tools that enhance productivity and code quality"}
            {activeCategory === 5 && "Design and modeling tools for creating stunning visual experiences"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;


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
    }
  ];

  // Flatten all skills for marquee (excluding Design/Modeling category)
  const allSkills = skillCategories.flatMap(category => category.skills);

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        {/* Marquee Animation Section */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee space-x-8 py-8">
            {/* First set of logos */}
            {allSkills.map((skill, index) => (
              <div
                key={`first-${skill.name}-${index}`}
                className="flex-shrink-0 flex flex-col items-center justify-center group cursor-pointer"
              >
                <div className="w-16 h-16 mb-2 flex items-center justify-center bg-slate-800/50 border border-slate-700/50 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/20">
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
                <span className="text-xs text-slate-400 font-medium">{skill.name}</span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {allSkills.map((skill, index) => (
              <div
                key={`second-${skill.name}-${index}`}
                className="flex-shrink-0 flex flex-col items-center justify-center group cursor-pointer"
              >
                <div className="w-16 h-16 mb-2 flex items-center justify-center bg-slate-800/50 border border-slate-700/50 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/20">
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
                <span className="text-xs text-slate-400 font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

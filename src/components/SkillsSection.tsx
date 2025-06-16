
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { useState } from 'react';

const SkillsSection = () => {
  const [sliderValue, setSliderValue] = useState([0]);
  
  const allSkills = [
    { name: 'Python', logo: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=80&h=80&fit=crop', color: 'bg-yellow-500/20 text-yellow-300' },
    { name: 'Java', logo: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=80&h=80&fit=crop', color: 'bg-orange-500/20 text-orange-300' },
    { name: 'Kotlin', logo: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=80&h=80&fit=crop', color: 'bg-purple-500/20 text-purple-300' },
    { name: 'JavaScript', logo: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=80&h=80&fit=crop', color: 'bg-yellow-500/20 text-yellow-300' },
    { name: 'TypeScript', logo: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=80&h=80&fit=crop', color: 'bg-blue-500/20 text-blue-300' },
    { name: 'React.js', logo: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=80&h=80&fit=crop', color: 'bg-cyan-500/20 text-cyan-300' },
    { name: 'Next.js', logo: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=80&h=80&fit=crop', color: 'bg-slate-500/20 text-slate-300' },
    { name: 'Tailwind CSS', logo: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=80&h=80&fit=crop', color: 'bg-teal-500/20 text-teal-300' },
    { name: 'Flask', logo: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=80&h=80&fit=crop', color: 'bg-green-500/20 text-green-300' },
    { name: 'Firebase', logo: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=80&h=80&fit=crop', color: 'bg-orange-500/20 text-orange-300' },
    { name: 'MongoDB', logo: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=80&h=80&fit=crop', color: 'bg-green-500/20 text-green-300' },
    { name: 'Prisma ORM', logo: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=80&h=80&fit=crop', color: 'bg-indigo-500/20 text-indigo-300' },
    { name: 'Gemini AI', logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=80&h=80&fit=crop', color: 'bg-purple-500/20 text-purple-300' },
    { name: 'scikit-learn', logo: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=80&h=80&fit=crop', color: 'bg-orange-500/20 text-orange-300' },
    { name: 'NumPy', logo: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=80&h=80&fit=crop', color: 'bg-blue-500/20 text-blue-300' },
    { name: 'GitHub', logo: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=80&h=80&fit=crop', color: 'bg-gray-500/20 text-gray-300' },
    { name: 'Docker', logo: 'https://images.unsplash.com/photo-1605745341112-85968b19335a?w=80&h=80&fit=crop', color: 'bg-blue-500/20 text-blue-300' },
    { name: 'n8n', logo: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=80&h=80&fit=crop', color: 'bg-red-500/20 text-red-300' },
    { name: 'Android Studio', logo: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=80&h=80&fit=crop', color: 'bg-green-500/20 text-green-300' }
  ];

  const visibleSkillsCount = 5;
  const maxIndex = Math.max(0, allSkills.length - visibleSkillsCount);
  const startIndex = Math.round((sliderValue[0] / 100) * maxIndex);
  const visibleSkills = allSkills.slice(startIndex, startIndex + visibleSkillsCount);

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Skills Display */}
          <div className="grid grid-cols-5 gap-6 mb-8">
            {visibleSkills.map((skill, index) => (
              <Card key={`${skill.name}-${startIndex + index}`} className="bg-slate-800/50 backdrop-blur-lg border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="w-16 h-16 mb-4 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center">
                    <img 
                      src={skill.logo} 
                      alt={`${skill.name} logo`}
                      className="w-12 h-12 object-cover rounded"
                    />
                  </div>
                  <Badge variant="secondary" className={skill.color}>
                    {skill.name}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Slider Control */}
          <div className="px-4">
            <Slider
              value={sliderValue}
              onValueChange={setSliderValue}
              max={100}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-slate-400 mt-2">
              <span>Languages & Frontend</span>
              <span>Backend & AI/ML</span>
              <span>DevTools</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

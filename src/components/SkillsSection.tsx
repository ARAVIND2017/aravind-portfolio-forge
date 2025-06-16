
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const SkillsSection = () => {
  const skills = [
    { 
      category: 'Languages', 
      items: [
        { name: 'Python', logo: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=64&h=64&fit=crop' },
        { name: 'Java', logo: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=64&h=64&fit=crop' },
        { name: 'Kotlin', logo: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=64&h=64&fit=crop' },
        { name: 'JavaScript', logo: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=64&h=64&fit=crop' },
        { name: 'TypeScript', logo: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=64&h=64&fit=crop' }
      ]
    },
    { 
      category: 'Frontend', 
      items: [
        { name: 'React.js', logo: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=64&h=64&fit=crop' },
        { name: 'Next.js', logo: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=64&h=64&fit=crop' },
        { name: 'Tailwind CSS', logo: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=64&h=64&fit=crop' }
      ]
    },
    { 
      category: 'Backend', 
      items: [
        { name: 'Flask', logo: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=64&h=64&fit=crop' },
        { name: 'Firebase', logo: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=64&h=64&fit=crop' },
        { name: 'MongoDB', logo: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=64&h=64&fit=crop' },
        { name: 'Prisma ORM', logo: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=64&h=64&fit=crop' }
      ]
    },
    { 
      category: 'AI/ML', 
      items: [
        { name: 'Gemini AI', logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=64&h=64&fit=crop' },
        { name: 'scikit-learn', logo: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=64&h=64&fit=crop' },
        { name: 'NumPy', logo: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=64&h=64&fit=crop' }
      ]
    },
    { 
      category: 'DevTools', 
      items: [
        { name: 'GitHub', logo: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=64&h=64&fit=crop' },
        { name: 'Docker', logo: 'https://images.unsplash.com/photo-1605745341112-85968b19335a?w=64&h=64&fit=crop' },
        { name: 'n8n', logo: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=64&h=64&fit=crop' },
        { name: 'Android Studio', logo: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=64&h=64&fit=crop' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <Card key={skillGroup.category} className="bg-slate-800/50 backdrop-blur-lg border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <CardTitle className="text-blue-400">{skillGroup.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <Carousel className="w-full max-w-xs mx-auto">
                  <CarouselContent>
                    {skillGroup.items.map((skill, skillIndex) => (
                      <CarouselItem key={skill.name}>
                        <div className="p-1">
                          <Card className="bg-slate-700/50 border-slate-600">
                            <CardContent className="flex flex-col items-center justify-center p-6">
                              <div className="w-16 h-16 mb-4 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center">
                                <img 
                                  src={skill.logo} 
                                  alt={`${skill.name} logo`}
                                  className="w-12 h-12 object-cover rounded"
                                />
                              </div>
                              <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30">
                                {skill.name}
                              </Badge>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="bg-slate-700 border-slate-600 text-white hover:bg-slate-600" />
                  <CarouselNext className="bg-slate-700 border-slate-600 text-white hover:bg-slate-600" />
                </Carousel>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

import { Button } from "@/components/ui/button";
import { Download, Award, Users, Clock, Code, Palette, Video, TrendingUp } from "lucide-react";
import { DesignIcon, VideoIcon, CodeIcon } from "@/components/ui/flat-illustrations";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimations";

const About = () => {
  const navigate = useNavigate();
  const aboutRef = useScrollAnimation('animate-slide-in-up');
  
  const skills = [
    { name: 'Web Development', level: 95, icon: Code },
    { name: 'Meta Ad Management', level: 90, icon: TrendingUp },
    { name: 'Video Editing', level: 95, icon: Video },
    { name: 'Graphic Design', level: 88, icon: Palette },
    { name: '2D Illustration', level: 85, icon: Award },
    { name: 'Motion Graphics', level: 90, icon: Users },
    { name: 'Automation', level: 92, icon: Clock },
  ];

  const journey = [
    {
      title: 'Sales Lead',
      company: 'E-commerce Company',
      description: 'Led sales operations and gained valuable business insights',
      icon: Users
    },
    {
      title: 'Graphic Designer',
      company: 'E-commerce Company',
      description: 'Transitioned to creative role, developing visual design skills',
      icon: Award
    },
    {
      title: 'Professional Video Editor',
      company: 'Current Role',
      description: 'Specialized in professional video editing and motion graphics',
      icon: Clock
    }
  ];

  return (
    <section 
      id="about" 
      ref={aboutRef}
      className="section-padding bg-gray-50 relative overflow-hidden"
    >
      {/* Background Illustrations with Animations */}
      <div className="absolute inset-0 pointer-events-none">
        <DesignIcon className="absolute top-16 right-10 w-20 h-20 opacity-8 animate-float" style={{ animationDelay: '0s', animationDuration: '6s' }} />
        <VideoIcon className="absolute bottom-20 left-10 w-16 h-16 opacity-10 animate-float" style={{ animationDelay: '2s', animationDuration: '5s' }} />
        <CodeIcon className="absolute top-1/2 right-1/4 w-12 h-12 opacity-8 animate-float" style={{ animationDelay: '1s', animationDuration: '4s' }} />
        
        {/* Floating Elements with Pulse */}
        <div className="absolute top-32 left-1/4 w-8 h-8 bg-mint/5 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-6 h-6 bg-primary/5 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-2/3 left-20 w-4 h-4 bg-mint-light/10 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        
        {/* Geometric elements with rotation */}
        <div className="absolute top-1/4 left-1/3 w-12 h-12 bg-primary/5 animate-spin" 
             style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', animationDuration: '10s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-10 h-10 bg-mint/8 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
        
        {/* Additional floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-mint/5 rounded-full animate-float"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-charcoal">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-mint rounded-full"></div>
            </div>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Currently studying at <strong className="text-primary">University of Dhaka</strong>, I bring a unique blend of business acumen and creative expertise to every project.
              </p>
              <p>
                My journey began in sales leadership at an e-commerce company, where I developed a deep understanding of conversion-focused strategies. I then transitioned to graphic design within the same company, discovering my passion for visual storytelling.
              </p>
              <p>
                Today, I work as a <strong className="text-primary">professional video editor</strong> while offering remote services in web development, digital marketing, and Meta ad management. This diverse background allows me to create solutions that not only look great but also drive real business results.
              </p>
            </div>

            <div>
              <Button 
                className="btn-hero"
                onClick={() => navigate('/resume')}
              >
                <Download className="mr-2 h-5 w-5" />
                <span>View Resume</span>
              </Button>
            </div>
          </div>

          {/* Right Content - Skills & Journey */}
          <div className="space-y-12">
            {/* Enhanced Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-charcoal">Skills & Expertise</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <skill.icon className="h-5 w-5 text-mint" />
                        <span className="font-medium text-charcoal">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-gradient-mint h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Career Journey */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-charcoal">Career Journey</h3>
              <div className="space-y-4">
                {journey.map((item, index) => (
                  <div key={index} className="portfolio-card p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-mint p-3 rounded-lg">
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-charcoal">{item.title}</h4>
                        <p className="text-mint font-medium">{item.company}</p>
                        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
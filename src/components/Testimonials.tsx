import { User, Laptop, Users, Code2, Quote } from "lucide-react";

const Testimonials = () => {
  const useCases = [
    {
      icon: Laptop,
      role: "Freelancer",
      title: "Juggling Multiple Projects",
      description: "Switching between client projects daily? Never lose context when jumping between codebases. Each workspace maintains its own history.",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Users,
      role: "Team Lead",
      title: "Context-Switching Champion",
      description: "Reviewing PRs, attending meetings, and coding between calls? Resume your work instantly after every interruption.",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: User,
      role: "Remote Developer",
      title: "Work-Life Balance Hero",
      description: "Taking breaks for family, pets, or just a walk? Come back refreshed and jump right into where you left off.",
      gradient: "from-orange-500/20 to-yellow-500/20",
    },
    {
      icon: Code2,
      role: "Open Source Contributor",
      title: "Sporadic Coding Sessions",
      description: "Contributing between work hours? Pick up exactly where you stopped, even after days of not touching the code.",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
  ];

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Use Cases</span>
          <h2 className="section-title mt-2 mb-6">
            Built for <span className="gradient-text">Every Developer</span>
          </h2>
          <p className="section-subtitle mx-auto">
            No matter your workflow, this extension adapts to help you stay productive.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`relative p-4 sm:p-6 rounded-2xl bg-gradient-to-br ${useCase.gradient} border border-border/50 group hover:border-primary/30 transition-all duration-300`}
            >
              <Quote className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 text-foreground/10" />
              
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 rounded-xl glass flex-shrink-0">
                  <useCase.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] sm:text-xs text-primary font-semibold uppercase tracking-wider">{useCase.role}</span>
                  <h3 className="font-semibold text-base sm:text-lg">{useCase.title}</h3>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

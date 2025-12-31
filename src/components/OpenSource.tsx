import { Github, Star, GitFork, Eye, Scale, Heart } from "lucide-react";

const OpenSource = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="feature-card text-center p-8 md:p-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 mb-6">
              <Github className="w-10 h-10 text-primary" />
            </div>
            
            <h2 className="section-title mb-4">
              Open Source &
              <br />
              <span className="gradient-text">Community Driven</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              This extension is proudly open source. View the code, contribute features, report issues, or just give us a star on GitHub.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <div className="stat-badge">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>Stars</span>
              </div>
              <div className="stat-badge">
                <GitFork className="w-4 h-4 text-primary" />
                <span>Forks</span>
              </div>
              <div className="stat-badge">
                <Eye className="w-4 h-4 text-accent" />
                <span>Watchers</span>
              </div>
              <div className="stat-badge">
                <Scale className="w-4 h-4 text-green-500" />
                <span>MIT License</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://github.com/vansh-121/What-Was-I-Doing-Extension"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
              <a
                href="https://github.com/vansh-121/What-Was-I-Doing-Extension/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Heart className="w-5 h-5" />
                Report an Issue
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;

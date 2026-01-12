import { Github, Star, GitFork, Eye, Scale, Heart } from "lucide-react";
import ScrollFadeIn from "./ScrollFadeIn";

const OpenSource = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollFadeIn>
            <div className="feature-card text-center p-6 sm:p-8 md:p-12">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 mb-4 sm:mb-6">
                <Github className="w-7 h-7 sm:w-10 sm:h-10 text-primary" />
              </div>
              
              <h2 className="section-title mb-3 sm:mb-4">
                Open Source &
                <br />
                <span className="gradient-text">Community Driven</span>
              </h2>
              
              <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8">
                This extension is proudly open source. View the code, contribute features, report issues, or just give us a star on GitHub.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-10">
                <div className="stat-badge text-xs sm:text-sm">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
                  <span>Stars</span>
                </div>
                <div className="stat-badge text-xs sm:text-sm">
                  <GitFork className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  <span>Forks</span>
                </div>
                <div className="stat-badge text-xs sm:text-sm">
                  <Eye className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                  <span>Watchers</span>
                </div>
                <div className="stat-badge text-xs sm:text-sm">
                  <Scale className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                  <span>MIT License</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <a
                  href="https://github.com/vansh-121/What-Was-I-Doing-Extension"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto justify-center text-sm sm:text-base"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                  View on GitHub
                </a>
                <a
                  href="https://github.com/sponsors/vansh-121"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sponsor w-full sm:w-auto justify-center text-sm sm:text-base"
                >
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                  Sponsor
                </a>
                <a
                  href="https://github.com/vansh-121/What-Was-I-Doing-Extension/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full sm:w-auto justify-center text-sm sm:text-base"
                >
                  Report an Issue
                </a>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;

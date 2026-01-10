import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollFadeIn from "./ScrollFadeIn";

const FAQ = () => {
  const faqs = [
    {
      question: "Does this extension slow down VS Code?",
      answer: "No! The extension uses minimal resources and runs efficiently in the background. It's designed to have zero impact on your editing performance.",
    },
    {
      question: "Is my data stored anywhere?",
      answer: "All data is stored locally on your machine. Nothing is sent to external servers. Your privacy is our priority.",
    },
    {
      question: "Can I customize what information is tracked?",
      answer: "Yes! You can exclude specific file patterns (like node_modules or .git) and customize TODO keywords through the extension settings.",
    },
    {
      question: "Does it work with all programming languages?",
      answer: "Yes! The extension works with any language supported by VS Code, including JavaScript, TypeScript, Python, Java, Go, Rust, and many more.",
    },
    {
      question: "How is this different from VS Code's built-in file history?",
      answer: "This extension tracks your work context (function names, TODOs, exact position) and automatically prompts you when returning from breaks. It's about resuming your thought process, not just file changes.",
    },
    {
      question: "Can I use this across multiple workspaces?",
      answer: "Yes! Each workspace maintains its own separate history, so your contexts stay organized per project.",
    },
    {
      question: "What happens if I disable the auto-popup?",
      answer: "You can still manually access your context history using the commands or status bar icon. The extension continues to track context even without auto-popups.",
    },
    {
      question: "Is this extension free?",
      answer: "Yes! It's completely free and open-source under the MIT license. You can use it, modify it, and contribute to it on GitHub.",
    },
  ];

  return (
    <section id="faq" className="section-padding relative">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-[80px] sm:blur-[120px] -z-10" />
      
      <div className="container mx-auto px-3 sm:px-4">
        <ScrollFadeIn className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="section-title mt-2 mb-4 sm:mb-6">
            Frequently Asked
            <br />
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle mx-auto px-2 sm:px-0">
            Got questions? We've got answers. If you can't find what you're looking for, open an issue on GitHub.
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="feature-card border-border/50 px-3 sm:px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors py-3 sm:py-6">
                  <span className="font-semibold text-sm sm:text-base">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-3 sm:pb-6 text-xs sm:text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollFadeIn>
      </div>
    </section>
  );
};

export default FAQ;

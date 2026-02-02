import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this safe?",
    answer: "Yes. Everything is gentle and guided with care. You are always in control, and we move at your pace.",
    symbol: "◇"
  },
  {
    question: "Do I need prior experience?",
    answer: "No. Beginners are welcome — simply come as you are.",
    symbol: "✧"
  },
  {
    question: "How long is a session?",
    answer: "Sessions usually last between 60–90 minutes.",
    symbol: "☽"
  },
  {
    question: "What should I prepare?",
    answer: "Wear comfortable clothes, bring water, and allow yourself a little quiet time afterward if possible.",
    symbol: "❋"
  },
  {
    question: "Is this medical treatment?",
    answer: "No. This work supports your well-being and does not replace medical or psychological care.",
    symbol: "☆"
  }
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 md:py-44" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center mb-20 font-medium tracking-wide text-cosmic-violet"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Accordion type="single" collapsible className="space-y-5">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <AccordionItem 
                    value={`item-${index}`}
                    className="glass-panel px-8 border-none overflow-hidden"
                  >
                    <AccordionTrigger className="font-display text-lg text-foreground hover:no-underline hover:text-cosmic-violet py-6 tracking-wide">
                      <span className="flex items-center gap-4">
                        <span className="text-cosmic-violet">{faq.symbol}</span>
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground font-body pb-6 text-lg leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

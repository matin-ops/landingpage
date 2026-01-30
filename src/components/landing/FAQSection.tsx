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
    answer: "Yes. Everything is gentle and guided with care. You are always in control, and we move at your pace."
  },
  {
    question: "Do I need prior experience?",
    answer: "No. Beginners are welcome — simply come as you are."
  },
  {
    question: "How long is a session?",
    answer: "Sessions usually last between 60–90 minutes."
  },
  {
    question: "What should I prepare?",
    answer: "Wear comfortable clothes, bring water, and allow yourself a little quiet time afterward if possible."
  },
  {
    question: "Is this medical treatment?",
    answer: "No. This work supports your well-being and does not replace medical or psychological care."
  }
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl text-center mb-16 font-light"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="glass-panel px-6 border-none"
                >
                  <AccordionTrigger className="font-display text-lg text-foreground hover:no-underline hover:text-sage-deep py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-light pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  const faqs = [
    {
      question: "Can I get an early check-in?",
      answer: "Early check-in is subject to availability. Please contact the hostel team in advance.",
    },
    {
      question: "Is there food available in the hostel?",
      answer: "Yes, meals and snacks are available at the hostel café or common kitchen.",
    },
    {
      question: "Are guests/outsiders allowed?",
      answer: "Only registered guests are allowed in the dorm areas. Visitors are permitted in common spaces during specific hours.",
    },
    {
      question: "Are there events at the hostel?",
      answer: "Yes, the hostel organizes regular events, activities, and social gatherings for guests.",
    },
    {
      question: "Are there discounts for long stays?",
      answer: "Yes, we provide special discounts for long-term stays. Contact the reception for details.",
    },
    {
      question: "Is Wi-Fi available?",
      answer: "Yes, free high-speed Wi-Fi is available throughout the property.",
    },
    {
      question: "Do you have lockers for valuables?",
      answer: "Yes, secure lockers are provided in the dorms for your valuables.",
    },
    {
      question: "Is the dorm safe?",
      answer: "Yes, the dorms are safe and monitored. Lockers are also available for personal belongings.",
    },
    {
      question: "Will my group/friends get the same dorm?",
      answer: "We try our best to allocate the same dorm for groups, subject to availability.",
    },
    {
      question: "Can I leave my luggage at the hostel after checkout until evening?",
      answer: "Yes, we offer luggage storage facilities after checkout.",
    },
    {
      question: "Who do I contact if I have a query?",
      answer: "You can reach out to the reception desk or contact the hostel support team via phone/email.",
    },
  ];
  
  
  const FAQSection = () => {
    return (
      <section className="container mx-auto px-4 py-12 border-t border-border">
        <h3 className="text-3xl font-bold mb-8">Frequently Asked Questions</h3>
  
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    );
  };
  
  export default FAQSection;
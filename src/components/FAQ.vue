<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What types of software development services does Hashvels offer?",
    answer:
      "Hashvels provides bespoke software solutions, including web and mobile app development, full-stack projects, REST API integrations, and AI-driven applications using modern frameworks for optimal performance.",
    value: "item-1",
  },
  {
    question: "How does Hashvels ensure the security of our applications?",
    answer:
      "We implement enterprise-grade security measures, including robust encryption, secure coding practices, and regular security audits to protect your data and applications from potential threats.",
    value: "item-2",
  },
  {
    question: "Can Hashvels develop cross-platform applications?",
    answer:
      "Yes, we specialize in creating seamless applications that work flawlessly across web, mobile, and desktop platforms, ensuring a consistent and high-quality user experience.",
    value: "item-3",
  },
  {
    question: "What is the typical timeline for a software project?",
    answer:
      "Project timelines vary based on complexity, but we work closely with clients to define clear milestones. A typical mid-sized project takes 30 to 90 Days, with iterative deliveries to ensure alignment with your goals.",
    value: "item-4",
  },
  {
    question: "Does Hashvels provide ongoing support and maintenance?",
    answer:
      "Absolutely. We offer 24/7 dedicated support, proactive maintenance, and regular updates to ensure your software remains secure, scalable, and up-to-date with evolving needs.",
    value: "item-5",
  },
];

const isVisible = ref(false);

onMounted(() => {
  isVisible.value = true;

  // Add subtle 3D tilt effect on accordion items
  const items = document.querySelectorAll('.accordion-item');
  items.forEach((item) => {
    item.addEventListener('mousemove', (e: any) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const tiltX = (centerY - y) / 40;
      const tiltY = (x - centerX) / 40;
      (item as HTMLElement).style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
    });
    item.addEventListener('mouseleave', () => {
      (item as HTMLElement).style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
  });
});
</script>

<template>
  <section
    id="faq"
    class="container md:w-[700px] py-24 sm:py-32 relative overflow-hidden bg-background"
  >
    <div class="text-center mb-12 relative z-10">
      <h2
        class="text-lg text-primary tracking-widest uppercase font-mono transition-all duration-800 ease-out"
        :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-8': !isVisible }"
      >
        FAQs
      </h2>
      <h2
        class="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text text-transparent transition-all duration-800 delay-200 ease-out"
        :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-8': !isVisible }"
      >
        Common Questions
      </h2>
    </div>

    <Accordion
      type="single"
      collapsible
      class="AccordionRoot bg-muted/10 dark:bg-card/80 backdrop-blur-md border border-primary/15 rounded-2xl shadow-md"
    >
      <AccordionItem
        v-for="{ question, answer, value } in FAQList"
        :key="value"
        :value="value"
        class="accordion-item border-b border-primary/10 last:border-b-0 transition-all duration-500 ease-out hover:bg-primary/5"
      >
        <AccordionTrigger
          class="text-left text-gray-900 dark:text-gray-100 font-semibold px-6 py-4 hover:text-primary transition-all duration-300"
        >
          {{ question }}
        </AccordionTrigger>
        <AccordionContent
          class="text-muted-foreground px-6 py-4"
        >
          {{ answer }}
        </AccordionContent>
      </AccordionItem>
    </Accordion>

    <h3
      class="font-medium mt-6 text-center text-gray-900 dark:text-gray-100 transition-all duration-800 delay-300 ease-out"
      :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-8': !isVisible }"
    >
      Still have questions?
      <a
        href="#contact"
        class="text-primary underline hover:text-[#D247BF] transition-all duration-300"
      >
        Contact us
      </a>
    </h3>

    <!-- Subtle background decorative elements -->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div
        class="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-primary/15 to-[#D247BF]/15 rounded-full filter blur-2xl animate-pulse opacity-60"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-r from-[#D247BF]/15 to-primary/15 rounded-full filter blur-2xl animate-pulse animation-delay-2000 opacity-60"
      ></div>
    </div>
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");

section {
  font-family: "Inter", sans-serif;
}

.accordion-item {
  transition: transform 0.4s ease-out, background-color 0.4s ease-out;
  transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
}

.accordion-item:hover {
  transform: perspective(1000px) rotateX(1deg) rotateY(1deg) scale(1.02);
}

.animate-pulse {
  animation: pulse 10s infinite ease-in-out;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.15);
    opacity: 0.4;
  }
  100% {
    transform: scale(1);
    opacity: 0.6;
  }
}
</style>
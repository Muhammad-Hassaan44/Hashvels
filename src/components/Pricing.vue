<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-vue-next";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  originalPrice: number;
  discountedPrice: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Starter",
    popular: PopularPlan.NO,
    originalPrice: 149,
    discountedPrice: 99,
    description:
      "Ideal for small businesses seeking professional web development to establish a strong online presence.",
    buttonText: "Get Started",
    benefitList: [
      "Custom Web Applications",
      "Responsive & Adaptive Design",
      "Dynamic & Interactive Websites",
      "E-commerce Platforms",
      "Continuous Maintenance & Updates",
    ],
  },
  {
    title: "Professional",
    popular: PopularPlan.YES,
    originalPrice: 299,
    discountedPrice: 199,
    description:
      "Perfect for growing companies needing advanced technical expertise and robust development solutions.",
    buttonText: "Get Started",
    benefitList: [
      "Laravel, PHP & Node.js Development",
      "Database Architecture (MySQL, MongoDB)",
      "Frontend with Vue.js, React, HTML/CSS",
      "API Development & Third-Party Integration",
      "Performance & Security Optimization",
    ],
  },
  {
    title: "Enterprise",
    popular: PopularPlan.NO,
    originalPrice: 499,
    discountedPrice: 349,
    description:
      "Comprehensive solutions for large organizations requiring bespoke software and strategic consulting.",
    buttonText: "Contact Us",
    benefitList: [
      "Bespoke Software Development",
      "Strategic Project Planning",
      "Cloud Migration & Scalability",
      "Cybersecurity Audits & Compliance",
      "AI & Machine Learning Integration",
    ],
  },
];

const isVisible = ref(false);

onMounted(() => {
  isVisible.value = true;

  // Add subtle 3D tilt effect on cards
  const cards = document.querySelectorAll('.pricing-card');
  cards.forEach((card) => {
    card.addEventListener('mousemove', (e: any) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const tiltX = (centerY - y) / 30;
      const tiltY = (x - centerX) / 30;
      (card as HTMLElement).style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      (card as HTMLElement).style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
  });
});
</script>

<template>
  <section
    id="pricing"
    class="container py-24 sm:py-32 relative overflow-hidden bg-background"
  >
    <div class="text-center mb-12 relative z-10">
      <h2
        class="text-lg text-primary tracking-widest uppercase font-mono transition-all duration-800 ease-out"
        :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-8': !isVisible }"
      >
        Pricing
      </h2>
      <h2
        class="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text text-transparent transition-all duration-800 delay-200 ease-out"
        :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-8': !isVisible }"
      >
        Unlock Your Software Potential
      </h2>
      <h3
        class="md:w-1/2 mx-auto text-xl text-muted-foreground mt-4 transition-all duration-800 delay-300 ease-out"
        :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-8': !isVisible }"
      >
        Tailored plans for businesses of all sizes, delivering innovative web, technical, and consulting solutions with expert support.
      </h3>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 relative z-10">
      <Card
        v-for="{ title, popular, originalPrice, discountedPrice, description, buttonText, benefitList } in plans"
        :key="title"
        class="pricing-card bg-muted/10 dark:bg-card/80 backdrop-blur-md border border-primary/15 shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 ease-out"
        :class="{
          'lg:scale-[1.05] border-primary/30 shadow-primary/30': popular === PopularPlan.YES,
        }"
      >
        <CardHeader>
          <div class="flex justify-between items-center">
            <CardTitle class="text-2xl text-gray-900 dark:text-gray-100">{{ title }}</CardTitle>
            <span
              v-if="popular === PopularPlan.YES"
              class="bg-gradient-to-r from-primary to-[#D247BF] text-white text-xs font-semibold px-3 py-1 rounded-full"
            >
              Most Popular
            </span>
          </div>
          <CardDescription class="mt-2 text-muted-foreground">{{ description }}</CardDescription>
          <div class="mt-4">
            <span class="text-lg line-through text-muted-foreground">${{ originalPrice }}</span>
            <span class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#D247BF] ml-2">${{ discountedPrice }}</span>
            <span class="text-muted-foreground"> /month</span>
          </div>
        </CardHeader>

        <CardContent class="flex">
          <div class="space-y-4">
            <span
              v-for="benefit in benefitList"
              :key="benefit"
              class="flex items-center"
            >
              <Check class="size-5 text-primary mr-3 transition-all duration-300 hover:text-[#D247BF]" />
              <h3 class="text-gray-900 dark:text-gray-100">{{ benefit }}</h3>
            </span>
          </div>
        </CardContent>

        <CardFooter>
          <Button
            :variant="popular === PopularPlan.YES ? 'default' : 'secondary'"
            class="w-full bg-gradient-to-r from-primary to-[#D247BF] text-white hover:from-[#D247BF] hover:to-primary transition-all duration-300"
          >
            {{ buttonText }}
          </Button>
        </CardFooter>
      </Card>
    </div>

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

.pricing-card {
  transition: transform 0.4s ease-out, box-shadow 0.4s ease-out;
  transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
}

.pricing-card:hover {
  transform: perspective(1000px) rotateX(2deg) rotateY(2deg) scale(1.02) translateY(-4px);
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
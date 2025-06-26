<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Code,
  Lightbulb,
} from "lucide-vue-next";

interface ServiceProps {
  title: string;
  icon: string;
  items: string[];
  pro: boolean;
}

const services: ServiceProps[] = [
  {
    title: "Web Development",
    icon: "globe",
    items: [
      "Custom Web Applications",
      "Responsive & Adaptive Design",
      "Dynamic & Interactive Websites",
      "E-commerce Platforms",
      "Continuous Maintenance & Updates",
    ],
    pro: false,
  },
  {
    title: "Technical Expertise",
    icon: "code",
    items: [
      "Laravel, PHP & Node.js Development",
      "Database Architecture (MySQL, MongoDB)",
      "Frontend with Vue.js, React, HTML/CSS",
      "API Development & Third-Party Integration",
      "Performance & Security Optimization",
    ],
    pro: true,
  },
  {
    title: "Consulting & Solutions",
    icon: "lightbulb",
    items: [
      "Bespoke Software Development",
      "Strategic Project Planning",
      "Cloud Migration & Scalability",
      "Cybersecurity Audits & Compliance",
      "AI & Machine Learning Integration",
    ],
    pro: true,
  },
];

const iconMap: Record<
  string,
  | typeof Globe
  | typeof Code
  | typeof Lightbulb
> = {
  globe: Globe,
  code: Code,
  lightbulb: Lightbulb,
};

const isVisible = ref(false);

onMounted(() => {
  isVisible.value = true;
});
</script>

<template>
  <section
    id="services"
    class="container py-16 md:py-24 relative overflow-hidden bg-background"
  >
    <div class="text-center space-y-6 mb-12">
      <h2 
        class="text-lg text-primary tracking-widest uppercase font-semibold transition-all duration-1000"
        :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-10': !isVisible }"
      >
        Our Services
      </h2>

      <h2 
        class="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#D247BF] via-[#FF6B6B] to-primary bg-clip-text text-transparent transition-all duration-1000 delay-200"
        :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-10': !isVisible }"
      >
        Powering Your Digital Future
      </h2>

      <h3 
        class="md:w-2/3 mx-auto text-lg md:text-xl text-muted-foreground font-medium transition-all duration-1000 delay-300"
        :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-10': !isVisible }"
      >
        
      </h3>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card
        v-for="(service, index) in services"
        :key="service.title"
        class="relative bg-background/50 dark:bg-card/80 backdrop-blur-lg border border-primary/20 rounded-2xl overflow-hidden transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
        :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-10': !isVisible }"
        :style="{ transitionDelay: `${index * 150}ms` }"
      >
        <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
        <CardHeader class="flex flex-col items-start relative z-10">
          <div class="flex items-center mb-4">
            <div
              class="bg-primary/10 p-4 rounded-full ring-8 ring-primary/5 transition-all duration-300 hover:ring-primary/10"
            >
              <component
                :is="iconMap[service.icon]"
                class="size-8 text-primary transition-all duration-300 hover:text-primary/80"
              />
            </div>
            <Badge
              v-if="service.pro"
              variant="secondary"
              class="absolute top-4 right-4 bg-primary/20 text-primary font-semibold px-3 py-1 rounded-full"
            >
              PRO
            </Badge>
          </div>
          <CardTitle class="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-all duration-300">
            {{ service.title }}
          </CardTitle>
        </CardHeader>
        <CardContent class="relative z-10">
          <ul class="text-muted-foreground space-y-3">
            <li
              v-for="(item, i) in service.items"
              :key="i"
              class="flex items-start text-base transition-all duration-300 hover:text-primary/80"
            >
              <span class="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
              {{ item }}
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>

    <!-- Background decorative elements -->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div 
        class="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl animate-blob"
      ></div>
      <div 
        class="absolute bottom-0 right-0 w-80 h-80 bg-[#D247BF]/5 rounded-full filter blur-3xl animate-blob animation-delay-2000"
      ></div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

section {
  font-family: 'Inter', sans-serif;
}

.animate-blob {
  animation: blob 8s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(20px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-15px, 15px) scale(0.95);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}
</style>
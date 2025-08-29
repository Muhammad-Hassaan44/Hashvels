<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Code, Lightbulb } from "lucide-vue-next";

// Define the ServiceProps interface
interface ServiceProps {
  title: string;
  icon: string;
  items: string[];
  pro: boolean;
}

// Define services list
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
      "Frontend with Vue.js",
      "React/Next.js + Tailwind",
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

// Define icon map with explicit typing
const iconMap: Record<string, any> = {
  globe: Globe,
  code: Code,
  lightbulb: Lightbulb,
};

const isVisible = ref(false);
const observer = ref<IntersectionObserver | null>(null);

onMounted(() => {
  // IntersectionObserver for scroll-triggered animations
  if (typeof window !== "undefined" && "IntersectionObserver" in window) {
    const section = document.getElementById("services");
    if (section) {
      observer.value = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            isVisible.value = true;
            observer.value?.disconnect(); // Stop observing once visible
          }
        },
        { threshold: 0.2 }
      );
      observer.value.observe(section);
    }
  } else {
    // Fallback: Show content immediately if IntersectionObserver is not supported
    isVisible.value = true;
  }

  // Subtle 3D tilt effect on cards
  if (typeof window !== "undefined") {
    const cards = document.querySelectorAll<HTMLElement>(".service-card");
    cards.forEach((card) => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const tiltX = (centerY - y) / 40; // Reduced tilt sensitivity
        const tiltY = (x - centerX) / 40;
        card.style.transform = `perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02) translateY(-2px)`;
      };

      const handleMouseLeave = () => {
        card.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1) translateY(0)";
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      // Clean up event listeners on component unmount
      onUnmounted(() => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    });
  }
});

onUnmounted(() => {
  observer.value?.disconnect();
});
</script>

<template>
  <section id="services" class="container py-16 md:py-24 relative overflow-hidden bg-background">
    <div class="text-center space-y-6 mb-12 relative z-10">
      <h2
        class="text-lg text-primary tracking-widest uppercase font-semibold transition-all duration-1200 ease-linear"
        :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-16': !isVisible }"
      >
        Our Services
      </h2>
      <h2
        class="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#D247BF] via-[#FF6B6B] to-primary bg-clip-text text-transparent transition-all duration-1200 delay-300 ease-linear"
        :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-16': !isVisible }"
      >
        Powering Your Digital Future
      </h2>
      <h3
        class="md:w-2/3 mx-auto text-lg md:text-xl text-muted-foreground font-medium transition-all duration-1200 delay-600 ease-linear"
        :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-16': !isVisible }"
      >
        Discover our comprehensive suite of services designed to elevate your business with cutting-edge technology and strategic solutions.
      </h3>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
      <div
        v-for="(service, index) in services"
        :key="service.title"
        :class="{ 'opacity-100 translate-x-0': isVisible, 'opacity-0': !isVisible, 'translate-x-24': index % 2 === 0 && !isVisible, '-translate-x-24': index % 2 !== 0 && !isVisible }"
        :style="{ transitionDelay: `${index * 300}ms`, transitionDuration: '1200ms', transitionTimingFunction: 'ease-in-out' }"
      >
        <Card
          class="service-card relative bg-background/50 dark:bg-card/80 backdrop-blur-lg border border-primary/20 rounded-2xl overflow-hidden transition-all duration-600 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-600"></div>
          <CardHeader class="flex flex-col items-start relative z-10">
            <div class="flex items-center mb-4">
              <div
                class="bg-primary/10 p-4 rounded-full ring-8 ring-primary/5 transition-all duration-600 ease-in-out hover:ring-primary/10"
              >
                <component
                  :is="iconMap[service.icon]"
                  class="size-8 text-primary transition-all duration-600 ease-in-out hover:text-primary/80"
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
            <CardTitle class="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-all duration-600 ease-in-out">
              {{ service.title }}
            </CardTitle>
          </CardHeader>
          <CardContent class="relative z-10">
            <ul class="text-muted-foreground space-y-3">
              <li
                v-for="(item, i) in service.items"
                :key="i"
                class="flex items-start text-base transition-all duration-600 ease-in-out hover:text-primary/80"
              >
                <span class="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                {{ item }}
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>

    <!-- Background decorative elements -->
    <div class="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        class="absolute top-0 left-0 w-80 h-80 bg-gradient-to-r from-primary/10 to-[#D247BF]/10 rounded-full filter blur-3xl animate-blob-parallax"
        style="transform: translateZ(0)"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-[#D247BF]/10 to-primary/10 rounded-full filter blur-3xl animate-blob-parallax animation-delay-4000"
        style="transform: translateZ(0)"
      ></div>
    </div>
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");

section {
  font-family: "Inter", sans-serif;
}

.animate-blob-parallax {
  animation: blob-parallax 16s ease-in-out infinite;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

@keyframes blob-parallax {
  0% {
    transform: translate(0px, 0px) scale(1) translateZ(0);
  }
  33% {
    transform: translate(20px, -30px) scale(1.1) translateZ(0);
  }
  66% {
    transform: translate(-15px, 20px) scale(0.95) translateZ(0);
  }
  100% {
    transform: translate(0px, 0px) scale(1) translateZ(0);
  }
}

.service-card {
  transition-property: transform, box-shadow;
  transition-duration: 0.6s;
  transition-timing-function: ease-in-out;
  transform: perspective(1200px) rotateX(0deg) rotateY(0deg);
}

.service-card:hover {
  transform: perspective(1200px) rotateX(1deg) rotateY(1deg) scale(1.02) translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}
</style>
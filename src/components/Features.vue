<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ref, onMounted, onUnmounted } from "vue";
import { Code, Smartphone, Brain, Headphones, Lock, Rocket } from "lucide-vue-next";

// Define the FeaturesProps interface
interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

// Define feature list
const featureList: FeaturesProps[] = [
  {
    icon: "code",
    title: "Custom Development",
    description:
      "Bespoke software solutions tailored to your business needs, built with modern frameworks for optimal performance.",
  },
  {
    icon: "smartphone",
    title: "Cross-Platform Compatibility",
    description:
      "Seamless applications that work flawlessly across web, mobile, and desktop, ensuring a consistent user experience.",
  },
  {
    icon: "brain",
    title: "AI & Machine Learning",
    description:
      "Leverage cutting-edge AI and ML to automate processes, gain insights, and enhance decision-making.",
  },
  {
    icon: "headphones",
    title: "Dedicated Support",
    description:
      "24/7 expert support to ensure your software runs smoothly, with proactive maintenance and updates.",
  },
  {
    icon: "lock",
    title: "Robust Security",
    description:
      "Enterprise-grade security measures to protect your data and applications from threats.",
  },
  {
    icon: "rocket",
    title: "Scalable Architecture",
    description:
      "Future-proof solutions designed to scale with your business, from startups to global enterprises.",
  },
];

// Define icon map with explicit typing
const iconMap: Record<string, any> = {
  code: Code,
  smartphone: Smartphone,
  brain: Brain,
  headphones: Headphones,
  lock: Lock,
  rocket: Rocket,
};

const isVisible = ref(false);
const observer = ref<IntersectionObserver | null>(null);

onMounted(() => {
  // IntersectionObserver for scroll-triggered animations
  if (typeof window !== "undefined" && "IntersectionObserver" in window) {
    const section = document.getElementById("features");
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

  // 3D tilt effect on cards
  if (typeof window !== "undefined") {
    const cards = document.querySelectorAll<HTMLElement>(".feature-card");
    cards.forEach((card) => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const tiltX = (centerY - y) / 30;
        const tiltY = (x - centerX) / 30;
        card.style.transform = `perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.03) translateY(-4px)`;
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
  <section id="features" class="container py-16 md:py-24 relative overflow-hidden bg-background">
    <div class="text-center space-y-6 relative z-10">
      <h2
        class="text-lg text-primary tracking-widest uppercase font-mono transition-all duration-800 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-12': !isVisible }"
      >
        Features
      </h2>
      <h2
        class="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text text-transparent transition-all duration-800 delay-100 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-12': !isVisible }"
      >
        What Sets Hashvels Apart
      </h2>
      <h3
        class="md:w-3/4 mx-auto text-lg md:text-xl text-muted-foreground transition-all duration-800 delay-200 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-12': !isVisible }"
      >
        At Hashvels Technologies, we deliver innovative, scalable, and secure software solutions that empower your business to thrive in a digital world.
      </h3>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 relative z-10">
      <div
        v-for="({ icon, title, description }, index) in featureList"
        :key="title"
        :class="{ 'opacity-100 translate-x-0': isVisible, 'opacity-0': !isVisible, 'translate-x-20': index % 2 === 0 && !isVisible, '-translate-x-20': index % 2 !== 0 && !isVisible }"
        :style="{ transitionDelay: `${index * 150}ms`, transitionDuration: '800ms', transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)' }"
      >
        <Card
          class="feature-card h-full bg-muted/10 dark:bg-card/80 backdrop-blur-md border border-primary/15 shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2"
        >
          <CardHeader class="flex justify-center items-center">
            <div
              class="bg-gradient-to-r from-primary/20 to-[#D247BF]/20 p-3 rounded-full ring-8 ring-primary/10 mb-4 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:ring-primary/20 hover:scale-110"
            >
              <component
                :is="iconMap[icon]"
                class="size-6 text-primary transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[#D247BF]"
              />
            </div>
            <CardTitle
              class="text-xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#D247BF] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]"
            >
              {{ title }}
            </CardTitle>
          </CardHeader>
          <CardContent class="text-muted-foreground text-center text-base px-6">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>

    <!-- Subtle background decorative elements -->
    <div class="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        class="absolute top-0 left-0 w-80 h-80 bg-gradient-to-r from-primary/15 to-[#D247BF]/15 rounded-full filter blur-2xl animate-blob-parallax"
        style="transform: translateZ(0)"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-[#D247BF]/15 to-primary/15 rounded-full filter blur-2xl animate-blob-parallax animation-delay-3000"
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
  animation: blob-parallax 12s ease-in-out infinite;
}

.animation-delay-3000 {
  animation-delay: 3s;
}

@keyframes blob-parallax {
  0% {
    transform: translate(0px, 0px) scale(1) translateZ(0);
  }
  33% {
    transform: translate(30px, -40px) scale(1.15) translateZ(0);
  }
  66% {
    transform: translate(-25px, 20px) scale(0.9) translateZ(0);
  }
  100% {
    transform: translate(0px, 0px) scale(1) translateZ(0);
  }
}

.feature-card {
  transition-property: transform, box-shadow;
  transition-duration: 0.4s;
  transition-timing-function: ease, ease;
  transform: perspective(1200px) rotateX(0deg) rotateY(0deg);
}

.feature-card:hover {
  transform: perspective(1200px) rotateX(2deg) rotateY(2deg) scale(1.03) translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
</style>
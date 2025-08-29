<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ref, onMounted, onUnmounted } from "vue";
import { Sparkle, Code, Rocket, Globe } from "lucide-vue-next";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "code",
    title: "Custom Software Solutions",
    description:
      "We craft tailored software to meet your unique business needs, streamlining operations and boosting efficiency with cutting-edge technology.",
  },
  {
    icon: "rocket",
    title: "Accelerated Growth",
    description:
      "Our scalable solutions empower your business to grow rapidly, adapting to market demands and driving measurable results.",
  },
  {
    icon: "globe",
    title: "Global User Experience",
    description:
      "We design intuitive, user-centric interfaces that engage audiences worldwide, ensuring seamless interactions across platforms.",
  },
  {
    icon: "sparkle",
    title: "Innovation-Driven Development",
    description:
      "Stay ahead with our innovative approach, leveraging AI, cloud, and modern frameworks to future-proof your business.",
  },
];

const iconMap: Record<string, typeof Sparkle | typeof Code | typeof Rocket | typeof Globe> = {
  sparkle: Sparkle,
  code: Code,
  rocket: Rocket,
  globe: Globe,
};

const isVisible = ref(false);

const observer = ref<IntersectionObserver | null>(null);

onMounted(() => {
  const section = document.getElementById("benefits");
  if (section) {
    observer.value = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          isVisible.value = true;
          observer.value?.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.2 } // Trigger when 20% of section is visible
    );
    observer.value.observe(section);
  }
});

onUnmounted(() => {
  observer.value?.disconnect();
});
</script>

<template>
  <section id="benefits" class="container py-16 md:py-24 relative overflow-hidden">
    <div class="grid lg:grid-cols-2 place-items-center lg:gap-20">
      <!-- Left side content (animates from left) -->
      <div class="text-center lg:text-left space-y-6">
        <h2
          class="text-lg text-primary mb-2 tracking-widest uppercase transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          :class="{ 'opacity-100 translate-x-0': isVisible, 'opacity-0 -translate-x-20': !isVisible }"
        >
          Why Hashvels
        </h2>
        <h2
          class="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text text-transparent transition-all duration-1000 delay-100 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          :class="{ 'opacity-100 translate-x-0': isVisible, 'opacity-0 -translate-x-20': !isVisible }"
        >
          Your Path to Digital Success
        </h2>
        <p
          class="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 transition-all duration-1000 delay-200 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          :class="{ 'opacity-100 translate-x-0': isVisible, 'opacity-0 -translate-x-20': !isVisible }"
        >
          At Hashvels Technologies, we deliver innovative software solutions that transform your business, enhance user experiences, and drive sustainable growth.
        </p>
      </div>

      <!-- Right side content (animates from right with staggered effect) -->
      <div class="grid lg:grid-cols-2 gap-6 w-full mt-12 lg:mt-0">
        <Card
          v-for="({ icon, title, description }, index) in benefitList"
          :key="title"
          class="bg-muted/30 dark:bg-card hover:bg-background dark:hover:bg-background/80 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] transform hover:scale-105 hover:shadow-lg hover:shadow-primary/20 border border-primary/10 group/card"
          :style="{ transitionDelay: `${index * 150}ms` }"
          :class="{ 'opacity-100 translate-x-0': isVisible, 'opacity-0 translate-x-20': !isVisible }"
        >
          <CardHeader>
            <div class="flex justify-between items-start">
              <component
                class="size-10 text-primary transition-all duration-300 group-hover/card:text-primary/80"
                :is="iconMap[icon]"
              />
              <span
                class="text-4xl text-muted-foreground/10 font-bold transition-all duration-300 group-hover/card:text-muted-foreground/30"
              >
                0{{ index + 1 }}
              </span>
            </div>
            <CardTitle class="text-xl font-semibold mt-4 group-hover/card:text-primary transition-all duration-300">
              {{ title }}
            </CardTitle>
          </CardHeader>
          <CardContent class="text-muted-foreground text-base">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>

    <!-- Background decorative elements with parallax -->
    <div class="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        class="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-primary/10 to-[#D247BF]/10 rounded-full filter blur-3xl animate-blob-parallax"
        style="transform: translateZ(0)"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-r from-[#D247BF]/10 to-primary/10 rounded-full filter blur-3xl animate-blob-parallax animation-delay-3000"
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
  animation: blob-parallax 10s ease-in-out infinite;
}

.animation-delay-3000 {
  animation-delay: 3s;
}

@keyframes blob-parallax {
  0% {
    transform: translate(0px, 0px) scale(1) translateZ(0);
  }
  33% {
    transform: translate(25px, -35px) scale(1.15) translateZ(0);
  }
  66% {
    transform: translate(-20px, 15px) scale(0.9) translateZ(0);
  }
  100% {
    transform: translate(0px, 0px) scale(1) translateZ(0);
  }
}
</style>
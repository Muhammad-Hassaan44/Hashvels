<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface HowItWorksProps {
  badgeTitle: string;
  title: string;
  description: string;
  imageSrc: string; // Path to image
  altText: string; // Alt text for accessibility
}

const HowItWorksList: HowItWorksProps[] = [
  {
    badgeTitle: "Discover",
    title: "Understanding Your Vision",
    description:
      "We start with in-depth consultations to align our solutions with your business goals, crafting a tailored roadmap.",
    imageSrc: "/problem-solving_9551039.png",
    altText: "Illustration of a team discussing project discovery",
  },
  {
    badgeTitle: "Develop",
    title: "Crafting Your Solution",
    description:
      "Our team builds scalable software with Vue.js, Laravel, and Node.js, ensuring high performance and quality.",
    imageSrc: "/settings_11189221.png",
    altText: "Illustration of coding and software development",
  },
  {
    badgeTitle: "Deploy",
    title: "Launching Seamlessly",
    description:
      "We deploy your software with rigorous testing, cloud integration, and optimizations for speed and security.",
    imageSrc: "/startup_6562565.png",
    altText: "Illustration of a server setup for software deployment",
  },
  {
    badgeTitle: "Support",
    title: "Continuous Partnership",
    description:
      "Our 24/7 support keeps your software updated, secure, and optimized for long-term success.",
    imageSrc: "/alliances_17662475.png",
    altText: "Illustration of a support team assisting with software maintenance",
  },
];

const isVisible = ref(false);

onMounted(() => {
  isVisible.value = true;
});
</script>

<template>
  <section
    id="how-it-works"
    class="container py-16 md:py-24 relative overflow-hidden bg-background"
  >
    <div class="text-center space-y-6 mb-12">
      <h2
        class="text-lg text-primary tracking-widest uppercase font-semibold transition-all duration-1000"
        :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-10': !isVisible }"
      >
        How It Works
      </h2>

      <h2
        class="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#D247BF] via-[#FF6B6B] to-primary bg-clip-text text-transparent transition-all duration-1000 delay-200"
        :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-10': !isVisible }"
      >
        Your Journey with Hashvels
      </h2>
    </div>

    <div class="lg:w-[90%] mx-auto relative">
      <div
        v-for="({ badgeTitle, title, description, imageSrc, altText }, index) in HowItWorksList"
        :key="title"
        :class="[
          'flex flex-col lg:flex-row items-center mb-12 lg:mb-16',
          { 'lg:flex-row-reverse': index % 2 !== 0 },
        ]"
      >
        <Card
          class="h-full bg-background/50 dark:bg-card/80 backdrop-blur-lg border border-primary/20 rounded-2xl w-full lg:w-1/2 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl hover:shadow-primary/10"
          :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-10': !isVisible }"
          :style="{ transitionDelay: `${index * 150}ms` }"
        >
          <CardHeader>
            <div class="pb-4">
              <Badge
                class="bg-primary/10 text-primary font-semibold px-4 py-1.5 rounded-full transition-all duration-300 hover:bg-primary/20"
              >
                {{ badgeTitle }}
              </Badge>
            </div>
            <CardTitle class="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {{ title }}
            </CardTitle>
          </CardHeader>
          <CardContent class="text-muted-foreground text-base">
            {{ description }}
          </CardContent>
        </Card>

        <div
          class="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0 relative transition-all duration-500 hover:scale-110"
          :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-10': !isVisible }"
          :style="{ transitionDelay: `${(index * 150) + 100}ms` }"
        >
          <img
            :src="imageSrc"
            :alt="altText"
            class="w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] object-contain rounded-2xl"
          />
          <div
            :class="[
              '-z-10 absolute w-48 h-48 md:w-64 md:h-64 rounded-full bg-primary/10 dark:bg-primary/5 blur-3xl',
              { 'left-0': index % 2 === 0, 'right-0': index % 2 !== 0 },
            ]"
          ></div>
        </div>
      </div>
    </div>

    <!-- Background decorative elements -->
    <div class="absolute inset-0 -z-20 overflow-hidden">
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
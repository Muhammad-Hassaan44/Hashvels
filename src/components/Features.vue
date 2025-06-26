<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ref, onMounted } from "vue";
import { Code, Smartphone, Brain, Headphones, Lock, Rocket } from "lucide-vue-next";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

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

const iconMap: Record<
  string,
  | typeof Code
  | typeof Smartphone
  | typeof Brain
  | typeof Headphones
  | typeof Lock
  | typeof Rocket
> = {
  code: Code,
  smartphone: Smartphone,
  brain: Brain,
  headphones: Headphones,
  lock: Lock,
  rocket: Rocket,
};

const isVisible = ref(false);

onMounted(() => {
  isVisible.value = true;

  // Smooth 3D tilt effect on cards
  const cards = document.querySelectorAll('.feature-card');
  cards.forEach((card) => {
    card.addEventListener('mousemove', (e: any) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const tiltX = (centerY - y) / 25;
      const tiltY = (x - centerX) / 25;
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
    id="features"
    class="container py-16 md:py-24 relative overflow-hidden bg-background"
  >
    <div class="text-center space-y-6 relative z-10">
      <h2
        class="text-lg text-primary tracking-widest uppercase font-mono transition-all duration-800 ease-out"
        :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-8': !isVisible }"
      >
        Features
      </h2>

      <h2
        class="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text text-transparent transition-all duration-800 delay-200 ease-out"
        :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-8': !isVisible }"
      >
        What Sets Hashvels Apart
      </h2>

      <h3
        class="md:w-3/4 mx-auto text-lg md:text-xl text-muted-foreground transition-all duration-800 delay-300 ease-out"
        :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-8': !isVisible }"
      >
        At Hashvels Technologies, we deliver innovative, scalable, and secure software solutions that empower your business to thrive in a digital world.
      </h3>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 relative z-10">
      <div
        v-for="{ icon, title, description } in featureList"
        :key="title"
      >
        <Card
          class="feature-card h-full bg-muted/10 dark:bg-card/80 backdrop-blur-md border border-primary/15 shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 ease-out hover:-translate-y-2"
        >
          <CardHeader class="flex justify-center items-center">
            <div
              class="bg-gradient-to-r from-primary/20 to-[#D247BF]/20 p-3 rounded-full ring-8 ring-primary/10 mb-4 transition-all duration-400 ease-out hover:ring-primary/20 hover:scale-110"
            >
              <component
                :is="iconMap[icon]"
                class="size-6 text-primary transition-all duration-400 ease-out hover:text-[#D247BF]"
              />
            </div>

            <CardTitle class="text-xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#D247BF] transition-all duration-400 ease-out">
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

.feature-card {
  transition: transform 0.4s ease-out, box-shadow 0.4s ease-out;
  transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
}

.feature-card:hover {
  transform: perspective(1000px) rotateX(2deg) rotateY(2deg) scale(1.02) translateY(-4px);
}
</style>
<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
import { ref, onMounted } from "vue";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-vue-next";

const mode = useColorMode();
const isVisible = ref(false);

onMounted(() => {
  isVisible.value = true;
});
</script>

<template>
  <section class="container relative overflow-hidden py-20 md:py-32 min-h-[70vh] flex items-center">
    <div class="grid place-items-center lg:max-w-screen-xl gap-10 mx-auto">
      <div class="text-center space-y-8">
        <div
          class="max-w-screen-md mx-auto text-5xl md:text-7xl font-extrabold transition-all duration-1000 ease-out"
          :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-10': !isVisible }"
        >
          <h1>
            Hashvels
            <span
              class="text-transparent bg-gradient-to-r from-[#D247BF] via-[#FF6B6B] to-primary bg-clip-text animate-gradient"
            >
              Technologies
            </span>
          </h1>
        </div>

        <p
          class="max-w-screen-sm mx-auto text-xl md:text-2xl text-muted-foreground transition-all duration-1000 delay-200 ease-out"
          :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-10': !isVisible }"
        >
       Beyond services, we deliver innovation. Partner with us to turn ideas into powerful web, mobile, and AI experiences.
        </p>

        <div class="flex justify-center">
          <Button
            class="font-bold text-lg group/arrow bg-gradient-to-r from-primary to-[#D247BF] text-white hover:from-[#D247BF] hover:to-primary transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:shadow-primary/30 rounded-full py-6 px-8"
          >
            Start Your Journey
            <ArrowRight
              class="size-6 ml-3 group-hover/arrow:translate-x-3 transition-transform duration-300"
            />
          </Button>
        </div>
      </div>
    </div>

    <!-- Background decorative elements -->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div
        class="absolute top-0 left-0 w-80 h-80 bg-gradient-to-r from-primary/10 to-[#D247BF]/10 rounded-full filter blur-3xl animate-blob"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-[#D247BF]/10 to-primary/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"
      ></div>
    </div>
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");

section {
  font-family: "Inter", sans-serif;
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 6s ease infinite;
}

.animate-fade-in {
  animation: fadeIn 1.2s ease-out forwards;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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

.animate-blob {
  animation: blob 8s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
</style>
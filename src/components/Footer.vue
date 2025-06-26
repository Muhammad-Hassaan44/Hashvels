<script lang="ts" setup>
import { ref, onMounted } from "vue";
import Separator from "./ui/separator/Separator.vue";

const isVisible = ref(false);

onMounted(() => {
  isVisible.value = true;
});
</script>

<template>
  <footer
    id="footer"
    class="container py-24 sm:py-32 relative overflow-hidden bg-background"
  >
    <div
      class="p-10 bg-muted/50 dark:bg-card border border-primary/15 rounded-2xl shadow-md transition-all duration-500 ease-out hover:shadow-lg hover:shadow-primary/20"
    >
      <div
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8"
      >
        <div class="col-span-full md:col-span-1">
          <a
            href="/"
            class="flex items-center mb-4"
          >
            <img
              src="/public/H Black and white Fashion or Design studio logo.png"
              alt="Hashvels Logo"
              class="rounded-lg w-8 h-8 mr-2"
            />
            <h3
              class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#D247BF] transition-all duration-300"
              :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-8': !isVisible }"
            >
              Hashvels
            </h3>
          </a>
          <p
            class="text-muted-foreground text-sm transition-all duration-300 delay-200"
            :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-8': !isVisible }"
          >
            Empowering businesses with innovative software solutions for a digital future.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <h3
            class="font-semibold text-lg text-gray-900 dark:text-gray-100 transition-all duration-300"
            :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-8': !isVisible }"
          >
            Contact
          </h3>
          <div>
            <a
              href="https://github.com"
              target="_blank"
              class="text-muted-foreground hover:text-primary transition-all duration-300 text-sm"
            >
              Github
            </a>
          </div>
          <div>
            <a
              href="https://x.com"
              target="_blank"
              class="text-muted-foreground hover:text-primary transition-all duration-300 text-sm"
            >
              X
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              class="text-muted-foreground hover:text-primary transition-all duration-300 text-sm"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div class="flex flex-col gap-3">
          <h3
            class="font-semibold text-lg text-gray-900 dark:text-gray-100 transition-all duration-300"
            :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-8': !isVisible }"
          >
            Services
          </h3>
          <div>
            <a
              href="#features"
              class="text-muted-foreground hover:text-primary transition-all duration-300 text-sm"
            >
              Web Development
            </a>
          </div>
          <div>
            <a
              href="#features"
              class="text-muted-foreground hover:text-primary transition-all duration-300 text-sm"
            >
              Mobile Apps
            </a>
          </div>
          <div>
            <a
              href="#features"
              class="text-muted-foreground hover:text-primary transition-all duration-300 text-sm"
            >
              AI Solutions
            </a>
          </div>
        </div>

        <div class="flex flex-col gap-3">
          <h3
            class="font-semibold text-lg text-gray-900 dark:text-gray-100 transition-all duration-300"
            :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-8': !isVisible }"
          >
            Support
          </h3>
          <div>
            <a
              href="#contact"
              class="text-muted-foreground hover:text-primary transition-all duration-300 text-sm"
            >
              Contact Us
            </a>
          </div>
          <div>
            <a
              href="#faq"
              class="text-muted-foreground hover:text-primary transition-all duration-300 text-sm"
            >
              FAQ
            </a>
          </div>
          <div>
            <a
              href="#contact"
              class="text-muted-foreground hover:text-primary transition-all duration-300 text-sm"
            >
              Feedback
            </a>
          </div>
        </div>
      </div>

      <Separator class="my-6 border-primary/20" />
      <section>
        <h3
          class="text-center text-muted-foreground text-sm transition-all duration-300"
          :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-8': !isVisible }"
        >
          © 2025 Designed and developed by
          <a
            target="_blank"
            href="https://github.com/Muhammad-Hassaan44"
            class="text-primary hover:text-[#D247BF] transition-all duration-300 border-primary hover:border-b-2"
          >
            Hashvels Technologies
          </a>
        </h3>
      </section>
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
  </footer>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");

footer {
  font-family: "Inter", sans-serif;
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
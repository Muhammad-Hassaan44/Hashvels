<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-vue-next";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150",
    name: "Michael Chen",
    userName: "Software Engineer",
    comment: "Hashvels' Vue.js expertise streamlined our development process significantly.",
    rating: 5.0,
  },
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150",
    name: "Emily Rodriguez",
    userName: "DevOps Lead",
    comment: "Their cloud solutions were robust and easy to integrate into our existing systems.",
    rating: 4.7,
  },
  {
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=150",
    name: "David Patel",
    userName: "Startup Founder",
    comment: "Hashvels delivered a fast, user-friendly app that boosted our customer engagement.",
    rating: 4.9,
  },
  {
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150",
    name: "Sarah Kim",
    userName: "Product Designer",
    comment: "The team’s attention to detail and modern UI design elevated our product’s appeal.",
    rating: 4.8,
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150",
    name: "James Carter",
    userName: "IT Director",
    comment: "Their scalable backend solutions ensured our platform handled high traffic seamlessly.",
    rating: 5.0,
  },
  {
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150",
    name: "Laura Nguyen",
    userName: "Marketing Manager",
    comment: "Hashvels’ solutions helped us launch a campaign with flawless performance.",
    rating: 4.6,
  },
];

const isSectionMounted = ref(false);
const currentIndex = ref(0);
const isPaused = ref(false);
let slideInterval: ReturnType<typeof setInterval>;


const totalSlides = computed(() => Math.ceil(reviewList.length / 3));

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % totalSlides.value;
};

const goToSlide = (index: number) => {
  currentIndex.value = index;
};

const startSlider = () => {
  slideInterval = setInterval(() => {
    if (!isPaused.value) {
      nextSlide();
    }
  }, 5000);
};

const pauseSlider = () => {
  isPaused.value = true;
};

const resumeSlider = () => {
  isPaused.value = false;
};

onMounted(() => {
  console.log("TestimonialsSection mounted");
  isSectionMounted.value = true;
  startSlider();

  const cards = document.querySelectorAll('.testimonial-card');
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

onUnmounted(() => {
  if (slideInterval) {
    clearInterval(slideInterval);
  }
});
</script>

<template>
  <section
    v-if="isSectionMounted"
    id="testimonials"
    class="container py-16 md:py-24 bg-background relative overflow-hidden"
    @mouseenter="pauseSlider"
    @mouseleave="resumeSlider"
  >
    <div class="text-center space-y-6 mb-12 relative z-10">
      <h2
        class="text-lg text-primary tracking-widest uppercase font-semibold transition-all duration-800 ease-out"
        :class="{ 'opacity-100 translate-y-0': isSectionMounted, 'opacity-0 translate-y-8': !isSectionMounted }"
      >
        Testimonials
      </h2>
      <h2
        class="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#D247BF] via-[#FF6B6B] to-primary bg-clip-text text-transparent transition-all duration-800 delay-200 ease-out"
        :class="{ 'opacity-100 translate-y-0': isSectionMounted, 'opacity-0 translate-y-8': !isSectionMounted }"
      >
        Hear What Our Clients Say
      </h2>
    </div>

    <div class="relative">
      <div class="flex overflow-hidden">
        <div
          class="flex transition-transform duration-700 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div
            v-for="(_, groupIndex) in totalSlides"
            :key="groupIndex"
            class="min-w-full flex justify-center gap-8"
          >
            <Card
              v-for="review in reviewList.slice(groupIndex * 3, (groupIndex + 1) * 3)"
              :key="review.name"
              class="testimonial-card flex-1 max-w-sm bg-background/50 dark:bg-card/80 backdrop-blur-lg border border-primary/20 rounded-2xl shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 ease-out"
            >
              <CardContent class="pt-6 pb-4">
                <div class="flex gap-1 pb-4 justify-center">
                  <Star
                    v-for="i in 5"
                    :key="i"
                    class="size-4"
                    :class="i <= Math.round(review.rating) ? 'fill-primary text-primary' : 'fill-gray-300 text-gray-300'"
                  />
                </div>
                <p class="text-gray-900 dark:text-gray-100 italic text-center">“{{ review.comment }}”</p>
              </CardContent>
              <CardHeader class="pt-0">
                <div class="flex flex-row items-center gap-4 justify-center">
                  <Avatar>
                    <AvatarImage :src="review.image" :alt="`Avatar of ${review.name}`" />
                    <AvatarFallback>{{ review.name[0] }}</AvatarFallback>
                  </Avatar>
                  <div class="flex flex-col text-center">
                    <CardTitle class="text-lg text-gray-900 dark:text-gray-100">{{ review.name }}</CardTitle>
                    <CardDescription class="text-muted-foreground">{{ review.userName }}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>

      <!-- Navigation Dots -->
      <div class="flex justify-center mt-6 space-x-2">
        <button
          v-for="(_, index) in totalSlides"
          :key="index"
          class="w-3 h-3 rounded-full transition-all duration-300"
          :class="index === currentIndex ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-primary/50'"
          @click="goToSlide(index)"
        ></button>
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
  <div v-else class="text-center p-8 text-red-500">
    Error: Testimonials section failed to load. Check console for details.
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");

section {
  font-family: "Inter", sans-serif;
}

.testimonial-card {
  transition: transform 0.4s ease-out, box-shadow 0.4s ease-out;
  transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
}

.testimonial-card:hover {
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
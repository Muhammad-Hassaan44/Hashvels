<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import LinkedInIcon from "@/icons/LinkedInIcon.vue";
import GithubIcon from "@/icons/GithubIcon.vue";
import XIcon from "@/icons/XIcon.vue";

interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "public/me .jpg",
    firstName: "Muhammad",
    lastName: "Hassaan",
    positions: ["Full Stack Developer", "Creator Of This Website"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/muhammad-hassaan-7a69082b8",
      },
      {
        name: "Github",
        url: "https://github.com/Muhammad-Hassaan44",
      },
    
    ],
  },
  {
    imageUrl:
      "public/hussain.jpg",
    firstName: "Muhammad",
    lastName: "Hussain",
    positions: [" Full Stack Developer"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/muhammad-hussain-78b625254",
      },
      {
        name: "Github",
        url: "https://github.com/HussainAnjan5",
      },
     
    ],
  },
  {
    imageUrl:
      "public/hassnain.jpg",
    firstName: "Hassnain",
    lastName: "Ahmed",
    positions: ["Full Stack Developer"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/halodhii",
      },
      {
        name: "Github",
        url: "https://github.com/Techistics",
      },
    ],
  },
];

const socialIcon = (socialName: string) => {
  switch (socialName) {
    case "LinkedIn":
      return LinkedInIcon;
    case "Github":
      return GithubIcon;
    case "X":
      return XIcon;
    default:
      return null;
  }
};

const isVisible = ref(false);

onMounted(() => {
  isVisible.value = true;

  // Add subtle 3D tilt effect on cards
  const cards = document.querySelectorAll('.team-card');
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
    id="team"
    class="container lg:w-[75%] py-24 sm:py-32 relative overflow-hidden bg-background"
  >
    <div class="text-center mb-12 relative z-10">
      <h2
        class="text-lg text-primary tracking-widest uppercase font-mono transition-all duration-800 ease-out"
        :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-8': !isVisible }"
      >
        Team
      </h2>
      <h2
        class="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text text-transparent transition-all duration-800 delay-200 ease-out"
        :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-8': !isVisible }"
      >
        Meet Our Expert Team
      </h2>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
    >
      <Card
        v-for="{ imageUrl, firstName, lastName, positions, socialNetworks } in teamList"
        :key="imageUrl"
        class="team-card bg-muted/10 dark:bg-card/80 backdrop-blur-md border border-primary/15 shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 ease-out flex flex-col h-full overflow-hidden group/hoverimg"
      >
        <CardHeader class="p-0 gap-0">
          <div class="h-full overflow-hidden">
            <img
              :src="imageUrl"
              :alt="`${firstName} ${lastName}`"
              class="w-full aspect-square object-cover saturate-0 group-hover/hoverimg:saturate-100 transition-all duration-500 ease-out group-hover/hoverimg:scale-[1.02]"
            />
          </div>
          <CardTitle class="py-6 pb-4 px-6 text-gray-900 dark:text-gray-100">
            {{ firstName }}
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#D247BF]">{{ lastName }}</span>
          </CardTitle>
        </CardHeader>

        <CardContent
          class="text-muted-foreground flex-1"
        >
          <div
            v-for="(position, index) in positions"
            :key="index"
            :class="{
              'pb-0': true,
              'pb-4': index === positions.length - 1,
            }"
          >
            {{ position }}<span v-if="index < positions.length - 1">,</span>
          </div>
        </CardContent>

        <CardFooter class="space-x-4 mt-auto">
          <a
            v-for="{ name, url } in socialNetworks"
            :key="name"
            :href="url"
            target="_blank"
            class="text-primary hover:text-[#D247BF] transition-all duration-300"
            :aria-label="`Visit ${firstName}'s ${name} page`"
          >
            <component :is="socialIcon(name)" class="size-6" />
          </a>
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

.team-card {
  transition: transform 0.4s ease-out, box-shadow 0.4s ease-out;
  transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
}

.team-card:hover {
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
<script setup lang="ts">
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css";
import {
  Code,
  Database,
  Layout,
} from "lucide-vue-next";

interface TechProps {
  icon: string;
  name: string;
}

const technologies: TechProps[] = [
  {
    icon: "code",
    name: "PHP",
  },
  {
    icon: "layout",
    name: "Vue.js",
  },
  {
    icon: "code",
    name: "Laravel",
  },
  {
    icon: "code",
    name: "Node.js",
  },
  {
    icon: "database",
    name: "MySQL",
  },
  {
    icon: "layout",
    name: "Python",
  },
  {
    icon: "database",
    name: "MongoDB",
  },
  {
    icon: "layout",
    name: "React",
  },
  {
    icon: "layout",
    name: "Next.JS",
  },
  {
    icon: "layout",
    name: "TypeScript",
  },
];

const iconMap: Record<
  string,
  | typeof Code
  | typeof Database
  | typeof Layout
> = {
  code: Code,
  database: Database,
  layout: Layout,
};
</script>

<template>
  <section
    id="sponsors"
    class="max-w-[75%] mx-auto pb-24 sm:pb-32"
  >
    <h2 class="text-lg md:text-xl text-center mb-6">We Work With</h2>

    <div class="mx-auto">
      <Marquee
        class="gap-[3rem]"
        :pauseOnHover="true"
        :fade="true"
        innerClassName="gap-[3rem]"
      >
        <div
          v-for="{ icon, name } in technologies"
          :key="name"
        >
          <div class="flex items-center text-xl md:text-2xl font-medium">
            <component
              :is="iconMap[icon]"
              class="mr-2"
              stroke-width="3"
            />
            {{ name }}
          </div>
        </div>
      </Marquee>
    </div>
  </section>
</template>
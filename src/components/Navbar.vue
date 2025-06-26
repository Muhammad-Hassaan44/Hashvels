<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useColorMode } from "@vueuse/core";
const mode = useColorMode();
mode.value = "dark";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Menu } from "lucide-vue-next";
import ToggleTheme from "./ToggleTheme.vue";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#team",
    label: "Team",
  },
  {
    href: "#contact",
    label: "Contact",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

const featureList: FeatureProps[] = [
  {
    title: "Innovative Solutions",
    description: "Custom software to solve your unique business challenges.",
  },
  {
    title: "Trusted Expertise",
    description: "Proven track record in delivering scalable tech solutions.",
  },
  {
    title: "Seamless Integration",
    description: "Effortless integration with your existing systems.",
  },
];

const isOpen = ref<boolean>(false);
const isVisible = ref(false);

onMounted(() => {
  isVisible.value = true;
});
</script>

<template>
  <header
    class="w-[65%] max-w-screen-lg top-5 mx-auto sticky z-50 flex justify-between items-center p-2 bg-card/10 dark:bg-card/20 backdrop-blur-md border border-primary/15 rounded-full shadow-md transition-all duration-500 ease-out"
    :class="{
      'shadow-light': mode === 'light',
      'shadow-dark': mode === 'dark',
    }"
  >
    <a
      href="/"
      class="font-bold text-lg flex items-center pl-4"
      :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-8': !isVisible }"
    >
      <img
        src="/public/H Black and white Fashion or Design studio logo.png"
        alt="Hashvels Logo"
        class="rounded-lg w-8 h-8 mr-2"
      />
      Hashvels
    </a>

    <!-- Mobile -->
    <div class="flex items-center lg:hidden pr-4">
      <Sheet v-model:open="isOpen">
        <SheetTrigger as-child>
          <Menu
            @click="isOpen = true"
            class="cursor-pointer size-6 text-primary hover:text-[#D247BF] transition-all duration-300"
          />
        </SheetTrigger>
        <SheetContent
          side="left"
          class="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card/20 dark:bg-card/30 backdrop-blur-md border-primary/15"
        >
          <div>
            <SheetHeader class="mb-4 ml-4">
              <SheetTitle class="flex items-center">
                <a
                  href="/"
                  class="flex items-center"
                >
                  <img
                    src="/public/H Black and white Fashion or Design studio logo.png"
                    alt="Hashvels Logo"
                    class="rounded-lg size-8 mr-2"
                  />
                  Hashvels
                </a>
              </SheetTitle>
            </SheetHeader>
            <div class="flex flex-col gap-2">
              <Button
                v-for="{ href, label } in routeList"
                :key="label"
                as-child
                variant="ghost"
                class="justify-start text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-primary transition-all duration-300"
              >
                <a
                  @click="isOpen = false"
                  :href="href"
                >
                  {{ label }}
                </a>
              </Button>
            </div>
          </div>
          <SheetFooter class="flex-col sm:flex-col justify-start items-start">
            <Separator class="mb-2 border-primary/20" />
            <ToggleTheme />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>

    <!-- Desktop -->
    <NavigationMenu class="hidden lg:flex items-center">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            class="bg-transparent text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-primary transition-all duration-300"
          >
            Features
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div class="grid w-[500px] grid-cols-2 gap-4 p-4 bg-muted/10 dark:bg-card/20 backdrop-blur-md rounded-lg border-primary/15">
              <img
                src="/public/H_Black_and_white_Fashion_or_Design_studio_logo-removebg-preview.png"
                alt="Hashvels Logo"
                class="h-full w-full rounded-md object-contain bg-white p-2"
              />
              <ul class="flex flex-col gap-2">
                <li
                  v-for="{ title, description } in featureList"
                  :key="title"
                  class="rounded-md p-3 text-sm hover:bg-primary/10 transition-all duration-300"
                >
                  <p class="mb-1 font-semibold leading-none text-gray-900 dark:text-gray-100">
                    {{ title }}
                  </p>
                  <p class="line-clamp-2 text-muted-foreground">
                    {{ description }}
                  </p>
                </li>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Button
              v-for="{ href, label } in routeList"
              :key="label"
              as-child
              variant="ghost"
              class="text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-primary transition-all duration-300"
            >
              <a :href="href">
                {{ label }}
              </a>
            </Button>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    <div class="hidden lg:flex pr-4">
      <ToggleTheme />
    </div>
  </header>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");

header {
  font-family: "Inter", sans-serif;
  transition: transform 0.4s ease-out, box-shadow 0.4s ease-out;
}

header:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.shadow-light {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.085), 0 2px 10px rgba(0, 0, 0, 0.1);
}

.shadow-dark {
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.141), 0 2px 10px rgba(0, 0, 0, 0.2);
}
</style>
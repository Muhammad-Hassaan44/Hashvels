<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { Button } from "./ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Building2, Phone, Mail, Clock } from "lucide-vue-next";

interface ContactFormProps {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const contactForm = reactive<ContactFormProps>({
  firstName: "",
  lastName: "",
  email: "",
  subject: "Web Development",
  message: "",
});

const invalidInputForm = ref<boolean>(false);
const isVisible = ref(false);

const handleSubmit = () => {
  const { firstName, lastName, email, subject, message } = contactForm;
  if (!firstName || !lastName || !email || !message) {
    invalidInputForm.value = true;
    return;
  }
  invalidInputForm.value = false;
  console.log(contactForm);

  const mailToLink = `mailto:hassaanmujahid39@hmail.com@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    `Hello, I am ${firstName} ${lastName}, my Email is ${email}.\n${message}`
  )}`;

  window.location.href = mailToLink;
};

onMounted(() => {
  isVisible.value = true;

  // Add subtle 3D tilt effect on card
  const card = document.querySelector('.contact-card');
  if (card) {
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
  }
});
</script>

<template>
  <section
    id="contact"
    class="container py-24 sm:py-32 relative overflow-hidden bg-background"
  >
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
      <div>
        <div class="mb-6">
          <h2
            class="text-lg text-primary tracking-widest uppercase font-mono transition-all duration-800 ease-out"
            :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-8': !isVisible }"
          >
            Contact
          </h2>
          <h2
            class="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text text-transparent transition-all duration-800 delay-200 ease-out"
            :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-8': !isVisible }"
          >
            Connect With Us
          </h2>
        </div>
        <p
          class="mb-8 text-muted-foreground lg:w-5/6 transition-all duration-800 delay-300 ease-out"
          :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-8': !isVisible }"
        >
          Reach out to discuss your project, explore collaboration opportunities, or learn more about how Hashvels can empower your business with innovative solutions.
        </p>

        <div class="flex flex-col gap-6">
          <div class="flex items-start gap-3">
            <Building2 class="size-6 text-primary transition-all duration-300 hover:text-[#D247BF]" />
            <div>
              <div class="font-semibold text-gray-900 dark:text-gray-100">Find Us</div>
              <div class="text-muted-foreground">Arfa Software & Technology Park Lahore</div>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <Phone class="size-6 text-primary transition-all duration-300 hover:text-[#D247BF]" />
            <div>
              <div class="font-semibold text-gray-900 dark:text-gray-100">Call Us</div>
              <div class="text-muted-foreground">+92 312 438 3540</div>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <Mail class="size-6 text-primary transition-all duration-300 hover:text-[#D247BF]" />
            <div>
              <div class="font-semibold text-gray-900 dark:text-gray-100">Mail Us</div>
              <div class="text-muted-foreground">hashvels@gmail.com</div>
            </div>
          </div>

          
        </div>
      </div>

      <!-- Form -->
      <Card
        class="contact-card bg-muted/10 dark:bg-card/80 backdrop-blur-md border border-primary/15 shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 ease-out"
      >
        <CardHeader class="text-primary text-2xl"></CardHeader>
        <CardContent>
          <form
            @submit.prevent="handleSubmit"
            class="grid gap-6"
          >
            <div class="flex flex-col md:flex-row gap-6">
              <div class="flex flex-col w-full gap-2">
                <Label for="first-name" class="text-gray-900 dark:text-gray-100">First Name</Label>
                <Input
                  id="first-name"
                  type="text"
                  placeholder="name"
                  v-model="contactForm.firstName"
                  class="bg-background/50 dark:bg-card/50 border-primary/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/30 transition-all duration-300"
                />
              </div>

              <div class="flex flex-col w-full gap-2">
                <Label for="last-name" class="text-gray-900 dark:text-gray-100">Last Name</Label>
                <Input
                  id="last-name"
                  type="text"
                  placeholder="surname"
                  v-model="contactForm.lastName"
                  class="bg-background/50 dark:bg-card/50 border-primary/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/30 transition-all duration-300"
                />
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <Label for="email" class="text-gray-900 dark:text-gray-100">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="@gmail.com"
                v-model="contactForm.email"
                class="bg-background/50 dark:bg-card/50 border-primary/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/30 transition-all duration-300"
              />
            </div>

            <div class="flex flex-col gap-2">
              <Label for="subject" class="text-gray-900 dark:text-gray-100">Subject</Label>
              <Select v-model="contactForm.subject">
                <SelectTrigger class="bg-background/50 dark:bg-card/50 border-primary/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/30 transition-all duration-300">
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="Mobile Development">Mobile Development</SelectItem>
                    <SelectItem value="Figma Design">Figma Design</SelectItem>
                    <SelectItem value="REST API">REST API</SelectItem>
                    <SelectItem value="FullStack Project">FullStack Project</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div class="flex flex-col gap-2">
              <Label for="message" class="text-gray-900 dark:text-gray-100">Message</Label>
              <Textarea
                id="message"
                placeholder="Your message..."
                rows="5"
                v-model="contactForm.message"
                class="bg-background/50 dark:bg-card/50 border-primary/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/30 transition-all duration-300"
              />
            </div>

            <Alert
              v-if="invalidInputForm"
              variant="destructive"
              class="bg-red-100/50 dark:bg-red-900/50 border-red-500/50"
            >
              <AlertCircle class="w-4 h-4 text-red-500" />
              <AlertTitle class="text-red-500">Error</AlertTitle>
              <AlertDescription class="text-red-500">
                Please fill out all required fields correctly.
              </AlertDescription>
            </Alert>

            <Button
              class="mt-4 bg-gradient-to-r from-primary to-[#D247BF] text-white hover:from-[#D247BF] hover:to-primary transition-all duration-300"
            >
              Send Message
            </Button>
          </form>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </section>

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

.contact-card {
  transition: transform 0.4s ease-out, box-shadow 0.4s ease-out;
  transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
}

.contact-card:hover {
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
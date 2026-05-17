<template>
  <section
    class="min-h-screen bg-gradient-to-l from-blue-700 to-black text-white flex items-center pt-24 overflow-hidden"
  >
    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      <div class="space-y-8 animate-fadeIn">
        <p class="text-emerald-400 text-xl font-semibold tracking-widest">
          WELCOME TO MY PORTFOLIO
        </p>

        <h1 class="text-5xl md:text-6xl font-extrabold leading-tight">
          Hi, I'm
          <br />

          <span
            class="bg-gradient-to-r from-emerald-500 to-cyan-300 bg-clip-text text-transparent"
          >
            {{ displayedText }}
          </span>

          <span class="cursor">|</span>
        </h1>

        <h2 class="text-2xl md:text-3xl text-zinc-300 font-light">
          Front end Developer
        </h2>

        <p class="text-zinc-400 text-lg leading-8 max-w-xl">
          Front-end development is a major or skill focused on building the
          visual part of websites and web applications that users interact with
          directly. A front-end developer creates layouts, buttons, menus,
          animations, and responsive designs to make websites attractive and
          user-friendly..
        </p>

        <div class="flex flex-wrap gap-5">
          <RouterLink
            to="/project"
            class="bg-emerald-400 hover:bg-white text-black px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            View Projects
          </RouterLink>

          <RouterLink
            to="/contact"
            class="border border-zinc-700 hover:border-emerald-400 hover:bg-zinc-900 px-8 py-4 rounded-2xl font-bold transition-all duration-300"
          >
            Contact Me
          </RouterLink>
        </div>

        <div class="flex gap-6 pt-4 text-3xl">
          <a href="https://web.facebook.com/bong.joys.2025" class="hover:text-emerald-400 duration-300">
            <i class="fa-brands fa-facebook"></i>
          </a>

          <a href="https://github.com/Doeurn-developer" class="hover:text-emerald-400 duration-300">
            <i class="fa-brands fa-github"></i>
          </a>

          <a href="https://www.youtube.com/@Free708" class="hover:text-emerald-400 duration-300">
            <i class="fa-brands fa-youtube"></i>
          </a>

          <a href="https://web.telegram.org/a/" class="hover:text-emerald-400 duration-300">
            <i class="fa-brands fa-telegram"></i>
          </a>
        </div>
      </div>

      <div class="flex justify-center animate-float">
        <div class="relative w-80 h-80 md:w-[450px] md:h-[450px]">
          <!-- Glow -->
          <div
            class="absolute inset-0 bg-emerald-400/20 blur-3xl rounded-full"
          ></div>

          <!-- Image -->
          <img
            src="../assets/image/454 (2).JPG"
            alt="Profile"
            class="relative z-10 lg:w-[70%] w-[90%] h-[90%] lg:h-[70%] object-fill rounded-full border-4 border-emerald-400/30 shadow-2xl"
          />
        </div>
      </div>
    </div>
  </section>
  <AboutView class="min-h-screen  text-white pt-10 overflow-hidden" />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import AboutView from "./AboutView.vue";
const fullText = "Chorm Chandouern";
const displayedText = ref("");

let typingInterval = null;

const typeWriter = () => {
  displayedText.value = "";
  let i = 0;

  typingInterval = setInterval(() => {
    if (i < fullText.length) {
      displayedText.value += fullText.charAt(i);
      i++;
    } else {
      clearInterval(typingInterval);

      // Restart animation
      setTimeout(() => {
        typeWriter();
      }, 1500);
    }
  }, 500);
};

onMounted(() => {
  typeWriter();
});

onBeforeUnmount(() => {
  clearInterval(typingInterval);
});
</script>

<style scoped>
.cursor {
  animation: blink 0.8s infinite;
  color: #34d399;
  font-weight: bold;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

/* Fade Animation */
.animate-fadeIn {
  animation: fadeIn 1.2s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Floating Image */
.animate-float {
  animation: floating 4s ease-in-out infinite;
}

@keyframes floating {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-20px);
  }

  100% {
    transform: translateY(0px);
  }
}
</style>

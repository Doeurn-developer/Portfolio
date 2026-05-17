<template>
  <section class="w-full min-h-screen bg-gradient-to-r from-blue-900 to-black text-white py-20 px-6">
    <div class="text-center mb-16">
      <h1
        class="text-4xl md:text-5xl font-extrabold text-emerald-400 tracking-widest"
      >
        ABOUT ME
      </h1>

      <div class="w-28 h-1 bg-emerald-400 mx-auto mt-4 rounded-full"></div>
    </div>

    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div class="flex justify-center">
        <div class="relative group">
          <div
            class="absolute  bg-emerald-400/20 blur-3xl rounded-3xl"
          ></div>

          <img
            class="relative z-10 mb-72 md:w-[200px]  md:h-[250px] object-cover rounded-3xl border-4 hidden md:flex border-emerald-400/30 shadow-2xl group-hover:scale-105 transition duration-500"
            src="../assets/image/454 (2).JPG"
            alt="Chandoeurn"
          />
        </div>
      </div>

      <div class="space-y-8">
        <div class="space-y-8">
          <h2 class="text-3xl md:text-4xl font-bold leading-tight">
            I'm
            <span class="text-emerald-400"> Chandoeurn </span>

            <br />

            Front-End Developer
          </h2>

          <p class="text-zinc-400 text-lg leading-8">
            I'm a passionate Front-End Developer who enjoys building modern,
            responsive, and user-friendly web applications with clean UI and
            smooth user experiences.
          </p>

          <p class="text-zinc-400 text-lg leading-8">
            I mainly work with Vue 3, Tailwind CSS, JavaScript, Laravel, and
            MySQL. My goal is to continuously improve my skills, work on
            real-world projects, and become a professional software engineer
            delivering high-quality digital solutions.
          </p>
        </div>
        <div
          class="md:text-5xl font-extrabold text-emerald-400 underline tracking-widest text-xl mt-8"
        >
          <h1>Skill</h1>
        </div>

        <div class="flex flex-wrap gap-6 w-full mt-6">
          <div
            v-for="(lang, index) in skill"
            :key="index"
            class="group relative"
          >
            <span
              class="cursor-pointer px-5 py-2 rounded-full bg-transparent border border-blue-700 hover:border-blue-400 hover:text-yellow-400 transition duration-300"
            >
              {{ lang.language }}
            </span>

            <div
              class="sticky left-0 top-14 hidden group-hover:block bg-zinc-900 border border-blue-400 rounded-lg p-3 w-44 shadow-lg duration-700"
            >
              <p class="text-blue-500 mb-3 font-semibold">
                {{ lang.percent }}%
              </p>

              <div class="w-full h-3 bg-zinc-600 rounded-full overflow-hidden">
                <div
                  class="h-full bg-gradient-to-r from-green-200 to-blue-600 transition-all duration-700"
                  :style="{ width: lang.percent + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-5 pt-6">
          <div
            class="bg-transparent border border-blue-700 rounded-2xl p-5 text-center hover:border-blue-400 transition duration-300"
          >
            <h3 class="text-3xl font-bold text-emerald-400">2+</h3>

            <p class="text-zinc-400 mt-2">Years Learning</p>
          </div>

          <div
            class="bg-transparent border border-blue-700 rounded-2xl p-5 text-center hover:border-blue-400 transition duration-300"
          >
            <h3 class="text-3xl font-bold text-emerald-400">10+</h3>

            <p class="text-zinc-400 mt-2">Projects</p>
          </div>

          <div
            class="bg-transparent border border-blue-700 rounded-2xl p-5 text-center hover:border-blue-400 transition duration-300"
          >
            <h3 class="text-3xl font-bold text-emerald-400">100%</h3>

            <p class="text-zinc-400 mt-2">Passion</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { skill } from "../data/Skill";
</script>

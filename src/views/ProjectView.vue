<script setup lang="ts">
import { project } from "../data/Projects";
</script>

<template>
  <div class="min-h-screen bg-gradient-to-r from-blue-900 to-black pt-24 pb-16 text-center">
    
    <!-- Header Section -->
    <header class="mb-4">
      <h1 class="text-4xl font-bold text-white tracking-wide">
        My
        <span class="bg-gradient-to-r from-emerald-400 to-white bg-clip-text text-3xl font-semibold text-transparent">
          Project Page
        </span>
      </h1>
    </header>
    
    <!-- Gradient Divider Line -->
    <div class="mx-auto h-1 w-48 bg-gradient-to-r from-emerald-500 to-yellow-500 rounded-full"></div>

    <!-- Projects Grid Container -->
    <main class="mx-auto mt-12 grid w-[85%] max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4">
      <article
        v-for="pro in project"
        :key="pro.id"
        class="flex flex-col overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/30 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-emerald-500/30 group text-left"
      >
        <!-- Image Wrapper -->
        <div class="aspect-video w-full overflow-hidden bg-zinc-900">
          <img 
            :src="pro.img" 
            :alt="pro.name" 
            class="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        
        <!-- Project Details Content -->
        <div class="p-6 flex flex-col flex-grow justify-between">
          <div>
            <!-- Title -->
            <h2 class="text-2xl font-bold text-white tracking-wide transition-colors duration-300 group-hover:text-emerald-400">
              {{ pro.name }}
            </h2>
            
            <!-- Description -->
            <p class="mt-2 text-zinc-400 text-sm leading-relaxed line-clamp-3">
              {{ pro.description }}
            </p>

            
            <div class="mt-4 flex flex-wrap gap-2">
              <span 
                v-for="(tag, tIdx) in pro.tags" 
                :key="tIdx" 
                class="px-2.5 py-1 text-xs font-medium bg-zinc-700/60 text-zinc-300 rounded-md border border-zinc-600/30"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          
          <div class="mt-6 flex items-center gap-4 pt-4 border-t border-zinc-700/50">
            <a 
              v-if="pro.liveLink"
              :href="pro.liveLink" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex-1 text-center py-2 px-3 text-sm font-semibold rounded-lg bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-colors duration-200"
            >
              Live Demo
            </a>
            <a 
              v-if="pro.githubLink"
              :href="pro.githubLink" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex-1 text-center py-2 px-3 text-sm font-semibold rounded-lg bg-zinc-700 text-white hover:bg-zinc-600 transition-colors duration-200 border border-zinc-600"
            >
              GitHub
            </a>
          </div>
        </div>
      </article>
    </main>

  </div>
</template>
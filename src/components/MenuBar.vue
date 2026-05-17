<template>
  <nav class="bg-gradient-to-r from-blue-600 to-blue-950 fixed top-0 w-full z-50 text-white shadow-md">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

      <RouterLink to="/" class="font-bold text-2xl bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent">
        Portfolio
      </RouterLink>


      <div class="hidden md:flex items-center gap-8 text-lg font-medium">
        <RouterLink 
          to="/" 
          class="hover:text-orange-400 transition-colors"
          active-class="text-orange-400 underline underline-offset-4">
          Home
        </RouterLink>
        <RouterLink 
          to="/about" 
          class="hover:text-orange-400 transition-colors"
          active-class="text-orange-400 underline underline-offset-4">
          About Me
        </RouterLink>
        <RouterLink 
          to="/project" 
          class="hover:text-orange-400 transition-colors"
          active-class="text-orange-400 underline underline-offset-4">
          Projects
        </RouterLink>
        <RouterLink 
          to="/contact" 
          class="hover:text-orange-400 transition-colors"
          active-class="text-orange-400 underline underline-offset-4">
          Contact
        </RouterLink>
      </div>

      <button 
        @click="toggleMenu"
        class="md:hidden text-2xl focus:outline-none">
        <i class="fa-solid" :class="isOpen ? 'fa-xmark' : 'fa-bars'"></i>
      </button>
    </div>


    <div 
      v-if="isOpen" 
      class="md:hidden bg-blue-950 border-t border-blue-700 py-6">
      <div class="flex flex-col gap-6 px-8 text-lg font-medium">
        <RouterLink 
          v-for="link in navLinks" 
          :key="link.path"
          :to="link.path" 
          @click="isOpen = false"
          class="hover:text-orange-400 transition-colors"
          active-class="text-orange-400">
          {{ link.name }}
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isOpen = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Me', path: '/about' },
  { name: 'Projects', path: '/project' },
  { name: 'Contact', path: '/contact' }
]

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>
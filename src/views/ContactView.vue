<template>
  <div class="min-h-screen  bg-gradient-to-r from-blue-900 to-black text-white pt-24 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto py-12">
      
      <div class="mb-12">
        <h1 class="text-3xl font-bold inline-block border-b-4 border-cyan-400 pb-2">
          Contact Me
        </h1>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <div class="space-y-6">
          
          <div class="bg-[#0b1329] border border-slate-800 rounded-xl p-8 flex flex-col items-center justify-center min-h-[160px] transition-all hover:border-cyan-500/50">
            <div class="bg-indigo-600 p-3 rounded-xl mb-3 flex items-center justify-center">
              <i class="fa-solid fa-envelope-open text-xl"></i>
            </div>
            <a href="padon708@gmail.com" class="text-slate-300 hover:text-cyan-400 transition-colors break-all text-center">
               Gmail
            </a>
          </div>

          <div class="bg-[#0b1329] border border-slate-800 rounded-xl p-8 flex flex-col items-center justify-center min-h-[160px] transition-all hover:border-cyan-500/50">
            <div class="bg-indigo-600 p-3 rounded-xl mb-3 flex items-center justify-center">
              <i class="fa-brands fa-github text-xl"></i>
            </div>
            <a href="https://github.com/Doeurn-developer" target="_blank" class="text-slate-300 hover:text-cyan-400 transition-colors break-all text-center">
              Git hub
            </a>
          </div>

        </div>

        <div class="bg-[#0b1329]/50 border border-slate-800 rounded-xl p-8 transition-all hover:border-slate-700">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input 
                  v-model="formData.firstName"
                  type="text" 
                  placeholder="First Name" 
                  class="w-full bg-[#0b1329] border border-slate-800 rounded-lg px-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  required
                />
              </div>
              <div>
                <input 
                  v-model="formData.lastName"
                  type="text" 
                  placeholder="Last Name" 
                  class="w-full bg-[#0b1329] border border-slate-800 rounded-lg px-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <input 
                v-model="formData.email"
                type="email" 
                placeholder="Email" 
                class="w-full bg-[#0b1329] border border-slate-800 rounded-lg px-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                required
              />
            </div>

            <div>
              <textarea 
                v-model="formData.message"
                rows="5" 
                placeholder="Message" 
                class="w-full bg-[#0b1329] border border-slate-800 rounded-lg px-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                required
              ></textarea>
            </div>

            <div>
              <button 
                type="submit" 
                class="w-full bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-500 hover:to-cyan-300 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-cyan-500/20 active:scale-[0.99] transition-all tracking-wider uppercase text-sm"
              >
                Send Message
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  console.log('data sended to contact', formData.value)
  alert('message sending to us')

  formData.value = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  }
}
</script>
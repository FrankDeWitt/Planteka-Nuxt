<template>
  <div class="min-h-screen bg-gradient-to-br from-planteka-50 to-planteka-100 p-8">
    <div class="max-w-4xl mx-auto">
      <div class="card mb-8">
        <h1 class="text-3xl font-bold text-planteka-800 mb-2">🌿 Planteka</h1>
        <p class="text-planteka-600">Nuxt 3 + Pinia + Tailwind CSS</p>
      </div>
      
      <div class="grid md:grid-cols-2 gap-6">
        <div class="card">
          <h2 class="text-xl font-semibold text-gray-800 mb-4">Counter Store</h2>
          <div class="flex items-center justify-center gap-4 mb-4">
            <button @click="counter.decrement" class="btn-secondary">-</button>
            <span class="text-2xl font-mono font-bold text-planteka-700">{{ counter.count }}</span>
            <button @click="counter.increment" class="btn-primary">+</button>
          </div>
          <p class="text-sm text-gray-600 text-center mb-3">Double: {{ counter.doubleCount }}</p>
          <div class="text-center">
            <button @click="counter.reset" class="btn-secondary text-sm">Reset</button>
          </div>
        </div>
        
        <div class="card">
          <h2 class="text-xl font-semibold text-gray-800 mb-4">User Store</h2>
          <div v-if="!user.isLoggedIn" class="text-center space-y-4">
            <div class="text-gray-500">
              <Icon name="heroicons:user-circle" class="w-16 h-16 mx-auto mb-2" />
              <p>Not logged in</p>
            </div>
            <button @click="loginUser" class="btn-primary">Login as Demo User</button>
          </div>
          <div v-else class="text-center space-y-4">
            <div class="text-planteka-600">
              <Icon name="heroicons:user-circle" class="w-16 h-16 mx-auto mb-2 text-planteka-500" />
              <p class="font-semibold">Welcome, {{ user.userName }}!</p>
              <p class="text-sm text-gray-600">{{ user.userEmail }}</p>
            </div>
            <button @click="user.logout" class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const counter = useCounterStore()
const user = useUserStore()

const loginUser = () => {
  user.login({
    id: '1',
    name: 'Demo User',
    email: 'demo@planteka.com'
  })
}
</script>
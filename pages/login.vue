<script setup lang="ts">
definePageMeta({
  middleware: 'guest'
})

const email = ref('')
const password = ref('')
const userStore = useUserStore()

const handleLogin = async () => {
  if (email.value && password.value) {
    userStore.simpleLogin(email.value, password.value)
    await navigateTo('/')
  }
}
</script>

<template>
  <div class="min-h-screen flex">
    <!-- Left side - Login Form -->
    <div class="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 lg:px-20 xl:px-24 bg-dawnPink">
      <NuxtImg src="/images/planteka-logo.svg" class="absolute top-10 left-8 w-32"/>
      <div class="max-w-xs w-full space-y-8">
        <!-- Language switcher -->
        <div class="flex justify-end">
          <button class="text-sm text-primary flex items-center gap-1">
            <Icon name="i-heroicons-globe-alt" class="w-6 h-6" />
            ENG
          </button>
        </div>

        <!-- Logo and main content -->
        <div class="space-y-5">
          <!-- Logo -->
          <div class="flex justify-center items-center">
            <NuxtImg src="/images/planteka-logo.svg" class="w-2xs"/>
          </div>

          <!-- Welcome text -->
          <div class="text-center space-y-2">
            <p class="text-saddle text-md leading-8 font-bold">
              Are your plant babies dying or unwell? Setup a video consultation with a Plant Doctor from our community, today!
            </p>
          </div>

          <!-- Login Form -->
          <form @submit.prevent="handleLogin" class="space-y-4">
            <div>
              <PltkInput
                v-model="email"
                color="primary"
                variant="soft"
                size="xl"
                type="email"
                placeholder="Email"
                required
                class="w-full"
              />
            </div>
            
            <div>
              <PltkInput
                v-model="password"
                color="primary"
                variant="soft"
                size="xl"
                type="password"
                placeholder="Password"
                required
                class="w-full"
              />
            </div>

            <!-- Forgot password link -->
            <div class="text-right">
              <NuxtLink to="/forgot-password" class="text-sm text-secondary hover:text-primary">
                Forgot your password?
              </NuxtLink>
            </div>

            <!-- Sign in button -->
            <PltkButton
              type="submit"
              color="primary"
              variant="solid"
              size="lg"
              block
              class="w-full py-4"
            >
              SIGN IN
            </PltkButton>
          </form>

          <!-- Register link -->
          <div class="text-center">
            <span class="text-saddle">Don't have an account? </span>
            <NuxtLink to="/register" class="text-primary hover:text-primary-700 font-medium">
              Register
            </NuxtLink>
          </div>

          <!-- Plant Doctor login -->
          <div class="text-center">
            <span class="text-saddle font-bold">Plant Doctor? </span>
            <NuxtLink to="/doctor/login" class="text-primary hover:text-primary-700 font-medium">
              Sign in / Register
            </NuxtLink>
          </div>

          <!-- Social login divider -->
          <PltkSeparator color="neutral" label="CONNECT WITH" :ui="{ container: 'text-saddle' }"/>

          <!-- Social login buttons -->
          <div class="flex justify-center space-x-4">
            <button
              type="button"
              class="w-10 h-10 border border-gray-300 rounded-xl flex items-center justify-center hover:bg-secondary-300"
            >
              <EmailIcon class="w-10 h-10" />
            </button>
            <button
              type="button"
              class="w-10 h-10 border border-gray-300 rounded-xl flex items-center justify-center hover:bg-secondary-300"
            >
              <SmsIcon class="w-10 h-10" />
            </button>
            <button
              type="button"
              class="w-10 h-10 border border-gray-300 rounded-xl flex items-center justify-center hover:bg-secondary-300"
            >
              <FacebookIcon class="w-10 h-10" />
            </button>
            <button
              type="button"
              class="w-10 h-10 border border-gray-300 rounded-xl flex items-center justify-center hover:bg-secondary-300"
            >
              <GoogleIcon class="w-10 h-10" />
            </button>
            <button
              type="button"
              class="w-10 h-10 border border-gray-300 rounded-xl flex items-center justify-center hover:bg-secondary-300"
            >
              <AppleIcon class="w-10 h-10" />
            </button>
          </div>
        </div>

        <!-- Footer -->
        <div class="text-center text-xs text-saddle flex gap-1 absolute bottom-5 left-8">
          <p>Powered by </p>
          <NuxtImg src="/images/planteka-logo.svg" class="w-18"/>
        </div>
      </div>
    </div>

    <!-- Right side - Background Image -->
    <div class="hidden lg:block relative w-0 lg:w-1/2 login-bg">
    </div>
  </div>
</template>

<style scoped>
.login-bg {
  position: relative;
  overflow: hidden
}

.login-bg::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: max(50vw, 100vh);
  height: max(50vw, 100vh);
  background-image: url('/images/backgrounds/login-bg.jpg');
  background-size: cover;
  background-position: center;
  transform: translate(-50%, -50%) rotate(90deg);
  z-index: -1;
}
</style>
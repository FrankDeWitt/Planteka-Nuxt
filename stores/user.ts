interface User {
  id: string
  name: string
  email: string
}

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)
  const isLoggedIn = ref(false)
  
  const userName = computed(() => user.value?.name || 'Guest')
  const userEmail = computed(() => user.value?.email || '')
  
  const login = (userData: User) => {
    user.value = userData
    isLoggedIn.value = true
  }

  const simpleLogin = (email: string, password: string) => {
    const userData: User = {
      id: '1',
      name: 'User',
      email: email
    }
    login(userData)
  }
  
  const logout = () => {
    user.value = null
    isLoggedIn.value = false
  }
  
  const updateUser = (userData: Partial<User>) => {
    if (user.value) {
      user.value = { ...user.value, ...userData }
    }
  }
  
  return {
    user,
    isLoggedIn,
    userName,
    userEmail,
    login,
    simpleLogin,
    logout,
    updateUser
  }
}, {
  persist: true
})
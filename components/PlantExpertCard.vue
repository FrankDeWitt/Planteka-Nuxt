<script setup lang="ts">
interface Props {
  name: string
  profileImage: string
  experience: number
  rating: number
  reviewsCount: number
  returnedPlantParents: number
  description: string
  specializations: string[]
  nextAvailable: string
  timeSlots: string[]
  priceFrom: number
  isFavorited?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isFavorited: false
})

const emit = defineEmits<{
  toggleFavorite: []
  bookNow: []
}>()

const formattedRating = computed(() => props.rating.toFixed(1))
const formattedPrice = computed(() => `€${props.priceFrom.toFixed(2)}`)

const renderStars = computed(() => {
  const fullStars = Math.floor(props.rating)
  const hasHalfStar = props.rating % 1 !== 0
  const stars = []
  
  for (let i = 0; i < fullStars; i++) {
    stars.push('full')
  }
  
  if (hasHalfStar) {
    stars.push('half')
  }
  
  while (stars.length < 5) {
    stars.push('empty')
  }
  
  return stars
})
</script>

<template>
  <div class="text-saddle bg-dawnPink rounded-3xl p-6 max-w-sm mx-auto shadow-lg">
    <!-- Header with profile and heart -->
    <div class="flex gap-x-5">
      <div class="w-28 h-28 rounded-full overflow-hidden flex-shrink-0">
        <img :src="profileImage" :alt="name" class="w-full h-full object-cover">
      </div>
      <div class="flex flex-col">
        <div class="flex items-start justify-between">
          <div class="flex ">
            <div>
              <h3 class="font-semibold  text-lg">{{ name }}</h3>
              <div class="flex items-center gap-3 mt-1">
                <span class="text-sm">Exp: {{ experience }} years</span>
                <div class="flex items-center gap-1">
                  <Icon name="LeafIcon" size="12" style="fill: var(--color-secondary)"/>
                  <span class="text-sm font-medium ">{{ reviewsCount }}</span>
                </div>
              </div>
            </div>
          </div>
          <button
            class="p-2 rounded-full hover:bg-dawnpink-200 transition-colors"
            @click="emit('toggleFavorite')"
          >
            <Icon name="HeartIcon" size="20" style="stroke: var(--color-primary)"/>
          </button>
        </div>
        <!-- Specialization tags -->
        <div class="flex flex-wrap gap-2 mb-4">
        <span
            v-for="specialization in specializations"
            :key="specialization"
        >
          <PltkBadge color="secondary" variant="outline" class="rounded-full">
            #{{ specialization }}
          </PltkBadge>
        </span>
        </div>
      </div>
    </div>
    <!-- Description -->
    <p class="text-sm leading-relaxed mb-4">
      "{{ description }}"
    </p>

    <!-- Rating and reviews -->
    <div class="mb-4">
      <div class="flex items-center gap-2 mb-1">
        <div class="flex items-center gap-1">
          <Icon 
            v-for="(star, index) in renderStars" 
            :key="index"
            :name="star === 'full' ? 'heroicons:star-solid' : star === 'half' ? 'heroicons:star-solid' : 'heroicons:star'"
            class="w-4 h-4"
            :class="star === 'full' ? 'text-saddle' : star === 'half' ? 'text-saddle' : 'text-gray-300'"
          />
        </div>
        <span class="font-semibold ">{{ formattedRating }}/5</span>
        <span class="text-sm ">({{ reviewsCount }} reviews)</span>
      </div>
      <p class="text-sm ">
        Returned plant parents: <span class="font-medium">{{ returnedPlantParents }}%</span>
      </p>
    </div>

    <!-- Availability and booking -->
    <div class="flex items-center justify-between">
      <div>
        <p class="text-sm">Next available: {{ nextAvailable }}</p>
        <div class="flex gap-2 mt-1">
          <span
            v-for="slot in timeSlots"
            :key="slot"
          >
            <PltkBadge color="primary" variant="soft" class="rounded-full">
              {{ slot }}
            </PltkBadge>
          </span>
        </div>
      </div>
      <div class="text-right">
        <p class="text-sm mb-1">From {{ formattedPrice }}</p>
        <PltkButton
          color="primary"
          @click="emit('bookNow')"
        >
          Book Now
        </PltkButton>
      </div>
    </div>
  </div>
</template>
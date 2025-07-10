<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
  variant?: 'default' | 'primary' | 'secondary' | 'soft' | 'success' | 'gradient'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hoverable?: boolean
  metric?: string | number
  metricLabel?: string
  metricChange?: string
  metricTrend?: 'up' | 'down' | 'neutral'
  showHeaderIcon?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  padding: 'md',
  hoverable: false
})

const titleClass = computed(() => {
  const base = 'font-semibold'
  const variants = {
    default: 'text-gray-900 text-lg',
    primary: 'text-primary-800 text-lg',
    secondary: 'text-secondary-800 text-lg',
    soft: 'text-gray-800 text-lg',
    success: 'text-stromboli-800 text-lg',
    gradient: 'text-gray-900 text-lg'
  }
  return `${base} ${variants[props.variant]}`
})

const subtitleClass = computed(() => {
  const base = 'text-sm mt-1'
  const variants = {
    default: 'text-gray-600',
    primary: 'text-primary-600',
    secondary: 'text-secondary-600',
    soft: 'text-gray-600',
    success: 'text-stromboli-600',
    gradient: 'text-gray-600'
  }
  return `${base} ${variants[props.variant]}`
})

const metricValueClass = computed(() => {
  return 'text-3xl font-bold text-gray-900'
})

const metricIconClass = computed(() => {
  return 'w-12 h-12 rounded-lg bg-gradient-to-br from-stromboli-400 to-stromboli-600 flex items-center justify-center text-white'
})

const iconContainerClass = computed(() => {
  const variants = {
    default: 'w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600',
    primary: 'w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600',
    secondary: 'w-10 h-10 rounded-lg bg-secondary-100 flex items-center justify-center text-secondary-600',
    soft: 'w-10 h-10 rounded-lg bg-dawnpink-100 flex items-center justify-center text-dawnpink-600',
    success: 'w-10 h-10 rounded-lg bg-stromboli-100 flex items-center justify-center text-stromboli-600',
    gradient: 'w-10 h-10 rounded-lg bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center text-white'
  }
  return variants[props.variant]
})

const changeIndicatorClass = computed(() => {
  const base = 'text-sm font-medium'
  if (props.metricTrend === 'up') {
    return `${base} text-stromboli-600`
  } else if (props.metricTrend === 'down') {
    return `${base} text-secondary-600`
  }
  return `${base} text-gray-600`
})

const titleSectionClass = computed(() => {
  return props.metric ? 'hidden' : 'mb-4 px-6 pt-6'
})

const contentClass = computed(() => {
  return props.metric ? 'hidden' : 'px-6 pb-6'
})
</script>

<template>
  <div
      :class="[
      'bg-white rounded-xl border transition-all duration-200 overflow-hidden',
      {
        'hover:shadow-lg hover:-translate-y-1': hoverable,
        'p-0': !padding,
        'p-4': padding === 'sm',
        'p-6': padding === 'md' || !padding,
        'p-8': padding === 'lg',
        'border-gray-100 shadow-sm': variant === 'default',
        'border-primary-200 bg-primary-50/30 shadow-primary-100/50': variant === 'primary',
        'border-secondary-200 bg-secondary-50/30 shadow-secondary-100/50': variant === 'secondary',
        'border-dawnpink-200 bg-dawnpink-50/30 shadow-dawnpink-100/50': variant === 'soft',
        'border-stromboli-200 bg-stromboli-50/20': variant === 'success',
        'bg-gradient-to-br from-white to-gray-50/50': variant === 'gradient'
      }
    ]"
  >
    <!-- Header with icon and actions -->
    <header v-if="$slots.header || showHeaderIcon" class="flex items-center justify-between p-4 border-b border-gray-50">
      <div class="flex items-center gap-3">
        <div v-if="showHeaderIcon" :class="iconContainerClass">
          <slot name="icon" />
        </div>
        <slot name="header" />
      </div>
      <slot name="actions" />
    </header>

    <!-- Metric display for dashboard cards -->
    <div v-if="metric" class="p-6">
      <div class="flex items-start justify-between mb-2">
        <div>
          <p class="text-sm font-medium text-gray-600 mb-1">{{ metricLabel }}</p>
          <p :class="metricValueClass">{{ metric }}</p>
        </div>
        <div v-if="$slots.metric-icon" :class="metricIconClass">
          <slot name="metric-icon" />
        </div>
      </div>
      <div v-if="metricChange" class="flex items-center gap-1">
        <span :class="changeIndicatorClass">{{ metricChange }}</span>
        <span class="text-xs text-gray-500">vs last period</span>
      </div>
    </div>

    <!-- Title Section -->
    <div v-else-if="title || subtitle" :class="titleSectionClass">
      <h3 v-if="title" :class="titleClass">
        {{ title }}
      </h3>
      <p v-if="subtitle" :class="subtitleClass">
        {{ subtitle }}
      </p>
    </div>

    <!-- Default Content Slot -->
    <main v-if="!metric" :class="contentClass">
      <slot />
    </main>

    <!-- Footer Slot -->
    <footer v-if="$slots.footer" class="border-t border-gray-50 p-4 bg-gray-25">
      <slot name="footer" />
    </footer>
  </div>
</template>

<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <div class="max-w-6xl mx-auto">
      <!-- Color Palette -->
      <div class="grid grid-cols-6 gap-4 mb-8">
        <div class="bg-desert-400 text-white text-center py-8 px-4 rounded-lg">
          <h3 class="font-medium">Desert</h3>
        </div>
        <div class="bg-stromboli-400 text-white text-center py-8 px-4 rounded-lg">
          <h3 class="font-medium">Stromboli</h3>
        </div>
        <div class="bg-dawnpink-400 text-stromboli-800 text-center py-8 px-4 rounded-lg">
          <h3 class="font-medium">Dawn Pink</h3>
        </div>
        <div class="bg-saddle-900 text-white text-center py-8 px-4 rounded-lg">
          <h3 class="font-medium">Saddle</h3>
        </div>
        <div class="bg-avocado-400 text-white text-center py-8 px-4 rounded-lg">
          <h3 class="font-medium">Avocado</h3>
        </div>
        <div class="bg-beaver-400 text-white text-center py-8 px-4 rounded-lg">
          <h3 class="font-medium">Beaver</h3>
        </div>
      </div>

      <!-- APP UI Elements Section -->
      <div class="bg-white rounded-lg p-8 shadow-sm">
        <div class="flex items-center gap-2 mb-6">
          <Icon name="heroicons:sparkles" class="w-5 h-5 text-purple-600" />
          <h2 class="text-lg font-semibold text-gray-900">APP UI Elements</h2>
        </div>

        <!-- Button Section -->
        <div class="border-2 border-dashed border-purple-300 rounded-lg p-6">
          <div class="flex items-center gap-2 mb-6">
            <Icon name="heroicons:sparkles" class="w-4 h-4 text-purple-600" />
            <span class="text-purple-600 font-medium">Button</span>
          </div>

          <!-- Button Rows -->
          <div class="flex space-x-8">
            <div class="space-y-6">
              <!-- Row 1: Solid buttons + Link -->
              <div class="flex items-center gap-4 flex-wrap">
                <PltkButton color="primary">
                  Button
                </PltkButton>
                <PltkButton color="primary" variant="outline">
                  Button
                </PltkButton>
                <PltkButton color="primary" variant="ghost" trailing-icon="cuida:caret-right-outline">
                  Link
                </PltkButton>
              </div>

              <!-- Row 2: Different variants -->
              <div class="flex items-center gap-4 flex-wrap">
                <PltkButton color="secondary">
                  Button
                </PltkButton>
                <PltkButton color="secondary" variant="outline">
                  Button
                </PltkButton>
                <PltkButton color="secondary" variant="outline" icon="lucide:calendar-1">
                  Button
                </PltkButton>

              </div>

              <!-- Row 3: With icons and special buttons -->
              <div class="flex items-center gap-4 flex-wrap">
                <PltkButton color="primary" variant="solid" icon="lucide:calendar-1">
                  Button
                </PltkButton>
                <PltkButton color="neutral" variant="subtle">
                  Button
                </PltkButton>
                <PltkButton  color="neutral" variant="solid" size="xs" class="rounded-full">
                  Filter <PltkBadge color="primary" trailing-icon="heroicons:hashtag" class="rounded-full"/>
                </PltkButton>
              </div>

              <!-- Row 4: Different sizes and states -->
              <div class="flex items-center gap-4 flex-wrap">
                <PltkButton color="secondary" leading-icon="lucide:calendar-1">
                  Button
                </PltkButton>
                <PltkButton color="neutral" variant="soft">
                  Button
                </PltkButton>
                <PltkButton  color="secondary" variant="solid" >
                  Filter <PltkBadge color="info" trailing-icon="heroicons:hashtag" class="rounded-full"/>
                </PltkButton>
              </div>

              <!-- Row 5: Special button -->
              <div>
                <PltkButton color="primary" class="w-full py-4" block>
                  BUTTON
                </PltkButton>
              </div>

              <!-- Row 7: Text buttons -->
              <div class="flex items-center gap-6">
                <PltkButton color="primary" variant="link">
                  Button
                </PltkButton>
                <PltkButton color="secondary" variant="link">
                  Button
                </PltkButton>
                <PltkButton color="neutral" variant="link">
                  Button
                </PltkButton>
              </div>
            </div>
            <div class="flex flex-col space-y-4">
              <PltkButton color="primary" icon="lucide:pencil">
                Button
              </PltkButton>
              <PltkButton color="secondary" icon="lucide:pencil">
                Button
              </PltkButton>
              <PltkButton variant="outline" icon="heroicons:pencil">
                Button
              </PltkButton>
              <PltkButton color="secondary" variant="outline" class="rounded-full justify-center">
                Button
              </PltkButton>
              <PltkButton color="secondary" variant="solid" class="rounded-full justify-center">
                Button
              </PltkButton>
              <PltkButton color="primary" variant="solid" icon="lucide:video">
                Button
              </PltkButton>
              <PltkButton color="primary" variant="solid" trailing-icon="lucide:arrow-right">
                Button
              </PltkButton>
            </div>
          </div>
        </div>

        <!-- Right Side - Pages and Tab Bar (simplified) -->
        <div class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Pages Section -->
          <div class="border-2 border-dashed border-purple-300 rounded-lg p-6">
            <div class="flex items-center gap-2 mb-4">
              <Icon name="heroicons:sparkles" class="w-4 h-4 text-purple-600" />
              <span class="text-purple-600 font-medium">Pages</span>
            </div>
            <div class="space-y-3">
              <div class="flex items-center gap-3 text-gray-600">
                <Icon name="heroicons:home" class="w-5 h-5" />
                <span>Home</span>
                <span class="ml-auto text-gray-400">Fav</span>
              </div>
              <div class="flex items-center gap-3 text-gray-600">
                <Icon name="heroicons:home" class="w-5 h-5" />
                <span>Home</span>
                <span class="ml-auto text-gray-400">Fav</span>
              </div>
            </div>
          </div>

          <!-- Tab Bar Section -->
          <div class="border-2 border-dashed border-purple-300 rounded-lg p-6">
            <div class="flex items-center gap-2 mb-4">
              <Icon name="heroicons:sparkles" class="w-4 h-4 text-purple-600" />
              <span class="text-purple-600 font-medium">Tab Bar</span>
            </div>
            <div class="space-y-4">
              <div class="bg-dawnPink-200 rounded-lg p-4 text-center">
                <Icon name="heroicons:home" class="w-6 h-6 mx-auto mb-1 text-stromboli-600" />
                <span class="text-sm text-stromboli-700">Home</span>
              </div>
              <div class="bg-dawnPink-100 rounded-lg p-4 text-center">
                <Icon name="heroicons:home" class="w-6 h-6 mx-auto mb-1 text-gray-500" />
                <span class="text-sm text-gray-600">Home</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Page meta
definePageMeta({
  title: 'Buttons - Planteka UI'
})
</script>
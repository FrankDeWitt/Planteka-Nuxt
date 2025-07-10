<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <div class="max-w-7xl mx-auto">
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
        <div class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Pages Section -->
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
                  <PltkButton color="secondary" variant="outline">
                    <Icon name="CalendarFillIcon" size="20" style="fill: var(--color-secondary)"/>
                    Button
                  </PltkButton>

                </div>

                <!-- Row 3: With icons and special buttons -->
                <div class="flex items-center gap-4 flex-wrap">
                  <PltkButton color="primary" variant="solid">
                    <Icon name="CalendarFillIcon" size="20" style="fill: var(--color-dawnPink)"/>
                    Button
                  </PltkButton>
                  <PltkButton color="neutral" variant="subtle">
                    Button
                  </PltkButton>
                  <PltkButton  color="neutral" variant="solid" size="xs" class="rounded-full">
                    Filter
                    <PltkBadge color="primary" class="rounded-full px-1 py-1">
                      <Icon name="HastagIcon" size="12" style="fill: var(--color-dawnPink)"/>
                    </PltkBadge>
                  </PltkButton>
                </div>

                <!-- Row 4: Different sizes and states -->
                <div class="flex items-center gap-4 flex-wrap">
                  <PltkButton color="secondary">
                    <Icon name="CalendarFillIcon" size="20" style="fill: var(--color-dawnPink)"/>
                    Button
                  </PltkButton>
                  <PltkButton color="neutral" variant="soft">
                    Button
                  </PltkButton>
                  <PltkButton  color="secondary" variant="solid" >
                    Filter
                    <PltkBadge color="info" class="rounded-full px-1 py-1">
                      <Icon name="HastagIcon" size="12" style="fill: var(--color-dawnPink)"/>
                    </PltkBadge>
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
                <PltkButton color="primary">
                  <Icon name="EditIcon" size="20" style="fill: var(--color-dawnPink)"/>
                  Button
                </PltkButton>
                <PltkButton color="secondary">
                  <Icon name="EditIcon" size="20" style="fill: var(--color-dawnPink)"/>
                  Button
                </PltkButton>
                <PltkButton variant="outline">
                  <Icon name="EditIcon" size="20" style="fill: var(--color-primary)"/>
                  Button
                </PltkButton>
                <PltkButton color="secondary" variant="outline" class="rounded-full justify-center">
                  Button
                </PltkButton>
                <PltkButton color="secondary" variant="solid" class="rounded-full justify-center">
                  Button
                </PltkButton>
                <PltkButton color="primary" variant="solid">
                  <Icon name="VideoIcon" size="20" style="stroke: var(--color-dawnPink)"/>
                  Button
                </PltkButton>
                <PltkButton color="primary" variant="solid">
                  Button
                  <Icon name="ArrowRightIcon" size="20" style="stroke: var(--color-dawnPink)"/>
                </PltkButton>
              </div>
            </div>
          </div>

          <!-- Pages Section -->
          <div class="border-2 border-dashed border-purple-300 rounded-lg p-6">
            <div class="flex items-center gap-2 mb-4">
              <Icon name="heroicons:sparkles" class="w-4 h-4 text-purple-600" />
              <span class="text-purple-600 font-medium">Pages</span>
            </div>
            <div class="space-y-4">
              <div class="space-x-4 flex">
              <div class="flex flex-col items-center">
                <Icon name="HomeIcon" size="16"/>
                <span class="text-xs text-avocado">Home</span>
              </div>
              <div class="flex flex-col items-center">
                <Icon name="FavouriteIcon" size="16"/>
                <span class="text-xs text-avocado">Favourite</span>
              </div>
              <div class="flex flex-col items-center">
                <Icon name="CalendarIcon" size="16"/>
                <span class="text-xs text-avocado">Bookings</span>
              </div>
              <div class="flex flex-col items-center">
                <Icon name="MessageIcon" size="16"/>
                <span class="text-xs text-avocado">Messages</span>
              </div>
              <div class="flex flex-col items-center">
                <PltkChip position="bottom-right" size="sm" inset>
                  <Icon name="MessageIcon" size="16"/>
                </PltkChip>
                <span class="text-xs text-avocado">Messages</span>
              </div>
              <div class="flex flex-col items-center">
                <Icon name="ConfigIcon" size="16"/>
                <span class="text-xs text-avocado">Settings</span>
              </div>
              <div class="flex flex-col items-center">
                <Icon name="AvailabilityIcon" size="16"/>
                <span class="text-xs text-avocado">Availability</span>
              </div>
            </div>
              <div class="space-x-4 flex">
              <div class="flex flex-col items-center">
                <Icon name="HomeFillIcon" size="16"/>
                <span class="text-xs text-secondary">Home</span>
              </div>
              <div class="flex flex-col items-center">
                <Icon name="FavouriteFillIcon" size="16"/>
                <span class="text-xs text-secondary">Favourite</span>
              </div>
              <div class="flex flex-col items-center">
                <Icon name="CalendarFillIcon" size="16"/>
                <span class="text-xs text-secondary">Bookings</span>
              </div>
              <div class="flex flex-col items-center">
                <Icon name="MessageFillIcon" size="16"/>
                <span class="text-xs text-secondary">Messages</span>
              </div>
              <div class="flex flex-col items-center">
                <PltkChip position="bottom-right" size="sm" inset>
                  <Icon name="MessageFillIcon" size="16"/>
                </PltkChip>
                <span class="text-xs text-secondary">Messages</span>
              </div>
              <div class="flex flex-col items-center">
                <Icon name="ConfigFillIcon" size="16"/>
                <span class="text-xs text-secondary">Settings</span>
              </div>
              <div class="flex flex-col items-center">
                <Icon name="AvailabilityFillIcon" size="16"/>
                <span class="text-xs text-secondary">Availability</span>
              </div>
            </div>
            </div>
          </div>
        </div><!-- Button Section -->
        <div class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Pages Section -->
          <div class="border-2 border-dashed border-purple-300 rounded-lg p-6">
            <div class="flex items-center gap-2 mb-6">
              <Icon name="heroicons:sparkles" class="w-4 h-4 text-purple-600" />
              <span class="text-purple-600 font-medium">Card</span>
            </div>

            <!-- Card -->
            <div class="flex space-x-8 aqui-card">
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
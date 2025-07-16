<template>
  <footer class="bg-dawnpink-100 border-t border-dawnpink-200">
    <div class="max-w-7xl mx-auto px-6 py-12">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
        <!-- Contact Info -->
        <div class="lg:col-span-1">
          <div class="flex items-center gap-2 mb-4">
            <img src="/images/planteka-logo.svg" alt="Planteka" class="h-6 w-auto">
          </div>
          <div class="space-y-2 text-sm text-stromboli-700">
            <h3 class="font-semibold text-stromboli-800 mb-3">Contact us</h3>
            <p class="font-medium">Planteka Community</p>
            <p>Calle de la Costa 53, 2-2, Barcelona, Spain</p>
            <p>Email: hola@planteka.co</p>
          </div>
          <div class="flex gap-3 mt-4">
            <h4 class="font-semibold text-stromboli-800 text-sm">Follow us</h4>
            <div class="flex gap-2">
              <a href="#" class="text-stromboli-600 hover:text-stromboli-800">
                <FacebookIcon class="w-5 h-5" />
              </a>
              <a href="#" class="text-stromboli-600 hover:text-stromboli-800">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- About Us -->
        <div>
          <h3 class="font-semibold text-stromboli-800 mb-3 text-sm">ABOUT US</h3>
          <ul class="space-y-2 text-sm text-stromboli-700">
            <li><a href="#" class="hover:text-stromboli-800">OUR STORY</a></li>
            <li><a href="#" class="hover:text-stromboli-800">OUR MISSION & VISION</a></li>
            <li><a href="#" class="hover:text-stromboli-800">I AM PLANTEKA</a></li>
            <li><a href="#" class="hover:text-stromboli-800">CAREERS</a></li>
          </ul>
        </div>

        <!-- Sign Up as Plant Expert -->
        <div>
          <h3 class="font-semibold text-stromboli-800 mb-3 text-sm">SIGN UP AS A PLANT EXPERT</h3>
        </div>

        <!-- Legal -->
        <div>
          <h3 class="font-semibold text-stromboli-800 mb-3 text-sm">LEGAL</h3>
          <ul class="space-y-2 text-sm text-stromboli-700">
            <li><a href="#" class="hover:text-stromboli-800">PRIVACY POLICY</a></li>
            <li><a href="#" class="hover:text-stromboli-800">TERMS & CONDITIONS</a></li>
            <li><a href="#" class="hover:text-stromboli-800">SELLER POLICIES</a></li>
          </ul>
        </div>

        <!-- Support & My Account -->
        <div>
          <h3 class="font-semibold text-stromboli-800 mb-3 text-sm">SUPPORT</h3>
          <ul class="space-y-2 text-sm text-stromboli-700 mb-6">
            <li><a href="#" class="hover:text-stromboli-800">FAQS</a></li>
            <li><a href="#" class="hover:text-stromboli-800">CONTACT US</a></li>
          </ul>
          
          <h3 class="font-semibold text-stromboli-800 mb-3 text-sm">MY ACCOUNT</h3>
          <ul class="space-y-2 text-sm text-stromboli-700">
            <li><a href="#" class="hover:text-stromboli-800">MY ORDERS</a></li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-dawnpink-200 pt-6">
        <div class="flex items-center justify-center text-xs text-stromboli-600">
          <div class="flex items-center gap-1">
            <LeafIcon class="w-4 h-4" />
            <span>© 2024 Planteka Community. All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer component for Planteka
</script>
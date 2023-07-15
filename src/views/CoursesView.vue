<template>
  <h1 class="text-3xl text-center my-7">Courses List</h1>

  <div class="md:flex px-8">
    <div class="md:w-1/5">
      <div class="">
        <h2 class="font-medium mb-2">Filter by Type</h2>
        <div class="space-y-2">
          <div class="flex items-center">
            <input type="checkbox" v-model="filterTypes" value="starter" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" id="starter">
            <label for="starter" class="ml-2">Starter</label>
          </div>
          <div class="flex items-center">
            <input type="checkbox" v-model="filterTypes" value="freemium" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" id="freemium">
            <label for="freemium" class="ml-2">Freemium</label>
          </div>
          <div class="flex items-center">
            <input type="checkbox" v-model="filterTypes" value="premium" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" id="premium">
            <label for="premium" class="ml-2">Premium</label>
          </div>
        </div>
      </div>
    </div>
    <main class="md:w-4/5">
      <div v-if="filteredCourses && filteredCourses.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <!-- woiiilah -->
        <div v-for="course in filteredCourses" :key="course.id" class="relative rounded-xl shadow overflow-hidden">
          <img src="https://www.city.ac.uk/__data/assets/image/0010/685342/varieties/breakpoint-max.jpg" alt="" class="object-cover h-36 w-full">
          <span class="absolute top-0 right-0 px-2 py-1 bg-sky-700 text-white text-sm font-medium bg-opacity-70 rounded-bl-lg">
            {{ course.type }}
          </span>
          <div class="p-4">
            <h2 class="text-lg font-bold">{{ course.title }}</h2>
            <p class="text-slate-600">Rp {{ course.price }}</p>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Course Not Available</p>
      </div>
    </main>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import getCollection from '@/composables/getCollections'

export default {
  name: 'CoursesView',
  setup() {
    const { documents: courses } = getCollection('courses')

    // Create a computed property to filter the courses based on selected types
    const filterTypes = ref([])
    const filteredCourses = computed(() => {
      if (filterTypes.value.length === 0) {
        return courses.value
      } else {
        return courses.value.filter(course => filterTypes.value.includes(course.type))
      }
    })

    return { filterTypes, filteredCourses }
  }
}
</script>
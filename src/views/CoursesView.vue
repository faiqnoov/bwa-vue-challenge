<template>
  <div class="text-[#34364a]">
    <div class="my-7">
      <h1 class="text-4xl font-bold mb-1">Courses List</h1>
      <p class="italic">Unlock Your Potential: Join Our Digital Course and Embrace Limitless Learning!</p>
    </div>
  
    <div class="md:flex">
      <div class="md:w-1/5">
        <div class="mb-7">
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

          <h2 class="font-medium mt-5 mb-2">Filter by Level</h2>
          <div class="space-y-2">
            <div class="flex items-center">
              <input type="checkbox" v-model="filterLevels" value="all" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" id="all">
              <label for="all" class="ml-2">All Levels</label>
            </div>
            <div class="flex items-center">
              <input type="checkbox" v-model="filterLevels" value="beginner" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" id="beginner">
              <label for="beginner" class="ml-2">Beginner</label>
            </div>
            <div class="flex items-center">
              <input type="checkbox" v-model="filterLevels" value="intermediate" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" id="intermediate">
              <label for="intermediate" class="ml-2">Intermediate</label>
            </div>
          </div>
        </div>
      </div>

      <main class="md:w-4/5">
        <div v-if="filteredCourses && filteredCourses.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div v-for="course in filteredCourses" :key="course.id" class="relative bg-white rounded-xl shadow overflow-hidden">
            <img src="https://www.city.ac.uk/__data/assets/image/0010/685342/varieties/breakpoint-max.jpg" alt="" class="object-cover h-36 w-full">
            <span class="absolute top-0 right-0 px-2 py-1 bg-sky-600 text-white text-sm font-medium bg-opacity-70 rounded-bl-lg">
              {{ course.type }}
            </span>
            <div class="p-4">
              <h2 class="text-lg font-bold">{{ course.title }}</h2>
              <div class="flex justify-between mt-2">
                <p class="text-slate-600">Rp {{ course.price }}</p>
                <span class=" px-2 py-1 bg-yellow-600 bg-opacity-70 rounded-xl">
                  <p class="capitalize text-white text-xs">{{ course.level }}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <p>Sorry, Course Not Available</p>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import getCollection from '@/composables/getCollections'

export default {
  name: 'CoursesView',
  setup() {
    // const courses = ref([]);
    const { documents: courses } = getCollection('courses')
    // const { documents } = getCollection('courses')
    const filterTypes = ref([])
    const filterLevels = ref([])

    // Create a computed property to filter the courses based on selected types
    // const filteredCourses = computed(() => {
    //   if (filterTypes.value.length === 0) {
    //     return courses.value
    //   } else {
    //     return courses.value.filter(course => filterTypes.value.includes(course.type))
    //   }
    // })

    const filteredCourses = computed(() => {
      // Apply filters based on selected types and levels
      return courses.value.filter(course => {
        const typeFilterPassed = filterTypes.value.length === 0 || filterTypes.value.includes(course.type);
        const levelFilterPassed = filterLevels.value.length === 0 || filterLevels.value.includes(course.level);
        return typeFilterPassed && levelFilterPassed;
      });
    });

    return { filterTypes, filterLevels, filteredCourses };

    // return { filterTypes, filteredCourses }
  }
}
</script>

<template>
  <div class="flex min-h-screen">
    <div v-if="$route.path !== '/Home' && $route.path !== '/' && $route.path !== '/login'" class="p-4">
      <button @click="goBack"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
        Back
      </button>
    </div>
    <div class="flex-grow">
      <router-view class="mt-8"/>
    </div>
    <div class="p-4">
      <div class="flex justify-end">
        <button @click="logout"
        v-if="$route.path !== '/' && $route.path !== '/login'"
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    logout(){
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    }
  }
}
</script>


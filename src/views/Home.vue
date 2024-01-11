<template>
  <div class="p-8 w-full">

    <div class="flex justify-center space-x-2">
      <input type="text" placeholder="Search patient..." class="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" v-model="query" id="query">
      
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
      @click="$router.push(`/patient/create`)"
      >
        New Patient
      </button>
    </div>
    <div v-if="patients.length === 0" class="mt-4 flex justify-center">
      <h1>No Patients Found</h1>
    </div>
    <div class="mt-4 justify-center flex space-y-5">
      <div class="flex flex-col space-y-5 w-full max-w-4xl">
        <div 
          v-for="patient in patients"
          :key="patient.id"
          class="py-2 px-4 bg-gray-200 bg-opacity-50 hover:bg-opacity-75 transition duration-300 ease-in-out rounded-md cursor-pointer"
          @click="handlePatientClick(patient)">
          <span class="text-gray-700 font-medium">{{ patient.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
    import { debounce } from 'lodash';

    export default {
      name: "Home",
      data() {
        return {
          patients: [],
          query: '',
        };
      },
      methods: {
        getPatients() {
          this.$store.dispatch("patient/getPatients", this.query).then(() => {
            this.patients = this.$store.state.patient.patients;
          });
        },
        handlePatientClick(patient) {
          this.$router.push(`/patient/${patient.id}`);
        },
      },
      created() {
        this.debouncedGetPatients = debounce(() => {
          this.getPatients();
        }, 500);

        this.getPatients();
      },
      watch: {
        query() {
          this.debouncedGetPatients();
        }
      }
    };
</script>
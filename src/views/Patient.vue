<template>
    <h1 class="text-2xl font-bold text-center my-5">
        {{ patient.patient.name }}
    </h1>
    <div class="flex justify-center space-x-2">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        @click="$router.push(`/patient/ttvRecord/${patient.patient.id}/create`)"
        >
            New Record
        </button>
    </div>
    <div v-if="patient.recordPatient.length !== 0" class="mt-4 flex justify-center">
        <div class="flex flex-col space-y-5 w-full max-w-4xl">
            <div 
                v-for="record in patient.recordPatient" 
                :key="record.id"
                class="py-2 px-4 bg-gray-200 bg-opacity-50 hover:bg-opacity-75 transition duration-300 ease-in-out rounded-md cursor-pointer"
                @click="handleRecordClick(record)">
                <span class="text-gray-700 font-medium">{{ formatDate(record.record_date) }}</span>
            </div>
        </div>
    </div>
    <div v-else class="mt-4 flex justify-center">
        <h1>No Records Found</h1>
    </div>
</template>
<script>
export default {
    name: "Patient",
    data() {
        return {
            patient: {},
        };
    },
    methods: {
        getPatient(){
            this.$store.dispatch("patient/getPatient", this.$route.params.id).then(() => {
                this.patient = this.$store.state.patient.current;
            });
        },
        formatDate(dateString) {
            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit' 
            };
            return new Date(dateString).toLocaleString('en-US', options);
        },
        handleRecordClick(record) {
            this.$router.push(`/patient/ttvRecord/${record.id}`);
        }
    },
    created() {
        this.getPatient();
    },
};
</script>
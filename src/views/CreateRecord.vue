<template>
    <div class="flex flex-col items-center mt-5">
        <h1 class="text-2xl font-bold text-center mb-5">Create New Record</h1>
        
        <form @submit.prevent="submitRecord" class="w-full max-w-lg flex flex-col gap-4 mt-12">
            <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="temperature">
                    Temperature (°C)
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="temperature" type="number" step="0.1" v-model="newRecord.temperature">
            </div>
            <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="pulse">
                    Pulse (bpm)
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="pulse" type="number" v-model="newRecord.pulse">
            </div>

            <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="respiration">
                    Respiration (breaths/min)
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="respiration" type="number" v-model="newRecord.respiration">
            </div>

            <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="systolic-bp">
                    Systolic BP (mmHg)
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="systolic-bp" type="number" v-model="newRecord.systolic_bp">
            </div>

            <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="diastolic-bp">
                    Diastolic BP (mmHg)
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="diastolic-bp" type="number" v-model="newRecord.diastolic_bp">
            </div>
            
            <div class="flex justify-center mt-6">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                    Submit Record
                </button>
            </div>

        </form>
    </div>
</template>
<script>
export default {
    name: "CreateRecord",
    data() {
        return {
            newRecord: {
                patient_id: this.$route.params.id,
                pulse: '',
                temperature: '',
                respiration: '',
                diastolic_bp: '',
                systolic_bp: '',
            },
        };
    },
    methods: {
        submitRecord() {
            this.$store.dispatch("ttvRecord/createTtvRecord", this.newRecord)
                .then(() => {
                    this.$router.push(`/patient/${this.$route.params.id}`);
                })
        }
    }
};
</script>
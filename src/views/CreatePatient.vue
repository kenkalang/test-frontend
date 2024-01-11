<template>
    <div class="flex flex-col items-center mt-5">
        <h1 class="text-2xl font-bold text-center mb-5">Create New Record</h1>
        
        <form @submit.prevent="submitRecord" class="w-full max-w-lg flex flex-col gap-4 mt-12">
            <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="name">
                    Name
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="name" type="text" step="0.1" v-model="newPatient.name">
            </div>
            <div class="flex justify-center mt-6">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                    Create
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "CreatePatient",
    data() {
        return {
            newPatient: {
                name: '',
            }
        };
    },
    methods: {
        submitRecord() {
            this.$store.dispatch("patient/createPatient", this.newPatient).then(() => {
                this.$router.push(`/Home`);
            });
        }
    }
}
</script>
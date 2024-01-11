<template>
    <div class="flex flex-col items-center space-y-4 mt-5">
        <h1 class="text-2xl font-bold text-center mb-5">
            {{ record.patient.name }}
        </h1>
        <h1 class="text-xl font-semibold">
            {{ formatDate(record.ttv.record_date) }}
        </h1>
        <h2 class="text-lg">
            Pulse: {{ record.ttv.pulse }} bpm
        </h2>
        <h2 class="text-lg">
            Temperature: {{ record.ttv.temperature }} °C
        </h2>
        <h2 class="text-lg">
            Respiration: {{ record.ttv.respiration }} breaths/min
        </h2>
        <h2 class="text-lg">
            Diastolic BP: {{ record.ttv.diastolic_bp }} mmHg
        </h2>
        <h2 class="text-lg">
            Systolic BP: {{ record.ttv.systolic_bp }} mmHg
        </h2>
    </div>
</template>
<script>
export default {
    name: "TTVRecord",
    data() {
        return {
            record: {},
        };
    },
    methods: {
        getRecord(){
            this.$store.dispatch("ttvRecord/getTtvRecord", this.$route.params.id).then(() => {
                this.record = this.$store.state.ttvRecord.record;
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
    },
    created() {
        this.getRecord();
    },
};
</script>
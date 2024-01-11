import PatientService from '../../services/patient-service';

const initialState = {
    patients: [],
    current: null
};

export const patient = {
    namespaced: true,
    state: initialState,
    actions: {
        getPatients({ commit }, query) {
            return PatientService.getPatients(query)
                .then(
                    data => commit('getPatientsSuccess', data),
                    error => commit('getPatientsFailure', error)
                );
        },
        getPatient({ commit }, id) {
            return PatientService.getPatient(id)
                .then(
                    data => commit('getPatientSuccess', data),
                    error => commit('getPatientFailure', error)
                );
        },
        createPatient({ commit }, data) {
            return PatientService.createPatient(data).then(
                console.log("success")
            )
        }
    },
    mutations: {
        getPatientsSuccess(state, data) {
            state.patients = data.data.patients;
        },
        getPatientsFailure(state, error) {
            state.patients = [];
        },
        getPatientSuccess(state, data) {
            state.current = data.data.data;
        },
        getPatientFailure(state, error) {
            state.current = null;
        }
    }
};
import ttvRecordService from "../../services/ttvRecord-service";

const initialState = {
    record: null,

};

export const ttvRecord = {
    namespaced: true,
    state: initialState,
    actions: {
        getTtvRecord({ commit }, id) {
            return ttvRecordService.getTtvRecord(id)
                .then(
                    data => commit('getTtvRecordSuccess', data),
                    error => commit('getTtvRecordFailure', error)
                );
        },
        createTtvRecord({ commit }, data) {
            return ttvRecordService.createTtvRecord(data).then(
                console.log("success")
            )
        }
    },
    mutations: {
        getTtvRecordSuccess(state, data) {
            state.record = data.data;
        },
        getTtvRecordFailure(state, error) {
            state.record = null;
        }
    }
};
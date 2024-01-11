import { createStore } from "vuex";
import { auth } from "./auth.module";
import { patient } from "./patient";
import { ttvRecord } from "./ttvRecord";

const store = createStore({
  modules: {
    auth,
    patient,
    ttvRecord
  },
});

export default store;
<template>
  <div class="w-full max-w-xs mx-auto">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-4" >
      <Form @submit="handleLogin" :validation-schema="schema">
        <div class="mb-4">
          <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username</label>
          <Field name="username" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          <ErrorMessage name="username" class="text-red-500 text-xs italic" />
        </div>

        <div class="mb-6">
          <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <Field name="password" type="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
          <ErrorMessage name="password" class="text-red-500 text-xs italic" />
        </div>

        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" :disabled="loading">
            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
            <span>Login</span>
          </button>
        </div>
        <div class="flex items-center justify-between mt-4">
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" :disabled="loading"
            @click="$router.push(`/`)"
            >
              <span v-show="loading" class="spinner-border spinner-border-sm"></span>
              <span>Don't have an account? Register here</span>
            </button>
          </div>

        <div v-if="message" class="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          {{ message }}
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup.string().required("Username is required!"),
      password: yup.string().required("Password is required!"),
    });

    return {
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/Home");
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;
      this.$store.dispatch("auth/login", user).then(
        (data) => {
          if (data.error_message) {
            this.message = data.error_message;
          } else {
            this.$router.push("/Home");
          }
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>

<style scoped>
</style>
<template>
  <div>
    <div class="text-right">
      <Button
        :icon="loading ? 'pi pi-spin pi-spinner' : 'pi pi-cloud-download'"
        label="Load Data"
        class="p-button-raised"
        @click="getData"
      />
    </div>
    <div>
      <ul class="text-md">
        <li class="my-4" v-for="item in users" :key="item.id">
          <div>Name: {{ item.firstName + " " + item.lastName }}</div>
          <br />
          <div>Email: {{ item.email }}</div>
          <br v-if="item.age" />

          <div v-if="item.age">Age: {{ item.age }}</div>
          <br v-if="item.degree" />
          <div v-if="item.degree">Degree: {{ item.degree }}</div>
          <hr />
        </li>
      </ul>
    </div>
  </div>
  <Toast :breakpoints="{ '480px': { width: '100%', right: '0', left: '0' } }" />
</template>

// ! TODO: Scripts
<script>
// ! TODO: Global JS
const axios = require("axios").default;

// ! TODO: Vue JS
export default {
  // ! TODO: Inject
  inject: ["showToast"],
  // ! TODO: Data
  data() {
    return {
      users: [],
      loading: false,
      firstPageLoad: true,
    };
  },
  // ! TODO: Methods
  methods: {
    getData() {
      this.loading = true;
      axios
        .get(
          "https://vue-http-demo-5d421-default-rtdb.firebaseio.com/users.json",
          {
            timeout: 5000,
          }
        )
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          if (!this.firstPageLoad) {
            this.showToast("error", "Error", error.message);
          }
          this.loading = true;
        })
        .then((data) => {
          if (data) {
            const result = [];
            for (const id in data) {
              result.push({
                id: id,
                firstName: data[id].firstName,
                lastName: data[id].lastName,
                email: data[id].email,
                age: data[id].age,
                degree: data[id].degree,
              });
            }
            if (JSON.stringify(this.users) === JSON.stringify(result)) {
              if (!this.firstPageLoad) {
                this.showToast(
                  "info",
                  "Your list is up to date",
                  "There is no new data to show"
                );
              }
            } else {
              if (!this.firstPageLoad) {
                this.showToast(
                  "success",
                  "Updated",
                  "The list has been updated"
                );
              }
              this.users = result;
            }
          } else if (data === null) {
            if (!this.firstPageLoad) {
              this.showToast(
                "warn",
                "Missing Data",
                "There is no data to show"
              );
            }
            this.users = [];
          }
          this.loading = false;
        });
    },
  },
  // ! TODO: Hooks
  mounted() {
    this.getData();
    setTimeout(() => {
      this.firstPageLoad = false;
    }, 1000);
  },
};
</script>

// ! TODO: Style
<style scoped>
li div {
  margin: -5px 0;
}
</style>

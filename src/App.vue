<template>
  <div>
    <TabView class="card">
      <TabPanel>
        <template #header>
          <span>Form</span>
          <i class="pi pi-sign-in ml-2"></i>
        </template>
        <the-form></the-form>
      </TabPanel>
      <TabPanel>
        <template #header>
          <span>Users</span>
          <i class="pi pi-users ml-2"></i>
        </template>
        <users-list></users-list>
      </TabPanel>
    </TabView>
  </div>
</template>

<script>
import TabView from "../node_modules/primevue/tabview";
import TabPanel from "../node_modules/primevue/tabpanel";

import TheForm from "./components/TheForm.vue";
import UsersList from "./components/UsersList.vue";

export default {
  components: {
    TabView,
    TabPanel,
    TheForm,
    UsersList,
  },
  provide() {
    return {
      showToast: this.showToast,
    };
  },
  methods: {
    showToast(type, title, content, time = 3000, pos = null) {
      this.$toast.add({
        severity: type,
        summary: title,
        detail: content,
        life: time,
        group: pos,
      });
    },
  },
};
</script>

<style>
@font-face {
  font-family: "Ubuntu";
  src: local("Ubuntu"), url(./fonts/Ubuntu-Light.ttf) format("truetype");
}

* {
  box-sizing: border-box;
  font-family: "Ubuntu", sans-serif;
}

body {
  margin: 0;
  background-color: #040d19;
}

#app {
  padding-block: 2rem;
  width: min(95%, 42rem);
  margin-inline: auto;
}
</style>

<template>
  <form class="grid p-input-filled mx-3" action="">
    <h1 class="mb-5 col-12">Sign Up</h1>
    <div class="p-float-label px-0 my-3 md:col-6 col-12">
      <InputText class="w-10" id="firstName" type="text" v-model="firstName" />
      <label for="firstName">First name</label>
    </div>
    <div class="p-float-label px-0 my-3 md:col-6 col-12">
      <InputText class="w-10" id="lastName" type="text" v-model="lastName" />
      <label for="lastName">Last name</label>
    </div>
    <div
      class="w-12 flex align-content-center align-items-center justify-content-between flex-wrap"
    >
      <Button
        icon="pi pi-check"
        label="Submit"
        class="p-button-raised p-button-sm mx-2 my-2 w-7rem"
      />
      <Button
        icon="pi pi-times"
        label="Reset"
        class="p-button-raised p-button-secondary p-button-sm mx-2 w-7rem"
      />
    </div>
  </form>
</template>

<script>
import InputText from "../../node_modules/primevue/inputtext";

export default {
  components: {
    InputText,
  },
  data() {
    return {
      firstName: null,
      lastName: null,
    };
  },
};
</script>

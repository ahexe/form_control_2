<template>
  <form class="p-input-filled mx-2" action="">
    <h1 class="mb-5">Sign Up</h1>
    <div class="grid">
      <!--TODO: First Name -->
      <div class="p-float-label px-0 my-3 md:col-6 col-12">
        <InputText
          class="w-10 max-w-max"
          id="firstName"
          type="text"
          v-model="firstName"
        />
        <label for="firstName">First name</label>
      </div>
      <!--TODO: Last Name -->
      <div class="p-float-label px-0 my-3 md:col-6 col-12">
        <InputText
          class="w-10 max-w-max"
          id="lastName"
          type="text"
          v-model="lastName"
        />
        <label for="lastName">Last name</label>
      </div>
    </div>
    <!--TODO: Email -->
    <div class="grid">
      <div class="p-float-label px-0 my-3 col-12">
        <InputText
          class="w-10 max-w-max"
          id="email"
          type="email"
          v-model="email"
        />
        <label for="email">Email</label>
      </div>
    </div>
    <!--TODO: Age -->
    <div class="p-field p-col-12 p-md-4">
      <h5 :style="{ visibility: age >= 5 ? 'visible' : 'hidden' }">Age</h5>
      <Knob v-model="age" :size="150" :min="5" :max="150" />
    </div>
    <!--TODO: PassWord -->
    <div class="grid">
      <div class="p-float-label px-0 my-3 md:col-6 col-12">
        <Password
          class="max-w-max"
          id="password"
          v-model="password"
          toggleMask
          :size="18"
        ></Password>
        <label for="password">Password</label>
      </div>
      <div class="p-float-label px-0 my-3 md:col-6 col-12">
        <Password
          class="max-w-max"
          id="password2"
          v-model="password2"
          toggleMask
          :feedback="false"
          :size="18"
        ></Password>
        <label for="password2">Confirm Password</label>
      </div>
    </div>
    <!--TODO: Degree -->
    <div>
      <div>
        <h4>Your education</h4>
        <SelectButton
          v-model="degree"
          :options="degreeOptions"
          optionLabel="degreeTitle"
        />
      </div>
    </div>
    <!--TODO: Confirm Terms -->
    <div>
      <div>
        <h4>Confirm Terms</h4>
        <ToggleButton
          id="confirm"
          v-model="confirm"
          onLabel="I confirm"
          offLabel="I reject"
          onIcon="pi pi-check"
          offIcon="pi pi-times"
          style="width: 10em"
          class="p-button-sm"
        />
      </div>
    </div>
    <!--TODO: Rating -->
    <div class="grid my-3">
      <div class="col-12">
        <h4>Your rating to this registration form</h4>
        <Rating id="rating" v-model="rating" :cancel="false" class="mt-3" />
      </div>
    </div>
    <!--TODO: Buttons -->
    <div class="grid">
      <Button
        icon="pi pi-check"
        label="Submit"
        class="p-button-raised p-button-sm mx-2"
      />
      <Button
        icon="pi pi-times"
        label="Reset"
        class="p-button-raised p-button-secondary p-button-sm mx-2"
      />
    </div>
  </form>
</template>

<script>
import InputText from "../../node_modules/primevue/inputtext";
import Knob from "../../node_modules/primevue/knob";
import Password from "../../node_modules/primevue/password";
import Rating from "../../node_modules/primevue/rating";
import ToggleButton from "../../node_modules/primevue/togglebutton";
import SelectButton from "../../node_modules/primevue/selectbutton";

export default {
  components: {
    InputText,
    Knob,
    Password,
    Rating,
    ToggleButton,
    SelectButton,
  },
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      age: "Age",
      password: null,
      password2: null,
      rating: 3,
      confirm: false,
      degree: null,
      degreeOptions: [
        { degreeTitle: "Student", value: "Student" },
        { degreeTitle: "Collegian", value: "Collegian" },
        { degreeTitle: "Professor", value: "Professor" },
      ],
    };
  },
};
</script>

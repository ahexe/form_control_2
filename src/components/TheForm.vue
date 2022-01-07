<template>
  <form id="form" class="p-input-filled" action="">
    <!--TODO: Title -->
    <div>
      <h1>Sign Up</h1>
    </div>
    <!--TODO: First Name -->
    <div class="p-float-label">
      <InputText id="firstName" type="text" v-model="firstName" />
      <label for="firstName">First name</label>
    </div>
    <!--TODO: Last Name -->
    <div class="p-float-label">
      <InputText id="lastName" type="text" v-model="lastName" />
      <label for="lastName">Last name</label>
    </div>
    <!--TODO: Email -->
    <div class="p-float-label">
      <InputText id="email" type="email" v-model="email" />
      <label for="email">Email</label>
    </div>
    <!--TODO: Age -->
    <div class="p-field p-md-4">
      <h4 :style="{ visibility: age >= 5 ? 'visible' : 'hidden' }">Age</h4>
      <Knob v-model="age" :size="150" :min="5" :max="150" />
    </div>
    <!--TODO: PassWord 1 -->
    <div class="p-float-label">
      <Password id="password" v-model="password" toggleMask></Password>
      <label for="password">Password</label>
    </div>
    <!--TODO: PassWord 2 -->
    <div class="p-float-label">
      <Password
        id="password2"
        v-model="password2"
        toggleMask
        :feedback="false"
      ></Password>
      <label for="password2">Confirm Password</label>
    </div>
    <!--TODO: Degree Large screen -->
    <div>
      <h4>Your education</h4>
      <SelectButton
        v-model="degree"
        :options="degreeOptions"
        optionLabel="degreeTitle"
      />
    </div>
    <!--TODO: Degree Small screen -->
    <div id="radio">
      <div class="p-field-radiobutton">
        <RadioButton
          id="Student"
          name="Student"
          :value="degreeOptions[0].value"
          v-model="degree2"
        />
        <label for="Student">Student</label>
      </div>
      <div class="p-field-radiobutton">
        <RadioButton
          id="Collegian"
          name="Collegian"
          :value="degreeOptions[1].value"
          v-model="degree2"
        />
        <label for="Collegian">Collegian</label>
      </div>
      <div class="p-field-radiobutton">
        <RadioButton
          id="Professor"
          name="Professor"
          :value="degreeOptions[2].value"
          v-model="degree2"
        />
        <label for="Professor">Professor</label>
      </div>
    </div>
    <!--TODO: Confirm Terms -->
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
      />
    </div>
    <!--TODO: Rating -->
    <div>
      <h4>Your rating to this registration form</h4>
      <Rating id="rating" v-model="rating" :cancel="false" />
    </div>
    <!--TODO: submit button -->
    <div>
      <Button icon="pi pi-check" label="Submit" class="p-button-raised" />
    </div>
    <!--TODO: reset button -->
    <div>
      <Button
        icon="pi pi-times"
        label="Reset"
        class="p-button-raised p-button-secondary"
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
import RadioButton from "../../node_modules/primevue/radiobutton";

export default {
  components: {
    InputText,
    Knob,
    Password,
    Rating,
    ToggleButton,
    SelectButton,
    RadioButton,
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
      degree2: null,
      degreeOptions: [
        { degreeTitle: "Student", value: "Student" },
        { degreeTitle: "Collegian", value: "Collegian" },
        { degreeTitle: "Professor", value: "Professor" },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
#form {
  display: grid;
  gap: 2rem;
}

#radio {
  display: grid;
  gap: 1rem;
}
</style>

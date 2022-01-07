<template>
  <form id="form" class="p-input-filled" action="">
    <!--TODO: Title -->
    <div class="one">
      <h1>Sign Up</h1>
    </div>
    <!--TODO: First Name -->
    <div class="two p-float-label">
      <InputText id="firstName" type="text" v-model="firstName" />
      <label for="firstName">First name</label>
    </div>
    <!--TODO: Last Name -->
    <div class="three p-float-label">
      <InputText id="lastName" type="text" v-model="lastName" />
      <label for="lastName">Last name</label>
    </div>
    <!--TODO: Email -->
    <div class="four p-float-label">
      <InputText id="email" type="email" v-model="email" />
      <label for="email">Email</label>
    </div>
    <!--TODO: Age -->
    <div class="five p-field p-md-4">
      <h5 :style="{ visibility: age >= 5 ? 'visible' : 'hidden' }">Age</h5>
      <Knob v-model="age" :size="150" :min="5" :max="150" />
    </div>
    <!--TODO: PassWord 1 -->
    <div class="six p-float-label">
      <Password
        id="password"
        v-model="password"
        toggleMask
        size="17"
      ></Password>
      <label for="password">Password</label>
    </div>
    <!--TODO: PassWord 2 -->
    <div class="seven p-float-label">
      <Password
        id="password2"
        v-model="password2"
        toggleMask
        :feedback="false"
        size="17"
      ></Password>
      <label for="password2">Confirm Password</label>
    </div>
    <!--TODO: Degree Large screen -->
    <div class="nine" v-if="true">
      <h4>Your education</h4>
      <SelectButton
        v-model="degree"
        :options="degreeOptions"
        optionLabel="degreeTitle"
      />
    </div>
    <!--TODO: Degree Small screen -->
    <div class="nine" id="radio" v-if="false">
      <h4>Your education</h4>
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
    <div class="eight">
      <ToggleButton
        id="confirm"
        v-model="confirm"
        onLabel="I confirm"
        offLabel="Confirm"
        onIcon="pi pi-check"
        offIcon="pi pi-times"
      />
    </div>
    <!--TODO: Rating -->
    <div class="ten">
      <h4>Your rating to this registration form</h4>
      <Rating
        class="text-center"
        id="rating"
        v-model="rating"
        :cancel="false"
      />
    </div>
    <!--TODO: submit button -->
    <div class="eleven">
      <Button icon="pi pi-check" label="Submit" class="p-button-raised" />
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
  grid-auto-columns: 1fr;
  align-items: center;
  justify-items: center;
  grid-template-areas:
    "one"
    "two"
    "three"
    "four"
    "five"
    "six"
    "seven"
    "nine"
    "ten"
    "eight"
    "eleven";
}

.one {
  grid-area: one;
  justify-self: start;
}
.two {
  grid-area: two;
}
.three {
  grid-area: three;
}
.four {
  grid-area: four;
}
.five {
  grid-area: five;
}
.six {
  grid-area: six;
}
.seven {
  grid-area: seven;
}
.eight {
  grid-area: eight;
}
.nine {
  grid-area: nine;
}
.ten {
  grid-area: ten;
}
.eleven {
  grid-area: eleven;
}

@media (min-width: 42em) {
  #form {
    grid-template-areas:
      "one one"
      "two three"
      "four five"
      "six five"
      "seven five"
      "nine nine"
      "ten ten"
      "eight eleven";
  }
}

#radio {
  display: grid;
  gap: 1rem;
}
</style>

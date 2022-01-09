<template>
  <form id="form" class="p-input-filled" @keydown.enter="submitForm">
    <!--TODO: Title -->
    <div class="one">
      <h1>Sign Up</h1>
    </div>
    <!--TODO: First Name -->
    <div class="two p-float-label">
      <InputText
        id="firstName"
        type="text"
        v-model.trim="v$.firstName.$model"
        required
      />
      <label for="firstName">First name</label>
    </div>
    <!--TODO: Last Name -->
    <div class="three p-float-label">
      <InputText
        id="lastName"
        type="text"
        v-model.trim="v$.lastName.$model"
        required
      />
      <label for="lastName">Last name</label>
    </div>
    <!--TODO: Email -->
    <div class="four p-float-label">
      <InputText
        id="email"
        type="email"
        v-model.trim="v$.email.$model"
        required
      />
      <label for="email">Email</label>
    </div>
    <!--TODO: Age -->
    <div class="five p-field p-md-4">
      <h5 :style="{ visibility: age >= 5 ? 'visible' : 'hidden' }">Age</h5>
      <Knob v-model="age" :size="150" :min="5" :max="150" />
    </div>
    <!--TODO: PassWord -->
    <div class="six p-float-label">
      <Password
        id="password"
        v-model="v$.password.$model"
        toggleMask
        size="17"
      ></Password>
      <label for="password">Password</label>
    </div>
    <!--TODO: Confirm Password -->
    <div class="seven p-float-label">
      <Password
        id="confirmPassword"
        v-model="v$.confirmPassword.$model"
        toggleMask
        :feedback="false"
        size="17"
      ></Password>
      <label for="confirmPassword">Confirm Password</label>
    </div>
    <!--TODO: Degree Large screen -->
    <div class="nine" v-if="true">
      <h4>Your education</h4>
      <SelectButton v-model="degree" :options="degreeOptions" />
    </div>
    <!--TODO: Degree Small screen -->
    <div class="nine" id="radio" v-if="false">
      <h4>Your education</h4>
      <div class="p-field-radiobutton">
        <RadioButton
          id="Student"
          name="Student"
          :value="degreeOptions[0]"
          v-model="degree"
        />
        <label for="Student">Student</label>
      </div>
      <div class="p-field-radiobutton">
        <RadioButton
          id="Collegian"
          name="Collegian"
          :value="degreeOptions[1]"
          v-model="degree"
        />
        <label for="Collegian">Collegian</label>
      </div>
      <div class="p-field-radiobutton">
        <RadioButton
          id="Professor"
          name="Professor"
          :value="degreeOptions[2]"
          v-model="degree"
        />
        <label for="Professor">Professor</label>
      </div>
    </div>
    <!--TODO: Confirm Terms -->
    <div class="eight">
      <ToggleButton
        id="confirm"
        v-model="v$.confirm.$model"
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
      <Button
        icon="pi pi-check"
        label="Submit"
        class="p-button-raised"
        @click="submitForm"
      />
    </div>
  </form>
</template>

<script>
import InputText from "primevue/inputtext";
import Knob from "primevue/knob";
import Password from "primevue/password";
import Rating from "primevue/rating";
import ToggleButton from "primevue/togglebutton";
import SelectButton from "primevue/selectbutton";
import RadioButton from "primevue/radiobutton";
import useVuelidate from "@vuelidate/core";
import { required, email, helpers, sameAs } from "@vuelidate/validators";

const mediumPassword = helpers.regex(
  /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})./
);

export default {
  setup() {
    return { v$: useVuelidate() };
  },
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
      confirmPassword: null,
      rating: null,
      confirm: false,
      degree: null,
      degreeOptions: ["Student", "Collegian", "Professor"],
    };
  },
  validations() {
    return {
      firstName: { required },
      lastName: { required },
      email: { required, email },
      password: { required, mediumPassword },
      confirmPassword: { required, sameAsPassword: sameAs(this.password) },
      confirm: { required, sameAsTrue: sameAs(true) },
    };
  },

  methods: {
    submitForm() {
      const validAge = this.age === "Age" ? null : this.age;
      this.firstName = this.firstName.replace(/\s+/g, " ");
      this.lastName = this.lastName.replace(/\s+/g, " ");
      this.email = this.email.replace(/\s+/g, "");

      if (!this.v$.$invalid) {
        fetch(
          "https://vue-http-demo-5d421-default-rtdb.firebaseio.com/users.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstName: this.firstName,
              lastName: this.lastName,
              email: this.email,
              password: this.password,
              rating: this.rating,
              degree: this.degree,
              age: validAge,
            }),
          }
        );
      }
    },
  },
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

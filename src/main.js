import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import ToastService from 'primevue/toastservice';
import Toast from "primevue/toast";

import 'primevue/resources/themes/lara-dark-teal/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import 'primeflex/primeflex.css'

const app = createApp(App);

app.use(PrimeVue, { ripple: true }, { inputStyle: 'filled' }, {
    zIndex: {
        modal: 1100,        //dialog, sidebar
        overlay: 1000,      //dropdown, overlaypanel
        menu: 1000,         //overlay menus
        tooltip: 1100       //tooltip
    }
});
app.use(ToastService);

app.component('Button', Button)
app.component('Toast', Toast)

app.mount('#app')

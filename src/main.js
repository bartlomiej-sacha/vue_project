import {createApp} from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import InputText from 'primevue/inputtext';
import 'primevue/resources/themes/lara-light-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import './index.css';

const app = createApp(App);
app.use(PrimeVue);

// eslint-disable-next-line vue/multi-word-component-names
app.component('Column', Column);
app.component('DataTable', DataTable);
app.component('InputText', InputText);

app.mount('#app');

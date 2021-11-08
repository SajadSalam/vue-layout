import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import "./libs/http/http";
import config from './config'

Vue.prototype.$config = config;
Vue.config.productionTip = false

// if (localStorage.getItem("theme") == null) {
//   localStorage.setItem(
//     "theme",
//     JSON.stringify({
//       colors: {
//         primary: "#FC766A", // orange
//         secondary: "#5B84B1", // grey
//         accent: "#3CC2E0", // cyan
//         error: "#FF606B",// red,
//         info: "#2196F3",
//         success: "#2ED67B",// gren
//         warning: "#FFC107",
//         darkBackground: "#1E1E1E",
//         lightBackground: "#F5F5F5"
//       },
//       backType: '',
//       image: null,
//       appbar: "light",
//       drawer: "light"
//     })
//   );
//   window.location.reload();
// } else {
//   const theme = JSON.parse(localStorage.getItem("theme"));
//   if (theme.colors == undefined || theme.backType == undefined || theme.appbar == undefined || theme.drawer == undefined) {
   
//     localStorage.setItem(
//       "theme",
//       JSON.stringify({
//         colors: {
//           primary: "#FC766A", // orange
//           secondary: "#5B84B1", // grey
//           accent: "#3CC2E0", // cyan
//           error: "#FF606B",// red,
//           info: "#2196F3",
//           success: "#2ED67B",// gren
//           warning: "#FFC107",
//           darkBackground: "#1E1E1E",
//           lightBackground: "#F5F5F5"
//         },
//         backType: 'gradient',
//         image: null,
//         appbar: "light",
//         drawer: "dark"
//       })
//     );
//     window.location.reload();
//   }
// }
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

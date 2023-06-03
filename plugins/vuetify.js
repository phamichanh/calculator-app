import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      dark: false,
      themes: {
        light: {
          colors: {
            primary: "#E9E3DB",
            secondary: "#647298",
            accent: "#181F32",
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});

/*
main bg   #3a4764
toggle bg #232c43
screen #182034

*/

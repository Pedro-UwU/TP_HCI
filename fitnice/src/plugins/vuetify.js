import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify/*, {
    iconfont: 'md',
    theme: {
        primary: '#192633',
        secondary: '#141D26',
        tertiary: '#374140',
        quaternary: '#45688C',
        quinary: '#BDC3C7',
    }
}*/);

const vuetify = new Vuetify({
    theme: {
        dark: true,
        themes: {
            // light: {
            //     primary: '#192633',
            //     secondary: '#141D26',
            //     tertiary: '#374140',
            //     quaternary: '#45688C',
            //     quinary: '#BDC3C7',
            // },
            dark: {
                background: '#192633',
                primary: '#192633',
                secondary: '#141D26',
                tertiary: '#374140',
                quaternary: '#45688C',
                quinary: '#BDC3C7',
            }
        }
    }
})

export default vuetify

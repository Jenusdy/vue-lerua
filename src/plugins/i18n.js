import Vue from "vue"
import VueI18n from "vue-i18n"

Vue.use(VueI18n)

const messages = {
    'en' : {
        msg : 'Welcome back to my website, {name}',
        menuList : {
            home : 'Home'
        }
    },
    'id' : {
        msg : 'Welkom bek tu mai websait, {name}',
        menuList : {
            home : 'Beranda'
        }
    },
    'es' : {
        msg : "Espanyola"
    },
    'in' : {
        msg : "Acha acha nehi nehi"
    },
    'zw' : {
        msg : "Ovuvuvewe ozaz"
    }
}

const dateTimeFormats = { 
    'en' : {
        'long' : {
            year : 'numeric',
            month : 'long',
            day : 'numeric',
            weekday : 'long'
        },
        'digit' : {
            year : 'numeric',
            month : '2-digit',
            day : '2-digit'
        }
    },
    'id' : { 
        'long' : {
            year : 'numeric',
            month : 'long',
            day : 'numeric',
            weekday : 'long'
        },
        'digit' : {
            year : 'numeric',
            month : '2-digit',
            day : '2-digit'
        }
    }
}

const numberFormats  = {
    'id' : {
        'currency' : {
            style : 'currency',
            currency : 'IDR'
        }
    },
    'en' : {
        'currency' : {
            style : 'currency',
            currency  : 'USD'
        }
    }
}

const i18n = new VueI18n({
    locale : 'id',
    fallbackLocale : 'id',
    messages,
    dateTimeFormats,
    numberFormats
})

export default i18n;
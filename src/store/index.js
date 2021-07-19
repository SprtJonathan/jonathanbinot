import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let language = localStorage.getItem("language");
let birthDate = new Date("02/14/1999");
let ageOperation = Date.now() - birthDate.getTime();
let ageDate = new Date(ageOperation);
let birthYear = ageDate.getUTCFullYear();
let age = Math.abs(birthYear - 1970)



export default new Vuex.Store({
  state: {
    language: language,
    age: age,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

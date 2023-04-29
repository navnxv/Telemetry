
import axios from 'axios';
import { defineStore } from 'pinia'
import { getApp } from 'firebase/app';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions'
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDkAyP70-ee-nxfiKcuEIhRvyQDjLtEMu8",
    authDomain: "telemetryfp.firebaseapp.com",
    databaseURL: "https://telemetryfp-default-rtdb.firebaseio.com",
    projectId: "telemetryfp",
    storageBucket: "telemetryfp.appspot.com",
    messagingSenderId: "755632942749",
    appId: "1:755632942749:web:27e70ea38c0a2754432e74",
    measurementId: "G-F066CM01NV"
  };

const app = initializeApp(firebaseConfig);
const functions = getFunctions(getApp());
connectFunctionsEmulator(functions, "localhost", 5001);

export const useInfoStore = defineStore('info', {

    state: () => ({
        mainVersion: 0,
        subVersion: 0,
        today: new Date(),
        development: true,

    }),

    getters: {
        name: state => { return "Final Project" },
        version: state => {

            const month = state.today.getUTCMonth() + 1;  // Jan = 0
            const day = state.today.getUTCDate();
            return `v${state.mainVersion}`+
            `.${month}`+
            `.${day}`+
            `.${state.subVersion}`
        },
    },

    actions: {

        increment() {
            this.subVersion++;
            if (this.subVersion > 9) {
                this.mainVersion++;
                this.subVersion = 0
            }
        },

        async pingFireBase(){
            let server; 
            if (this.development)
                server = "http://127.0.0.1:5002/telemetryfp/us-central1"


            axios.post(`${server}/helloWorld`, {})
                .then( response => {

                    console.log(response);
                });
        }
    }
})

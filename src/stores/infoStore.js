
import axios from 'axios';
import { defineStore } from 'pinia'

import {getFunctions, connectFunctionsEmulator} from "firebase/functions";
// const functions = getFunctions(getApp())
// connectFunctionsEmulator(functions,"localhost", 5001)
axios("localhost:5001", {
    methog:'GET', 
    mode:'no-cors',
    headers:{
        'Access-Control-Allow-Origin':'*',
        'Content-Type':'application/json'
    }
})



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

        pingFireBase(){

            let server = "https://us-central1-telemetryfp.cloudfunctions.net/helloworld";
            
            if (this.development)
                server = "http://127.0.0.1:4000"


            axios.post(`${server}/helloworld`, {})
                .then( response => {

                    console.log(response);
                });
        }
    }
})

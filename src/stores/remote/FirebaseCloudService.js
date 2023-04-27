/*Copyright (c) 2023. Mercedes Senties, All Rights Reserved*/

import CloudService from "./CloudService";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export class FirebaseCloudService extends CloudService{
    
    #_firebaseConfig;

    constructor() {
        super();

        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        this.#_firebaseConfig = {
            apiKey: "AIzaSyDkAyP70-ee-nxfiKcuEIhRvyQDjLtEMu8",
            authDomain: "telemetryfp.firebaseapp.com",
            projectId: "telemetryfp",
            storageBucket: "telemetryfp.appspot.com",
            messagingSenderId: "755632942749",
            appId: "1:755632942749:web:27e70ea38c0a2754432e74",
            measurementId: "G-F066CM01NV"
        };

        this.app = {}
        this.analytics = {}
        this.firestore = {}
    }
    
    
    connect() {
        //overload to connect with remote service
        // Initialize Firebase
        this.app = initializeApp(this.#_firebaseConfig);
        this.analytics = getAnalytics(this.app);
        this.firestore = getFirestore(this.app)
    }

    save() {
        //override to support CloudService save of record/struct
    }

    async loadAsync() {
        //overload to upload a single record back to the service
        const myCollection = collection(this.firestore, "telemetryData");
        const query = await getDocs(myCollection);
        query.forEach( doc => {

            return doc.data()   //return won't work
        });
    }

    fetchThen() {

        return new Promise((resolve, reject) => {
            collection(this.firestore, "telemetryData")
            .then( myCollection => {
                
                getDocs(myCollection)
                    .then( query => {

                        query.forEach( doc => {

                            resolve( doc.data() ) //return won't work
                        })                
                    })
                    .catch( error => { 
                        console.log('GetDocs failed');
                        reject( error )
                    })
            })
            .catch( error => { 
                console.log('collection retrieval failed');
                reject( error )
            })
        })
    }

    loadAll() {
        //overload to use the CloudService to fetch a list of things
    }
}
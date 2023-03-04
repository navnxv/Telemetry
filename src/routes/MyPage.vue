<!--
<VFSHome name="Title" />
Copyright (c) 2023 Navpreet Singh. All Rights Reserved.
-->
<script>

    import Controller from '@/plugins/controller'

    import { useInfoStore } from '@/stores/infoStore.js'

    import studentname from '@/components/studentInfo.vue'

    class MyPageController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                formData: {
                    name:"",
                    studentNumber:0,
                },
                data:{
                    value: false,
                },
                components:{
                    studentname,
                }
                
            }
            this.injectStore( useInfoStore );
        }

        viewData(){
            return this.data.value;
        }

        changeValue(){
            this.data.value = true;
        }
    }               
    
    export default new MyPageController('myPage', {studentname} );

</script>

<template>

    <section class="flexbox columns myPage">
        <h1 class="flexitem left title">Student Information</h1>
    
        <studentname><slot><h3>Sup</h3></slot></studentname>
        <div class="flexitem dialog">
            
            <!-- https://blog.logrocket.com/deep-dive-vue-event-handling/#:~:text=To%20prevent%20an%20event's%20default,after%20the%20form%20is%20submitted.-->
            <form class="student-info" @submit.stop.prevent>
                
                <label for="name">Student Name:
                    <input name="name" v-model="formData.name"> 
                </label><br/>

                <label for="sNumber">Student Number:
                    <input name="sNumber" type="number" v-model="formData.studentNumber">
                </label><br/>

                <button @click="changeValue()">Submit</button>
            
            </form>
            <div v-show="viewData()" id="studentData" >
                <label name="studentName">Student Name: </label>
                <label name="studentName">{{ formData.name }}</label><br />

                <label name="studentID">Student Id:</label>
                <label name="studentID">{{ formData.studentNumber }}</label>
            </div>
        </div>
    </section>

</template>
<style scoped>
    /* Local styles for this template */ 
    .myPage {
        margin:2vw;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        height: 78vh;
        width: 80vw;
    }

    .student-info {
        display: flex;
        justify-content: center;
        border: 2px solid #333;
        margin: 1em;
        padding: 2em;
    }


    select, input, button {
        font-size: 1.2em;
        font-weight: 700;
        height: 1.4em;
    }

    button {
        padding: .5em;
        margin: .25em;
        padding-bottom: 1.5em;
    }

    
</style>


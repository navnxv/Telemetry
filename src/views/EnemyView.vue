<script setup>
import FirestoreCloudService from '@/stores/FirestoreCloudService.js';

const firestoreService = new FirestoreCloudService("Enemy");

const data = {
  speed: 0,
  jump: 0,
  shoot: 0
};

const onSubmit = async () =>{

  const documentData = {
      speed: { integerValue: data.speed },
      jump: { integerValue: data.jump },
      shoot: { integerValue: data.shoot },
    };
    
  firestoreService.addData(documentData);
}

</script>

<template>
  <main>
    <form @submit.prevent="onSubmit">
      <label for="speed">Speed:</label><br>
      <input type="number" id="speed" name="500" v-model="data.speed"><br>
      
      <label for="Jump">Jump:</label><br>
      <input type="number" id="jump" name="jump" v-model="data.jump"><br>

      <label for="shoot">Shooting Damage:</label><br>
      <input type="number" id="shoot" name="shoot" v-model="data.shoot"><br>
      
      <input type="submit" value="Submit">
    </form>
  </main>
</template>

<style>
  form{
    margin-top: 100px;
  }
</style>

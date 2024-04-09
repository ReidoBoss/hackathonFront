<template>
  <h1>--LOGIN--</h1>
  <p>username</p>
  <input type="text" v-model="username">
  <p>password</p>
  <input type="text" v-model="password">
  <br>
  <button @click="login" style="border: 1px solid black;">Login</button>
  <p>{{errorMessage}}</p>
</template>

<script setup>
import {ref,onMounted} from "vue";
const username = ref();
const password = ref();
const errorMessage = ref();



const login = async () =>{
    try{
        const response = await fetch ('http://localhost:8080/getUsers');
        const data = await response.json();
        for (var i = 0 ; i < data.length ; i ++)
        {
            if(data[i].username==username.value){
                if(data[i].password == password.value){
                }
                else{
                    errorMessage.value = "Wrong Password"
                }
            }
            else{
                errorMessage.value = "WRONG CREDENTIALS";
            }

        }
    }
    catch(error){
        console.log(error);
    }
}


</script>

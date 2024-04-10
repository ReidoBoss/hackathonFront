<template>
    <p>company_name</p>
    <input v-model="company_name" type="text">
    <p>employer_name</p>
    <input v-model="employer_name" type="text">
    <p>email</p>
    <input v-model="email" type="text">
    <input type="file" @change="handleFileImage">
    <button @click="register">SUBMIT</button>
</template>
<script setup>
import {ref} from "vue";
import axios from "axios";

const company_name = ref();
const employer_name = ref();
const email = ref();
const image = ref(null);

const register = async ()=>{
  try{
    const formData = new FormData();
    formData.append('company_name',company_name.value);
    formData.append('employer_name',employer_name.value);
    formData.append('email',email.value);

    formData.append('image',image.value);

    await axios.post("http://localhost:8080/addEmployer",formData,{
      headers: {
      "Content-Type" : "multipart/form-data",
        },
      });
      window.location.reload();
  }catch(error){
    console.log("ERror: ",error);
  }
};


const handleFileImage = (event) => {
  const file = (event.target.files || [])[0];

    image.value = file;
};
</script>
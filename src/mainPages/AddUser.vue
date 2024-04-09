<template>
<p> name</p>
<input v-model="name" type="text">   

<p> username</p>
<input v-model="username" type="text">

<p> password</p>
<input v-model="password" type="text"><br>
<input type="file" @change="handleFileImage">
<br>
<button @click="submitUser">submit</button>
</template>

<script setup>
import axios from "axios"
import {ref ,onMounted} from "vue";

const name = ref();
const username = ref();
const password = ref();
const image = ref(null);

const submitUser = async ()=>{
  try{
    const formData = new FormData();
    formData.append('name',name.value);
    formData.append('username',username.value);
    formData.append('password',password.value);
    formData.append('role','user');
    formData.append('image',image.value);

    await axios.post("http://localhost:8080/addUser",formData,{
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
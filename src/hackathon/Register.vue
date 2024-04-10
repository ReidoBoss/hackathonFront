<template>
<p>first_name</p>
<input v-model="first_name" type="text">
<p>middle_name</p>
<input v-model="middle_name" type="text">
<p>last_name</p>
<input v-model="last_name" type="text">
<p>email</p>
<input v-model="email" type="text">
<p>birthdate</p>
<input v-model="birthdate" type="date">
<p>gender</p>
<input v-model="gender" type="text">
<p>school_grad</p>
<input v-model="school_grad" type="text">
<p>experience</p>
<input v-model="experience" type="text">
<p>username</p>
<input v-model="username" type="text">
<p>password</p>
<input v-model="password" type="text">
<p>skills</p>
<input v-model="skills" type="text">
<p>objective</p>
<input v-model="objective" type="text">
<p>position</p>
<input v-model="position" type="text">
<p>achievements</p>
<input v-model="achievements" type="text">
<p>picture</p>
<input type="file" @change="handleFileImage">
<button @click="register">SUBMIT</button>
</template>
<script setup>

import axios from "axios"
import {ref ,onMounted} from "vue";

const first_name = ref();
const middle_name = ref();
const last_name = ref();
const email = ref();
const birthdate = ref();
const gender = ref();
const school_grad = ref();
const experience = ref('herald');
const username = ref();
const password=ref();
const skills = ref();
const objective = ref();
const position=ref();
const achievements = ref();
const picture = ref(null);
const register = async ()=>{
  try{
    const formData = new FormData();
    formData.append('first_name',first_name.value);
    formData.append('middle_name',middle_name.value);
    formData.append('last_name',last_name.value);
    formData.append('email',email.value);
    formData.append('birthdate',birthdate.value);
    formData.append('gender',gender.value);
    formData.append('school_grad',school_grad.value);
    formData.append('experience',experience.value);
    formData.append('username',username.value);
    formData.append('password',password.value);
    formData.append('skills',skills.value);
    formData.append('objective',objective.value);
    formData.append('position',position.value);
    formData.append('achievements',achievements.value);
    formData.append('picture',picture.value);


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

  picture.value = file;
};

</script>
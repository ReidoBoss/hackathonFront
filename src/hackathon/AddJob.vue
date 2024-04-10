<template>
    <p>employer_id</p>
    <input v-model="employer_id" type="text">
    <p>salary</p>
    <input v-model="salary" type="text">
    <p>position</p>
    <input v-model="position" type="text">
    <p>likes</p>
    <input v-model="likes" type="text">
    <p>job_type</p>
    <input v-model="job_type" type="text">
    <p>experience</p>
    <input v-model="experience" type="text">
    <p>job_title</p>
    <input v-model="job_title" type="text">
    <p>job_description</p>
    <input v-model="job_description" type="text">
    <p>step1</p>
    <input v-model="step1" type="text">
    <p>step2</p>
    <input v-model="step2" type="text">
    <p>step3</p>
    <input v-model="step3" type="text">
    <p>step4</p>
    <input v-model="step4" type="text">
    <p>step5</p>
    <input v-model="step5" type="text">
    <p>location</p>
    <input v-model="location" type="text">
    <p>image</p>
    <input type="file" @change="handleFileImage">
    <button @click="addJob">SUBMIT</button>
</template>

<script setup>
import {ref} from "vue"
import axios from "axios"

const employer_id = ref(1)
const salary = ref()
const position = ref()
const job_type = ref('wah')
const experience = ref('legend')
const job_title=ref()
const job_description = ref()
const step1=ref()
const step2=ref();
const step3=ref();
const step4 = ref()
const step5=ref()
const location = ref();
const image = ref(null);
const addJob = async () =>{
    try{
    const formData = new FormData();
    formData.append('employer_id',employer_id.value);
    formData.append('salary',salary.value);
    formData.append('position',position.value);
    formData.append('job_type',job_type.value);
    formData.append('experience',experience.value);
    formData.append('job_title',job_title.value);
    formData.append('job_description',job_description.value);
    formData.append('step1',step1.value);
    formData.append('step2',step2.value);
    formData.append('step3',step3.value);
    formData.append('step4',step4.value);
    formData.append('step5',step5.value);
    formData.append('location',location.value);
    formData.append('image',image.value);


    await axios.post("http://localhost:8080/addJob",formData,{
      headers: {
      "Content-Type" : "multipart/form-data",
        },
      });
      window.location.reload();
  }catch(error){
    console.log("ERror: ",error);
  }
}
const handleFileImage = (event) => {
  const file = (event.target.files || [])[0];

  image.value = file;
};

</script>
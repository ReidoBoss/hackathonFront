<template>
<div
v-for="(user,index) in userDatas"
:key="index"
>
<p>---------------</p>
<p>Name:</p>
<div> {{user.name}}</div>
<p>Image:</p>
<div>
    <img :src="user.image">
</div>
<p>---------------</p>

</div>
</template>

<script setup>

import {ref,onMounted} from "vue";

onMounted(()=>{
    getUsers();
});

const userDatas = ref([]);

const getUsers = async ()=>{
    try{
        const response = await fetch('http://localhost:8080/getUsers');
        const data = await response.json();
        for (var i = 0 ; i < data.length;i++){

            var imageUrl = await convertBlob(await getUserImage(data[i].user_id));
            userDatas.value.push({
                user_id : data[i].user_id,
                name : data[i].name,
                image : imageUrl,
            });
        }
    }
    catch(Error){
        console.log(Error);
    }
}

const getUserImage = async (id) =>{
    try{
        const response = await fetch(`http://localhost:8080/getUserImage/${id}`)  
        const data = await response.json();
        return data[0].image.data;
    }
    catch(error){
        console.log(error)
    }
}

const convertBlob = (image) => {
      return new Promise((resolve, reject) => {
        if (image) {
          const blob = new Blob([new Uint8Array(image)], { type: "image/jpeg" });
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = () => {
            const dataURL = reader.result;
            resolve(dataURL);
          };
        }
      });
    };

</script>
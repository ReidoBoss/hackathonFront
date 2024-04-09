<template>
    <div>
        <div>
            <p>
                Video ID:
            </p>
            <input v-model="vid_id" type="text">
            <button @click="getVideo(vid_id)">Go</button>
        </div>
      <video :src="video" type="video/mp4" controls>
      </video>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  
  onMounted(() => {
  });
  
  const video = ref();
  const vid_id = ref();

 
  
  const getVideo = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/getVideo/${id}`);
      const data = await response.json();
        
      const vid = data[0].video.data;
      video.value = await convertBlob(vid);
      console.log(vid)

    } catch (error) {
      console.log("Error:", error);
    }
  };

  const convertBlob = (video) => {
      return new Promise((resolve, reject) => {
        if (video) {
          const blob = new Blob([new Uint8Array(video)], { type: "video/mp4" });
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
  
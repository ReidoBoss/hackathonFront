<template>
    <div class="container" maximum-scale=1>
      <h2 class="title">Compose Email</h2>
      <div class="form-group">
        <label for="email">To:</label>
        <input type="email" id="email" class="input" v-model="email" placeholder="Enter recipient's email">
      </div>
      <div class="form-group">
        <label for="subject">Subject:</label>
        <input type="text" id="subject" class="input" v-model="subject" placeholder="Enter email subject">
      </div>
      <div class="form-group">
        <label for="message">Message (HTML):</label>
        <textarea id="message" class="textarea" v-model="message" rows="6" placeholder="Enter HTML content for the email body"></textarea>
      </div>
      <button class="button" @click="sendMail">Send Email</button>
    </div>
  </template>
  
  
  <script setup>
  import { ref } from "vue";
  import axios from "axios";
  
  const email = ref("");
  const subject = ref("");
  const message = ref("");
  
  const sendMail = async () => {
    try {
      const formData = new FormData();
      formData.append("email", email.value);
      formData.append("subject", subject.value);
      formData.append("message", message.value);
  
      await axios.post("http://localhost:8080/sendMail", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      email.value = "";
      subject.value = "";
      message.value = "";
  
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send email. Please try again.");
    }
  };


  //real time maker

const initializeDataFetching = async () => {
      await getNewPosts();
      setInterval(getNewPosts, 1000); 
  };

  </script>
  
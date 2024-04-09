<template>
    
    <div>
      <!-- Your HTML template goes here -->
      <button @click="updateValue">Update Value</button>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios';
  
  // Function to update value by ID
  const updateValueById = async (userId, incrementBy) => {
    try {
    await axios.put(`http://localhost:8080/updateValueById/${userId}`, { incrementBy });
    } catch (error) {
      console.error('Error updating value:', error);
    }
  };
  
  const updateValue = () => {
    const userId = 1; 
    const incrementBy = 1; 
    updateValueById(userId, incrementBy);
  };
  </script>
  
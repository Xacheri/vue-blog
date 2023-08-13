<script setup>
    import axios from 'axios';
</script>

<template>
    <h1 id="test"></h1>
</template>

<script>
  export default {
    data(){
      return {
        
      }
    },
    methods:{
      async checkAuth() {
        try {
          const res = await axios.get("http://localhost:3001/api/authenticated");

          if (res.data.authenticated = true)
          {
            document.getElementById("test").innerText = "LOGGED IN";
          }
          else
          {
            document.getElementById("test").innerText = "LOGGED OUT";
          }
        }
        catch (e)
        {
          console.log(e);
        }
      }
    },
    mounted() {
      this.checkAuth();
    }
  }
</script>
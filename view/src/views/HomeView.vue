<script setup>
import Post from '../components/Post.vue';
import AuthorCard from '../components/AuthorCard.vue';
import axios from 'axios';
</script>

<template>
  <div class="row">
    <main class="col-md">
      <h1 id="test"></h1>
      <Post v-for="g in [g,g]" class="mb-4"></Post>
    </main>
    <aside class="col-md-4 m-2">
      <AuthorCard></AuthorCard>
    </aside>
  </div>
</template>

<script>
</script>

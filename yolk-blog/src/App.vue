<script setup>
import 'bootstrap/dist/css/bootstrap.css'
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
      <h1 class="display-1">Queer As Yolk</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/hire">Hire Me</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>

header {
  line-height: 1.5;
  max-height: 100vh;
  width: 100%;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
}


h1 {
  color: var(--color-yolk);
  background-color: rgba(174,74,150,0.60);
  -webkit-box-shadow:0px 0px 173px 137px rgba(174,74,150,0.66);
  -moz-box-shadow: 0px 0px 173px 137px rgba(174,74,150,0.66);
  box-shadow: 0px 0px 173px 137px rgba(174,74,150,0.66);
  font-weight: 600;

  font-family: 'Cookie', cursive;

  text-align: center;
}


nav {
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a {
  display: inline-block;
  margin: 0.75rem;
  padding: 0.75rem;
  padding-top: 5px;
  padding-bottom: 5px;
  color: var(--dark);
  border-radius: 35px;
  border: 2px solid var(--dark);
  text-decoration: none;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    padding-right: calc(var(--section-gap) / 2);

    justify-content: flex-start;
  }

  h1 {
    text-align: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

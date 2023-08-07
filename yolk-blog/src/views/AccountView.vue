<script setup>
    import LoginForm from '../components/LoginForm.vue';
</script>
<template>
    <main class="container-fluid d-flex justify-content-center">
        <LoginForm class='w-75' v-if="!this.authenticated"></LoginForm>
    </main>
</template>

<script>
export default {
    data(){
        return{
            authenticated: false
        }
    }
}

</script>
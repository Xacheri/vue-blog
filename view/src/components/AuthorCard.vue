<template>
    <div class="card">
        <img src='../assets/placeholder.jpg' class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ author.name }}</h5>
            <p class="card-text">{{author.bio}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            author: {
                name: "Meg Petersen",
                bio: "Meg is a down-to-earth Communications student at Missouri State University with a big dream – to be a professional writer. Through their blog, they're honing their storytelling skills, exploring both fiction and real-life topics. Join this aspiring writer on their journey of finding Joy as a queer person in Southwest Missouri, while sharing insights and stories that resonate with the heart of everyday life.",
                image: "../assets/placeholder.jpg"
            }
        }
    }
}
</script>

<style scoped>
* {
    color: var(--dark);
}
.card {
    background-color: var(--tan);
    backdrop-filter: blur(15px);
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
}

img {
    border-radius: 20px 20px 0px 0px;
}
</style>
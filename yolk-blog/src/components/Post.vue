<template>
    <article class="glassCard">
        <h3> {{ post.title }}</h3>
        <time> {{ getDate() }}</time>
        <hr>
        <p> {{ post.content }}</p>
        <cite> - {{  post.author }}</cite><br>
        <span> {{ post.tags.toString() }}</span>
    </article>
</template>

<script>
    export default {
        data(){
            return {

            }
        },
        props: {
            post: {
                type: Object,
                default: {
                    title:"Example Post",
                    author:"Example Author",
                    content:`Hey there, fellow curious minds! Welcome to this absolutely remarkable, awe-inspiring, and profoundly groundbreaking blog post. Today, I am delighted to be your guide on this epic journey through the realms of example texts. Now, I know what you're thinking, "Wow, an example text, how enthralling!" And honestly, you're absolutely right – it's hard to contain the excitement! Now, you might be wondering, "Why should I even care about example texts?" Well, my dear readers, think of them as the unsung heroes of the writing world, quietly showcasing the art of language while being overshadowed by the flashy main acts. But fret not, for today, we shall shower these unassuming gems with the love and admiration they so deserve! This example text is like a majestic unicorn, riding on a rainbow, leading you to the pot of gold at the end of the writing rainbow. Its words are carefully crafted to inspire, inform, and amuse you all at once – a literary masterpiece in disguise. So, buckle up, my friends, and prepare to be dazzled by the brilliance of this example text, for it's not just any example text – it's the embodiment of linguistic virtuosity and a beacon of writing prowess. Get ready to have your minds blown, and remember, you're about to witness history in the making – the rise of the example text revolution!`,
                    date: 1690478068581,
                    tags: ["example", "hidden"]
                }
            }
        },
        methods: {
            getDate(){
                const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

                let date = new Date(this.post.date);
                let displayed = days[date.getDay()] +", " + months[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear();
                return displayed; 
            }
        }
    }
</script>

<style>
    p {
        color: black;
    }

    :not(p)
    {
        color: var(--dark);
    }
</style>
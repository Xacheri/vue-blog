<script setup>
    
</script>

<template>
    <link href="https://cdn.quilljs.com/1.0.0/quill.snow.css" rel="stylesheet">

    <div class="glassCard">
        <form>
            <div class="d-flex justify-content-center">
                <label for="title" class="h1">Title:</label>
                <input type="text" name="title" class="h1 ms-4 rounded-3">
            </div>
            <div class="d-flex justify-content-center">
                <label for="post" class="h1">Post:</label>
                <div id="postBoxDiv" class="ms-4 d-flex flex-column">
                    <div name="post" id="postbox"></div>
                </div>
            </div>
            <div class="d-flex justify-content-center mt-2">
                <label for="tags" class="h1">Tags:</label>
                <input type="text" name="tags" class="ms-4 rounded-3">
            </div>
            <div class="d-flex justify-content-center">
                <button type="submit" class="btn mt-3 rounded-4">P O S T</button>
            </div>
        </form>
    </div>
</template>

<script>
    import Quill from 'quill';

    export default {
        data() {
            return {

            }
        },
        methods: {
            quillInit() {
                this.quill = new Quill('#postbox', {
                    theme: 'snow'
                });
            }
        },
        mounted() {
            this.quillInit();
        },
        beforeDestroy() {
            if (this.quill)
            {
                this.quill.destroy();
            }
        }
    }
</script>
<style>
    input {
        width: 70%;
        color: black !important;
        background-color: transparent;
        border-color: var(--dark);
    }

    #postbox {
        height: 40vh;
        color: black !important;
        border-color: black;
    }

    #postBoxDiv 
    {
        width: 70%;
    }

    .ql-container {
        width: 100%;
        border: 2px solid var(--dark);
        background-color: transparent;
        border-radius: 0px 0px 15px 15px;
    }

    .ql-toolbar.ql-snow{
        border-color: var(--dark) !important;
        border-radius: 15px 15px 0px 0px;
        background-color: transparent;
    }
    .btn {
        background-color: var(--color-yolk);
        font-size: 1.3rem;
        font-weight: bold;
        color: var(--dark);
    }

    .btn:hover {
        background-color: var(--lavender);
    }
</style>
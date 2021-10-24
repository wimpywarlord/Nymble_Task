<template>
    <button @click="onClick()" v-bind:style="{background:color}" class="btn">{{text}}</button>
    <!-- v-on:click="onClick()" or @ do same thing -->
</template>

<script>
export default {
    name : "Button",
    props: {
        text: String,
        color: String,
    },
    methods:{   
        onClick() {
            this.$emit("btn-click");
        }
    },
    emits : ["btn-click"]
}
</script>

<style scoped>

</style>
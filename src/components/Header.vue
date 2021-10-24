<template>
    <header>
        <h1>{{title}}</h1>
        <Button @btn-click="$emit('toggle-add-task')" :text= "show_hide_task_form ? 'Close' : 'Add Task'" :color="show_hide_task_form ? 'red' : 'green'"/>
    </header>
</template>

<script>
import Button from "./Button.vue";

export default {
    name: "Header",
    props : {
        title: {
            type : String,
            default : "BACKUP OP"
        },
        show_hide_task_form : {
            type : String,
        }
    },
    components : {
        Button,
    },
    emits : ["toggle-add-task"],
}
</script>

<style scoped>
    header {
        display : flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom:20px
    }
</style>
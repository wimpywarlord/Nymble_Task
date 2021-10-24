<template>
    <header>
        <h1>{{title}}</h1>
        <Button v-show="homePage" @btn-click="$emit('toggle-add-task')" :text= "show_hide_task_form ? 'Close' : 'Add Task'" :color="show_hide_task_form ? 'red' : 'green'"/>
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
    // COMPUTED PROPERTY IS USED FOR REACTIVE PROPERTY
    //  YOU HAD FIRST NAME AND LAST NAME
    // AND YOU WANTED TO CONCAT THAT
    computed : {
        homePage() {
            // WE HAVE ACCESS TO this.$route
            if (this.$router.path === "/") {
                return true
            }
            else
            {
                return false
            }
            // this.$router.push and redirct inside fucntions as well
        }
    }
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
<template>
    <!-- V-FOR IS ANOTHER DIRECTIVE -->
    <!-- KEY DIRECTIVE IS COMPULSORY -->
    <div v-for="task in tasks" :key="task.id">
        <!-- TASK WILL BE DYNAMIC SO WE NEED TO BIND IT -->

        <!-- WE NEED TO EMIT AGAIN SINCE WE NEED TO REACH GRANDPARENT OF TASK -->
        <!-- WHICH IS APP.VUE -->
        <Task @dblclick="$emit('toggle-reminder',task.id)" @delete-task="$emit('delete-task',task.id)" :task="task"/>
    </div>
</template>

<script>
import Task from "./Task"

export default {
    name : "Tasks",
    props : {
        tasks : Array,
    },
    components : {
        Task,
    },
    // SINCE WE ARE PASSING IT UP, WE NEED TO DEFINE EMITS
    emits : ['delete-task','toggle-reminder'],
}
</script>

<style scoped>

</style>
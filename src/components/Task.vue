<template>
<!-- CONDITIONAL DECORATION/CSS -->
<!-- WE ALWAYS WANT THE TASK CLASS SO ITS THERE IN THE ARRAY UNCONDITIONALLY -->
<!-- JUST USE ARRAY TO HAVE MULTIPLE CLASSES -->
<!-- @dblclick="$emit('toggle-reminder',task.id)" -->
    <div  :class="[task.reminder ? 'reminder' : '', 'task']">
        <h3>
            {{task.text}}
            <i @click="onDelete(task.id)" class="fas fa-times"></i>
        </h3>
        <p>{{task.day}}</p>
    </div>
</template>

<script>
export default {
    name : "Task",
    props : {
        task : Object,
    },
    methods: {
        onDelete(id) {
            // EMIT ACTIONS ACROSS COMPONENTS OR LAYERS
            // EMIT CAN BE UPWARDS AND DOWNWARDS

            // FIRST PARAM IS NAME OF EVENT (CUSTOM EVENT IN THIS CASE)
            // TASK Id IS DATA BEING SENT ALONG WITH THE EVENT
            this.$emit('delete-task', id);
            console.log(id)
        }
    },
    emits : ['delete-task'],
}
</script>

<style scoped>
.fas {
    color: red;
    font-weight: bold;
}
.task {
    background: #f4f4f4;
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
}
.task.reminder {
    border-left: 5px solid green;
}
.task h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
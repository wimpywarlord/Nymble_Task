<template>
     <!-- v-SHOW And V-if are two good directives for showing or hiding -->
    <div v-if="show_hide_task_form">
      <AddTask @add-task="addTask" />
    </div>

    <!-- TAKSA ARE GONNA BE DYNAMICC -->
    <!-- WE WANT THE VIEW TO BE UPDATED IF THEY CHANGE -->
    <!-- SO WE NEED TO V-BIND IT -->
    <!-- FIRST TASKS IS PROP -->
    <!-- SECOND TASKS is the DATA -->

    <!-- deleteTask() is our defined function where we actually remove the task from list -->
    <!-- DONT PASS ID HERE, IT WILL AUTOMATICALLY RECIEVE BODY OF EMIT WHILE DEFINING INSIDE THE METHODS -->
    <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks"/>
</template>

<script>
import Tasks from "../components/Tasks.vue"
import AddTask from "../components/AddTask.vue"

export default {
    name : "Home",
    components : {
        Tasks,
        AddTask
    },
    props: {
        show_hide_task_form: Boolean,
    },
    data() {
        return {
            tasks : [],
        }
    },
    methods : {
         async fetchTasks() {
      const res = await fetch('api/tasks');
      const data = await res.json();
      return data;
    },
    async fetchSingleTasks(id) {
      const res = await fetch(`api/tasks/${id}`);
      const data = await res.json();
      return data;
    },
    async addTask(newTask){
      const res = await fetch ('api/tasks', {
        method : "POST",
        headers : {
          'Content-type' : 'application/json',
        },
        body: JSON.stringify(newTask),
      })
      const data = await res.json();
      this.tasks = [...this.tasks, data]
    },
    async deleteTask(id) {
      // WE CAN ACCESS TASKS THE DATA OBJECT FROM HERE DIRECTly By using this 
    
    console.log('task', id);

    //  CONFIRM IS A VANILLA JAVASCRIPT FUNCTION 

    if (confirm('Are you sure?')) {
            // FILTER FUNCTION IS A HIGH ORDER ARRAY METHOD
      // WILL LOOP THROUGH AND FOR EACH TASK "WHAT DO WANNA FILTER"

      // SO THE CONDITION INSIDE SAYS 
      // RETURN ALL WHERE TASK.ID is not equal to the ID of the TASK BEING REMOVED 
      const res = await fetch(`/api/tasks/${id}`, {
        method : "DELETE",
      })
      res.status == 200 ? this.tasks = this.tasks.filter((task) => task.id !== id) : alert("ERROR ! TRY AGAIN.");
          
      }
    },
    async toggleReminder(id) 
    {
      // this.tasks = this.tasks.map((task) => { task.id === id ? {...task, reminder : !task.reminder} : task  })}
      console.log(id)
      console.log(this.tasks)
      // this.tasks = this.tasks.map((task) => {
      //   if (task.id === id) {
      //     task.reminder = !task.reminder;
      //   }
      // })
      const taskToToggle = await this.fetchSingleTasks(id);

      taskToToggle.reminder = !taskToToggle.reminder;

      const udtTask = taskToToggle;

      const res = await fetch(`api/tasks/${id}`,{
        method : 'PUT',
        headers : {
          'Content-type' : 'application/json',  
        },
        body : JSON.stringify(udtTask),
      })

      this.tasks.forEach(element => {
        if (element.id === id) {
            element.reminder = !element.reminder;
        }
      });
    }
    },
      // LIFE CYCLE METHODS
  // CREATED IS USED FOR MAKING HTTP REQUESTS FOR MAKING API CALLS
  // WHEN YOU WANT DATA TO BE LOADED BEFORE YOUR PAGE RENDERS
  async created () {
    // THIS FUNCTION CAN ACCESS TASKS by this KEYWORD
    this.tasks = await this.fetchTasks();
  }
}
</script>

<style scoped>

</style>
<template>
<!-- According to Vue docs, $emit passes events to parent. -->
  <div class="container">
    <Header @toggle-add-task="toggleAddTask" title="Kshitij OP" :show_hide_task_form="show_hide_task_form"/>

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
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Tasks from "./components/Tasks.vue"
import AddTask from "./components/AddTask.vue"
import Footer from "./components/Footer.vue"

export default {
  name: 'App',
  components : {
    Header,
    Tasks,
    AddTask,
    Footer,
  },
  // DATA IS FUNCTION WHICH RETURNS AN OBJECT
  data () {
    return {
      tasks : [],
      show_hide_task_form : false,
    }
  },
  methods: {
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
    toggleAddTask() {
      // console.log("Asdhasdhkajhkj")
      // console.log(this.showAddTask)
      this.show_hide_task_form = !this.show_hide_task_form;
      // console.log(this.showAddTask)
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>

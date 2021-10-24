<template>
<!-- According to Vue docs, $emit passes events to parent. -->
  <div class="container">
    <Header @toggle-add-task="toggleAddTask" title="Kshitij OP" :show_hide_task_form="show_hide_task_form"/>
    <router-view :show_hide_task_form="show_hide_task_form"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"

export default {
  name: 'App',
  components : {
    // THE ONLY COMPONENTS YOU WANT ON YOUR APP.VUE
    // ARE THE PARITALS, WHICH ARE COMMON TO EVERY PAGE
    Header,
    Footer,
  },
  // DATA IS FUNCTION WHICH RETURNS AN OBJECT
  data () {
    return {
      show_hide_task_form : false,
    }
  },
  methods: {
    toggleAddTask() {
      // console.log("Asdhasdhkajhkj")
      // console.log(this.showAddTask)
      this.show_hide_task_form = !this.show_hide_task_form;
      // console.log(this.showAddTask)
    },
  },
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

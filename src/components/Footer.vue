<template>
    <footer>
        <p>Copyright &copy; 2021 </p>
        <!-- HREF REFRESH THE PAGE 0 -->
        <!-- WHICH WE DONT WANT IN SPA -->
        <!-- SO USE router-link -->
        <router-link to="/about"> About </router-link>
    </footer>
</template>

<script>
export default {
    name : "Footer"
}
</script>

<style scoped>
a {
  color: #333;
}
footer {
  margin-top: 30px;
  text-align: center;
}
</style>
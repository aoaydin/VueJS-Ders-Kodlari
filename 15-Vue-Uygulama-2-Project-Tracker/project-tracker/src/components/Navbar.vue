<template>
    <nav class="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/addProject">Add Project</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
nav {
    text-align: center;
    margin: 40px auto;
}
nav a{
    display: inline-block;
    text-decoration: none;
    margin: 0 10px;
    color:rgb(129, 131, 131);
    font-size: 18px;
}

a.router-link-active{
    border-bottom: 3px solid #76dd78;
    padding-bottom: 4px;
    color:#76dd78;
}
</style>
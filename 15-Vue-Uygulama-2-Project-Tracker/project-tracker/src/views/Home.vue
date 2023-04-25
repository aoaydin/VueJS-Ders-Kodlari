<template>
  <div class="home">
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <SingleProduct :project="project" @delete="handleDelete"></SingleProduct>
      </div>
    </div>
  </div>
</template>

<script>
import SingleProduct from "../components/SingleProduct.vue"

export default {
  name: 'Home',
  components: { SingleProduct },
  data() {
    return {
      projects: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/projects')
      .then(response => response.json())
      .then(data => this.projects = data)
      .catch(err => console.log(err.message))

  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((project) => project.id !== id)
    }
  }
}

</script>
<style></style>
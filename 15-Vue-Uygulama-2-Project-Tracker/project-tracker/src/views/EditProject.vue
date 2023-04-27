<template>
<div>
   <h4>Edit Project</h4> 
   <form @submit.prevent="handleSubmit">
      <label>Project Title: </label>
      <input type="text" v-model="title" required>
      <label>Project Details: </label>
      <textarea v-model="description" required></textarea>
      <button>Update Project</button>
    </form>
</div>
</template>

<script>
export default {
    props: ['id'],
    data(){
        return{
            title: '',
            description: '',
            uri: "http://localhost:3000/projects/" + this.id
        }
    },
    mounted(){
        fetch(this.uri)
        .then(response => response.json())
        .then((data) => {
            this.title = data.title;
            this.description = data.description;
        });
    },
    methods:{
        handleSubmit(){
            fetch(this.uri, { 
                method: 'PATCH',
                headers: { "Content-Type" : "application/json"},
                body: JSON.stringify({ title: this.title, description: this.description})
                
            })
            .then(() => this.$router.push("/"))
        }
    }

}
</script>

<style>
form {
  padding: 20px;
  border-radius: 5px;

}

label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}

input {
  padding: 10px;
  border: 0;
  border-bottom: 3px solid #ee0808;
  width: 50%;
  box-sizing: border-box;
}

input:focus {
  border-bottom: 5px solid #73ff00;
}

textarea {
  border-bottom: 3px solid #ee4908;
  padding: 10px;
  width: 50%;
  box-sizing: border-box;
  height: 100px;
}

textarea:focus {

  border-bottom: 5px solid #73ff00;
}

form button {
  display: block;
  margin: 20px auto 0;
  background: #d18888;
  border: 0px;
  border-radius: 5px;
  font-size: 20px;
  padding: 10px;
}

form button:hover {
  background: #73ff00;
}
</style>
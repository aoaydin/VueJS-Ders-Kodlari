<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label>Project Title: </label>
      <input type="text" v-model="title" required>
      <label>Project Details: </label>
      <textarea v-model="details" required></textarea>
      <button>Add Project</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      details: ''
    }
  },
  methods: {
    handleSubmit() {
      console.log(this.title, this.details);
    }
  }
}
</script>

<style>
form{
  padding: 20px;
  border-radius: 5px;

}
label{
  display: block;
  color:#bbb;
  text-transform: uppercase;
  font-size:14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin:20px 0 10px 0;
}
input{
  padding: 10px;
  border:0;
  border-bottom: 3px solid #ee0808 ;
  width: 50%;
  box-sizing: border-box;
}
input:focus{
  border-bottom: 5px solid #73ff00 ;
}
textarea{
  border-bottom: 3px solid #ee0808 ;
  padding: 10px;
  width: 50%;
  box-sizing: border-box;
  height: 100px;
}
textarea:focus{

  border-bottom: 5px solid #73ff00 ;
}
form button{
  display: block;
  margin: 20px auto 0;
  background: #ee0808;
  border: 0px;
  border-radius: 5px;
  font-size: 20px;
  padding: 10px;
}
form button:hover{
  background: #73ff00;
}

</style>





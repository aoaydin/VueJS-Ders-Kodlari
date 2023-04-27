<template>
    <div class="project" v-if="project.complete">
        <div @click="showDetails = !showDetails" class="actions">
            <h3>{{ project.title }}</h3>
            <div class="icons">
                <span @click="editProject" class="material-icons">edit</span>
                <span @click="deleteProject" class="material-icons">delete</span>
                <span @click="doneProject" class="material-icons">done</span>
            </div>
        </div>
        <div class="details" v-if="showDetails">
            <p>{{ project.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['project'],
    data() {
        return {
            showDetails: false,
            uri: "http://localhost:3000/projects/" + this.project.id
        }
    },
    methods: {
        deleteProject() {
            fetch(this.uri, { method: "DELETE" })
                .then(() => this.$emit('delete', this.project.id))
        },
        doneProject() {
            fetch(this.uri, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ complete: !this.project.complete }),
            })
                .then(() => this.$emit("complete", this.project.id))
                .catch((err) => console.log(err));
        },
    }
}
</script>

<style>
h3 {
    text-align: left;
    padding-left: 20px;
    cursor: pointer;
}

p {
    text-align: left;
    padding-left: 50px;
}

.project {
    margin: 20px auto;
    background: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 1px 2px rgba(0, 0, 0, 00.5);
    border-left: 8px solid #19125c
}

.actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

}

.material-icons {
    font-size: 24px;
    margin-left: 30px;
    color: #bbb;
    cursor: pointer;

}

.material-icons:hover {
    color: #19125c;
}
</style>
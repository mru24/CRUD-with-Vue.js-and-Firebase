<template>
  <div class="container">
    <h1>List of members</h1>
    <hr>
    <div class="preview">
      <ul>
        <li v-for="personName in names" v-bind:key="personName['.key']">
          <div v-if="!personName.edit">
            <p>{{ personName.name }}</p>
            <button type="button" @click="removeName(personName['.key'])">Remove</button>
            <button type="button" @click="setEditName(personName['.key'])">Edit</button>
          </div>
          <div v-else>
            <input type="text" v-model="personName.name">
            <button type="button" @click="saveName(personName)">Save</button>
            <button type="button" @click="cancelEdit(personName['.key'])">Cancel</button>
          </div>
          <hr>
        </li>
      </ul>
    </div>
    <hr>
    <div>
      <label>Add member:</label>
      <input type="text" v-model="name" />
      <button type="button" @click="submitName()">Add</button>
    </div>
  </div>
</template>

<script>
import { namesRef } from '../firebase'

export default {
  data() {
    return {
      name: ''
    }
  },
  firebase: {
    names: namesRef
  },
  methods: {
    submitName() {
      namesRef.push({ name: this.name, edit: false });
      this.name = '';
    },
    removeName(key) {
      namesRef.child(key).remove();
    },
    setEditName(key) {
      namesRef.child(key).update({ edit: true });
    },
    cancelEdit(key) {
      namesRef.child(key).update({ edit: false });
    },
    saveName(person) {
      const key = person['.key'];
      namesRef.child(key).set({ name: person.name, edit: false })
    }
  }
}
</script>

<style lang="sass" scoped="">
  .container
    width: 80%
    margin: auto
    h1
      margin: 30px 0
    label, input
      width: 100%
      margin-bottom: 10px
    label
      display: block
    input
      height: 25px
    button
      padding: 5px 20px
      margin: 5px
    .preview
      margin: 40px
      li
        margin-bottom: 20px
        p
          font-size: 1.2em
</style>

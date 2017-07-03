<template>
  <div id="app">
    <note-view></note-view>

  </div>
</template>

<script>
import NoteV from './components/Create.vue';
export default {
  components: {
    'note-view' : NoteV
  },
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>

</style>

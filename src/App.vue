<template>
  <div id="app">

    <!-- Navigation Endss -->
    <tm-nav></tm-nav>
    <router-view v-bind:vis="bod"></router-view>

  </div>
</template>

<script>
import NoteC from './components/Create.vue';
import NoteV from './components/View.vue';
import Nav from './components/Nav.vue';
export default {

  components: {
    'tm-nav' : Nav,
    'note-create' : NoteC,
    'note-view' : NoteV
  },
  name: 'app',
  data () {
    return {
      bod : false
    }
  }
}
</script>

<style>

</style>

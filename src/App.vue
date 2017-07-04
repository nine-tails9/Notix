<template>
  <div id="app">

    <!-- Navigation Endss -->
    <tm-nav v-bind:vis="bod"></tm-nav>
    <router-view v-bind:vis="bod"></router-view>
    <footer class="footer">
      <div class="container">


      <div class="has-text-centered">
        <p><strong>Notix</strong> By <a href="https://github.com/nine-tails9">Deepanshu Gandhi</a>
          <span class="icon">
            <a href="#" style="color:blue;"><i class="fa fa-facebook"></i></a>
          </span>
          <span class="icon">
            <a href="#"><i class="fa fa-github"></i></a>
          </span>
          <span class="icon">
            <i class="fa fa-instagram"></i>
          </span>
          <span class="icon">
          <a class="qu">  <i class="fa fa-quora"></i></a>
          </span>

        </p>
        <div class="container">

        <p class="sp">
          <span class="icon">
            <i class="fa fa-copyright">
            </i>
            Copyright <strong> &nbsp;D.G</strong>

          </span>

        </p>

      </div>

      </div>

      </div>
    </footer>

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
.qu{
  color: rgb(191, 120, 126);
}
.sp{
  margin-top: 10px;
}
</style>

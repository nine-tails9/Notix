<template >
<nav class="nav has-shadow">
  <div class="nav-left">
    <a class="nav-item">
      <i class="fa fa-sticky-note fa-fw fa-5x"></i> &nbsp;<h2 class="title is-4">Notix</h2>
    </a>
  </div>
  <div class="nav-center">
<a href="https://github.com/nine-tails9/Notix" class="nav-item">
  <span class="icon">
    <i class="fa fa-github"></i>
  </span>
</a>
<a class="nav-item">
  <span class="icon">
    <i class="fa fa-twitter"></i>
  </span>
</a>
</div>
<div class="nav-right nav-menu">
  <a href="create" class="nav-item is-tab" >Create</a>
  <a href="view" class="nav-item is-tab" v-on:click="change">View</a>
  <a href="#" class="nav-item is-tab">About Us!</a>
  <div class="nav-item">
    <a href="#" class="button is-outlined is-info"><div class="icon"><i class="fa fa-facebook"></i></div>
      &nbsp;&nbsp;Share on Facebook
    </a>

  </div>
</div>

</nav>
</template>
<script>
import { bus } from '../main';
export default{
  props: {
    vis: {
      type: Boolean,
      required: true
    }
  },
  methods:{
    change: function(){
      console.log("clicked");
      this.vis!=this.vis;
      bus.$emit('page',this.vis);
    }
  }
}


</script>

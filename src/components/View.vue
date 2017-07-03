<template>
  <div>
    <button class="button is-info" v-on:click="get">Gets</button>
    <div class="tile is-ancestor notification is-dark is-medium">
      <div class="tile is-parent">
        <div class="tile is-child is-light" v-for="rel in res">
        <h2>  {{rel.title}}</h2>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { bus } from '../main';
export default{
  props: {
    vis: {
      type : String,
      required: true
    }
  },
  data () {
    return {
      res :[]
    }
  },
  methods: {
    get: function(){
      this.$http.get('https://takenote-1435f.firebaseio.com/notes.json').then(function(data){
        return data.json();
      }).then(function(data){
        console.log(data);
        var tarr= [];
        for(let key in data){
          data[key].id = key;
          tarr.push(data[key]);
          console.log(data[key].title);
        }
        this.res = tarr;


      });
    }
  },

}

</script>

<style>
</style>

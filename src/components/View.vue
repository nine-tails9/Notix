<template>
  <div>
    <section class="hero notification is-bold  is-fullheight">

      <div class="hero-head">
        <h2 class="title">My Notes</h2>

      </div>
      <div class="hero-body">

      <div class="tile is-ancestor">
        <div class="is-parent">

        </div>

        <div class="tile is-vertical">


        <div class="tile notification is-light is-bold is-5" v-for="note in res" v-if="note.avl">
          <button  class="delete" v-on:click="del()"></button>
          <div class="content">
            <h3>{{note.title}}</h3>
            <p>{{note.content}}</p>
            <div class="tag is-danger">
              {{note.author}}
            </div>
          </div>
          <div v-if="modal" class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">

              <header class="modal-card-head"><p class="modal-card-title">Are You Sure You Want to delete?</p>
              <button class="delete " v-on:click="modal=false"></button>

              </header>
              <footer class="modal-card-foot">

              <button class="button is-danger is-medium " v-on:click="rfr(note.id)" name="button">Yes</button>
              <button class="button is-light is-medium" name="button" v-on:click="modal=false">No</button>
              </footer>

            </div>

        </div>
        </div>
      </div>

    </div>

  </div>

    </section>
  </div>
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
  data () {
    return {
      res :[],
      Items: [],
      modal: false
    }
  },
  created(){
    this.$http.get('https://takenote-1435f.firebaseio.com/notes.json').then(function(data){
      return data.json();
    }).then(function(data){
    //  console.log(data);
      var tarr= [];
      for(let key in data){
        data[key].id = key;
        tarr.push(data[key]);
        //console.log(data[key].title);
      }
      this.res = tarr;


    });
  },
  methods: {
    del: function(id){
      //console.log(this.Items);
      //this.update();
      this.modal = true;
    },
    update: function(){
      this.$http.post('https://takenote-1435f.firebaseio.com/notes.json',this.res).then(function(data){
        return data.json();
      });

    },
    rfr: function(id){
      for(var i=0;i<this.res.length;i++){
        console.log(i);
        if(id == this.res[i].id){
          this.res[i].avl=false;
          break;
        }
      }

      this.modal = false;

    }

  },
  computed: {

  }


}

</script>

<style>
h1{
  color: 20px;
}
.image{
  width: 400px;
  height: 450px;
}
</style>

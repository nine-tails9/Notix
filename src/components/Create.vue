<template>
  <div >
    <div class="tile is-ancestor is-fullheight notification is-danger">

        <h3 class="title has-text-centered is-dark tile is-parent is-bold">Add A Note</h3>

        <div class="tm-body">

        <form class="" action="index.html" method="post">
          <div class="field">
            <label class="label">Author</label>
            <p class="control has-icons-left">
              <input v-model="Note.author" class="input is-success" type="text" placeholder="Your Name">
              <span class="icon is-small is-left">
                <i class="fa fa-user"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <label class="label">Title</label>
            <p class="control">
              <input type="text" v-model="Note.title" placeholder="Title" value="" class="input is-warning">
            </p>
          </div>
          <div class="field">
            <p class="control"><label class="label">Content</label>
            <textarea class="textarea" v-model="Note.content" placeholder="Start Typing!"></textarea>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <a class="button is-light is-pulled-left" v-on:click="post">Save</a>
              <a  v-if="submitted" class="button is-light is-pulled-right" v-on:click="clr">New Note</a>
              <transition name="custom-classes-transition" enter-active-class="animated rubberBand" leave-active-class="animated bounceOutRight" >
              <p class="subtitle is-small has-text-centered" v-if="vals">Missing Fields Found!</p>
              </transition>
              <transition name="custom-classes-transition" enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
              <p class="subtitle is-small has-text-centered" v-if="submitted">Post Saved Successfully!</p>
              </transition>
            </p>
          </div>
        </form>
        </div>
  </div>

</div>
</template>

<script>
import { bus } from '../main';
export default {
  props: {
    vis: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      Note : {author : '',title: '', content: '',avl: true},
      submitted: false,
      vals: false

    }
  },
  methods: {
    post: function(){
      if(this.Note.author.length==0||this.Note.content.length==0||this.Note.title.length==0){
        this.submitted= false;

        return this.vals=true;
      }
      this.vals=false;

      this.$http.post('https://takenote-1435f.firebaseio.com/notes.json',this.Note).then(function(data){
        //console.log(data);
        this.Note = {author: '',title: '', content: '', avl: true};

        this.submitted = true;

      });
    },
    clr: function(){
      this.Note = {author: '',title: '', content: '', avl: true};
      this.vals=false;
      this.submitted = false;
    }
  },
  watch: {
    vis: function() {
      bus.$on('page',(data)=>{
        this.vis=data;
      });
    }
  }

}
</script>

<style>
h3{
  margin-top: 30px;
}

.hero-body{
  margin-left: 50px;
}
.tm-body{
  width: 600px;
  margin-left: 70px;
  margin-top: 10%;
}
.tm-body .field{
  width: 600px;
}
.label{
  color: #fff;
}
.clrr{
  margin-left: 50px;
}

</style>

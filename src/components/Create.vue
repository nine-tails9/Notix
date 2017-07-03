<template>
  <div >
    <div class="tile is-ancestor notification is-dark is-medium">

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
              <p class="subtitle is-small is-pulled-right" v-if="submitted">Post Saved Successfully!</p>
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
      type: String,
      required: true
    }
  },
  data () {
    return {
      Note : {author : '',title: '', content: ''},
      submitted: false

    }
  },
  methods: {
    post: function(){
      this.$http.post('https://takenote-1435f.firebaseio.com/notes.json',this.Note).then(function(data){
        console.log(data);
        this.submitted = true;
      });
    }
  },

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
</style>

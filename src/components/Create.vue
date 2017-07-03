<template>
  <div>
    <nav class="nav has-shadow">
      <div class="nav-left">
        <a class="nav-item">
          <i class="fa fa-sticky-note fa-fw fa-5x"></i> &nbsp;<h2 class="title is-4">Notix</h2>
        </a>
      </div>
      <div class="nav-center">
    <a class="nav-item">
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
      <a href="#" class="nav-item is-tab">Create</a>
      <a href="#" class="nav-item is-tab">View</a>
      <a href="#" class="nav-item is-tab">About Us!</a>
      <div class="nav-item">
        <a href="#" class="button is-outlined is-info"><div class="icon"><i class="fa fa-facebook"></i></div>
          &nbsp;&nbsp;Share on Facebook
        </a>

      </div>
    </div>

    </nav>
    <!-- End of Nav Bar -->
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
              <a class="button is-light is-pulled-left">Save</a>
            </p>

          </div>
        </form>

        </div>


  </div>


</div>
</template>

<script>
export default {
  data () {
    return {
      Note : {author : '',title: '', content: ''}

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
</style>

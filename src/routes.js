import NoteC from './components/Create.vue';
import NoteV from './components/View.vue';
import Nav from './components/Nav.vue';
export default[
  {path: '/create', component: NoteC, props: true},
  {path: '/', component:NoteC, props: true },
  {path: '/view', component: NoteV, props: true},


]

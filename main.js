Vue.component("article-message", {
  props: ['title', 'body'],
  data() {
    return {
      isVisible: true,
    }
  },
  template: `
  <article class="message is-info">
    <div class="message-header">
      {{ title }}
      <button class="close" @click="isVisible = !isVisible">X</button>
    </div>
    <div class="message-body"  v-show="isVisible">
      {{ body }}
    </div>
   </article>
  `,
  methods: {

  }
})





Vue.component("task-list", {
  template:`
  <div>
    <ul>
      <task v-for="task in tasks" :key="task.id">{{ task.name }}</task>
    </ul>
  </div>
  `,
  data() {
    return {
      tasks: [
        { id: 1, name: 'Go to the store', completed: false},
        { id: 2, name: 'Go to gym', completed: true},
        { id: 3, name: 'Go to work', completed: false},
        { id: 4, name: 'Go with bus', completed: true},
      ]
    }
  }
})


Vue.component("task", {
  template: "<li><slot></slot></li> "
});

let vm3 = new Vue({
  el: "#root__3"
});

let vm4 = new Vue({
  el: "#root__4"
})
let vm5 = new Vue({
  el: "#root__5"
})


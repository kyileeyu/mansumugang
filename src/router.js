import { createWebHistory, createRouter } from "vue-router";
import Question from "./components/Question.vue";
const routes = [
  {
    path: "/question/:id",
    name: "question",
    component: Question,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

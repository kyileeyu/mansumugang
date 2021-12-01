import { createWebHistory, createRouter } from "vue-router";
import Question from "./components/Question.vue";
import Main from "./components/Main.vue";
import Intro from "./components/Intro.vue";
import Result from "./components/Result.vue";
import Basic from "./components/Basic.vue";
const routes = [
  {
    path: "/intro",
    name: "intro",
    component: Intro,
  },
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/basic",
    name: "basic",
    component: Basic,
    // props: {
    //   gender: 1,
    //   ageIndex: 1,
    // },
  },
  {
    path: "/question",
    name: "question",
    component: Question,
  },
  {
    path: "/result",
    name: "result",
    component: Result,
    // component: "answerList",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

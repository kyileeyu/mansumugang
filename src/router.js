import { createWebHistory, createRouter } from "vue-router";
// import Question from "./components/Question.vue";
import Main from "./components/Main.vue";
import Intro from "./components/Intro.vue";
// import Result from "./assets/Result.vue";
import Basic from "./components/Basic.vue";
import Depression from "./components/Depression.vue";
const routes = [
  {
    path: "/",
    name: "intro",
    component: Intro,
  },
  {
    path: "/main",
    name: "main",
    component: Main,
  },
  {
    path: "/basic",
    name: "basic",
    component: Basic,
  },
  // {
  //   path: "/question",
  //   name: "question",
  //   component: Question,
  //   // component: () => import("./components/question.vue"),
  //   props: true,
  // },
  // {
  //   path: "/result",
  //   name: "result",
  //   component: Result,
  //   // component: "answerList",
  // },
  {
    path: "/depression",
    name: "Depression",
    component: Depression,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

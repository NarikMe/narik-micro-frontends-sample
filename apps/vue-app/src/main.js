import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';

import App from './App.vue';

const Home = { template: '<div>Home</div>' };
const About = { template: '<div>About</div>' };

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// createApp(App, { router }).mount('#app');

export function AppCreator() {
  const app = createApp(App);
  app.use(router);
  return app;
}

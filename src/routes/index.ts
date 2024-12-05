import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach(() => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

export default router;

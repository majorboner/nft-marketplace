import { createHistoryRouter } from 'atomic-router';
import { createBrowserHistory } from 'history';

import { mainRoute } from '@/pages/main';
import { aboutRoute } from '@/pages/about';
import { registerRoute } from '@/pages/register';

export const routes = [
  { path: '/', route: mainRoute },
  { path: '/about', route: aboutRoute },
  { path: '/register', route: registerRoute },
];

export const router = createHistoryRouter({
  routes,
});

const history = createBrowserHistory();

router.setHistory(history);

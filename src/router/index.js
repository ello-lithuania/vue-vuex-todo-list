import MainHome from '../components/MainHome.vue'
import IssuesOpen from '../components/Issues/Open.vue'
import IssuesDone from '../components/Issues/Done.vue'
import IssuesTrashed from '../components/Issues/Trashed.vue'

import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    { path: '/', name:'HomePage', component: MainHome },
    { path: '/issues/open', name:'IssuesOpen', component: IssuesOpen },
    { path: '/issues/done', name:'IssuesDone', component: IssuesDone },
    { path: '/issues/trashed', name:'IssuesTrashed', component: IssuesTrashed },
];

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
});

export default router
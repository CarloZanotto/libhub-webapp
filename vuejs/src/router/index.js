import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/default/Home.vue'
import HomeBar from '../views/bars/HomeBar.vue'
import ErrorPage from '../views/default/Error_page.vue'
//import TagTree from '../components/TagTree.vue'
import ErrorBar from '../views/bars/ErrorBar.vue'
//import BookInsertForm from '../components/BookInsertForm.vue'
//import BarcodeReader from '../components/BarcodeReader.vue'
import Chat from '../views/default/Chat.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        components: {
            default: Home,
            bar: HomeBar
        }
    },
    {
        path: '/dash',
        name: 'Dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        components: {
            default: () =>
                import ( /* webpackChunkName: "dashboard" */ '../views/default/Dashboard.vue'),
            bar: () =>
                import ( /* webpackChunkName: "dashboard" */ '../views/bars/AppBar.vue'),
        }
    },
    {
        path: '/libraries',
        name: 'Libraries',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        components: {
            default: () =>
                import ( /* webpackChunkName: "libraries" */ '../views/default/Libraries.vue'),
            bar: () =>
                import ( /* webpackChunkName: "libraries" */ '../views/bars/AppBar.vue'),
        }
    },
    {
        path: '/libraries/:lid/books',
        name: 'Books',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        components: {
            default: () =>
                import ( /* webpackChunkName: "books" */ '../views/default/Books.vue'),
            bar: () =>
                import ( /* webpackChunkName: "books" */ '../views/bars/AppBar.vue'),
        }
    },
    {
        path: '/libraries/:lid/tags',
        name: 'Tags',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        components: {
            default: () =>
                import ( /* webpackChunkName: "tags" */ '../views/default/Tags.vue'),
            bar: () =>
                import ( /* webpackChunkName: "tags" */ '../views/bars/AppBar.vue'),
        }
    },
    {
        path: '/friends',
        name: 'Friends',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        components: {
            default: () =>
                import ( /* webpackChunkName: "user" */ '../views/default/Friends.vue'),
            bar: () =>
                import ( /* webpackChunkName: "user" */ '../views/bars/FriendBar.vue'),
        }
    },
    {
        path: '/user',
        name: 'User',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        components: {
            default: () =>
                import ( /* webpackChunkName: "user" */ '../views/default/User.vue'),
            bar: () =>
                import ( /* webpackChunkName: "user" */ '../views/bars/AppBar.vue'),
        }
    },
    {
        path: '/chat',
        name: 'Chat',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        components: {
            default: () =>
                import ( /* webpackChunkName: "chat" */ '../views/default/Chat.vue'),
            bar: () =>
                import ( /* webpackChunkName: "chat" */ '../views/bars/AppBar.vue'),
        }
    },
    {
        path: '/users/:uid/verification/:token',
        name: 'Verification',
        components: {
            default: () => import ( /* webpackChunkName: "chat" */ '../views/default/Verification.vue'),
            bar: () => import ( /* webpackChunkName: "chat" */ '../views/bars/ErrorBar.vue')
        }
    },
    {
        path: '/user/:uid/password-recovery/:token',
        name: 'RecoveryPassword',
        components: {
            default: () => import ( /* webpackChunkName: "chat" */ '../views/default/RecoveryPassword.vue'),
            bar: () => import ( /* webpackChunkName: "chat" */ '../views/bars/ErrorBar.vue')
        }
    },
    {
        path: '/error_page',
        name: 'Error_page',
        components: {
            default: ErrorPage,
            bar: ErrorBar
        }
    },
    //Test route for trying new component
    //Must be eliminated ad the end of the sprint
    {
        path: '/test_component',
        name: 'Test_component',
        components: {
            default: Chat
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
// import App from '../app';
// import Signin from '../pages/signin/';
// import Signout from '../pages/signout/';
// import About from '../pages/about/';
// import UserUsername from '../pages/user/username/';
// import SelfHome from '../pages/self/home/';
// import SelfMessages from '../pages/self/messages/';
// import TopicCreate from '../pages/topic/create/';
// import TopicDetail from '../pages/topic/detail/';
// import Index from '../pages/index/';
// import Snkrank from '@/pages/topic/snkrank'

const App = r => require.ensure([], () => r(require('../app')), 'App');
const Signin = r => require.ensure([], () => r(require('@/pages/signin/index')), 'Signin');
const Signout = r => require.ensure([], () => r(require('@/pages/signout/index')), 'Signout');
const About = r => require.ensure([], () => r(require('@/pages/about/index')), 'About');
const UserUsername = r => require.ensure([], () => r(require('@/pages/user/username/index')), 'UserUsername');
const SelfHome = r => require.ensure([], () => r(require('@/pages/self/home/index')), 'SelfHome');
const SelfMessages = r => require.ensure([], () => r(require('@/pages/self/messages/index')), 'SelfMessages');
const TopicCreate = r => require.ensure([], () => r(require('@/pages/topic/create/index')), 'TopicCreate');
const TopicDetail = r => require.ensure([], () => r(require('@/pages/topic/detail/index')), 'TopicDetail');
const Index = r => require.ensure([], () => r(require('@/pages/index/index')), 'Index');
const Snkrank = r => require.ensure([], () => r(require('@/pages/topic/snkrank/index')), 'Snkrank');



/**
 * auth true登录才能访问，false不需要登录，默认true
 */
export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/signin', // 登录
                name: 'signin',
                meta: {auth: false},
                component: Signin
            },
            {
                path: '/signout', // 退出
                name: 'signout',
                component: Signout
            },
            {
                path: '/about', // 关于
                name: 'about',
                meta: {auth: false},
                component: About
            },
            {
                path: '/user/:username', // 查看用户信息
                name: 'user-detail',
                meta: {auth: false},
                component: UserUsername
            },
            {
                path: '/self/home/', // 我的个人中心
                name: 'self-home',
                meta: {auth: false},
                component: SelfHome
            },
            {
                path: '/self/messages/', // 我的消息
                name: 'self-messages',
                meta: {auth: false},
                component: SelfMessages
            },
            {
                path: '/topic/create', // 创建帖子
                name: 'topic-create',
                meta: {auth: false},
                component: TopicCreate
            },
            {
                path: '/topic/:id', // 查看帖子信息
                name: 'topic-detail',
                meta: {auth: false},
                component: TopicDetail
            },
            {
                path: '/', // 首页
                name: 'index',
                meta: {auth: false},
                component: Index
            },
            {
                path: '/snkrank/', // 获取排名
                name: 'snkrank',
                meta: {auth: false},
                component: Snkrank
            },
            {
                path: '*', // 其他页面
                redirect: '/signin'
            },

        ]
    }
];

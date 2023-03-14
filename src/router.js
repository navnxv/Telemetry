/*
VUE App's MAIN Component.
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
'use strict';

// import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({

    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
            path:"/mypage",
            name:"MyPage",
            component: () => import('@/routes/MyPage.vue')
        },{
            path:"/",
            name:"Chart",
            component: () => import('@/routes/ChartView.vue')
        },{
            path:"/home",
            name:"Home",
            component: () => import('@/routes/HomeView.vue'),
            props: { name: "DemoApp"}
        }
    ]
});

export default router;
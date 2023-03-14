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
            path:"/",
            name:"Chart",
            component: () => import('@/routes/ChartView.vue')
        },
    ]
});

export default router;
<!--
<VFSNavbar />
@copyright (c) 2022-2023. Kibble Game Studios Inc. All Rights Reserved.
-->
<script>
    import { RouterLink, RouterView } from 'vue-router'

    import Controller from '@/plugins/controller'

    import { useInfoStore } from '@/stores/infoStore.js'
    import { useModelStore } from '@/stores/sampleStore.js'

    class NavbarController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                navMenu:[
                    { path:"/", section: "Dashboard" },

                ]
            }

            this.injectStore( useInfoStore )
                .injectStore( useModelStore )
        }
    }

    export default new NavbarController('VFSNavbar');

</script>
<template>

    <nav class="navbar">
        <ul class="menu">
            <li v-for="(item, i) in navMenu" :key="i">
                <router-link :to="item.path" class="menu-item">{{ item.section }}</router-link>
            </li>
        </ul>
    </nav>

</template>
<style scoped>
    /* navigation bar */
    nav{
        width: 100%;
        background-color: #404040;
    }

    ul {
        background-color: #404040;
    }

    .menu-item{
        color: #DBA9FC;
    }

    .menu-item:hover{
        background-color: #404040;
    }


</style>
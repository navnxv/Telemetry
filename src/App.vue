<script setup>

import { RouterLink, RouterView } from 'vue-router'

import VFSHeader from '@/components/Header.vue'
import VFSNavbar from '@/components/Navbar.vue'
//import VFSTunablePanel from '@/components/TunablePanel.vue'
// import VFSLoadingSpinner from '@/components/LoadingSpinner.vue'

import Controller from '@/plugins/controller'

    class AppController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {}
            this.props = {}
            this.emits = []
            //this.injectGetters([/* List of names in array */]);
            //this.injectActions(['actionMethod','anotherAction'])
        }
    }

    const app = new AppController('VFSApp', {
        VFSHeader,
        VFSNavbar,
        // VFSTunablePanel
    });

</script>
<template>

    <header class="wrapper container columns">
        <VFSHeader title="Telemetry Viewer" subtitle="Team Project">
            <div> My real content </div>
        </VFSHeader>
        <VFSNavbar />
    </header>
    <main>
        <RouterView  />
        <aside class="small-item">
            <VFSTunablePanel title="Game Variables" />
        </aside>
    </main>

    <footer>
        Copyright &copy; 2023 Scott Henshaw
    </footer>

</template>
<style>

    header {
        background: lightblue;
        color: black;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0 4px 5px -5px #222;
        width: 100vw;
    }

    main {
        display: flex;
        justify-content: space-around;
        width: 95vw;
    }

    .small-item {
        width: 30vw;
    }

    router-view {
        width:66vw;
        flex-grow: 4;
    }

    aside {
        display: inline-block;
    }



    @media (min-width: 1024px) {
      header {
          display: flex;
          place-items: center;
          padding-right: calc(var(--section-gap) / 2);
      }

      .logo {
          margin: 0 2rem 0 0;
      }

      header .wrapper {
          display: flex;
          place-items: flex-start;
          flex-wrap: wrap;
      }
    }
</style>

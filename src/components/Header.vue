<!--
<VFSHeader />
Copyright (c) 2022-2023. Kibble Game Studios Inc. All Rights Reserved.
-->
<script>
    import Controller from '@/plugins/controller'

    import { useInfoStore } from '@/stores/infoStore.js'

    class HeaderController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                version: 1.12,
            }
            this.props = {
                title: String,
                subtitle: String,
            }

            this.injectStore( useInfoStore );
        }
    }

    export default new HeaderController('VFSHeader');

</script>
<template>

    <section class="container left">
        <img alt="VFS Logo" class="logo" src="@/Images/pirate.png" @click="$router.push('/')"/>
        <div class="title item">
            
            <h1>{{ title }}</h1>
            <h4>{{ subtitle }} {{ infoStore.version }}</h4>
        </div>
        <slot>
            <div>
                Default Content
            </div>
        </slot>
    </section>

</template>

<style scoped>
    .wrapper, .container{
        background-color:rgb(72, 114, 114);
    }

    .title h1, .title h4 {
        float:right;
        margin-right: 2vw;
        text-align:right;
        width: 100%;
    }

    .container{
        display: flex;
        justify-content: space-between;
    }

    .logo {
        width: 10%;
        height: 10%;
        
    }

    .version{
        float: right;
    }

    @media (min-width: 1024px) {
        .logo {
            margin: 0 2rem 0 0;
        }
    }
</style>
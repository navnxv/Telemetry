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
        <img alt="GameLogo" class="logo" src="@/Images/BlacPearl.png" @click="$router.push('/')"/>
        <div class="title item">
            <h1>{{ title }}</h1>
        </div>
    </section>

</template>

<style scoped>

    .logo {
        width: 10%;
        height: 10%;
    }

    .container{
        background-color: #404040;
    }

    .title{
        background-color: #404040;
        float :right;
    }

</style>
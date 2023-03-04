<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<script>
    import Controller from '@/plugins/controller'

    import VFSBarChart from '@/components/BarChart.vue'

    class ChartController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'Chart Page',
                chartList: ['Bar Chart', 'Line Chart', 'Pie Chart', 'Heatmap'],
                visible: true,
                
            }
        }
    }

    export default new ChartController('Chart', { VFSBarChart });

</script>
<template>

    <section class="flexbox columns chart">
        <button @click="visible = !visible">Hide All</button>
        <div v-for="name, i in chartList" :key="i">
            <div v-if="name == 'Bar Chart'">
                <VFSBarChart :title="name" v-show="visible"/>
            </div>
            
        </div>
    </section>

</template>
<style scoped>
/* Local styles for this template */
    .chart {
        /* display: block; */
        margin:2vw;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        height: 78vh;
        width: 80vw;
    }

</style>


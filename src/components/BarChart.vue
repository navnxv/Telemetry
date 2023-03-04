<!--
<VFSBarChart title="some chart name"/>
@copyright (c) 2023. Scott Henshaw. All Rights Reserved.
-->
<script>
    import Controller from '@/plugins/controller'
    import { Bar } from 'vue-chartjs'
    import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'


    import VFSEditableData from '@/components/EditableData.vue'

    class BarChartController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            ChartJS.register( Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


            console.log(VFSEditableData.props.editData.x);
            this.vm = {
                    
                    chartData: {
                        name:"yoo",

                        labels: [ 'Speed', 'X', 'Y', 'Z' ],
                        datasets: [ { data: [VFSEditableData.props.editData.dt, VFSEditableData.props.editData.x, VFSEditableData.props.editData.y,VFSEditableData.props.editData.z] } ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio:false,
                    },
                
                data: {
                    
                    
                    
                },

                visible: true,
            }
            this.props = {
                title: String,
            }
            this.emits = []
            //this.injectGetters([/* List of names in array */]);
            //this.injectActions(['actionMethod','anotherAction'])

        }

        resetX() {
            this.editData.x = 100;
        }
    }

    export default new BarChartController('VFSBarChart', {
        Bar,
        VFSEditableData
    });

</script>
<template>

    <section class="component outline">

        <h4>{{ title }}</h4>
        <div id="chart-area" class="item outline">

            <Bar :data="chartData" />

        </div>
        <div class="controls component rows">
            <button @click="visible = !visible">Hide Data</button>
            <button @click="resetX()">Reset X</button>
        </div>
        <div id="chart-data" class="item outline" v-show="visible">
            <!-- <div v-for="telemetryRec, i in data.dataSets" :key="i"> -->
                <VFSEditableData />
            <!-- </div> -->
        </div>

    </section>

</template>
<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */
    button {
        margin: 2px;
    }
    .component {
        display: flex;
        flex-direction:column;
        flex-wrap:wrap;
        justify-content:space-evenly;
        align-content: flex-start;
        align-items:flex-start;
    }

    .rows {
        flex-direction: row;
    }

    .item {
        flex-grow: inherit;
        flex-shrink: inherit;
        order: inherit;
    }

    .full { width: 100%; }
    .outline {
        margin: 2px;
        margin-bottom: 4px;
        border: 1px solid black;
        box-shadow: 3px 4px 5px black;
        padding: 2px;
    }
</style>
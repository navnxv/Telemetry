<!--
<VFSEditableData :data="dataObject"/>
@copyright (c) 2023. Scott Henshaw. All Rights Reserved.
-->
<script>
    import Controller from '@/plugins/controller'

    const IDLE = 0;
    const WALKING = 1;
    const RUNNING = 2;
    const TURNING_RIGHT = 3;
    const TURNING_LEFT = 4
    const SHOOTING = 5;


    class EditableDataController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            
            this.vm = {
                editData: {
                    x: 90, y: 150, z: 10,
                    action: IDLE,
                    dt: 10,  // DeltaTime = dt
                },
                
            }
            
            this.props = {
                editData: {
                    x: this.vm.editData.x, y: this.vm.editData.y, z: this.vm.editData.z,
                    action: IDLE,
                    dt: this.vm.editData.dt,  // DeltaTime = dt
                }
            }
            console.log(this.props.editData.x)
            this.emits = []
            //this.injectGetters([/* List of names in array */]);
            //this.injectActions(['actionMethod','anotherAction'])
        }

        resetX() {
            //this.vm.editData.x = 100;
        }

        save( newData ) {
            // TODO: Make this do something
            console.log("Do nothing");

            // TODO:grabe this.editData and do somehting with it.
        }
    }

    export default new EditableDataController('VFSEditableData');

</script>
<template>

    <section class="component outline">

        <form class="chart-data-element" @submit.prevent="save( editData )">
            <label>Speed</label>
            <input name="Delta-Time" type="number" v-model="this.editData.dt" />
            <label>Speed</label>
            <label>{{this.editData.dt}}</label>

            <input name="X" type="number" v-model="editData.x" />
            <label>Y</label>
            <input name="Y" type="number" v-model="editData.y" />
            <label>Z</label>
            <input name="Z" type="number" v-model="editData.z" />
            <label>Jump</label>
            <input name="action" type="text" v-model="editData.action" >
        </form>

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

    .outline {
        margin: 1px;
        border: 1px solid red;
        padding: 2px;
    }
</style>
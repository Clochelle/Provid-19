Vue.component('question', { 
    data: function() {
        return {selected: false};
    },
    props: [
        'text'
    ],
    methods: {
        functionSelected: function() {
            this.selected = !this.selected;
        }
    },
    template: `<div><li 
    v-bind:class="{ 'color-list' : selected }"
    v-on:click="functionSelected">{{ text }}</li>
        <p class="line-height desktop-width" v-if="selected"><slot></slot></p></div>`
 })

const app = new Vue({
    el: '#FAQ',
})
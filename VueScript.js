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
    template: `<div><li class="liste-questions"
    v-bind:class="{ 'color-list' : selected }"
    v-on:click="functionSelected" v-html="text"></li>
        <p class="line-height desktop-width" v-if="selected"><slot></slot></p></div>`
 })

 Vue.component('questionimg', { 
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
    template: `<div><li class="liste-questions"
    v-bind:class="{ 'color-list' : selected }"
    v-on:click="functionSelected">{{ text }}</li>
        <p class="line-height" v-if="selected"><slot></slot></p></div>`
 })

const app = new Vue({
    el: '#FAQ',
})
Vue.component("from-filter",{
    props: ['userSearch'],
    tamplate:
`<div class="search-form">
    <from-filter  @submit.prevent="$parent.filter">
    <input type="text" class="search-field" v-model="$parent.userSearch">
    <button type="submit" class="btn-search">
        <i></i>
    </button>
    </from-filter>
</div>`
  });
<template>
  <div id="app">    
      
    <h3>Gerenciador de Usuários</h3>

    <div class="overflow-auto">
      <b-container>
        <b-table 
          id="my-table" 
          :items="items" 
          :fields="fields"
          :per-page="perPage" 
          :current-page="currentPage" 
          selectable
          :select-mode="selectMode"
          selected-variant="active"
          @row-selected="onRowSelected"
          responsive="sm"
          bordered
          small>
               
            <template v-slot:cell(foto)="data">
              <img :src="`${data.item.avatar}`" />
            </template>
        </b-table>

        <b-pagination 
          v-model="currentPage" 
          :total-rows="rows" 
          :per-page="perPage" 
          aria-controls="my-table" 
          align="right">
        </b-pagination>
      </b-container>

      <p>
        Foto Selecionada: <br>
        <img :src="selected">
      </p>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Usuarios from '@/services/Usuarios';
export default {
  name: 'App',
  data() {
    return {
      fields: [
        { key: 'id' },
        { key: 'first_name' },
        { key: 'last_name' },
        { key: 'email' }
      ],
      items: [],
      selectMode: 'single',
      selected: [],
      currentPage: 1,
      perPage: 6
    }
  },
  created() {
    Usuarios.getAllUsuarios(10, result => {
      this.items = result.data.data;
    })
  },
  computed: {
    rows() {
      return this.items.length
    }
  },
  methods: {
    getImagem: function(urlImage) {
      return '<img src="' + urlImage + '">';
    },
    onRowSelected(itemsRow) {
      this.selected = itemsRow[0].avatar;

    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div>
    <button type="button" @click="addCol">Add a new Column</button>
    <table>
      <thead>
        <draggable v-model="cols" tag="tr">
          <th v-for="(col, index) in cols" :key="index">
            {{col}} &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            <button type="button" @click="addMenuField(col,index)">+</button>
            <button type="button" @click="removeCol(col,index)">-</button>
          </th><br>
          <tr  v-for="(menu, menuIndex) in menuFields" :id="menu" :key="menu">
            <select>
              <option> Select </option>
              <option v-for="menu in headers" :value="menu" :key="menu">{{ menu }}</option>
            </select>
            <button type="button" @click="removeMenuField(menuIndex)">-</button>
          </tr>
        </draggable>
      </thead>
    </table>
    <hr><br><br><br>
    <pre>{{ $data }}</pre>
    <!-- <pre>{{$data}}</pre> -->

  </div>

</template>

<script>
import draggable from 'vuedraggable'

export default {
  components: {
    draggable
  },

  computed: {
  },
  data () {
    return {
      headers: this.$store.state.menuHeaders,
      cols: [],
      count: 0,
      colsMenu: [],
      menuFields: [],
      menuCount: 0,
      selectedVals: null
    }
  },

  // * Get the Dummy Footer Data
  beforeMount () {
    this.$store.commit('getMenuHeaders') // ? (store/store.js)
  },
  methods: {

    //* Add new Column
    addCol () {
      this.count += 1
      this.cols.push('Column: ' + this.count)
    },

    // * Remove the selected  Column
    removeCol (col, index) {
      this.cols.splice(index, 1)
      if (this.count === 0) {
        return
      }
      this.count -= 1
    },

    // * Add the Option field
    addMenuField (col, index) {
      this.menuCount += 1
      this.menuFields.push('Field ' + this.menuCount)
    },

    // * Remove the selected option field
    removeMenuField (menuIndex, event) {
      this.menuFields.splice(menuIndex, 1)
      this.menuCount -= 1
      event.target.parentNode.remove()
    }
  }

}
</script>

<style>

</style>

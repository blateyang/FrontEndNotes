import Vue from "vue"

const Store = function Store(options = {}) {
  const {state = {}, getters={}, mutations={}} = options
  const computed = {}
  const store = this
  store.getters = {}
  for(let [key, fn] of Object.entries(getters)) {
    computed[key] = function() {return fn(store.state)}
    Object.defineProperty(store.getters, key, { //为了在用store.getters.xxx访问时能拿到计算属性
      get: function() {return store._vm[key]}
    })
  }
  this._vm = new Vue({
    data: {
      $$state: state
    },
    computed
  })
  this._mutations = mutations
}

Store.prototype.commit = function(type, payload) {
  if(this._mutations[type]) {
    this._mutations[type](this.state, payload)
  }
}

Object.defineProperties(Store.prototype, {
  state: {
    get: function() {
      return this._vm._data.$$state
    }
  }
})
export default {Store}
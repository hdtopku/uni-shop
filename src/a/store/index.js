// import { defineStore } from 'pinia'

// export const useMainStore = defineStore({
//   // store
//   // 它用于 devtools 并允许恢复状态
//   id: 'main',
//   // 一个返回新状态的函数
//   state: () => ({
//     counter: 133,
//     name: 'Eduardo',
//   }),
//   // getters
//   getters: {
//     doubleCount() {
//       return this.counter * 2
//     },
//     //在getters中使用 其它getters 
//     doubleCountPlusOne() {
//       return this.doubleCount * 2 + 1
//     },
//   },
//   // actions
//   actions: {
//     reset() {
//       // `this` 使 store 实例
//       this.counter = 0
//     },
//   },
// })
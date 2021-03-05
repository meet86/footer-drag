import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state: {
      menus: [
        {
          menuName: 'Information',
          menuItems: ['Help/Support', 'FAQs', 'About Us', 'Feedback', 'Contact Us', 'Cookie Policy']
        },
        {
          menuName: 'Order',
          menuItems: ['My Account', 'View a cart', 'Find a Store', 'Privacy Policy', 'Terms & Use']
        },
        {
          menuName: 'Customer Service',
          menuItems: ['123-456-789', 'mail@customer.com']
        },
        {
          menuName: 'Menu 3',
          menuItems: ['Menu-3 I1', 'Menu-3 I2', 'Menu-3 I3']
        }
      ],
      menuHeaders: []
    },
    mutations: {
      getMenuHeaders (state) {
        for (let i = 0; i < state.menus.length; i++) {
          state.menuHeaders.push(state.menus[i].menuName)
        }
      },

      updateMenuHeaders (state, menuHeaders) {
        state.menuHeaders = menuHeaders
      }
    },
    getters: {
    },
    actions: {},

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}

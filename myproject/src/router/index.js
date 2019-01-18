import Vue from 'vue'
import Router from 'vue-router'
import Product from '@/views/Product'
import AddProduct from '@/views/AddProduct'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/addProduct',
      name: 'AddProduct',
      component: AddProduct
    }
  ]
})

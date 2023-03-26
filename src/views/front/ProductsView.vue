<template>
    這是產品列表
    <table class="table">
      <tbody>
        <tr v-for="item in this.products" :key="item.id">
          <td>{{ item.title }}</td>
          <td><img :src="item.imageUrl" width="200" height="200" alt=""></td>
          <td><RouterLink :to="`product/${item.id}`" class="btn btn-outline-secondary">產品細節</RouterLink>
            <button type="button" class="btn btn-outline-secondary" @click="addToCart(item.id)">加入購物車</button>
          </td>
        </tr>
      </tbody>
    </table>
</template>

<script>
import { RouterLink } from 'vue-router'
const { VITE_APP_API, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      products: [],
      qty: 0
    }
  },
  components: {
    RouterLink
  },
  methods: {
    getProducts () {
      this.$http.get(`${VITE_APP_API}/v2/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products
        })
    },
    addToCart (id, qty = 1) {
      const data = {
        product_id: id,
        qty
      }
      this.$http.post(`${VITE_APP_API}/v2/api/${VITE_APP_PATH}/cart`, { data })
        .then((res) => {
          console.log(res)
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>

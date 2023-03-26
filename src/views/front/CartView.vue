<template>
  <table class="table align-middle">
    <thead>
      <tr>
        <th></th>
        <th>品名</th>
        <th style="width: 150px">數量/單位</th>
        <th class="text-end">單價</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="cart.carts">
        <tr v-for="item in cart.carts" :key="item.id">
          <td>
            <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteItem(item)"
              :disabled="item.id === loadingItem">
              <i class="fas fa-spinner fa-pulse" v-if="this.deleteItemIsLoading"></i>
              x
            </button>
          </td>
          <td>
            {{ item.product.title }}
            <div class="text-success">
              已套用優惠券
            </div>
          </td>
          <td>
            <div class="input-group input-group-sm">
              <div class="input-group mb-3">
                <select name="" id="" class="form-select" v-model="item.qty" @change="updateCart(item)"
                  :disabled="item.id === loadingItem">
                  <option :value="i" v-for="i in 20" :key="`${i}123456`">{{ i }}</option>
                </select>
                <span class="input-group-text" id="basic-addon2">{{ item.product.unit }}</span>
              </div>
            </div>
          </td>

          <td class="text-end">
            <small class="text-success">折扣價：</small>
            {{ item.product.price }}
          </td>
        </tr>
      </template>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3" class="text-end">總計</td>
        <td class="text-end">{{ cart.total }}</td>
      </tr>
      <tr>
        <td colspan="3" class="text-end text-success">折扣價</td>
        <td class="text-end text-success">{{ cart.final_total }}</td>
      </tr>
    </tfoot>
  </table>

  <div class="my-5 row justify-content-center">

    <form ref="form" class="col-md-6"  @submit="createOrder(this.orderData)">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input id="email" name="email" v-model="orderData.data.user.email" type="email" class="form-control" 
          placeholder="請輸入 Email" >
       
      </div>
      {{ orderData.data.user.email }}
      <div class="mb-3">
        <label for="name" class="form-label">收件人姓名</label>
        <input id="name" name="姓名" v-model="orderData.data.user.name" type="text" class="form-control"  
          placeholder="請輸入姓名" >
        
      </div>

      <div class="mb-3">
        <label for="tel" class="form-label">收件人電話</label>
        <input id="tel" name="電話" v-model="orderData.data.user.tel" type="text" class="form-control" 
          placeholder="請輸入電話" >
        
      </div>

      <div class="mb-3">
        <label for="address" class="form-label">收件人地址</label>
        <input id="address" name="地址" v-model="orderData.data.user.address" type="text" class="form-control" 
          placeholder="請輸入地址">
        
      </div>

      <div class="mb-3">
        <label for="message" class="form-label">留言</label>
        <textarea id="message" class="form-control" v-model="orderData.data.message" cols="30" rows="10"></textarea>
      </div>
      <div class="text-end">
        <router-link to="/">
          <button type="button" class="btn btn-primary mx-3">繼續逛逛</button>
        </router-link>
          <button type="submit" class="btn btn-danger">送出訂單</button>   
      </div>
    </form>
  </div>
</template>

<script>

const { VITE_APP_API, VITE_APP_PATH } = import.meta.env


export default {
  components: {
    
  },
  data() {
    return {
      email:'dasd',
      productId: '',
      products: [],
      cart: {},
      loadingItem: '',
      infoIsLoading: false,
      addToCartIsLoading: false,
      deleteItemIsLoading: false,
      orderData:{
        data:{
          user:{
            name:'',
            email:'',
            tel:'',
            address:''
          },
          message:''
        }
      }
    }
  },
  methods: {
    getCart() {
      this.$http.get(`${VITE_APP_API}/v2/api/${VITE_APP_PATH}/cart`)
        .then(res => {
          this.cart = res.data.data
          console.log(res.data.data)
        })
        
    },
    updateCart(item) {
      this.loadingItem = item.id

      const data = {
        product_id: item.product.id,
        qty: item.qty
      }

      this.$http.put(`${VITE_APP_API}/v2/api/${VITE_APP_PATH}/cart/${item.id}`, { data })
        .then(() => {
          this.loadingItem = ''
          this.getCart()
        })
    },
    deleteItem(item) {
      this.loadingItem = item.id
      this.deleteItemIsLoading = true

      this.$http.delete(`${VITE_APP_API}/v2/api/${VITE_APP_PATH}/cart/${item.id}`)
        .then(() => {
          this.loadingItem = ''
          this.getCart()
          this.deleteItemIsLoading = false
        })
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    },
   
    
    createOrder(orderData) {
      if (this.cart === '') {
        
        alert('請加入購買品項!')
      } else {
        this.$http.post(`${VITE_APP_API}/v2/api/${VITE_APP_PATH}/order`,orderData)
        .then(res => {
          console.log("jljkljlsd:",res.data)
        })
        .catch( (error) => console.log(error));

        alert('送出成功!')
        this.cart = ''
      }
    }

  },
  mounted() {
    this.getCart()

  }

}
</script>

import { defineStore} from 'pinia'
const { VITE_APP_API, VITE_APP_PATH } = import.meta.env
import axios from 'axios';

export const cart = defineStore('cart', {
  // state 概念同「data」，在此可以使用箭頭函式
  state: () => ({
   
      number: 0,
      products:[],
      category:''
    
  }),
  // actions 概念同「methods」
  actions: {
    // 可使用 this 使用 state 的資料內容
    updateNumber() {
      axios.get(`${VITE_APP_API}/v2/api/${VITE_APP_PATH}/cart`)
      .then(res => {
        this.number = res.data.data.carts.length
        console.log("this.number:",this.number)
      })
      
    },
    fliterProducts(category){
      this.axios.get(`${VITE_APP_API}/v2/api/${VITE_APP_PATH}/products/all`)
      .then((res) => {
        console.log(res.data.products)
        this.products = res.data.products.filter(product => product.category === category)
        //this.products = res.data.products
      })
    }

  },
  // getters 概念同「computed」
  getters: {
    // 解構資料來自於 state
    doubleNumber({number}) {
      return number * 2;
    },
    getNum({number}) {
      return number;
    },
    getProducts({products}) {
      return products;
    }
  }
});
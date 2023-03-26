<template>
  <header class="container-fluid bg-secondary text-white position: relative" style="height: 52.5rem">

    <div style="background:#222222; height: 100px; position: absolute; top: 546px; right: 0; height: 624px; width: 14.25%;"></div>

    <div class="container">
      <div class="row" style="height:4rem">
        <div class="col-md-4"></div>
        <div class="col-md-4 d-flex align-items-center justify-content-center"
          style="color: black;  font-weight: bolder; text-decoration:underline; ">
          <h5>PERFUME</h5>
        </div>
        <div class="col-md-4 d-flex align-items-center justify-content-center">
          <router-link to="/cart">
            <div style="background:url('./Icon.png');width: 2rem; height: 2rem">
              <span class="position-relative top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {{ getNum }}
                <span class="visually-hidden">unread messages</span>
              </span>
            </div>
          </router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <p style="color: #222222; margin-top: 5.5rem">PERFUME STUDIO</p>
          <h2
            style="margin-top: 10px; margin-bottom: 0 !important; font-size: 4rem; font-family: Hiragino Mincho Pro; color: #222222;">
            香水調製所<br>調配你的專屬香味</h2>
        </div>
        <div class="col-md-6  position-relative">

          <div class="position-absolute bottom-0 end-0">
            <button type="button" class="btn btn-dark" @click="goTryNow" style="width: 11.375rem; height: 3.5rem;"> Try
              Now
              &nbsp;&nbsp;&rarr;</button>
          </div>


        </div>
      </div>
      <div class="row " style="height: 200px">

      </div>

      <div class="row position-relative" style="height: 624px">
     
        <div style="background-image: url('Rectangle473.png'); "></div>
      
     
    </div>



    </div>

  </header>



  <section class="container-flluid bg-primary" style="height: 93rem;">

    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <img src="Rectangle476.png" style="margin-top: 387px; ">
          <img src="Rectangle477.png" style="margin-top: 752px">
        </div>
        <div class="col-md-5 d-flex justify-content-end" style="margin-top: 600px">

          <div>
            <h5>NATURAL FLAVORS</h5>
            <h1>嚴選天然香料<br>呼吸之間均在閱讀<br>大自然</h1>
            <br>
            <div style="border-right: 1px solid #222222; height: 200px;">
            </div>
            <br>
            <br>
            <h4>「嗅覺是文字，香水則是文學」<br>&#8212; 愛馬仕專任調香師</h4>
            <br>
            <h5>Smell is a word, perfume is literature.<br>&#8212; Jean-Claude Ellena</h5>
          </div>
        </div>
      </div>
    </div>

  </section>

  <section id="tryNow" class="container-fluid bg-secondary" style="height: 120rem;">

    <div class="container">

      <div class="row justify-content-center" style="height: 500px;">
        <div class="col-md-4 d-flex align-items-center ">
          <div>
            <h2>前調</h2>
            <p class="fw-bold border-bottom border-2 border-dark">第一道迎面而來的香氣，雖然短暫但印象深刻。</p>
            <p>香水的前調是指香水最初噴上去時的氣味，通常持續時間短暫，
              約為10至15分鐘左右。前調的氣味通常是較為輕盈的，包含了一
              些清新、果香、花香等輕快的成分，能夠迅速地刺激人們的嗅覺
              神經，營造出一種愉悅的感覺。</p>
          </div>
        </div>
        <div class="col-md-2 d-flex align-items-center">
        </div>
        <div class="col-md-6" style="position: relative;">
          <div class="swiper ">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in products_topclass" :key="item.id">
                <div class="card" style="width: 18rem; height: 400px !important;">
                  <img :src="item.imageUrl" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <p class="card-text">{{ item.description }}</p>
                    <a class="btn btn-primary" @click="addToCart(item.id)">加入購物車</a>
                  </div>
                </div>
              </div>
            </div>
            <!-- If we need pagination -->

            <div class="swiper-pagination"></div>

            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <!-- If we need scrollbar -->
            <div class="swiper-scrollbar"></div>
          </div>
        </div>


      </div>

      <div class="row justify-content-center mt-6 flex-row-reverse" style="height: 600px;">
        <div class="col-md-4 d-flex align-items-center ">
          <div>
            <h2>中調</h2>
            <p class="fw-bold border-bottom border-2 border-dark">香水的核心，旁人主要感受到的香味。</p>
            <p>它是前調和後調之間的過渡，將前調的清新、明亮的味道與後調的濃郁、持久的味道融合在一起，讓香水的味道更加平衡和完美。
               不同的香水中調成分不盡相同，因此也創造出各種不同的香氣風格，從花香調到果香調、草本調到東方調等等，每一種都有其獨特的魅力和特點。</p>
          </div>
        </div>
        <div class="col-md-2 d-flex align-items-center">
        </div>
        <div class="col-md-6" style="position: relative;">
          <div class="swiper ">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in products_heartclass" :key="item.id">
                <div class="card" style="width: 18rem; height: 400px !important;">
                  <img :src="item.imageUrl" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <p class="card-text">{{ item.description }}</p>
                    <a class="btn btn-primary" @click="addToCart(item.id)">加入購物車</a>
                  </div>
                </div>
              </div>
            </div>
            <!-- If we need pagination -->

            <div class="swiper-pagination"></div>

            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <!-- If we need scrollbar -->
            <div class="swiper-scrollbar"></div>
          </div>
        </div>


      </div>


      <div class="row justify-content-center" style="height: 500px;">
        <div class="col-md-4 d-flex align-items-center ">
          <div>
            <h2>後調</h2>
            <p class="fw-bold border-bottom border-2 border-dark">第一道迎面而來的香氣，雖然短暫但印象深刻。</p>
            <p>後調通常是由木質香料、動物香、琥珀、香草等成分組成，營造出香水的濃郁、豐富的味道。由於後調味道持久，
              可以讓人在使用香水的整個過程中保持一種穩定的香氣，散發出迷人的魅力，
              每種風格都有其獨特的特點和韻味。因此，香水的後調也是判斷香水好壞的重要指標之一。</p>
          </div>
        </div>
        <div class="col-md-2 d-flex align-items-center">
        </div>
        <div class="col-md-6" style="position: relative;">
          <div class="swiper ">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in products_baseclass" :key="item.id">
                <div class="card" style="width: 18rem; height: 400px !important;">
                  <img :src="item.imageUrl" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <p class="card-text">{{ item.description }}</p>
                    <a class="btn btn-primary" @click="addToCart(item.id)">加入購物車</a>
                  </div>
                </div>
              </div>
            </div>
            <!-- If we need pagination -->

            <div class="swiper-pagination"></div>

            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <!-- If we need scrollbar -->
            <div class="swiper-scrollbar"></div>
          </div>
        </div>


      </div>

    </div>

  </section>


  <section class="container-fluid bg-primary" style="height: 52.5rem;">
    <div class="row" style="height: 52.5rem;">
      <div class="col-md-6 d-flex align-items-center justify-content-center">

        <div>
          <h5>Modulation</h5>
          <h1>心理測驗<br>找到你的獨特風格</h1><br><button type="button" @click="updateNumber" class="btn btn-dark"
            style="width: 11.375rem; height: 3.5rem;">Comming Soon &nbsp;&nbsp;&rarr;</button>
        </div>
      </div>
      <div class="col-md-6" style="background-image: url('Rectangle491.png');"></div>

    </div>

  </section>

  <section class="container-fluid bg-black" style="height: 17.5rem;">
    
        <div class="row bg-black ">
          <div class="col-md-4 d-flex align-items-center justify-content-center text-light " style="height: 17.5rem;">
            <div>
              <h5>關於perfume</h5>
              <p>品牌願景</p>
              <p>品牌故事</p>
            </div>
          </div>
          <div class="col-md-4 d-flex align-items-center justify-content-center text-light " style="height: 17.5rem;">
            <div>
              <h5>客戶服務</h5>
              <p>常見問題</p>
              <p>物流政策</p>
            </div>
          </div>
          <div class="col-md-4 d-flex  align-items-center justify-content-center text-light " style="height: 17.5rem;">
            <div>
              <h5>聯絡我們</h5>
              <p>信箱:swa123456@gmail.com</p>
              <p>電話:0905123456</p>
            </div>
          </div>
        </div>
   
  </section>

  <CardModal @update-product="updateProduct" :category="category" :product="tempProduct" :isNew="isNew"
    ref="productModal" />
  <CardBase @update-product="updateProduct" :category="category" :product="tempProduct" :isNew="isNew" ref="baseModal" />
  <CardHeart @update-product="updateProduct" :category="category" :product="tempProduct" :isNew="isNew"
    ref="heartModal" />
</template>

<script>

import CardModal from '@/components/CardModal.vue'
import CardBase from '@/components/CardBase.vue'
import CardHeart from '@/components/CardHeart.vue'

import { cart } from "../stores/cart.js"
import { mapState, mapActions } from 'pinia'
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const { VITE_APP_API, VITE_APP_PATH } = import.meta.env


// let productModal = null
let delProductModal = null
let productModal = null

const cartAct = cart();

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  modules: [Navigation, Pagination]
});


export default {
  data() {
    return {
      swiper: swiper,
      products_topclass: {},
      products_heartclass:{},
      products_baseclass:{},
      isNew: false,
      isLoading: false,
      cartNum: cartAct.$state.number,
      itemDetail: {},
      category: '',
      tempProduct: {
        imagesUrl: []
      },
      status: {
        fileUploading: false
      },
      page: {},
      modal: {
        editModal: '',
        delModal: ''
      }
    }
  },
  components: {

    CardModal,
    CardBase,
    CardHeart

  },
  methods: {
    ...mapActions(cart, ['updateNumber']),

    addToCart(id, qty = 1) {
      console.log("addtoCart")
      const data = {
        product_id: id,
        qty
      }
      this.$http.post(`${VITE_APP_API}/v2/api/${VITE_APP_PATH}/cart`, { data })
        .then((res) => {
          this.updateNumber()
          console.log(res)
         
        })
    },

    checkLogin() { // 登入驗證
      this.$http.post('/v2/api/user/check')
        .then(res => {
          console.log(`logsussess:${res}`)
          this.getProducts()
        })
        .catch(err => {
          console.log(`no login:${err.response.data.message}`) // 失敗跳轉回登入頁面
          // alert(err.response.data.message)
          this.$router.push('/login')
        })
    },
    getProducts() {
      this.$http.get(`${VITE_APP_API}/v2/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          console.log(res.data.products)
          this.products_topclass = res.data.products.filter(product => product.category === 'top')
          //this.products = res.data.products
          this.products_heartclass = res.data.products.filter(product => product.category === 'heart')
          this.products_baseclass = res.data.products.filter(product => product.category === 'base')
          swiper.update()
        })
    },
    // getProducts(page = 1) {
    //   this.$http.get(`${VITE_APP_API}/v2/api/${VITE_APP_PATH}/admin/products?page=${page}`).then(res => {
    //     console.log('data:', res)
    //     this.products = res.data.products // 將api取得資料
    //     this.page = res.data.pagination
    //   })
    //     .catch(err => {
    //       console.log('getDataErr:', err.data.message)
    //     })
    // },
    updateProducts() {
      let httpMethod = 'post'
      let api = `${VITE_APP_API}/v2/api/${VITE_APP_PATH}/admin/product`

      if (!this.isNew) {
        httpMethod = 'put'
        api = `${VITE_APP_API}/v2/api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`
      }

      this.$hppt.$[httpMethod](api, { data: this.tempProduct })
        .then(res => {
          alert(`${res.data.message}`)
          console.log(res)
          // productModal.hide()
          this.getProducts()
        })
        .catch(err => {
          alert(`新增失敗:${err.data.message}`)
        })
    },
    updateProduct(item) {
      this.tempProduct = item
      let api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/admin/product`
      this.isLoading = true
      let httpMethod = 'post'
      let status = '新增產品'
      if (!this.isNew) {
        api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/admin/product/${this.tempProduct.id}`
        httpMethod = 'put'
        status = '更新產品'
      }
      const productComponent = this.$refs.productModal
      this.$http[httpMethod](api, { data: this.tempProduct }).then((response) => {
        this.isLoading = false
        this.$httpMessageState(response, status)
        productComponent.hideModal()
        this.getProducts(this.currentPage)
      }).catch((error) => {
        this.isLoading = false
        this.$httpMessageState(error.response, status)
      })
    },
    createImages() { // 初始化
      this.tempProduct.imagesUrl = []
      this.tempProduct.imagesUrl.push('')
    },

    deleteProduct() {
      const api = `${VITE_APP_API}/v2/api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`
      this.$http.delete(api)
        .then(res => {
          alert(res)
          delProductModal.hideModal()
          this.getProducts()
        })
        .catch(err => {
          alert(`刪除失敗:${err.data.message}`)
          delProductModal.hideModal()
        })
    },

    openModal(category) {
      this.category = category
      this.isNew = true
      this.tempProduct = {}
      if (category === 'top') {
        productModal = this.$refs.productModal
      } else if (category === 'heart') {
        productModal = this.$refs.heartModal
      } else if (category === 'base') {
        productModal = this.$refs.baseModal

      }

      productModal.openModal()

    },

    goTryNow() {
      const targetElement = document.querySelector('#tryNow')
      const targetPosition = targetElement.offsetTop
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    },

    

  },

  computed: {
    ...mapState(cart, ['getNum'])
  },

  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1') // 先取出tocken存入apititle，才能進行確認
    this.$http.defaults.headers.common.Authorization = token
    this.swiper.init()
    this.getProducts()
    this.updateNumber()
  }

}


</script>


<style>
.hero-title {
  width: 11.375rem;
  height: 3.5rem;
  background: blue;
}

.image-container {
  position: absolute;
  width: 81rem;
  height: 39rem;
  left: 19.5rem;
  top: 34rem;
  object-fit: fill;

}

.rightbox {
  position: absolute;
  width: 19.5rem;
  height: 39rem;
  right: 0rem;
  top: 34rem;
  background: #222222;
}

.trymebutton {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 1.5rem;

  position: absolute;
  width: 11.375rem;
  height: 3.5rem;
  right: 19.5rem;
  top: 25.43rem;

  /* Gray/50 */

  background: #222222;

  font-family: 'Hiragino Sans';
  letter-spacing: 0.05em;
  text-transform: uppercase;

  /* White/50 */

  color: #FFFFFF;

}

.image1-section2 {
  position: absolute;
  width: 23.125rem;
  height: 36rem;
  left: 19.5rem;
  top: 85.75rem;
  object-fit: fill;

}

.image2-section2 {
  position: absolute;
  width: 23.15rem;
  height: 36rem;
  left: 42.625rem;
  top: 99.5rem;
  object-fit: fill;

}

.stright_line {
  position: absolute;
  width: 1px;
  height: 12.625rem;
  left: 100.5rem;
  top: 102.125rem;
  object-fit: fill;
  background: black;

}

.section2-subTitle {
  position: absolute;
  width: 14.625rem;
  height: 2.25rem;
  left: 85.43rem;
  top: 89.5rem;
  text-align: right;
  object-fit: fill;

}

.section2-Title {
  position: absolute;
  width: 32.68rem;
  height: 14.374rem;
  left: 67.8rem;
  top: 87.875rem;
  text-align: right;
  font-weight: bolder;
  object-fit: fill;
}

.section2-bottomtext {
  position: absolute;
  width: 32.68rem;
  height: 14.375rem;
  left: 67.8125rem;
  top: 116.25rem;
  text-align: right;
  font-weight: bolder;
  object-fit: fill;
}

.section2-bottomtext2 {
  position: absolute;
  width: 32.68rem;
  height: 14.375rem;
  left: 67.8125rem;
  top: 120.3125rem;
  text-align: right;
  font-weight: bolder;
  object-fit: fill;
}

.section5-subTitle {
  position: absolute;
  width: 8.3125rem;
  height: 2.25rem;
  left: 19.6875rem;
  top: 218.75rem;
  text-align: left;
  object-fit: fill;
}

.section5-Title {
  position: absolute;
  width: 32.6875rem;
  height: 14.375rem;
  left: 19.5rem;
  top: 220.625rem;
  text-align: left;
  font-weight: bolder;
  object-fit: fill;
}

.section5-trymebutton {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 1.5rem;

  position: absolute;
  width: 11.375rem;
  height: 3.5rem;
  left: 19.5rem;
  top: 228.75rem;

  /* Gray/50 */

  background: #222222;

  font-family: 'Hiragino Sans';
  letter-spacing: 0.05em;
  text-transform: uppercase;

  /* White/50 */

  color: #FFFFFF;
}

.swiper {

  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100%;
 
}

.swiper-slide {
  text-align: center;
  font-size: 1.125rem;
  background: #F0EBE7;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;

}

.swiper-pagination {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 90%;
  display: flex;
  justify-content: center;
   color: #000;
  margin-top: 0.625rem;
}

.swiper-button-prev {
  position: absolute;
  left: 15%;
  color: burlywood;
}

.swiper-button-next {
  position: absolute;
  right: 15%;
  color:burlywood;
}

.topNote {
  position: relative;
  top: 29.6875rem;
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
}


.baseNote {
  position: relative;
  top: 42.1875rem;
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
}



.heartNote {
  position: relative;
  top: 35.9375rem;
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
}</style>
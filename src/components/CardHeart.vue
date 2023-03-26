<template>
  <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>Top Note</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" style="height:600px">
          <div class="swiper">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in products" :key="item.id">
                <div class="card" style="width: 18rem; height: 400px !important;;">
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
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="$emit('update-product', tempProduct)">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from 'bootstrap/js/dist/modal'
import { cart } from '../stores/cart.js'
const { VITE_APP_API, VITE_APP_PATH } = import.meta.env
import { mapState, mapActions } from 'pinia'
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const swOption = {
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
  modules: [Navigation, Pagination],
}

const swiper = new Swiper(".swiper", swOption);

export default {
  props: {
    product: {
      type: Object,
      default() { return {} }
    },
    isNew: {
      type: Boolean,
      default: false
    },
    category: {
      type: String,
      default: 'top'
    }
  },
  data() {
    return {
      swiper,
      status: {},
      modal: '',
      tempProduct: {},
      products: [],
      qty: 0
     
    }
  },
  emits: ['update-product'],
  inject: ['emitter'],
  watch: {
    product() {
      this.tempProduct = this.product
      if (!this.tempProduct.imagesUrl) {
        this.tempProduct.imagesUrl = []
      }
      if (!this.tempProduct.imageUrl) {
        this.tempProduct.imageUrl = ''
      }
    }
  },
  methods: {
    ...mapActions(cart, ['updateNumber']),

    getProducts() {
      this.$http.get(`${VITE_APP_API}/v2/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          console.log(res.data.products)
          console.log("this.category:"+this.category)
          this.products = res.data.products.filter(product => product.category === "heart")
          //this.products = res.data.products
          this.swiper = new Swiper(".swiper", swOption)
        })
    },
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
          this.hideModal()
        })
    },

    openModal() {
      this.modal.show()
    },
    hideModal() {
      this.modal.hide()
    },
  },
  computed: {
    ...mapState(cart, ['getCategory'])
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal)
    this.getProducts()
  
    
  }
}
</script>


<style>


.swiper {
  width: 500px !important;
  height: 500px !important;

}

.swiper-slide img {
  width: 18rem;
  height: 12rem;
  object-fit: fill;
}

.swiper-slide {
  text-align: center;
  font-size: 12px !important;
  background: #dfa4a4;
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
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
</style>
<script>


const { VITE_URL, VITE_PATH } = import.meta.env

console.log(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`)

export default {
  components: {

  },
  mounted() {
    this.$http(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`)
      .then(res => { console.log(res.data) })
  }

}

</script>

<template>
  <header class="container-fluid bg-secondary text-white" style="height: 52.5rem;">
    <div class="row" style="height:64px">
      <div class="col-md-4" ></div>
      <div class="col-md-4" ></div>
      <div class="col-md-4" ></div>
    </div>
    <div class="row">
      <div class="col-md-6" style="height: 52.5rem;">
        <p style="color: #222222; margin-left: 312px; margin-top: 200px">PERFUME STUDIO</p>
        <h2 style="margin-top: 0px; margin-left: 312px;font-size: 64px; font-family: 'Hiragino Mincho Pro'; color: #222222;">香水調製所<br>調配你的專屬香味</h2>
        <div calss="hero-title"> </div>   
      </div>
      <div class="col-md-6" style="height: 52.5rem; ">
        <nav class="text-end">
          <ul class="nav justify-content-md-end">
            <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#">About</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
     
      <button class="trymebutton" style="width: 11.375rem; height: 3.5rem;">Try Now &nbsp;&nbsp;&rarr;</button>
    </div>
  </header>
  <div class="image-container">
  </div>
  <div class="image-container-rightbox">
  </div>
  <section class="container-fluid bg-primary" style="height: 1488px;">
    <div class="row">
      <div class="col-md-6">
        <h2></h2>
        <p></p>
      </div>
      <div class="col-md-6">
        <img src="https://via.placeholder.com/600x600" alt="Placeholder" class="img-fluid">
      </div>
    </div>
  </section>
  <section class="container-fluid bg-secondary" style="height: 840px;">

  </section>
  <section class="container-fluid bg-primary" style="height: 840px;">
    <div class="row">
      <div class="col-md-4" style="height: 840px;">列 1</div>
      <div class="col-md-4 bg-success">列 2</div>
      <div class="col-md-4 col-md-offset-50">列 3</div>
    </div>
  </section>
</template>

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
  top: 543px;
  object-fit: fill;
  background: url("/Rectangle 473.png");
}

.image-container-rightbox {
  position: absolute;
  width: 248px;
  height: 628px;
  left: 1608px;
  top: 541px;
  background: #222222;
}

.trymebutton {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;

  position: absolute;
  width: 182px;
  height: 56px;
  left: 1426px;
  top: 407px;

  /* Gray/50 */

  background: #222222;

  font-family: 'Hiragino Sans';
  letter-spacing: 0.05em;
  text-transform: uppercase;

  /* White/50 */

  color: #FFFFFF;

}
</style>
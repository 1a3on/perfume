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
      <div class="col-md-4"></div>
      <div class="col-md-4 d-flex align-items-center justify-content-center" style="color: black;  font-weight: bolder; text-decoration:underline; "><h5>PERFUME</h5></div>
      <div class="col-md-4"></div>
    </div>
    <div class="row">
      <div class="col-md-6" style="height: 52.5rem;">
        <p style="color: #222222; margin-left: 312px; margin-top: 200px">PERFUME STUDIO</p>
        <h2
          style="margin-top: 0px; margin-left: 312px;font-size: 64px; font-family: 'Hiragino Mincho Pro'; color: #222222;">
          香水調製所<br>調配你的專屬香味</h2>
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
        <div class="image1-section2"></div>
        <div class="image2-section2"></div>
      </div>
      <div class="col-md-6">
        <div class="section2-subTitle">
          <h5>NATURAL FLAVORS</h5>
        </div>
        <div class="stright_line"></div>
        <div class="section2-Title">
          <h1>嚴選天然香料<br>呼吸之間均在閱讀<br>大自然</h1>
        </div>
        <div class="section2-bottomtext">
          <h4>「嗅覺是文字，香水則是文學」<br>&#8212; 愛馬仕專任調香師</h4>
        </div>
        <div class="section2-bottomtext2">
          <h5>Smell is a word, perfume is literature.<br>&#8212; Jean-Claude Ellena</h5>
        </div>
      </div>
    </div>
  </section>
  <section class="container-fluid bg-secondary" style="height: 880px; object-fit: fill;background: url('/Frame 36774.png');">
    
  </section>
  <section class="container-fluid bg-primary" style="height: 840px;">
    <div class="row" style="height: 840px;">
      <div class="col-md-6" >
        <div class="section5-subTitle">
          <h5>Modulation</h5>
        </div>
        <div class="section5-Title">
          <h1>調配專屬香水<br>綻放你的獨特風格</h1>
        </div>
        <button class="section5-trymebutton" style="width: 11.375rem; height: 3.5rem;">Try Now &nbsp;&nbsp;&rarr;</button>
      </div>
      <div class="col-md-6" style="object-fit: fill;background: url('/Rectangle 491.png');"></div>
    </div>
  </section>

  <section class="container-fluid bg-secondary" style="height: 280px; object-fit: fill;background: url('/Footer-Desktop.png');">
    
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

.image1-section2 {
  position: absolute;
  width: 370px;
  height: 575px;
  left: 19.5rem;
  top: 1372px;
  object-fit: fill;
  background: url("/Rectangle 476.png");
}

.image2-section2 {
  position: absolute;
  width: 370px;
  height: 575px;
  left: 682px;
  top: 1592px;
  object-fit: fill;
  background: url("/Rectangle 477.png");
}

.stright_line {
  position: absolute;
  width: 1px;
  height: 202px;
  left: 1608px;
  top: 1634px;
  object-fit: fill;
  background: black;

}

.section2-subTitle {
  position: absolute;
  width: 234px;
  height: 36px;
  left: 1367px;
  top: 1432px;
  text-align: right;
  object-fit: fill;

}

.section2-Title {
  position: absolute;
  width: 523px;
  height: 230px;
  left: 1085px;
  top: 1460px;
  text-align: right;
  font-weight: bolder;
  object-fit: fill;
}

.section2-bottomtext {
  position: absolute;
  width: 523px;
  height: 230px;
  left: 1085px;
  top: 1860px;
  text-align: right;
  font-weight: bolder;
  object-fit: fill;
}

.section2-bottomtext2 {
  position: absolute;
  width: 523px;
  height: 230px;
  left: 1085px;
  top: 1925px;
  text-align: right;
  font-weight: bolder;
  object-fit: fill;
}

.section5-subTitle{
  position: absolute;
  width: 133px;
  height: 36px;
  left: 315px;
  top: 3500px;
  text-align: left;
  object-fit: fill;
}

.section5-Title{
  position: absolute;
  width: 523px;
  height: 230px;
  left: 312px;
  top: 3530px;
  text-align: left;
  font-weight: bolder;
  object-fit: fill;
}

.section5-trymebutton{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;

  position: absolute;
  width: 182px;
  height: 56px;
  left: 312px;
  top: 3660px;

  /* Gray/50 */

  background: #222222;

  font-family: 'Hiragino Sans';
  letter-spacing: 0.05em;
  text-transform: uppercase;

  /* White/50 */

  color: #FFFFFF;
}

</style>
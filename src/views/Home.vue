<template>
  <b-container>
    <b-row>
      <div>
        <b-carousel
          class="mt-3"
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
          <b-carousel-slide>
            <template #img>
              <img
                class="d-block img-fluid w-100"
                width="1024"
                height="480"
                src="../assets/5.jpg"
                alt="image slot"
              />
            </template>
          </b-carousel-slide>
          <b-carousel-slide>
            <template #img>
              <img
                class="d-block img-fluid w-100"
                width="1024"
                height="480"
                src="../assets/6.jpg"
                alt="image slot"
              />
            </template>
          </b-carousel-slide>
          <b-carousel-slide>
            <template #img>
              <img
                class="d-block img-fluid w-100"
                width="1024"
                height="480"
                src="../assets/7.jpg"
                alt="image slot"
              />
            </template>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </b-row>
    <b-row class="cuidado">
      <b-card class="m-2">
        <h1>¿Qué son las Manzanas del Cuidado?</h1>
        <p>
          Las Manzanas del Cuidado son espacios de la ciudad en los que se
          brinda tiempo y servicios a las mujeres y a sus familias.
        </p>
        <p>
          En las Manzanas del Cuidado las cuidadoras tienen tiempo y servicios
          gratuitos, aquí pueden estudiar, emprender, emplearse, descansar,
          ejercitarse, recibir orientación y asesoría jurídica y psicológica,
          lavar su ropa y la de su familia en lavanderías comunitarias, todo
          totalmente gratis.
        </p>
      </b-card>
    </b-row>
  </b-container>
</template>
  
  <script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>
  <style scoped>
.cuidado {
  margin: 20px;
}
</style>
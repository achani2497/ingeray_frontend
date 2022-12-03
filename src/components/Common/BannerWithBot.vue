<template>
  <div class="inge-shadow-down flex flex-col mt-4">
    <img :src="bannerName" @load="loaded()" alt="banner-contactos" />
    <div class="banner-content flex flex-col gap-6 relative">
      <div id="banner-section-title">
        <slot name="title"></slot>
      </div>
      <div id="banner-section-stuff">
        <slot name="stuff"></slot>
      </div>
      <button
        class="
          bot-button
          rounded-full
          h-20
          w-20
          absolute
          right-6
          -bottom-12
          cursor-pointer
        "
        @click="showModal = true"
      ></button>
    </div>
    <modal large="sm" @close="showModal = false" v-if="showModal">
      <template #content>
        <div class="w-full bg-white px-8 flex flex-col gap-4 pb-8">
          <img
            src="@/assets/images/logo-inge-contacto.svg"
            alt="logo de ingeray"
            class="self-end"
            width="150px"
          />
          <div class="contact-fields">
            <titles
              title="Déjenos su"
              subtitle="Consulta"
              fontSize="30"
              class="pl-2"
            >
            </titles>
            <small class="pl-2"
              >* Complete los 4 campos del formulario para brindarle una mejor
              atención</small
            >
            <div class="flex flex-col gap-2 mt-4">
              <div class="input-group">
                <label for="nombre">Nombre *</label>
                <input type="text" id="nombre" />
              </div>
              <div class="input-group">
                <label for="nombreInstitucion">Nombre de la Institución</label>
                <input type="text" id="nombreInstitucion" />
              </div>
              <div class="input-group">
                <label for="unidad">Unidad / Servicio</label>
                <input type="text" id="unidad" />
              </div>
              <div class="input-group">
                <label for="mail"> Mail de Contacto *</label>
                <input type="text" id="mail" />
              </div>
              <div class="input-group">
                <label for="telefono">Teléfono de contacto *</label>
                <input type="text" id="telefono" />
              </div>
              <div class="input-group">
                <label for="consulta"
                  >Escriba aquí su consulta, le responderemos a la brevedad
                  *</label
                >
                <textarea id="consulta" rows="5"> </textarea>
              </div>
            </div>
          </div>
          <div class="contact-footer relative">
            <button class="contact-inge-button py-2 px-6">
              Enviar Consulta
            </button>
            <button
              type="button"
              @click="showModal = false"
              class="
                close-button
                bg-center
                h-10
                w-10
                absolute
                top-1
                -right-4
                text-xl
                rounded-full
              "
            ></button>
          </div>
        </div>
      </template>
      ></modal
    >
  </div>
</template>

<script>
export default {
  name: "banner-box",
  props: ["bannerName"],
  data() {
    return {
      load: false,
      showModal: false,
    };
  },
  methods: {
    loaded() {
      // TODO: VER QUE HAGO CON ESTO
      console.log(this.load);
      console.log("cargado");
      this.load = true;
      console.log(this.load);
    },
  },
};
</script>

<style>
.banner {
  background-image: var(--image-url);
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 0;
  padding-top: calc((864 / 2872) * 100%);
}
.banner-content {
  padding: 2rem 4rem 4rem;
  background-color: white;
}
.bot-button {
  background-image: url("~@/assets/images/icons/bot.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transform: scale(1.1);
}
.bg-white {
  background-color: #e3e4e3 !important;
}
.input-group {
  display: flex;
  position: relative;
  flex-direction: column;
  border: 1px solid black;
}
.input-group label {
  position: absolute;
  left: 0.5rem;
  font-size: 13px;
}
.input-group input {
  height: 50px;
  padding-top: 10px;
}
.input-group textarea {
  padding-top: 15px;
}
.input-group input,
textarea {
  padding-left: 0.5rem;
  font-size: 18px;
}
.close-button {
  background-image: url("~@/assets/images/icons/Cross.svg");
  background-size: 280%;
  background-color: #f2f2f2;
}

@media screen and (max-width: 900px) {
  .banner-content {
    padding: 2rem 3rem;
  }
}
@media screen and (max-width: 650px) {
  .banner-content {
    padding: 1rem;
  }
}
@media screen and (max-width: 414px) {
}
</style>
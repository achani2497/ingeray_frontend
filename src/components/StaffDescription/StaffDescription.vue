<template>
  <ul class="staff-description flex flex-col gap-4">
    <li
      v-for="(persona, index) in equipo"
      :key="index"
      class="personal-card flex gap-4"
    >
      <ik-image
        v-if="persona.imagen"
        class="ik-image"
        :path="`/${persona.imagen}`"
        :alt="`foto de ${persona.nombre}`"
      ></ik-image>
      <div v-else class="w-full h-full bg-gray-300"></div>
      <div class="personal-details flex flex-col gap-2 w-1/2">
        <div class="person">
          <titles :subtitle="persona.nombre" class="staff-name-title"></titles>
          <p>{{ persona.rol }}</p>
        </div>
        <div class="contact-details">
          <div
            class="contact-data-icon"
            v-for="(mail, index2) in persona.mail"
            :key="index2"
          >
            <div class="data-icon mail-icon"></div>
            <a class="blue" :href="'mailto: ' + mail"> {{ mail }} </a>
          </div>
          <div class="contact-data-icon">
            <div class="data-icon whatsapp-icon"></div>
            <a class="blue" :href="persona.whatsapp">
              {{ persona.whatsapp }}
            </a>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  props: ["equipo"],
};
</script>
<style scoped>
.ik-image {
  max-width: 130px;
  max-height: 150px;
  width: 25%;
}
.personal-details {
  width: 75%;
}
.nombre {
  font-size: 20px;
}
.contact-data-icon {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}
.data-icon {
  height: 35px;
  width: 35px;
  background-size: 400%;
  background-position: center center;
  background-repeat: no-repeat;
}
.mail-icon {
  background-image: url("~@/assets/images/contacto/mail.svg");
}
.whatsapp-icon {
  background-image: url("~@/assets/images/contacto/whatsapp.svg");
}
.staff-description {
  width: 50%;
}
@media screen and (max-width: 1440px) {
  .staff-name-title {
    font-size: 25px !important;
    color: black !important;
  }
}
@media screen and (max-width: 900px) {
  .staff-description {
    width: 100%;
  }
  .personal-details {
    width: 100%;
  }
  .personal-card {
    width: 100%;
  }
}
@media screen and (max-width: 414px) {
  .personal-details {
    width: 100%;
  }
  .personal-card {
    width: 100%;
  }
}
</style>
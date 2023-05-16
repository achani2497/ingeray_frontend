<template>
    <div>
        <button
            @click="showPasos = true"
            class="banner-contacto flex items-center gap-2 -mt-2 mb-6"
        >
        <div class="envelope"></div>
        <div class="text">
            <titles
            title="Contáctenos"
            subtitle="sobre este producto"
            class="banner-contacto-title"
            :fontSize="16"
            :lineHeight="10"
            ></titles>
        </div>
        </button>
        <!-- Modal del formulario de tres pasos -->
        <Modal
        :header="false"
        v-if="showPasos"
        large="xl"
        >
        <!-- Form del modal -->
        <template #content>
            <form-pasos
            @close="showPasos = false"
            ></form-pasos>
        </template>
        </Modal>
    </div>
</template>
<style>
.banner-contacto {
  height: 50px;
  background-color: #e6e6e6;
  padding: 2rem 4rem;
  width: 100%;
}
</style>
<script>
import { mamoMixin } from '../../assets/js/mamoMixin';
import Modal from '../Modal/Modal.vue'
import ContactForm from '../Forms/ContactForm.vue';

    export default {
        mixins: [mamoMixin],
        components: {
            'Modal': Modal,
            "form-pasos": ContactForm,
        },
        data() {
            return {
                showPasos: false,
            }
        },
    }
</script>
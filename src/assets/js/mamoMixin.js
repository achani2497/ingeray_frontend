export const mamoMixin = {
    methods: {
        esMamo: function() {
            const urlActual = this.$route.path.split('/');
            if(urlActual.includes('mamografos') || urlActual.includes('captores-digitales')) {
                return true;
            } else {
                return false;
            }
        },
        soloMamo: function() {
            const urlActual = this.$route.path.split('/');
            if(urlActual.includes('mamografos')) {
                return true;
            } else {
                return false;
            }
        },
    }
}
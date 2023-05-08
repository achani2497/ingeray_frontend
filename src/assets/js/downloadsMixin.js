import axios from "axios";

export const downloadsMixin = {
    methods: {
        downloadItem: function(url) {
            console.log('entro')
            console.log(url)
            axios.get(url,{ responseType: 'blob'})
                .then(response => {
                    const blob = new Blob([response.data], {type: 'application/pdf'})
                    const link = document.createElement('a')
                    link.href = URL.createObjectURL(blob)
                    link.download = label
                    link.click()
                    URL.revokeObjectURL(link.href)
                })
                .catch(console.error)
        },
        downloadFile: function(file) {
            const link = document.createElement('a')
            link.href = `@/assets/documentos/${file}`
            link.setAttribute('download','documento.pdf')
            document.body.appendChild(link)
            link.click()
        },
    }
}
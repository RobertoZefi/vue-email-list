const { createApp } = Vue

createApp({
    data() {
      return {
        names: [],
      }
    },

    methods: {
        generateEmail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {

            this.names.push(res.data.response)
            
            })
        },
    },

    mounted(){
        for (let i = 0; i < 10; i++){
            this.generateEmail()
        }
    }
    
}).mount('#app')
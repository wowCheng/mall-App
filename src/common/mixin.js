export const  imgload = {
    data() {
        return {
            imgload : null
        }
    },
    mounted() {
        this.imgload = () => {
            this.$refs.content.refresh()
        }
        this.$bus.$on('imgload',this.imgload)
        console.log('123');
    }
}
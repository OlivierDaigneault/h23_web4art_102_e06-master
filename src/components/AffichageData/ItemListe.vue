<script setup>
    import { reactive, onMounted } from 'vue';

    const data = reactive({
        itemImg: null
    })

    const props = defineProps({
        item: null
    })

    onMounted(() => {
        if(props.item.nbPhotos == 0)
        {
            data.itemImg = '/src/assets/img/no_img.svg';
        }
        else
        {
            data.itemImg = props.item.image.url;
        }
    })

</script>

<template>
    <div class="fiche-produit">
        <div class="wrapImg">
            <img :src="data.itemImg" alt="">
        </div>

        <div class="wrapInfo">
            <p v-text="props.item.titre"></p>
            <RouterLink :to="{name:'produit.details', params: {id: props.item.id}}">En savoir plus &gt;</RouterLink>  <!-- &gt; = > (fleche vers la droite)-->
        </div>
    </div>
</template>

<style lang="scss">
    div.fiche-produit{
        margin: 32px 0;
        border: 3px solid black;
    }
</style>
<script setup>
    import axios from 'axios'
    import { reactive, onBeforeMount } from 'vue'
    import ItemListe from './ItemListe.vue'

    const data= reactive({
        produits: null  //failsafe pour qu'il ne soit pas un-defined
    })

    onBeforeMount(() => {
        axios.get('http://magasin.mboudrea.tim-cstj.ca/api/produit/alea/9')
            .then(response =>{  //then means se qui est dedans va s'effectuer APRÈS le code en haut 
                data.produits = response.data.produits;
                console.log(data.produits);
            })
    })
</script>

<template>
    <div class="liste" v-if="data.produits">
        <ItemListe v-for="produit in data.produits" :key="produit.id" :item="produit"/>
    </div>
</template>

<style lang="scss">
    
</style>
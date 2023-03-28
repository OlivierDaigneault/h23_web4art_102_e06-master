<script setup>
import HeaderApp from '@/components/commun/HeaderApp/HeaderApp.vue'
</script>

<template>
  <div class="interface">
    <HeaderApp />

    <main>
    <h2>Contenu de ma page d'acceuil</h2>
    <div class="tableMatieres">
        
        <p>exposition</p>

        <ul class="listeContenu">
            <li> <RouterLink to="/produits"> expo 1 </RouterLink></li>
        </ul>
    </div>
    </main>
    </div>
</template>

<style scoped>

</style>
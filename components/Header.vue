<template>
    <header class="header__base">
        <div class="header__linksContainer">
            <button class="btn btn--default" v-for="itemLink in NAV_ITEMS_FILTERED" :key="itemLink.key">{{itemLink.name}}</button>
        </div>
        <div class="header__ctaContainer">
            <button class="btn btn--primary">Přidat inzerát</button>
        </div>
    </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header {
    &__base {
        position: sticky;
        top: 0;
        width: 100%;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid $c-slate;
        padding: 12px 24px;
        background: $c-white;
        box-shadow: $bs-header;
    }

    &__links {
        &Container {
            display: flex;
            align-items: center;
            gap: 8px;
        }
    }
}
</style>
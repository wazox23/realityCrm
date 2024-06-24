<template>
    <div class="myOffers__base">
        <h1 class="h2 myOffers__title">Moje inzeráty</h1>
        <div class="card myOffers__mainCard">
            <div class="myOffers__filterContainer">
                <div>
                    <input type="text" placeholder="Vyhledat inzerát">
                </div>
                <div>
                    <span>Řadit podle</span>
                    <select>
                        <option value="">1234</option>
                    </select>
                </div>
            </div>
            <div class="card myOffers__filterGrid"></div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.myOffers {
    &__base {
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    &__filter {
        &Grid {
            min-height: 600px;
        }

        &Container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 16px 32px;
        }
    }
}
</style>
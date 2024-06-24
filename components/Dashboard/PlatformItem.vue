<template>
    <div class="platforms-list__item">
        <img class="platforms-list__image" src="/imgs/bazos.png" alt="Bazos" />
        <p class="platforms-list__name">Bazoš</p>
        <p
            :class="[
                'platforms-list__status',
                isActive ? 'active' : 'inactive',
            ]"
        >
            {{ isActive ? "Aktivní" : "Neaktivní" }}
        </p>
        <button
            :class="[
                'platforms-list__button',
                isActive ? 'settings-button' : 'connect-button',
            ]"
        >
            <span v-if="isActive" class="icon">&#9881;</span>
            <span v-else>Připojení</span>
        </button>
    </div>
</template>

<script>
export default {
    name: "PlatformItem",
    data() {
        return {
            isActive: true,
        };
    },
};
</script>

<style lang="scss" scoped>
.platforms-list {
    &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 8px;
        justify-content: space-between;
        position: relative;

        @include lg {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
    }

    &__image {
        border-radius: 8px;
        width: 100px;
        height: 100px;

        @include lg {
            width: 150px;
            height: 150px;
        }
    }

    &__name {
        flex-grow: 1;
        margin: 0;
    }

    &__status {
        color: $c-white;
        padding: 5px 10px;
        border-radius: 360px;
        display: inline-block;

        &.active {
            background-color: $c-primary;
        }

        &.inactive {
            background-color: red;
        }
    }

    &__button {
        position: absolute;
        bottom: 10px;
        right: 10px;
        padding: 5px 10px;
        border: none;
        border-radius: 8px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &.settings-button {
            color: $c-black;
            background-color: $c-white;

            &:hover {
                background-color: darken($c-secondary, 10%);
            }
        }

        &.connect-button {
            background-color: red;
            color: $c-white;

            &:hover {
                background-color: darken(red, 10%);
            }
        }

        .icon {
            font-size: 30px;
        }
    }
}
</style>

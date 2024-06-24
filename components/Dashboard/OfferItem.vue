<template>
    <div class="ads-list__item">
        <div class="ads-list__left">
            <img
                class="ads-list__image"
                src="/imgs/dum-zlin.png"
                alt="Dům Zlín"
            />
            <div class="ads-list__details">
                <span class="ads-list__detailsTitle">
                    <h3 class="textXL--bold">Dům Zlín</h3>
                </span>
                <p class="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
            </div>
        </div>
        <div class="ads-list__right">
            <p class="ads-list__price">7,500,000.00 Kč</p>
            <button class="ads-list__settings settings-button">
                <span class="icon">&#9881;</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "OfferItem",
};
</script>

<style lang="scss" scoped>
.ads-list {
    &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        padding: 10px;
        border-radius: 8px;
        position: relative;
        justify-content: space-between;

        @include lg {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
    }

    &__left {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        position: relative;

        @include lg {
            flex-direction: row;
            align-items: center;
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

    &__details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        &Title {
            margin-bottom: 40px;
        }
    }

    &__right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 8px;

        @include lg {
            align-items: flex-start;
        }
    }

    &__price {
        color: $c-primary;
        font-weight: bold;
        font-size: 1.2rem;
        text-align: right;

        @include lg {
            text-align: left;
        }
    }

    &__settings {
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

        @include lg {
            align-self: flex-start;
        }

        .icon {
            font-size: 30px;
        }
    }
}
</style>

<template>
    <div class="dashboard">
        <main class="dashboard__main">
            <section class="dashboard__ads">
                <div class="dashboard__header">
                    <h2 class="h3">Moje inzerce</h2>
                    <div class="dashboard__filters">
                        <button class="filter-button active">Týden</button>
                        <button class="filter-button">Měsíc</button>
                        <button class="filter-button">Rok</button>
                    </div>
                </div>
                <div class="ads-list">
                    <OfferItem v-for="i in 5" :key="i" />
                </div>
                <NuxtLink to="/moje-inzeraty" class="cta-link">
                    <span>Zobrazit vše</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="12"
                        fill="none"
                        viewBox="0 0 34 16"
                    >
                        <path
                            fill="currentColor"
                            d="M33.7 8.7a1 1 0 0 0 0-1.4L27.35.92a1 1 0 1 0-1.41 1.41L31.59 8l-5.66 5.66a1 1 0 0 0 1.41 1.41l6.37-6.36ZM0 9h33V7H0v2Z"
                        />
                    </svg>
                </NuxtLink>
            </section>
            <aside class="dashboard__platforms">
                <h2 class="h3">Platformy</h2>
                <div class="platforms-list">
                    <PlatformItem v-for="i in 5" :key="i" />
                </div>
                <NuxtLink to="/platforms" class="cta-link">
                    <span>Zobrazit vše</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="12"
                        fill="none"
                        viewBox="0 0 34 16"
                    >
                        <path
                            fill="currentColor"
                            d="M33.7 8.7a1 1 0 0 0 0-1.4L27.35.92a1 1 0 1 0-1.41 1.41L31.59 8l-5.66 5.66a1 1 0 0 0 1.41 1.41l6.37-6.36ZM0 9h33V7H0v2Z"
                        />
                    </svg>
                </NuxtLink>
            </aside>
        </main>
    </div>
</template>

<script>
import OfferItem from "./OfferItem.vue";
import PlatformItem from "./PlatformItem.vue";

export default {
    components: {
        OfferItem,
        PlatformItem,
    },
};
</script>

<style lang="scss" scoped>
.dashboard {
    display: flex;
    flex-direction: column;
    gap: 32px;

    &__main {
        display: flex;
        flex-direction: column;
        gap: 16px;

        @include lg {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 32px;
        }
    }

    &__ads,
    &__platforms {
        background: white;
        padding: 16px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        gap: 16px;

        .ads-list,
        .platforms-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
            background-color: $c-main-bg;
            padding: 10px;
            border-radius: 10px;

            &__item {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 16px;
                padding: 10px;
                border: 1px solid #ddd;
                background-color: $c-white;
                border-radius: 8px;
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

            &__name {
                flex-grow: 1;
                margin: 0;
            }

            &__status {
                color: #4caf50;
                font-weight: bold;
                margin-left: auto;
            }
        }
    }

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__filters {
        display: flex;
        gap: 8px;

        .filter-button {
            padding: 8px 16px;
            border: none;
            border-radius: 4px;
            background-color: #f0f0f0;
            color: #333;
            cursor: pointer;

            &.active {
                background-color: $c-primary;
                color: white;
            }
        }
    }

    .cta-link {
        display: flex;
        align-items: center;
        gap: 8px;
        color: #000;
        text-decoration: none;
        font-weight: 500;
        margin-top: 16px;

        &:hover {
            color: $c-primary;
        }

        svg {
            transition: transform 0.2s;
        }

        &:hover svg {
            transform: translateX(4px);
        }
    }
}
</style>

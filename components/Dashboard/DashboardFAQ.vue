<template>
    <div class="dashboardFAQ__base">
        <h3 class="d2">FAQ</h3>
        <div id="accordionGroup" class="dashboardFAQ__faqContainer">
            <div v-for="(item, i) in faqItems" :key="i" class="accordion__item">
                <h3 class="color-primary">
                    <button
                        type="button"
                        :aria-expanded="activeIndex === i"
                        :class="[
                            'accordion__trigger',
                            { active: activeIndex === i },
                        ]"
                        :aria-controls="`accordion-entry-${i + 1}`"
                        :id="`accordion-entry-${i + 1}`"
                        @click="toggleAccordion(i)"
                    >
                        <span class="accordion__triggerTitle introText">
                            {{ item.title }}
                            <span class="accordion__triggerIcon">
                                <svg
                                    :class="[
                                        'chevron',
                                        { rotate: activeIndex === i },
                                    ]"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 15L6 9H18L12 15Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </span>
                        </span>
                    </button>
                </h3>
                <div
                    :id="`accordion-entry-${i + 1}`"
                    role="region"
                    :aria-labelledby="`accordion-entry-${i + 1}`"
                    :class="[
                        'accordion__panel',
                        { 'accordion__panel--open': activeIndex === i },
                    ]"
                >
                    <p class="p">{{ item.content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const activeIndex = ref(null);

const toggleAccordion = (index) => {
    activeIndex.value = activeIndex.value === index ? null : index;
};

const faqItems = ref([
    {
        title: "Jak dobít prostředky?",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, itaque.",
    },
    {
        title: "Jak správně nastavit inzerát?",
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, consequatur?",
    },
    {
        title: "Jak získat více zákazníků?",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, officiis.",
    },
    {
        title: "Jak inzerovat?",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, perspiciatis!",
    },
]);
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_breakpoints.scss";
.dashboardFAQ {
    &__base {
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    &__faqContainer {
        border-radius: 32px;
        padding: 32px;
        border: 1px solid $c-slate;
        background: $c-primary-hover;
    }
}

.accordion {
    &__item {
        border-radius: 8px;
        background: $c-primary;
        overflow: hidden;
        margin-bottom: 16px;
    }

    &__trigger {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        background: $c-primary;
        color: $c-white;
        padding: 15px;
        border: none;
        cursor: pointer;
        outline: none;
        transition: background $d-short;
        font-size: 1.25rem;

        &Title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }

        &Icon {
            transition: transform 0.3s;

            svg {
                width: 30px;
                height: 30px;
                fill: $c-white;
                transition: transform 0.3s ease;
            }
        }

        &[aria-expanded="true"] .accordion__triggerIcon svg {
            transform: rotate(180deg);
        }
    }

    &__panel {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-in-out, padding 0.3s ease-in-out;
        background: $c-white;
        padding: 0 15px;

        &--open {
            padding: 15px;
            max-height: 500px;
        }
    }
}
</style>

<template>
    <section id="menu" aria-labelledby="menu-heading">
        <img src="/images/slider-left-leaf.png" alt="left-leat" id="m-left-leaf"/>
        <img src="/images/slider-right-leaf.png" alt="right-leat" id="m-right-leaf"/>
        <h2 id="menu-heading" class="sr-only">
            Cocktail Menu
        </h2>

        <nav class="cocktail-tabs" aria-label="Cocktail Navigation">
            <div v-for="(cocktail, index) in sliderLists">
                <button 
                @click="goToSlide(index)"
                :key="cocktail.id" 
                :class="[currentIndex == index ? 
                'text-wihte' : 
                'text-white-50 border-white-50']">
                {{ cocktail.name }}
                </button>
            </div>
        </nav>

        <div class="">
            <div class="arrows">
                <button class="text-left"
                    @click="goToSlide(currentIndex - 1)">
                    <span>{{ prevCocktail.name }}</span>
                    <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
                </button>

                <button class="text-left"
                 @click="goToSlide(currentIndex + 1)"
                >
                    <span>{{ nextCocktail.name }}</span>
                    <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
                </button>

                <div class="cocktail">
                    <img :src="currentCocktail.image" class="object-contain" />
                </div>

                <div class="recipe">
                    <div ref="contentRef" class="info">
                        <p>Recipe for:</p>
                        <p id="title">
                            {{ currentCocktail.name }}
                        </p>
                    </div>

                    <div class="details">
                        <h2>{{ currentCocktail.title }}</h2>
                        <p>{{ currentCocktail.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import { sliderLists } from '../constants';
import { ref } from 'vue';
import { gsap } from 'gsap';

const contentRef = ref(null);

export default {
    watch: {
        currentIndex(newVal, oldVal) {
            gsap.fromTo('#title', { opacity: 0 }, { opacity: 1, duration: 1 });

            gsap.fromTo('.cocktail img', 
                { opacity: 0, xPercent: -100 }, 
                { xPercent: 0, opacity: 1, duration: 1, ease: 'power1.inOut' }
            );

            gsap.fromTo('.details h2', 
                { opacity: 0, yPercent: 100 }, 
                { yPercent: 0, opacity: 100, ease: 'power1.inOut' }
            );

            gsap.fromTo('.details p', 
                { opacity: 0, yPercent: 100 }, 
                { yPercent: 0, opacity: 100, ease: 'power1.inOut' }
            );
        }
    },
    data() {
        return {
            totalCocktails: sliderLists.length,
            currentIndex: 0,
            contentRef,
            sliderLists
        }
    },
    computed: {
        
        currentCocktail() {
            return this.getCocktailAt(0);
        },
        prevCocktail() {
            return this.getCocktailAt(-1);
        },
        nextCocktail() {
            return this.getCocktailAt(1);
        }
    },
    methods: {
        getCocktailAt(indexOffset) {
            return sliderLists[(this.currentIndex + indexOffset + this.totalCocktails) % this.totalCocktails];
        },
        goToSlide(index) {
            const newIndex = (index + this.totalCocktails) % this.totalCocktails;
            this.currentIndex = newIndex;
        },

    }
}
</script>
<!-- <script setup>
import { sliderLists } from '../constants';
import { ref, computed } from 'vue';

var currentIndex = ref(0);
const contentRef = ref(null);

const totalCocktails = sliderLists.length;

const getCocktailAt = (indexOffset) => {
    return sliderLists[(currentIndex.value + indexOffset + totalCocktails) % totalCocktails]
}
const currentCocktail = computed(() => getCocktailAt(0));
const prevCocktail = computed(() => getCocktailAt(-1));
const nextCocktail = computed(() => getCocktailAt(1));

const goToSlide = (index) => {
    const newIndex = (index + totalCocktails) % totalCocktails;
    currentIndex.value = newIndex;
}
</script> -->
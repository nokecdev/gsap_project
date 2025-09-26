<template>
    <section id="cocktails" class="noisy">
        <img src="/images/cocktail-left-leaf.png"
        alt="l-leaf"
        id="c-left-leaf" />
        <img src="/images/cocktail-right-leaf.png"
        alt="r-leaf"
        id="c-right-leaf" />

        <div class="list">
            <div class="popular">
                <h2>Most popular cocktails:</h2>
                <ul v-for="cocktail in cocktailLists">
                    <li>
                        <div class="md:me-28">
                            <h3>{{ cocktail.name }}</h3>
                            <p>{{ cocktail.country }} | {{ cocktail.detail }}</p>
                        </div>
                        <span> - {{ cocktail.price }}</span>
                    </li>
                    
                </ul>
            </div>

            
            <div class="loved">
                <h2>Most popular mocktails:</h2>
                <ul v-for="cocktail in mockTailLists">
                    <li>
                        <div class="md:me-28">
                            <h3>{{ cocktail.name }}</h3>
                            <p>{{ cocktail.country }} | {{ cocktail.detail }}</p>
                        </div>
                        <span> - {{ cocktail.price }}</span>
                    </li>
                    
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
import { cocktailLists, mockTailLists } from '../constants';
import { gsap } from 'gsap/all';

const parallaxTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: '#cocktails',
        start: 'top 30%', //The top reaches 30% of the viewport
        end: 'bottom 80%', //Bottom of the screen reaches 80% of screen
        scrub: true
    }
}).from("#c-left-leaf", {
    x: -100, y: 100
}).from("#c-right-leaf", {
    x: 100, y: 100
})
</script>
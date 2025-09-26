<template>
    <div id="art">
        <div class="container mx-auto h-full pt-20">
            <h2>The ART</h2>
            <div class="content">
                <ul class="space-y-4 will-fade">
                    <li 
                    v-for="feature in goodLists"
                    class="flex items-center gap-2"
                    >
                        <img src="/images/check.png" alt="check" />
                        <p>{{ feature }}</p>
                    </li>
                </ul>

                <div class="cocktail-img">
                    <img 
                    src="/images/under-img.jpg"
                    alt="cocktail"
                    class="abs-center masked-img size-full object-contain"
                    />
                </div>

                <ul class="space-y-4 will-fade">
                    <li 
                    v-for="feature in featureLists"
                    class="flex items-center justify-start gap-2"
                    >
                        <img src="/images/check.png" alt="check" />
                        <p class="md:w-fit w-60">{{ feature }}</p>
                    </li>
                </ul>
            </div>

            <div class="masked-container">
                <h2 class="will-fade">Sip-Worty Perfection</h2>
                <div id="masked-content">
                    <h3>Made with Craft, Poured with Passion</h3>
                    <p>
                        This isn't just a drink. It's a carefully created moment made just for you.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { featureLists, goodLists } from '../constants';
import gsap from 'gsap';

export default {
    data() {
        return {
            featureLists, goodLists
        }
    },
    mounted() {
        const isMobile = window.innerWidth <= 767;
        const start = isMobile ? "top 20%" : "top top";

        const maskTl = gsap.timeline({
            scrollTrigger: {
                trigger: "#art",
                start,
                end: "bottom center",
                scrub: 1.5, //Smooth scroll control with sub-delay
                pin: true //Fixed in place
            }
        });

        maskTl.to('.will-fade', {
            opacity: 0,
            stagger: 0.2,
            ease: 'power1.inOut'
        })

        maskTl
            .to('.will-fade', { opacity: 0, stagger: 0.2, ease: 'power1.inOut', })
            .to('.masked-img', { 
                scale: 1.3, 
                maskPosition: 'center', 
                maskSize: '400%', 
                duration: 6, 
                ease: 'power1.inOut' 
            })
            .to('#masked-content', { 
                opacity: 1, 
                duration: 1, 
                ease: 'power1.in'
             })
    }
}
</script>
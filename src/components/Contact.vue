<template>
    <footer id="contact">
        <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
        <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />

        <div class="content">
            <h2>
                Where to Find Us
            </h2>
            <div>
                <h3>Visit Our Bar</h3>
            </div>
            <p>456, Raq blvd. #404, Los Angeles, CA 90210</p>

            <div>
                <h3>Contact Us</h3>
                <p>(06) 1234567</p>
                <p>asdf@nokecmec.com</p>
            </div>

            <div>
                <h3>Open Every Day</h3>
                <div v-for="time in openingHours">
                    <p>{{ time.day }} : {{ time.time }}</p>
                </div>
            </div>

            <div>
                <h3>Socials</h3>

                <div 
                v-for="social in socials"
                class="flex-center gap-5">
                    <a
                    :key="social.name"
                    :href="social.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="social.name"
                    >
                    <img :src="social.icon" />
                    </a>
                </div>
            </div>
        
        </div>
    </footer>
</template>

<script>
import { openingHours, socials } from '../constants/index';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

export default {
    mounted() {
        document.fonts.ready.then(() => {
            const titleSplit = SplitText.create("#contact h2", {type: 'word'});

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#contact',
                    start: 'top center'
                },
                ease: 'power1.inOut'
            })

            timeline.from(titleSplit.words, {
                opacity: 0, yPercent: 100, stagger: 0.02
            })
            .from('#contact h3, #contact p', {
                opacity: 0, yPercent: 100, stagger: 0.02
            })
            .to('#f-right-leaf', {
                y: '-50', duration: 1, ease: 'power1.inOut'
            })
            .to('#f-left-leaf', {
                y: '-50', duration: 1, ease: 'power1.inOut'
            }, '<') //Move together
        });
    },
    data() {
        return {
            socials,
            openingHours
        }
    }
}
</script>
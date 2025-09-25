<template>
<nav>
    <div>
        <a href="#home" class="flex items-center gap-2">
            <img src="/images/logo.png" alt="logo"></img>
            <p>Velvet Pour</p>
        </a>

        <ul v-for="link in navLinks">
            <li>
                <a :href="link.id">{{link.title}}</a>
            </li>
        </ul>
    </div>
</nav>
</template>

<script>
import { navLinks } from '../constants';
import { gsap } from 'gsap';

export default {
    mounted() {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top', //Bottom of navbar reaches the top of viewport
            }
        });

        navTween.fromTo('nav', {backgroundColor: 'transparent'}, {
            backgroundColor: "#000000",
            backdropFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut'
        });
    },
    data() {
        return {
            navLinks
        }
    }
}

</script>
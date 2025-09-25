import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);

const app = createApp({
})

app.use(gsap);

createApp(App).mount('#app')

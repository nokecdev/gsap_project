import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger, SplitText);

const app = createApp({
})

app.use(gsap);

createApp(App).mount('#app')

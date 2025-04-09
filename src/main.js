import { mount } from 'svelte'
import App from './App.svelte';
import { demo_song } from './templates.js';

const app = mount(App, {
    target: document.body,
    props: {
        song: demo_song
    }
});

export default app;

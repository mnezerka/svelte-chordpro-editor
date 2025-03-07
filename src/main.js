import { mount } from 'svelte'
import App from './App.svelte';

const song = `{title: In My Time of Dyin'}
{subtitle: Bob Dylan}

[Am]In my time of dying
[Am]I don't want nobody to mourn
[Am]All I want for you to do
Is [D]take my body [Am]home

{start_of_chorus}
[Am]Well, well, well, so I can die easy
Well, well, [D]well, so I can die [Am]easy
[Am]Well, well, well, so I can die easy
[D]Jesus gonna make up my [G]dy[G#]ing [Am]bed
{end_of_chorus}

Well, meet me Jesus, meet me
Meet me in the middle of the air
If these wings should fail to me
Lord, won't you meet me with another pair

Lord, in my time of dying
I don't want nobody to cry
All I want you to do
Is take me when I die
`

const app = mount(App, {
    target: document.body,
    props: {
        song
    }
});

export default app;

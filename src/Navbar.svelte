<script>
    import Menu from "./Menu.svelte"

    export let subtitle = "";
    export let on_new = () => {};
    export let on_open = () => {};
    export let on_save = () => {};
    export let on_save_as = () => {};

</script>
<nav class="no-print">
    <div class="title">
        <span class="main">ChordPro Editor</span>

        {#if subtitle.length > 0}
        <span class="sub">- {subtitle}</span>
        {/if}
    </div>

    <Menu
        {on_new}
        {on_open}
        {on_save}
        {on_save_as}
     />
</nav>

<style>
    nav {
        background-color: #3399ff;
        border-bottom: 1px solid #ccc;
    }

    .title {
        color: #ffffff;
        font-size: 20px;
        padding: 8px;
        font-family: Oswald;
    }

    .main {
        text-transform: uppercase;
    }

</style>


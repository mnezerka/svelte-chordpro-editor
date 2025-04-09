<script>
    import Menu from "./Menu.svelte"

    export let subtitle = "";

</script>
<nav class="no-print">
    <div class="title">
        <span class="main">ChordPro Editor</span>

        {#if subtitle.length > 0}
        <span class="sub">- {subtitle}</span>
        {/if}
    </div>

    <Menu {...$$props} />
</nav>

<style>
    nav {
        background-color: #2494cc;
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


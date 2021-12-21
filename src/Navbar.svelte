<script>
    import Menu from "./Menu.svelte"

    export let subtitle = "";
    export let on_new = () => {};
    export let on_open = () => {};
    export let on_save = () => {};
    export let on_save_as = () => {};
    export let on_tree = () => {};

</script>
<nav class="no-print">
    <div class="title">
        ChordPro Editor
        {#if subtitle.length > 0}
        - {subtitle}
        {/if}
    </div>
    <Menu
        {on_new}
        {on_open}
        {on_save}
        {on_save_as}
        {on_tree}
     />
</nav>

<style>
    nav {
        background-color: #383e52;
    }

	nav .title {
		color: #ffffff;
		text-transform: uppercase;
		font-size: 20px;
		font-weight: 150;
        padding: 16px;
	}

</style>


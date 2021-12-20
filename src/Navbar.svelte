<script>
    import Menu from "./Menu.svelte"

    export let on_open = () => {};
    export let on_new = () => {};

</script>
<nav class="no-print">
    <div class="title">ChordPro Editor</div>
    <Menu
        {on_open} {on_new}/>
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


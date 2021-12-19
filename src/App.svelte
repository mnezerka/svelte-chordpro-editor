<script>
	import Navbar from "./Navbar.svelte"
	import ChrodProPreview from "./ChordProPreview.svelte"

    export let song = "";

    let source = song;
</script>

<Navbar />
<main>
    <div class="editor">
        <textarea bind:value={source} class="no-print" />
    </div>

    <div class="preview">
        <ChrodProPreview {source} />
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: row;
        height: 100%;
    }

    .editor, .preview {
        flex-grow: 1;
        flex-basis: 0;
        padding: 5px;
    }

    textarea {
        width: 100%;
        height: 100%;
    }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
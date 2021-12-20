<script>
    import Navbar from "./Navbar.svelte"
    import ChrodProPreview from "./ChordProPreview.svelte"

    export let song = "";

    // this is chordpro source rendered in editor
    let source_editor = song;

    // this is chordpro source passed to preview, the reason
    // for this duplicate of source is debouncing - delayed
    // preview (not to redraw preview immediately after each change)
    let source_preview = "";
 
    // delay function execution to avoid too many updates
    //  during e.g. resizing window by mouse
    function debounce(func, delay) {
        let timer;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(timer);
            timer = setTimeout(() => func.apply(context, args), delay);
        };
    };

    const debounced_update_source = debounce(update_source, 300)

    // method to be called on each change of chordpro source in editor
    function update_source(new_source) {
        source_preview = new_source;
    }

    // this is a way how to react on change of `source_editor`
    $: debounced_update_source(source_editor)

</script>

<Navbar />
<main>
    <div class="editor no-print">
        <textarea bind:value={source_editor} class="no-print" />
    </div>

    <div class="preview">
        <ChrodProPreview source={source_preview} />
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
<script>
    import Navbar from "./Navbar.svelte"
    import ChrodProPreview from "./ChordProPreview.svelte"

    export let song = "";

    let file_input;

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

    function on_file_selected(e) {
        let f = e.target.files[0];
        let reader = new FileReader();
        reader.readAsText(f);
        reader.onload = e => {
            source_editor = e.target.result
        };
    }

    function on_new() {
        console.log("new file")
        source_editor = ""
        source_preview = ""
    }

    function on_open() {
        console.log("open file")
        file_input.click();
    }

</script>

<Navbar
    {on_open} {on_new} />

<main>
    <div class="editor no-print">
        <input style="display:none" type="file" accept=".txt" on:change={(e)=>on_file_selected(e)} bind:this={file_input} >
        <textarea bind:value={source_editor} class="no-print" />
    </div>

    <div class="preview">
        <ChrodProPreview source={source_preview} />
    </div>
</main>

<footer>
    Copyright 2021
</footer>

<style>
    main {
        display: flex;
        flex-direction: row;
        height: 100%;
        flex-grow: 1;
    }

    .editor, .preview {
        flex-grow: 1;
        flex-basis: 0;
        padding: 5px;
    }

    .editor {
        display: flex;
        flex-direction: column;
    }

    footer {
        background-color: #383e52;
        text-align: center;
        color: #ddd;
		text-transform: uppercase;
		font-weight: 150;
        padding: 16px;
    }

    textarea {
        flex-grow: 1;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
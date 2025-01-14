<script>
    import Navbar from "./Navbar.svelte"
    import ChrodProPreview from "./ChordProPreview.svelte"
    import {get_file_handle, get_new_file_handle, read_file, write_file} from "./utils.js"

    export let song = "";

    const has_fs_access = 'chooseFileSystemEntries' in window || 'showOpenFilePicker' in window;

    let show_tree = false;

    let file_handle;

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

    function on_new() {
        source_editor = ""
        source_preview = ""
    }

    async function on_open() {
        file_handle = await get_file_handle()

        try {
            let file = await file_handle.getFile()
            source_editor = await read_file(file)

        } catch(reason) {
            console.error("read failed: ", reason)
        }
    }

    async function on_save() {
        if (!file_handle) {
            // TODO return await app.saveFileAs();
            return
        }
        try {
            await write_file(file_handle, source_editor);
        } catch (ex) {
            const msg = 'Unable to save file';
            console.error(msg, ex);
            alert(msg);
        }
    }

    async function on_save_as() {
        if (!has_fs_access) {
            console.error("this browser does not support access to file system")
            return;
        }

        try {
            file_handle = await get_new_file_handle();
        } catch (ex) {
            if (ex.name === 'AbortError') {
                return;
            }
            const msg = 'An error occured trying to open the file.';
            console.error(msg, ex);
            alert(msg);
            return;
        }

        try {
            await write_file(file_handle, source_editor);
        } catch (ex) {
            const msg = 'Unable to save file.';
            console.error(msg, ex);
            alert(msg);
            return;
        }
    }

    function on_tree() {
        show_tree = !show_tree;
    }

</script>

<Navbar
    subtitle={file_handle && file_handle.name}
    {on_open}
    {on_new}
    {on_save}
    {on_save_as}
    {on_tree}
 />

<main>
    <div class="editor no-print">
        <textarea bind:value={source_editor} class="no-print"></textarea>
    </div>

    <div class="preview">
        <ChrodProPreview source={source_preview} {show_tree} />
    </div>
</main>

<footer class="no-print">
    Copyright 2024
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
    }

    .editor {
        display: flex;
        flex-direction: column;
        border-right: 1px solid #ccc;
    }

    footer {
        background-color: #383e52;
        text-align: center;
        color: #ddd;
		text-transform: lowercase;
		font-weight: 150;
        font-size: 13px;
        padding: 16px;
    }

    textarea {
        flex-grow: 1;
        border: none;
    }

    textarea:focus {
        outline: none;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>

<script>
    import Navbar from "./Navbar.svelte"
    import ChordProPreview from "./ChordProPreview.svelte"
    import ChordProCheatSheet from "./ChordProCheatSheet.svelte"
    import {get_file_handle, get_new_file_handle, read_file, write_file, normalize_line_endings} from "./utils.js"
    import {new_song} from "./templates.js"

    let { song = ''} = $props();

    const has_fs_access = 'chooseFileSystemEntries' in window || 'showOpenFilePicker' in window;

    let file_handle;

    // this is chordpro source rendered in editor
    let source_editor = $state(song);
    let source_preview = $state(song);
    let transpose_steps = $state(0);
    let show_cheatsheet = $state(false);

    let format = $state({
        title_align: 'left',
        color_title: false,
        color_chords: false
    })

    let view = $state({
        cheatsheet: false,
        show_artist: true,
        show_chords: true,
        show_comments: true,
        show_tabs: false,
        editor_monospaced: false
    })

    function on_new() {
        source_editor = new_song
    }

    async function on_open() {
        file_handle = await get_file_handle()

        try {
            let file = await file_handle.getFile()
            let file_content = await read_file(file)
            source_editor = normalize_line_endings(file_content);
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

    function on_transpose(steps) {
        transpose_steps = steps;
    }

    // toggle formatting bool attribute
    function on_format_toggle(property) {
        if (property in format) {
            format[property] = !format[property]
        }
    }

    // set formatting attribute
    function on_format_set(property, value) {
        if (property in format) {
            format[property] = value
        }
    }

    // toggle view bool attribute
    function on_view_toggle(property) {
        if (property in view) {
            view[property] = !view[property]
        }
    }



    var timer

    function delayedData(time, data, fn) {

        if (timer) {
            clearTimeout(timer)
        }

        timer = setTimeout(() => {
            fn(data)
        }, time);
    }

    $effect(() => {
        delayedData(1000, source_editor, (data) => {source_preview = data})
    })

</script>

<Navbar
    subtitle={file_handle && file_handle.name}
    format={format}
    view={view}
    {transpose_steps}
    {on_open}
    {on_new}
    {on_save}
    {on_save_as}
    {on_transpose}
    {on_format_toggle}
    {on_format_set}
    {on_view_toggle}
 />

<main>
    <div class="editor no-print">
        <textarea
            bind:value={source_editor}
            class="no-print {view.editor_monospaced ? 'editor-monospaced' : ''}">
        ></textarea>
        {#if view.cheatsheet}
        <ChordProCheatSheet />
        {/if}
    </div>

    <div class="preview">
        <ChordProPreview source={source_preview} transpose_steps={transpose_steps} format={format} view={view} />
    </div>
</main>

<footer class="no-print">
    BlueSoft &copy; {new Date().getFullYear()}
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
        background-color: #eee;
        text-align: center;
        color: #aaa;
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

    textarea.editor-monospaced {
        font-family: monospace;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>

<script>
    import Navbar from "./Navbar.svelte"
    import ChordProPreview from "./ChordProPreview.svelte"
    import {get_file_handle, get_new_file_handle, read_file, write_file} from "./utils.js"

    let { song = ''} = $props();

    const has_fs_access = 'chooseFileSystemEntries' in window || 'showOpenFilePicker' in window;

    let file_handle;

    // this is chordpro source rendered in editor
    let source_editor = $state(song);

    /*
    async function delayedData(time, data) {
        return new Promise((resolve) => {
            console.log('starting timer');
            setTimeout(() => {
                console.log("run after:", time);
                resolve(data); 
            }, time);
        })
    }

    let xyz = $derived(delayedData(300, source_editor))
    */

    function on_new() {
        source_editor = ""
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

    /* following could work for delayed data - to be implemented later
        {#await xyz}
        <div>awaiting</div>
        {:then source_preview}
        <ChordProPreview source={source_preview} />
        {/await}
    */

</script>

<Navbar
    subtitle={file_handle && file_handle.name}
    {on_open}
    {on_new}
    {on_save}
    {on_save_as}
 />

<main>
    <div class="editor no-print">
        <textarea
            bind:value={source_editor}
            class="no-print">
        ></textarea>
    </div>

    <div class="preview">
        <ChordProPreview source={source_editor} />
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

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>

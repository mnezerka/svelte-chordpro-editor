<script>
    import jschordpro from 'js-chordpro';
    import Tree from './ChordProPrevewTree.svelte'

    export let source = "";

    let err = null;
    let show_tree = false;
    let doc = null;

    function to_html(song_chordpro) {
        let result = ""
        try {
            doc = jschordpro.parse(song_chordpro + "\n")
            result = jschordpro.to_html(doc);
            err = null;
        } catch (e) {
            err = e.toString();
        }


        return result;
    }

</script>

<div class="preview">
    <div class="toolbar no-print">
        <button on:click={() => show_tree = !show_tree}>Tree</button>
    </div>
    {#if err !== null}
        <div class="error">
            {err}
        </div>
    {/if}
    
    {@html to_html(source)}

    {#if show_tree && doc !== null}
        <div class="no-print tree">
            <Tree root={doc} />
        </div>
    {/if}
</div>

<style>

    .tree {
        border-top: 1px solid #c0c0c0;
        padding-top: 10px;
    }

    .toolbar button {
        height: auto;
        padding: 4px;
        margin: 0;
    }

    :global(.jschordpro-song h1) {
        font-size: 24px;
    }

    :global(.jschordpro-song h2) {
        font-size: 18px;
    }

    .error {
        color: #ff0000;
        unicode-bidi: embed;
        font-family: monospace;
        white-space: pre;
    }

    :global(.jschordpro-song) {
        width: 100%;
    }

    :global(.jschordpro-song table) {
        border-collapse: collapse;
    }


    :global(.jschordpro-song td) {
        text-align: left;
        font-size: 14px;
        padding-left: 0px;
        padding-right: 0px;
    }

    :global(.jschordpro-song .jschordpro-chorus, .jschordpro-song .jschordpro-verse) {
        margin-bottom: 20px;
    }


    :global(.jschordpro-song .jschordpro-chorus) {
        margin-left: 20px;
    }

    :global(.jschordpro-song .jschordpro-chord) {
        font-weight: bold;
    }
</style>
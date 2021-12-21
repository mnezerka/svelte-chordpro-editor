<script>
    import jschordpro from 'js-chordpro';
    import Tree from './ChordProPrevewTree.svelte'

    export let source = "";
    export let show_tree = false;

    let err = null;
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

    :global(.jschordpro-song h1) {
        font-size: 24px;
        margin-top: 0px;
        font-weight: normal;
        margin-bottom: 10px;
    }

    :global(.jschordpro-song h2) {
        font-size: 18px;
        font-weight: normal;
        margin-top: 0;
        margin-bottom: 10px;
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
        padding: 0;
    }

    :global(.jschordpro-song .jschordpro-chorus, .jschordpro-song .jschordpro-verse) {
        margin-bottom: 20px;
    }


    :global(.jschordpro-song .jschordpro-chorus) {
        margin-left: 30px;
    }

    :global(.jschordpro-song .jschordpro-chord) {
        font-weight: bold;
        padding-top: 3px;
    }
</style>
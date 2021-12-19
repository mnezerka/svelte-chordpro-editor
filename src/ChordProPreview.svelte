<script>
    import jschordpro from 'js-chordpro';

    export let source = "";
    let err = null;

    function to_html(song_chordpro) {

        let result = ""
        try {
            let doc = jschordpro.parse(song_chordpro + "\n")
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
</div>

<style>

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
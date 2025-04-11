<script>
    import jschordpro from 'js-chordpro';

    let { source = '', transpose_steps = 0, format = {}} = $props()

    // version of $derive for more complex expressions
    let rendered = $derived.by(() => {
        let result = {
            html: '',
            err: null
        }

        try {
            let doc = jschordpro.parse(source)

            if (transpose_steps != 0) {
                jschordpro.transpose(doc, transpose_steps)
            }

            result.html = jschordpro.to_html(doc);
        } catch (e) {
            result.err = e.toString();
        }

        return result
    })

    function get_class() {
        let result = '';

        result += 'meta-' + format.title_align + ' ';

        if (format.color_title === true) {
            result += 'color-title ';
        }

        if (format.color_chords === true) {
            result += 'color-chords';
        }

        return result;
    }

</script>

<div class="preview">
    {#if rendered.err !== null}
        <div class="error">
            {rendered.err}
        </div>
    {/if}

    <div class="{get_class()}">
    {@html rendered.html}
    </div>
</div>

<style>

    .preview {
        position: relative;
    }

    :global(.jschordpro-song .header) {
        margin-bottom: 30px;
    }

    :global(.jschordpro-song h1) {
        font-size: 20px;
        margin-top: 0px;
        font-weight: bold;
        margin-bottom: 10px;
        text-align: --title-align;
    }

    :global(.meta-right .jschordpro-song h1), :global(.meta-right .jschordpro-song h2) {
        text-align: right;
    }

    :global(.meta-center .jschordpro-song h1), :global(.meta-center .jschordpro-song h2) {
        text-align: center;
    }

    :global(.color-title .jschordpro-song h1) {
        color: #0065a2;
    }

    :global(.jschordpro-song h2) {
        font-size: 16px;
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

    :global(.jschordpro-song .chorus, .jschordpro-song .verse) {
        margin-bottom: 20px;
    }


    :global(.jschordpro-song .chorus) {
        margin-left: 30px;
    }

    :global(.jschordpro-song .line-chords) {
        height: 1em;
    }

    :global(.jschordpro-song .chord) {
        font-weight: 900;
        padding-top: 3px;
        padding-right: 5px; 
    }

    :global(.color-chords .jschordpro-song .chord) {
        color: #0065a2;
    }

</style>

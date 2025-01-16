<script>
    import jschordpro from 'js-chordpro';

    let { source = ''} = $props()

    const steps = [
        {id: -6, text: '-6'},
        {id: -5, text: '-5'},
        {id: -4, text: '-4'},
        {id: -3, text: '-3'},
        {id: -2, text: '-2'},
        {id: -1, text: '-1'},
        {id: 0, text: 'no transposition'},
        {id: 1, text: '+1'},
        {id: 2, text: '+2'},
        {id: 3, text: '+3'},
        {id: 4, text: '+4'},
        {id: 5, text: '+5'},
        {id: 6, text: '+6'}
    ];

    let s = $state({
        transposeStep: 0,
    })

    // version of $derive for more complex expressions
    let rendered = $derived.by(() => {
        let result = {
            html: '',
            err: null
        }

        try {
            let doc = jschordpro.parse(source)

            if (s.transposeStep != 0) {
                jschordpro.transpose(doc, s.transposeStep)
            }

            result.html = jschordpro.to_html(doc);
        } catch (e) {
            result.err = e.toString();
        }

        return result

    })


</script>

<div class="preview">

    <div class="transpose">
        <form onsubmit={(e) => e.preventDefault()}>
            <select bind:value={s.transposeStep} >
            {#each steps as step}
            <option value={step.id}>{step.text}</option>
            {/each}

            </select>
        </form>
    </div>

    {#if rendered.err !== null}
        <div class="error">
            {rendered.err}
        </div>
    {/if}

    {@html rendered.html}
</div>

<style>

    .preview {
        position: relative;
    }

    .transpose {
        position: absolute;
        top: 4px;
        right: 4px;
    }


    :global(.jschordpro-song .header) {
        margin-bottom: 15px;
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

    :global(.jschordpro-song .chorus, .jschordpro-song .verse) {
        margin-bottom: 20px;
    }


    :global(.jschordpro-song .chorus) {
        margin-left: 30px;
    }

    :global(.jschordpro-song .chord) {
        font-weight: bold;
        padding-top: 3px;
        padding-right: 5px; 
    }
</style>

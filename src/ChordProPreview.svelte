<script>
    import jschordpro from 'js-chordpro';

    let { source = ''} = $props()

    console.log('source', source)

    let transposeStep = $state(0);

    let err = null;
    let doc = null;

    let steps = $state([
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
    ]);

    //function to_html(song_chordpro) {

    let result = ""

    try {
        doc = jschordpro.parse(source)

        if (transposeStep != 0) {
            jschordpro.transpose(doc, transposeStep)
        }

        result = jschordpro.to_html(doc);
        console.log(result)
        err = null;
    } catch (e) {
        err = e.toString();
        console.log(err)
    }


</script>

<div class="preview">

    <div class="transpose">
        <form onsubmit={(e) => e.preventDefault()}>
            <select bind:value={transposeStep} >
            {#each steps as step}
            <option value={step.id}>{step.text}</option>
            {/each}

            </select>
        </form>
    </div>

    {#if err !== null}
        <div class="error">
            {err}
        </div>
    {/if}

    {@html result}

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

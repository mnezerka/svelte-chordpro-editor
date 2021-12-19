<script>
    //import ChordSheetJS from 'chordsheetjs';
    //const ChordSheetJS = require('chordsheetjs');
    //var ChordSheetJS = require('chordsheetjs').default;

    //console.log(ChordSheetJS);
    import ChordPro from 'js-chordpro';
    //import {FormatterAscii} from 'js-chordpro/dist/FormatterAscii';

    //console.log(FormatterAscii);

    console.log(ChordPro);

    //console.log(ChordSheetJS);
    
    //var {FormatterAscii} = require('js-chordpro/dist/FormatterAscii');

    let source = `
{title: Song title}

[C]Hello, this is first verse
    `;

    function to_html(song_chordpro) {
        console.log("here", song_chordpro);

        // tokenize and parse song into in-memory song document structure
        const song_tokens = ChordPro.Tokenizer.tokenize(song_chordpro)
        console.log("tokens:", song_tokens);

        const song_doc = ChordPro.Parser.parse(song_tokens)
        console.log("doc:", song_doc);

        // create instance of ascii formatter
        //var formatterAscii = new ChordPro.FormatterAscii();

        // write ascii representation to console
        //const song_ascii = ChordPro.FormatterAscii.processSong(song_tokens);
        const song_html = ChordPro.FormatterHtml.processSong(song_doc);
        return song_html;
    }

</script>

<div class="preview">

    <textarea bind:value={source} class="no-print" />

    {@html to_html(source)}

</div>

<style>

    textarea {
        width: 90%;
        height: 200px;
    }
</style>

<div class="cheatsheet">

<h1>ChordPro Cheat Sheet</h1>

<p><b>Title</b> of the song:</p>
<pre>
{`{title: Song title}`}
</pre>

<p><b>Sub Title</b> - additional (less important) title of the song:</p>
<pre>
{`{subtitle: Song subtitle}`}
</pre>

<p><b>Author</b> of the song:</p>
<pre>
{`{author: Bob Dylan}`}
</pre>

<p><b>Chorus</b> is text between <i>start</i> and <i>end</i> identifiers (no empty lines allowed). </p>
<pre>
{`{start_of_chorus}
First line of chorus
Second line of chorus
{end_of_chorus}`}
</pre>

or

<pre>
{`{soc}
First line of chorus
Second line of chorus
{eoc}`}
</pre>

<p><b>Chords</b> are inserted into the text between brackets <i>[</i> and <i>]</i>
It is important to start each chord with capital letter to keep your text
machine readable and benefit from additional functionality (e.g.
transpositions). See example of verse with major and minor chords:</p>
<pre>
{`[Am]In my time of dying
[Am]I don't want nobody to mourn
[Am]All I want for you to do
Is [D]take my body [Am]home
`}
</pre>



</div>

<style>
.cheatsheet {
    background-color: #eeeeee;
    padding: 1em;
    overflow: auto;
    flex-grow: 0.1;
    max-height: 30%;
}
h1 {
    font-weight: bold;
    font-size: 18px;
}

p {
    margin-top: 25px;
    margin-bottom: 5px;
}

pre {
}

</style>

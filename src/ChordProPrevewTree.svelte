<script>
    export let root = null;
    export let level = 0;

    let text = "";
    let children = [];
    let expanded = level < 2;  // by default - expand first two levels

    // following statement needs to be "reactive" to react on changes
    // of root property
    $: if (root !== null) {
        // default text to show in tree
        text = root.type;

        if (root.type === "chordpro") {
            children = [root.header, root.content]

        } else if (root.type === "header") {
            text = "header: " 
            children = [
                { type: "leave", label: "title", value: root.title}, 
                { type: "leave", label: "subtitle", value: root.subtitle},
                { type: "leave", label: "artist", value: root.artist},
            ]

        } else if (root.type === "content") {
            children = root.parts

        } else if (root.type === "verse" || root.type === "chorus") {
            children = root.lines

        } else if (root.type === "row") {
            children = root.children

        } else if (root.type === "chord" || root.type === "text") {
            text = root.type + ": " + root.value

        } else if (root.type === "leave") {
            text = root.label + ": " + root.value;
        }

        if (children.length === 0) {
            expanded = true;
        }
    }

</script>

{#if root}
    <div class="label" role="button" on:click={() => {if (children.length === 0) { expanded = true } else { expanded = !expanded}}} class:expanded class:collapsed={!expanded}>{text}</div>
    <ul>
        {#if children.length > 0 && expanded}
            {#each children as root}
                <li><svelte:self {root} level={level + 1} /></li>
            {/each}
        {/if}
    </ul>
{/if}

<style>
    .label {
        font-size: 14px;
    }

    ul {
        padding-inline-start: 20px;
        margin-block-start: 0;
        margin-block-end: 0;
        /*list-style-type: none;*/
    }

    .expanded {
        color: black;
    }
    .collapsed {
        color: blue;
    }
    .expanded:hover, .collapsed:hover {
        background-color: #e0e0e0;
    }

</style>

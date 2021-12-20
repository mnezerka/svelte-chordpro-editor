<script>
    export let on_new = () => {};
    export let on_open = () => {};
    export let on_save = () => {};

    let file_hidden = true;

</script>

<nav class="menu">
    <div class="menu-container">
        <button class="menu-top" on:click={() => { file_hidden = !file_hidden}}>File</button>
        <div class="menu-item-container" class:hidden={file_hidden}>
            <button on:click={() => {file_hidden = true; on_new()}} >New</button>
            <button on:click={() => {file_hidden = true; on_open()}} >Open..</button>
            <button on:click={() => {file_hidden = true; on_save()}} >Save</button>
        </div>
    </div>
</nav>

<style>
    .menu {
        color: #fff;
    }

    .hidden {
        display: none;
    }

    .menu-container button {
        border: 0;
        color: inherit;
        cursor: pointer;
        font-size: 16px;
    }

    .menu-container > button {
        background-color: inherit;
        color: inherit;
        min-width: 48px;
        padding: 4px 16px;
    }

    .menu-item-container {
        background-color: #666;
        box-shadow: 0 8px 16px 0 rgb(0 0 0 / 20%);
        min-width: 180px;
        position: absolute;
        z-index: 1;
    }

    .menu-container .menu-item-container button {
        /*background-color: var(--app-menu-bg);*/
        background-color: inherit;
        color: #fff;
        display: block;
        padding: 10px;
        text-align: left;
        width: 100%;
    }
    .menu-container .menu-item-container button:hover {
        background-color: #333;
    }


</style>
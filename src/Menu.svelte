<script>
    export let on_new = () => {};
    export let on_open = () => {};
    export let on_save = () => {};
    export let on_save_as = () => {};

    let file_hidden = true;

    let top_item_id = null;

    function on_top_item_click(id) {
        // if user clicked on top item with expanded dropdown
        if (top_item_id === id) {
            top_item_id = null;
        } else {
            // expand dropdown for clicked item
            top_item_id = id;
        }
    }

    function on_item_click(callback) {
        top_item_id = null;
        callback();
    }

</script>

<nav class="menu">
    <div class="menu-container">
        <button class="menu-top" on:click={() => { on_top_item_click("file");}}>File</button>
        <div class="menu-item-container" class:hidden={top_item_id !== "file"}>
            <button on:click={() => {on_item_click(on_new)}} >New</button>
            <button on:click={() => {on_item_click(on_open)}} >Open..</button>
            <button on:click={() => {on_item_click(on_save)}} >Save</button>
            <button on:click={() => {on_item_click(on_save_as)}} >Save as..</button>
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

    .menu-container {
        display: inline-block;
        position: relative;
    }

    .menu-container button {
        border: 0;
        color: inherit;
        cursor: pointer;
        font-size: 14px;
        text-align: left;
        padding-left: 8px;
        padding-top: 4px; 
        padding-bottom: 4px; 
        padding-right: 4px;
    }

    .menu-container > button {
        background-color: inherit;
        color: inherit;
        min-width: 48px;
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
        text-align: left;
        width: 100%;
    }
    .menu-container .menu-item-container button:hover {
        background-color: #333;
    }


</style>

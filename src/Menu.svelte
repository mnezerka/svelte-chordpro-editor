<script>
    export let transpose_steps = 0;
    export let format = {};
    export let view = {};
    export let on_new = () => {};
    export let on_open = () => {};
    export let on_save = () => {};
    export let on_save_as = () => {};
    export let on_transpose = () => {};
    export let on_format_toggle = () => {};
    export let on_format_set = () => {};
    export let on_view_toggle = () => {};

    let top_item_id = null;

    const steps = [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6];

    function on_top_item_click(id) {
        // if user clicked on top item with expanded dropdown
        if (top_item_id === id) {
            top_item_id = null;
        } else {
            // expand dropdown for clicked item
            top_item_id = id;
        }
    }

    function on_item_click(callback, param, param2) {
        top_item_id = null;
        callback(param, param2);
    }

    function genericClickOutside(node) {
        const handleClick = (event) => {
            if (!node.contains(event.target)) {
                node.dispatchEvent(new CustomEvent('outclick'));
            }
        };

        document.addEventListener('click', handleClick, true);

        return {
            destroy() {
                document.removeEventListener('click', handleClick, true);
            }
        };
    }

    const on_click_outside = () => {
        top_item_id = null;
    }

    function format_transp_steps(steps, zero_str) {
        if (steps < 0) {
            return '-' + steps
        } else if (steps > 0) {
            return '+' + steps
        }

        if (zero_str !== undefined) {
            return zero_str
        }

        return 'no transposition'
    }

    function format_transp_menu_item(steps) {
        return format_menu_item(format_transp_steps(steps), steps == transpose_steps)
    }

    function format_transp_menu_root() {
        let result = 'Transpose'
        let steps_str = format_transp_steps(transpose_steps, '');
        if (steps_str) {
            result += ' (' + steps_str + ')';
        }
        return result
    }

    function format_menu_item(title, checked) {
        let result = title;
        if (checked) {
            result += ' \u2713';
        }
        return result;
    }

</script>

<nav class="menu" use:genericClickOutside on:outclick={() => on_click_outside()}>
    <div class="menu-container">
        <div class="dropdown">
            <button class="menu-top" on:click={() => { on_top_item_click("file");}}>File</button>
            <div class="menu-item-container" class:hidden={top_item_id !== "file"}>
                <button on:click={() => {on_item_click(on_new)}} >New</button>
                <button on:click={() => {on_item_click(on_open)}} >Open..</button>
                <button on:click={() => {on_item_click(on_save)}} >Save</button>
                <button on:click={() => {on_item_click(on_save_as)}} >Save as..</button>
            </div>
        </div>
        <div class="dropdown">
            <button class="menu-top" on:click={() => { on_top_item_click("transpose");}}>{format_transp_menu_root()}</button>
            <div class="menu-item-container" class:hidden={top_item_id !== "transpose"}>
                {#each steps as s}
                    <button on:click={() => {on_item_click(on_transpose, s)}} >{format_transp_menu_item(s)}</button>
                {/each}
            </div>
        </div>
        <div class="dropdown">
            <button class="menu-top" on:click={() => { on_top_item_click("format");}}>Format</button>
            <div class="menu-item-container" class:hidden={top_item_id !== 'format'}>
                <button on:click={() => {on_item_click(on_format_set, 'title_align', 'left')}} >{format_menu_item('Title Left', format.title_align == 'left')}</button>
                <button on:click={() => {on_item_click(on_format_set, 'title_align', 'center')}} >{format_menu_item('Title Center', format.title_align == 'center')}</button>
                <button on:click={() => {on_item_click(on_format_set, 'title_align', 'right')}} >{format_menu_item('Title Right', format.title_align == 'right')}</button>
                <hr>
                <button on:click={() => {on_item_click(on_format_toggle, 'color_title')}} >{format_menu_item('Color Title', format.color_title)}</button>
                <button on:click={() => {on_item_click(on_format_toggle, 'color_chords')}} >{format_menu_item('Color Chords', format.color_chords)}</button>
            </div>
        </div>

        <div class="dropdown">
            <button class="menu-top" on:click={() => { on_top_item_click("view");}}>View</button>
            <div class="menu-item-container" class:hidden={top_item_id !== 'view'}>
                <button on:click={() => {on_item_click(on_view_toggle, 'cheatsheet')}} >{format_menu_item('ChordPro Cheat Sheet', view.cheatsheet)}</button>
            </div>
        </div>

        <div class="dropdown">
            <button class="menu-top" on:click={() => { on_top_item_click("help");}}>Help</button>
            <div class="menu-item-container" class:hidden={top_item_id !== 'help'}>
                <a href="https://www.chordpro.org/chordpro/">ChordPro Format</a>
                <a href="https://github.com/mnezerka/svelte-chordpro-editor">Github Repository</a>
            </div>
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

    .dropdown {
        float: left;
    }

    .menu-container button {
        border: 0;
        color: inherit;
        background-color: inherit;
        cursor: pointer;
        font-size: 14px;
        text-align: left;
        padding-left: 8px;
        padding-top: 4px;
        padding-bottom: 4px;
        padding-right: 4px;
    }

    .menu-container .menu-item-container hr {
        height: 1px;
        display: block;
        border: 0;
        border-top: 1px solid #ddd;
    }

    .menu-container .menu-item-container a {
        border: 0;
        display: block;
        width: 100%;
        color: black;
        cursor: pointer;
        font-size: 14px;
        padding-left: 8px;
        padding-top: 4px;
        padding-bottom: 4px;
        padding-right: 4px;
    }
    .menu-item-container {
        background-color: #fff;
        box-shadow: 0 8px 16px 0 rgb(0 0 0 / 20%);
        min-width: 180px;
        position: absolute;
        z-index: 1;
    }

    .menu-container .menu-item-container button {
        background-color: inherit;
        color: #000;
        display: block;
        text-align: left;
        width: 100%;
    }

    .menu-container .menu-item-container button:hover,
    .menu-container .menu-item-container a:hover {
        background-color: #eee;
    }

</style>

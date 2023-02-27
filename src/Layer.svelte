<script>
    import { level, max_level } from "./stores.js";
    import { setContext, getContext, hasContext } from "svelte";
    export let layer_level = null;

    if (layer_level == null) {
        layer_level = 0;
        if (hasContext("next_level")) {
            layer_level = parseInt(getContext("next_level"));
        }
    }

    if (typeof layer_level == "string") {
        layer_level = parseInt(layer_level);
    }
    setContext("next_level", layer_level + 1);

    if (layer_level > parseInt($max_level)) {
        max_level.set(layer_level + 1);
    }

    let show;
    $: show = parseInt($level) >= layer_level;
</script>

{#if show}
    <slot name="body" />
{:else}
    <div class="summary">
        <slot name="summary" />
    </div>
{/if}

{#if layer_level == 0}
    <br />
    <br />
{/if}

<style>
    .summary {
        display: inline;
        color: var(--muted-color);
        transition: color .175s ease-in-out;
    }

    .summary:hover {
        color: var(--primary-hover);
    }
</style>

<script>
    import { fade } from 'svelte/transition';
</script>

<p in:fade="{{ duration: 400 }}" class="headings">
    <slot />
</p>

<style>
    p {
        display: inline;
        color: inherit;
        /* background-color: rgba(255,255,0,0); */
    }
</style>

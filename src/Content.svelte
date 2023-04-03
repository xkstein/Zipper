<script>
    import { fade } from 'svelte/transition';
</script>

<span in:fade="{{ duration: 400 }}" class="content-body">
    <slot />
</span>

<style>
    .content-body {
        color: inherit;
    }
</style>
<script>
    import { level, max_level } from "../stores.js";
    import "../app.css";
</script>

<main>
    <div class="container">
        <slot />
    </div>
    <footer>
        <div class="container center-child">
            <div class="input-container">
                <input
                    type="range"
                    min="0"
                    max={$max_level}
                    id="levelset"
                    bind:value={$level}
                />
            </div>
        </div>
    </footer>
</main>

<style>
    main {
        margin-bottom: 10vh;
    }

    footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 10vh;
    }

    .center-child {
        display: flex;
        justify-content: center;
    }

    .input-container {
        flex: 1;
        max-width: 700px;

        display: flex;
        justify-content: center;
        padding: 0.5rem;
        border-radius: 0.5rem;
        background-color: var(--code-background-color);
    }

    @media only screen and (max-width: 992px) {
        .input-container {
            max-width: 576px;
        }
    }

    @media only screen and (max-width: 576px) {
        .center-child {
            width: 100%;
            height: 100%;
            max-width: none;
            padding: 0;
        }
        .input-container {
            width: 100%;
            height: 100%;
            padding: 0 2rem;
        }
    }

    input[type="range"] {
        margin: 0;
        align-self: center;
        flex: 1;
    }
</style>

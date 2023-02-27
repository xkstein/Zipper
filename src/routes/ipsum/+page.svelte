<script>
    import { level, max_level } from "../../stores";
    import Layer from "../../Layer.svelte";
    import Content from "../../Content.svelte";
    import "@picocss/pico";
    import "../../app.css";

    max_level.set(3);
</script>

<main>
    <div>
        <h1>Lorem ipsum dolor sit amet</h1>

        <Layer>
            <Content slot="body">
                <h3>
                    Phasellus justo nulla, sodales sit amet dolor laoreet,
                    sollicitudin faucibus turpis.
                </h3>
                <Layer>
                    <Content slot="body">
                        Aliquam scelerisque laoreet tellus, vitae lacinia diam
                        feugiat eget. Maecenas <b>libero felis</b>, vestibulum
                        eget eleifend molestie, venenatis id justo. Ut auctor
                        leo a elementum pulvinar. Phasellus ultrices lacinia
                        eros, a interdum enim facilisis iaculis.
                        <Layer>
                            <Content slot="body">
                                <h4>
                                    Integer interdum convallis mi id egestas.
                                </h4>
                                Nunc efficitur non justo et vestibulum. Fusce tempus
                                ipsum ultricies tortor egestas, eget efficitur arcu
                                consequat. Sed eget lorem quis tortor rutrum accumsan
                                non tempus leo. Sed auctor viverra diam, quis tempus
                                ante consectetur ut.
                                <Layer>
                                    <Content slot="body">
                                        Vivamus accumsan odio tortor, id
                                        scelerisque diam tempus nec. Duis non
                                        lorem non magna sollicitudin tempus
                                        suscipit in dui. Nunc condimentum a
                                        turpis quis viverra.
                                    </Content>
                                    <Content slot="summary"
                                        >Nulla facilisi.</Content
                                    >
                                </Layer>
                            </Content>
                            <Content slot="summary"
                                >Proin quis feugiat nulla.</Content
                            >
                        </Layer>
                    </Content>
                    <Content slot="summary">
                        Phasellus vulputate lorem massa, non rhoncus ante
                        faucibus sit amet.
                    </Content>
                </Layer>
            </Content>
        </Layer>

        <Layer>
            <Content slot="body">
                <h3>Sed at justo at justo gravida convallis.</h3>
                <Layer>
                    <Content slot="body">
                        Proin vehicula leo eros, quis iaculis leo ornare at.
                        Pellentesque sagittis nisl in diam aliquet rhoncus.
                        Curabitur at mollis ligula.
                        <Layer>
                            <Content slot="body">
                                Nam placerat urna quis dui tempor porta. Donec
                                eu enim porta, Praesent pharetra posuere elit,
                                et blandit lorem facilisis at. Pellentesque vel
                                dignissim magna.
                                <Layer>
                                    <Content slot="body">
                                        Morbi consectetur ipsum et odio
                                        volutpat, ac vulputate leo pellentesque.
                                        Fusce sit amet consectetur lacus, ut
                                        imperdiet mauris.
                                    </Content>
                                </Layer>
                            </Content>
                            <Content slot="summary"
                                >feugiat nunc sed, fringilla metus.
                            </Content>
                        </Layer>
                    </Content>
                    <Content slot="summary">Aenean non suscipit nulla.</Content>
                </Layer>
            </Content>
            <Content slot="summary" />
        </Layer>

        <Layer>
            <Content slot="body">
                <h3>
                    Vivamus facilisis lorem nisi, nec mollis sapien tristique
                    ut.
                </h3>
                <Layer>
                    <Content slot="body">
                        <h4>
                            Pellentesque rhoncus risus massa, eget vehicula elit
                            vehicula eget.
                        </h4>
                        Vestibulum luctus diam sit amet porta pulvinar. Mauris sollicitudin
                        turpis vitae nisl porttitor, quis hendrerit purus euismod.
                        Vivamus at erat a sapien posuere facilisis auctor vel eros.
                        Etiam at malesuada ex. Suspendisse in venenatis neque.
                        <Layer>
                            <Content slot="body">
                                Sed et odio leo. Vestibulum a nibh posuere,
                                malesuada libero ac, convallis erat. Sed velit
                                augue, vehicula porttitor euismod eget, vehicula
                                in velit. Aenean purus libero, sagittis et justo
                                id, feugiat dictum libero.
                            </Content>
                            <Content slot="summary">
                                Interdum et malesuada fames ac ante ipsum primis
                                in faucibus.
                            </Content>
                        </Layer>
                    </Content>
                    <Content slot="summary"
                        >Quisque viverra eu turpis a suscipit.
                    </Content>
                </Layer>
            </Content>
            <Content slot="summary" />
        </Layer>
    </div>
</main>

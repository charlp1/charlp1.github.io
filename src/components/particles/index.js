import React from 'react';

class Particles extends React.Component {
    constructor(props) {
        super(props);

        this.canvas = null;
        this.particles = [];
    }

    componentDidMount() {
        const { random, cos, PI } = Math;
        const { canvas } = this;
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        function Particle({
            x,
            y,
            vx,
            vy,
            size,
            color = '#FFFFFF',
            opacity,
            opacityDelta = -0.003,
            angle = 1,
        }) {
            function reset() {
                x = random() * width;
                y = -5;
                opacity = (random() * 0.5);
                vx = 0;
                vy = random() * 0.5;
            }

            this.update = () => {
                if (opacity <= 0) {
                    opacityDelta = 0.003;
                } else if (opacity >= 1) {
                    opacityDelta = -0.003;
                }

                opacity += opacityDelta;

                if (y >= height) {
                    reset();
                }

                angle += 1;

                if (angle > 360) {
                    angle = 1;
                }

                x += cos((PI / 180) * angle) * (0.05 + vx);
                y += vy;
            };

            this.draw = () => {
                ctx.globalAlpha = opacity;
                ctx.fillStyle = color;
                ctx.fillRect(x, y, size, size);
            };
        }

        const createParticle = () => {
            this.particles.push(
                new Particle({
                    x: random() * width,
                    y: -5,
                    vx: 0,
                    vy: random() * 0.5,
                    size: random() * 2,
                    opacity: (random() * 0.5),
                }),
            );
        };

        function initParticles() {
            let i = 100;

            while (i) {
                setTimeout(
                    createParticle,
                    i * 100,
                );
                i -= 1;
            }

            i = undefined;
        }

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            this.particles.forEach(
                (particle) => {
                    particle.update();
                    particle.draw();
                },
            );

            requestAnimationFrame(render);
        };

        window.addEventListener(
            'resize',
            () => {
                width = canvas.width = window.innerWidth;
                height = canvas.height = window.innerHeight;
            },
        );

        initParticles();
        render();
    }

    render() {
        return (
            <canvas ref={(canvas) => { this.canvas = canvas; }}>
            </canvas>
        );
    }
}

export default Particles;

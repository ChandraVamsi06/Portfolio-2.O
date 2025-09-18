const canvas = document.getElementById('starfield-canvas');
    const ctx = canvas.getContext('2d');

    // --- Configuration ---
    const starColors = ['#FFC000', '#D71920'];
    const numStars = 800;
    const speed = 2;
    let stars = [];

    let centerX, centerY;
    let mouseX = 0, mouseY = 0;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        centerX = canvas.width / 2;
        centerY = canvas.height / 2;
    }
    resizeCanvas();

    class Star {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.z = Math.random() * canvas.width;
            this.x = (Math.random() - 0.5) * canvas.width * 2;
            this.y = (Math.random() - 0.5) * canvas.height * 2;
            this.color = starColors[Math.floor(Math.random() * starColors.length)];
        }

        update() {
            
            this.z -= speed;
            
            if (this.z < 1) {
                this.reset();
            }
        }

        draw() {
            const scale = canvas.width / this.z;
            // Project the 3D coordinates to 2D screen coordinates
            const sx = this.x * scale + (centerX + mouseX);
            const sy = this.y * scale + (centerY + mouseY);
            
            const radius = (1 - this.z / canvas.width) * 2;
            
            if (sx > 0 && sx < canvas.width && sy > 0 && sy < canvas.height) {
                ctx.beginPath();
                ctx.arc(sx, sy, radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }
    }

    function init() {
        stars = [];
        for (let i = 0; i < numStars; i++) {
            stars.push(new Star());
        }
    }

    function animate() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        stars.forEach(star => {
            star.update();
            star.draw();
        });

        requestAnimationFrame(animate);
    }

    window.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX - centerX) / 20;
        mouseY = (e.clientY - centerY) / 20;
    });
    
    window.addEventListener('resize', () => {
        resizeCanvas();
        init();
    });

    init();
    animate();
import React, { useRef, useEffect } from "react";

const ShootingStars = () => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // 🌟 Star constructor with enhanced shine and size
    function Star() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.radius = 1.5 + Math.random() * 2.0; // Larger stars
      this.alpha = Math.random();
      this.alphaChange = 0.005 + Math.random() * 0.01;
    }

    Star.prototype.draw = function () {
      this.alpha += this.alphaChange;
      if (this.alpha <= 0 || this.alpha >= 1) {
        this.alphaChange = -this.alphaChange;
      }

      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
      ctx.shadowBlur = 15; // More glow
      ctx.shadowColor = "white";
      ctx.fill();
    };

    const numStars = 100; // 🔻 Decreased number of stars
    starsRef.current = Array.from({ length: numStars }, () => new Star());

    const animate = () => {
      ctx.fillStyle = "#000000"; // Night sky background
      ctx.fillRect(0, 0, width, height);

      starsRef.current.forEach((star) => star.draw());

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      starsRef.current = Array.from({ length: numStars }, () => new Star());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none"
    />
  );
};

export default ShootingStars;

window.addEventListener("DOMContentLoaded", () => {
  if (!window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  // Simple reveal for elements
  gsap.utils.toArray(".reveal").forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      }
    });
  });

  // Bloom section scroll-scrub (only on pages that have it)
  if (document.querySelector(".bloom")) {
    gsap.fromTo(".bloom-title",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".bloom",
          start: "top 75%",
          end: "center center",
          scrub: true
        }
      }
    );

    gsap.fromTo(".bloom-copy",
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".bloom",
          start: "top 70%",
          end: "center center",
          scrub: true
        }
      }
    );

    gsap.fromTo(".flower",
      { opacity: 0, scale: 1.06 },
      {
        opacity: 1,
        scale: 1.0,
        ease: "none",
        scrollTrigger: {
          trigger: ".bloom",
          start: "top 65%",
          end: "center center",
          scrub: true
        }
      }
    );
  }
});

export function pageAnimations() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const links = document.querySelectorAll('a[href^="#"]');

    function handleSmoothScroll(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const targetElement = document.querySelector(href);

        if (targetElement) {
            gsap.to(window, {
                duration: 0.8,
                scrollTo: { y: targetElement, offsetY: 80 },
                ease: 'power3.inOut'
            });
        }
    }

    links.forEach(link => {
        link.addEventListener('click', handleSmoothScroll);
    });

    gsap.from(".counter", {
        duration: 0.5,
        opacity: 0,
        y: 40,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".section-demo",
            start: "top 70%"
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    // 1. Mouse Tracking for Dotted Background Offset
    const rootEL = document.documentElement;

    document.addEventListener('mousemove', (e) => {
        // Calculate offset around center
        const x = e.clientX - window.innerWidth / 2;
        const y = e.clientY - window.innerHeight / 2;
        
        rootEL.style.setProperty('--mouse-x', x);
        rootEL.style.setProperty('--mouse-y', y);
    });

    // 2. Navigation Tabs Logic
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.content-section');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and sections
            navButtons.forEach(b => b.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            // Add active class to clicked button
            btn.classList.add('active');

            // Show corresponding section
            const targetId = btn.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            
            if(targetSection) {
                targetSection.classList.add('active');
                
                // Scroll top inside the content area securely
                const contentArea = targetSection.parentElement;
                if(contentArea) {
                    contentArea.scrollTop = 0;
                }
            }
        });
    });
});

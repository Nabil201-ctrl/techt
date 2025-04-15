        // Mobile Menu Toggle
        const mobileToggle = document.querySelector('.mobile-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            if (navLinks.classList.contains('active')) {
                mobileToggle.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
        
        // Scroll Animation
        const scrollElements = document.querySelectorAll('.slide-up');
        
        const elementInView = (el, percentageScroll = 100) => {
            const elementTop = el.getBoundingClientRect().top;
            return (
                elementTop <= 
                ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
            );
        };
        
        const displayScrollElement = (element) => {
            element.classList.add('animate');
        };
        
        const handleScrollAnimation = () => {
            scrollElements.forEach((el) => {
                if (elementInView(el, 90)) {
                    displayScrollElement(el);
                }
            });
        };
        
        // Initial check
        setTimeout(() => {
            handleScrollAnimation();
        }, 100);
        
        // Add event listener
        window.addEventListener('scroll', () => {
            handleScrollAnimation();
        });

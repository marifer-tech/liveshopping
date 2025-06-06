document.addEventListener('DOMContentLoaded', function() {
    // Produtos
    const products = [
        {
            id: 1,
            name: "Câmera IP sem fio",
            price: "R$ 53,68",
            discount: "90% OFF",
            image: "https://down-br.img.susercontent.com/file/sg-11134201-7ravr-malgdlaslog3b4.webp",
            link: "https://shopee.com.br/product/1006215031/28605131585?uls_trackid=52t1ith40063&utm_campaign=id_jegUajewVu&utm_content=----&utm_medium=affiliates&utm_source=an_18378720662&utm_term=d59u5tfp77uh"
        },
        {
            id: 2,
            name: "Aspirador de pó sem fio portátil",
            price: "R$ 79,69",
            discount: "73% OFF",
            image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m30tcykb8o9hf3@resize_w450_nl.webp",
            link: "https://s.shopee.com.br/4L7OXJsUJG"
        },
        {
            id: 3,
            name: "Kit garrafa térmica Vacuum",
            price: "R$ 28,97",
            discount: "52% OFF",
            image: "https://down-br.img.susercontent.com/file/sg-11134201-7rfgr-m9srcfiqmq8s1a.webp",
            link: "https://s.shopee.com.br/30c0x3x7GG"
        },
        {
            id: 4,
            name: "Coleira peitoral para cachorro e gato",
            price: "R$ 19,90",
            discount: "51% OFF",
            image: "https://down-br.img.susercontent.com/file/sg-11134201-7rces-lt7f4l3vtvy980.webp",
            link: "https://s.shopee.com.br/BHpa13vpz"
        },
        {
            id: 5,
            name: "Kit câmera de segurança a prova d'água",
            price: "R$ 53,50 - R$ 199,26",
            discount: "51% OFF",
            image: "https://down-br.img.susercontent.com/file/sg-11134201-7rd43-m6p9da3hn8qjbd.webp",
            link: "https://s.shopee.com.br/3AvR9gSP7A"
        },
        {
            id: 6,
            name: "Caixa de som go 3",
            price: "R$ 43,79",
            discount: "70% OFF",
            image: "https://down-br.img.susercontent.com/file/sg-11134201-7repd-m28gs3389mz9ec.webp",
            link: "https://s.shopee.com.br/8KdXJJrtsj"
        },
        {
            id: 7,
            name: "Ralador Inox profissional 4 lâminas",
            price: "R$ 88,08",
            discount: "19% OFF",
            image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lxjy6pa4qqwv2c@resize_w450_nl.webp",
            link: "https://s.shopee.com.br/5pwCKoyzgZ"
        },
        {
            id: 8,
            name: "Pack vídeos virais",
            price: "R$ 10,00",
            discount: "",
            image: "assets/images/pack.jpg",
            link: "https://pay.kiwify.com.br/9ntsezQ"
        }
    ];

    // Renderizar produtos
    const productGrid = document.querySelector('.product-grid');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>Produto premium com garantia de 1 ano</p>
                <div class="product-price">
                    <span class="price">${product.price}</span>
                    <span class="discount">${product.discount}</span>
                </div>
                <a href="${product.link}" class="btn" target="_blank">Comprar Agora</a>
            </div>
        `;
        productGrid.appendChild(productCard);
    });

    // Testimonials slider
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        testimonials[index].classList.add('active');
    }

    prevBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
    });

    nextBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    });

    // Auto-rotate testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);

    // Instagram posts click
    const instaPosts = document.querySelectorAll('.insta-post');
    instaPosts.forEach(post => {
        post.addEventListener('click', () => {
            window.open(post.getAttribute('data-link'), '_blank');
        });
    });

    // Form submission
    const messageForm = document.getElementById('messageForm');
    messageForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        this.reset();
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animation on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.feature-card, .product-card, .testimonial-slider, .insta-post, .contact-info, .contact-form');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Set initial state for animation
    document.querySelectorAll('.feature-card, .product-card, .testimonial-slider, .insta-post, .contact-info, .contact-form').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});
// ============================================
// КОНФИГУРАЦИЯ
// Измените эти значения для вашего проекта
// ============================================
const CONFIG = {
    // Данные для замены переменных в HTML
    data: {
        // Бренд и контакты
        brand_name: 'TravelMaster',
        phone: '+79991234567',
        phone_display: '+7 (999) 123-45-67',
        email: 'info@travelmaster.ru',
        address: 'г. Москва, ул. Туристическая, д. 15',
        work_hours: 'Пн-Вс: 9:00 - 21:00',
        current_year: new Date().getFullYear(),

        // Hero секция
        hero_title: 'Подберите идеальный тур онлайн за минуты',
        hero_subtitle: 'Лучшие цены от 500+ туроператоров. Гарантия качества. Выгодное раннее бронирование.',
        hero_cta_button: 'Найти тур',
        hero_note: 'Более 50 000 туристов выбрали нас в 2025 году',

        // Горящие туры
        hot_tours_title: 'Горящие туры',
        hot_tours_subtitle: 'Специальные предложения с скидками до 40%',
        hot_tours_cta: 'Показать все туры',

        // Туры (замените {{tour_X_country}} и т.д.)
        tour_1_country: 'Турция',
        tour_1_resort: 'Анталья, 5* отель',
        tour_1_dates: '15 - 22 января',
        tour_1_duration: '7 ночей',
        tour_1_price_old: '85 000 ₽',
        tour_1_price: '59 990 ₽',

        tour_2_country: 'Египет',
        tour_2_resort: 'Шарм-эль-Шейх',
        tour_2_dates: '20 - 27 января',
        tour_2_duration: '7 ночей',
        tour_2_price_old: '95 000 ₽',
        tour_2_price: '71 250 ₽',

        tour_3_country: 'ОАЭ',
        tour_3_resort: 'Дубай',
        tour_3_dates: '1 - 8 февраля',
        tour_3_duration: '7 ночей',
        tour_3_price: '125 000 ₽',

        tour_4_country: 'Таиланд',
        tour_4_resort: 'Пхукет',
        tour_4_dates: '10 - 17 февраля',
        tour_4_duration: '7 ночей',
        tour_4_price: '98 000 ₽',

        // Минимальные цены
        prices_title: 'Минимальные цены на январь-февраль',
        prices_subtitle: 'Цены "от" за 2-х человек на 7 ночей',
        prices_note: 'Цены могут меняться. Узнайте точную стоимость у менеджера.',

        price_1_country: 'Турция',
        price_1_value: '59 990',
        price_1_note: 'Анталья, Алания',

        price_2_country: 'Египет',
        price_2_value: '71 250',
        price_2_note: 'Хургада, Шарм',

        price_3_country: 'ОАЭ',
        price_3_value: '115 000',
        price_3_note: 'Дубай, Абу-Даби',

        price_4_country: 'Таиланд',
        price_4_value: '98 000',
        price_4_note: 'Пхукет, Самуи',

        price_5_country: 'Мальдивы',
        price_5_value: '185 000',
        price_5_note: 'Атоллы',

        price_6_country: 'Греция',
        price_6_value: '145 000',
        price_6_note: 'Крит, Родос',

        // Почему мы
        why_us_title: 'Почему выбирают нас',
        why_us_subtitle: 'Мы делаем ваш отдых комфортным и безопасным',

        benefit_1_title: 'Опыт с 2010 года',
        benefit_1_text: 'Более 15 лет успешной работы в туризме',

        benefit_2_title: '500+ туроператоров',
        benefit_2_text: 'Работаем только с проверенными партнерами',

        benefit_3_title: 'Лучшие цены',
        benefit_3_text: 'Сравниваем цены и предлагаем выгодные варианты',

        benefit_4_title: 'Гарантия 100%',
        benefit_4_text: 'Полная возврат денег при отмене по нашей вине',

        benefit_5_title: 'Поддержка 24/7',
        benefit_5_text: 'Наши менеджеры на связи круглосуточно',

        benefit_6_title: 'Рассрочка 0%',
        benefit_6_text: 'Удобная оплата частями без переплат',

        guarantee_badge: '🛡️',
        guarantee_text: 'Полная гарантия возврата денег при отмене тура',

        // Отзывы
        reviews_title: 'Что говорят наши клиенты',
        reviews_subtitle: 'Реальные отзывы туристов, которые уже отдыхали с нами',

        review_1_rating: '★★★★★',
        review_1_text: 'Отличный отдых в Турции! Всё было организовано на высшем уровне. Отель превзошел все ожидания. Спасибо за чудесный отпуск!',
        review_1_name: 'Анна Петрова',
        review_1_tour: 'Турция, Анталья',

        review_2_rating: '★★★★★',
        review_2_text: 'Путешествие в Египет было незабываемым! Прекрасные пляжи, богатая программа экскурсий. Обязательно вернемся еще!',
        review_2_name: 'Михаил Сидоров',
        review_2_tour: 'Египет, Шарм-эль-Шейх',

        review_3_rating: '★★★★★',
        review_3_text: 'Дубай потрясающий! Современные отели, шоппинг, развлечения. Менеджеры помогли со всем. Рекомендую!',
        review_3_name: 'Елена Новикова',
        review_3_tour: 'ОАЭ, Дубай',

        review_4_rating: '★★★★★',
        review_4_text: 'Таиланд - это мечта! Тропические пляжи, вкусная еда, дружелюбные местные жители. Спасибо TravelMaster!',
        review_4_name: 'Дмитрий Козлов',
        review_4_tour: 'Таиланд, Пхукет',

        review_5_rating: '★★★★☆',
        review_5_text: 'Отличный отдых на Мальдивах! Бунгало прямо над водой, невероятные закаты. Единственное - дорого, но того стоит.',
        review_5_name: 'Ольга Иванова',
        review_5_tour: 'Мальдивы',

        review_6_rating: '★★★★★',
        review_6_text: 'Греция в сентябре - это что-то! Теплое море, античные достопримечательности, вкусная кухня. Супер!',
        review_6_name: 'Алексей Смирнов',
        review_6_tour: 'Греция, Крит',

        // Как работает
        how_title: 'Как мы работаем',
        how_subtitle: '5 простых шагов к вашему идеальному отпуску',

        step_1_title: 'Подбор',
        step_1_text: 'Заполните форму, и мы подберем варианты под ваш бюджет',

        step_2_title: 'Консультация',
        step_2_text: 'Менеджер свяжется с вами и уточнит все детали',

        step_3_title: 'Бронирование',
        step_3_text: 'Выберите тур и забронируйте его онлайн',

        step_4_title: 'Оплата',
        step_4_text: 'Оплатите удобным способом (карта, рассрочка)',

        step_5_title: 'Отдых',
        step_5_text: 'Получите документы и наслаждайтесь отдыхом!',

        // Контактная форма
        contact_form_title: 'Оставьте заявку',
        contact_form_text: 'Заполните форму, и наш менеджер свяжется с вами в течение 15 минут для подбора идеального тура.',
        contact_form_button: 'Оставить заявку',
        contact_form_note: 'Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности',

        // Модальное окно
        modal_title: 'Заявка отправлена!',
        modal_text: 'Наш менеджер свяжется с вами в течение 15 минут для подбора идеального тура.',

        // Футер
        footer_description: 'Ваш надежный партнер в мире путешествий. Подбор туров онлайн с 2010 года.'
    }
};

// ============================================
// ЗАМЕНА ПЕРЕМЕННЫХ В HTML
// ============================================
function replaceVariables() {
    const body = document.body;

    // Заменяем все {{variable}} на значения из CONFIG
    body.innerHTML = body.innerHTML.replace(/\{\{(\w+)\}\}/g, (match, key) => {
        return CONFIG.data[key] || match;
    });
}

// ============================================
// МОБИЛЬНОЕ МЕНЮ
// ============================================
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav__link');

    if (!hamburger || !nav) return;

    // Открытие/закрытие меню
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Закрытие меню при клике на ссылку
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Закрытие меню при клике вне меню
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
            nav.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// ============================================
// ФИКСИРОВАННЫЙ HEADER ПРИ СКРОЛЛЕ
// ============================================
function initFixedHeader() {
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        }

        lastScroll = currentScroll;
    });
}

// ============================================
// СЛАЙДЕР ТУРОВ
// ============================================
function initToursSlider() {
    const slider = document.getElementById('toursSlider');
    const wrapper = slider?.querySelector('.tours-slider__wrapper');
    const prevBtn = document.getElementById('sliderPrev');
    const nextBtn = document.getElementById('sliderNext');

    if (!slider || !wrapper) return;

    let currentSlide = 0;
    const slides = wrapper.querySelectorAll('.tour-card');
    const slidesPerView = getSlidesPerView();

    function getSlidesPerView() {
        if (window.innerWidth < 768) return 1;
        if (window.innerWidth < 968) return 2;
        return 4;
    }

    function updateSlider() {
        const slideWidth = slides[0]?.offsetWidth || 0;
        const gap = 32; // 2rem gap
        const moveAmount = (slideWidth + gap) * currentSlide;
        wrapper.style.transform = `translateX(-${moveAmount}px)`;
    }

    prevBtn?.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlider();
        }
    });

    nextBtn?.addEventListener('click', () => {
        const maxSlide = Math.ceil(slides.length / slidesPerView) - 1;
        if (currentSlide < maxSlide) {
            currentSlide++;
            updateSlider();
        }
    });

    // Обновление при ресайзе
    window.addEventListener('resize', () => {
        currentSlide = 0;
        updateSlider();
    });
}

// ============================================
// СЛАЙДЕР ОТЗЫВОВ
// ============================================
function initReviewsSlider() {
    const slider = document.getElementById('reviewsSlider');
    const wrapper = slider?.querySelector('.reviews-slider__wrapper');
    const prevBtn = document.getElementById('reviewsPrev');
    const nextBtn = document.getElementById('reviewsNext');

    if (!slider || !wrapper) return;

    let currentSlide = 0;
    const slides = wrapper.querySelectorAll('.review-card');
    const slidesPerView = getSlidesPerView();

    function getSlidesPerView() {
        if (window.innerWidth < 768) return 1;
        if (window.innerWidth < 968) return 2;
        return 3;
    }

    function updateSlider() {
        const slideWidth = slides[0]?.offsetWidth || 0;
        const gap = 32; // 2rem gap
        const moveAmount = (slideWidth + gap) * currentSlide;
        wrapper.style.transform = `translateX(-${moveAmount}px)`;
    }

    prevBtn?.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlider();
        }
    });

    nextBtn?.addEventListener('click', () => {
        const maxSlide = Math.ceil(slides.length / slidesPerView) - 1;
        if (currentSlide < maxSlide) {
            currentSlide++;
            updateSlider();
        }
    });

    window.addEventListener('resize', () => {
        currentSlide = 0;
        updateSlider();
    });
}

// ============================================
// ОБРАБОТКА ФОРМЫ ПОИСКА ТУРА
// ============================================
function initTourSearchForm() {
    const form = document.getElementById('tourSearchForm');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Сбор данных формы
        const formData = new FormData(form);
        const data = {
            destination: formData.get('destination'),
            date: formData.get('date'),
            budget: formData.get('budget'),
            people: formData.get('people')
        };

        console.log('Поиск тура:', data);

        // Здесь можно отправить данные на сервер
        // fetch('/api/search-tour', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // });

        // Показываем модальное окно
        showModal();
        form.reset();
    });
}

// ============================================
// ОБРАБОТКА КОНТАКТНОЙ ФОРМЫ
// ============================================
function initContactForm() {
    const form = document.getElementById('contactForm');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Валидация
        const name = form.querySelector('#name').value.trim();
        const phone = form.querySelector('#contact-phone').value.trim();
        const email = form.querySelector('#email').value.trim();
        const message = form.querySelector('#message').value.trim();

        if (name.length < 2) {
            alert('Пожалуйста, введите корректное имя');
            return;
        }

        // Простая валидация телефона (俄罗斯 формат)
        const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
            alert('Пожалуйста, введите корректный номер телефона');
            return;
        }

        // Валидация email (если заполнен)
        if (email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Пожалуйста, введите корректный email');
                return;
            }
        }

        // Сбор данных формы
        const formData = {
            name,
            phone,
            email,
            message,
            timestamp: new Date().toISOString()
        };

        console.log('Отправка заявки:', formData);

        // ============================================
        // ИНТЕГРАЦИЯ С CRM / EMAIL
        // Раскомментируйте и настройте для вашей CRM:
        // ============================================

        // Пример отправки на сервер
        /*
        fetch('/api/submit-booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(result => {
            console.log('Успешно отправлено:', result);
            showModal();
            form.reset();
        })
        .catch(error => {
            console.error('Ошибка отправки:', error);
            alert('Произошла ошибка. Пожалуйста, попробуйте позже.');
        });
        */

        // Пример отправки в Google Sheets
        /*
        const scriptURL = 'YOUR_GOOGLE_SCRIPT_URL';
        fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(() => {
            showModal();
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
        */

        // Для демо-версии просто показываем модальное окно
        showModal();
        form.reset();
    });
}

// ============================================
// МОДАЛЬНОЕ ОКНО
// ============================================
function showModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function hideModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function initModal() {
    const closeBtn = document.getElementById('closeModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modal = document.getElementById('successModal');

    closeBtn?.addEventListener('click', hideModal);
    modalCloseBtn?.addEventListener('click', hideModal);

    // Закрытие при клике вне модального окна
    modal?.addEventListener('click', (e) => {
        if (e.target === modal) {
            hideModal();
        }
    });

    // Закрытие по ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideModal();
        }
    });
}

// ============================================
// КНОПКИ "ЗАБРОНИРОВАТЬ" В КАРТОЧКАХ ТУРОВ
// ============================================
function initTourCardButtons() {
    const bookButtons = document.querySelectorAll('.tour-card__btn');

    bookButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tourName = btn.getAttribute('data-tour');

            // Автоматически заполняем форму
            const messageField = document.querySelector('#message');
            const contactFormSection = document.querySelector('#contact-form');

            if (messageField && contactFormSection) {
                messageField.value = `Интересует тур: ${tourName}`;

                // Скроллим к форме
                contactFormSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ============================================
// КНОПКА "ПОКАЗАТЬ ВСЕ ТУРЫ"
// ============================================
function initShowAllTours() {
    const btn = document.getElementById('showAllTours');

    btn?.addEventListener('click', () => {
        // Здесь можно загрузить больше туров или открыть каталог
        alert('Функция "Показать все туры" в разработке.\n\nВ реальном проекте здесь будет загружаться полный каталог туров.');
    });
}

// ============================================
// ПЛАВНЫЙ СКРОЛЛ ПО ЯКОРЯМ
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Пропускаем пустые якоря
            if (href === '#' || href === '#!') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// УСТАНОВКА МИНИМАЛЬНОЙ ДАТЫ В ФОРМЕ
// ============================================
function initMinDate() {
    const dateInput = document.querySelector('#date');

    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
}

// ============================================
// АНИМАЦИЯ ПРИ СКРОЛЛЕ (опционально)
// ============================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Наблюдаем за секциями
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// ============================================
// ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Замена переменных
    replaceVariables();

    // Инициализация компонентов
    initMobileMenu();
    initFixedHeader();
    initToursSlider();
    initReviewsSlider();
    initTourSearchForm();
    initContactForm();
    initModal();
    initTourCardButtons();
    initShowAllTours();
    initSmoothScroll();
    initMinDate();

    // Анимации (опционально - раскомментируйте при необходимости)
    // initScrollAnimations();

    console.log('✅ Landing page initialized successfully!');
    console.log('📝 CONFIG.data - замените значения на свои');
});

// ============================================
// ИНТЕГРАЦИЯ АНАЛИТИКИ (опционально)
// ============================================

// Яндекс.Метрика - пример отправки цели
/*
function reachGoal(goal) {
    if (typeof ym !== 'undefined') {
        ym(YANDEX_METRIKA_ID, 'reachGoal', goal);
    }
}

// Вызов цели при отправке формы:
// reachGoal('form_submit');
*/

// Google Analytics - пример отправки события
/*
function sendEvent(category, action, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}

// Вызов события при клике на кнопку:
// sendEvent('button', 'click', 'book_tour');
*/

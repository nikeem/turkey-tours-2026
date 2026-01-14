// ============================================
// КОНФИГУРАЦИЯ - Переменные для замены
// ============================================
const CONFIG = {
    // Бренд и контакты
    brand_name: "ТурЭксперт Про",
    brand_description: "Лучшие туры по выгодным ценам. Горящие туры, индивидуальные подборки и гарантии безопасности.",
    keywords: "туры, отпуск, путешествия, горящие туры, отдых на море, турция, египет, оаэ",
    page_title: "ТурЭксперт Про - Лучшие туры по выгодным ценам",
    phone: "+74951234567",
    phone_display: "+7 (495) 123-45-67",
    email: "info@turexpert.ru",
    address: "г. Москва, ул. Тверская, д. 15, офис 205",
    work_hours: "Пн-Пт: 9:00 - 20:00, Сб: 10:00 - 18:00",

    // Навигация
    nav_tours: "Туры",
    nav_prices: "Цены",
    nav_why: "Преимущества",
    nav_reviews: "Отзывы",
    nav_offices: "Офисы",
    nav_contact: "Контакты",

    // Hero секция
    hero_title: "Найдите свой идеальный отдых",
    hero_subtitle: "Подбор туров от 50 000 ₽. Горящие предложения, индивидуальные программы и гарантия лучшей цены",
    feature_1: "Горящие туры",
    feature_2: "Лучшие отели",
    feature_3: "Авиабилеты",
    feature_4: "Страховка",
    hero_cta_primary: "Подобрать тур",
    hero_cta_secondary: "Смотреть все",

    // Форма поиска
    search_form_title: "Быстрый поиск тура",
    label_destination: "Куда хотите полететь?",
    select_destination: "Выберите направление",
    label_date: "Дата вылета",
    label_budget: "Ваш бюджет",
    select_budget: "Выберите бюджет",
    label_people: "Количество человек",
    search_form_button: "Найти туры",

    // Статистика
    stat_1_number: "15 000+",
    stat_1_text: "Довольных клиентов",
    stat_2_number: "500+",
    stat_2_text: "Горящих туров",
    stat_3_number: "50+",
    stat_3_text: "Стран-партнеров",
    stat_4_number: "12 лет",
    stat_4_text: "На рынке",

    // Горящие туры
    hot_tours_title: "Горящие туры",
    hot_tours_subtitle: "Успейте забронировать по специальным ценам",
    hot_tours_cta: "Посмотреть все туры",

    // Цены
    prices_title: "Минимальные цены на туры",
    prices_subtitle: "Стоимость перелета и проживания на 1 человека",
    prices_note: "* Цены действительны на момент публикации и могут изменяться. Уточняйте актуальную стоимость у менеджеров.",

    // Преимущества
    why_us_title: "Почему выбирают нас",
    why_us_subtitle: "Мы делаем ваш отдых комфортным и безопасным",
    guarantee_badge: "100% гарантия",
    guarantee_text: "Вернем деньги, если что-то пойдет не так. Работаем по договору и проверенным партнерам.",

    // Как мы работаем
    how_title: "Как мы работаем",
    how_subtitle: "Простой путь к вашему идеальному отдыху",

    // Эксперты
    experts_title: "Наши эксперты",
    experts_subtitle: "Профессионалы с опытом более 10 лет в туризме",

    // Офисы
    offices_title: "Наши офисы",
    offices_subtitle: "Удобные расположения в Москве",

    // Отзывы
    reviews_title: "Отзывы клиентов",
    reviews_subtitle: "Что говорят о нас наши путешественники",

    // Контактная форма
    contact_form_title: "Оставьте заявку",
    contact_form_subtitle: "Заполните форму и мы свяжемся с вами в течение 15 минут",
    contact_info_title: "Контактная информация",
    label_name: "Ваше имя",
    label_phone: "Телефон",
    label_email: "Email",
    label_hours: "Режим работы",
    label_address: "Адрес",
    label_message: "Сообщение",
    placeholder_name: "Иван Иванов",
    placeholder_phone: "+7 (999) 123-45-67",
    placeholder_email: "example@mail.ru",
    placeholder_message: "Расскажите о вашем желаемом отдыхе...",
    privacy_label: "Я согласен на обработку персональных данных",
    contact_form_button: "Отправить заявку",
    contact_form_note: "Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности",

    // Футер
    footer_description: "Профессиональное подборочное агентство с 12-летним опытом работы. Лучшие туры по выгодным ценам.",
    footer_nav_title: "Навигация",
    footer_contacts_title: "Контакты",
    footer_legal_title: "Документы",
    footer_privacy: "Политика конфиденциальности",
    footer_terms: "Условия использования",
    footer_license: "Лицензия",
    footer_copyright: "© 2024 ТурЭксперт Про. Все права защищены.",

    // Модальное окно
    modal_title: "Заявка отправлена!",
    modal_text: "Наш менеджер свяжется с вами в течение 15 минут для уточнения деталей.",
    modal_button: "Отлично!"
};

// ============================================
// ДАННЫЕ ДЛЯ КОНТЕНТА
// ============================================
const TOURS_DATA = [
    {
        id: 1,
        destination: "Турция, Анталья",
        hotel: "Kleopatra Roxy 5*",
        dates: "10 - 17 июня",
        duration: "7 ночей",
        price: "65 000",
        oldPrice: "85 000",
        discount: "-24%",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop",
        hot: true
    },
    {
        id: 2,
        destination: "Египет, Шарм-эль-Шейх",
        hotel: "Marina Resort 5*",
        dates: "15 - 22 июня",
        duration: "7 ночей",
        price: "78 000",
        oldPrice: "95 000",
        discount: "-18%",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1539768942893-daf53e448341?w=400&h=300&fit=crop",
        hot: true
    },
    {
        id: 3,
        destination: "ОАЭ, Дубай",
        hotel: "Jumeriah Beach 5*",
        dates: "20 - 27 июня",
        duration: "7 ночей",
        price: "125 000",
        oldPrice: "150 000",
        discount: "-17%",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop",
        hot: false
    },
    {
        id: 4,
        destination: "Таиланд, Пхукет",
        hotel: "Andaman Embrace 5*",
        dates: "25 июня - 2 июля",
        duration: "7 ночей",
        price: "98 000",
        oldPrice: "120 000",
        discount: "-18%",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400&h=300&fit=crop",
        hot: true
    },
    {
        id: 5,
        destination: "Мальдивы",
        hotel: "Summer Island 4*",
        dates: "1 - 8 июля",
        duration: "7 ночей",
        price: "185 000",
        oldPrice: "220 000",
        discount: "-16%",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&h=300&fit=crop",
        hot: false
    }
];

const PRICES_DATA = [
    { country: "Турция", flag: "🇹🇷", from: "45 000", popular: true },
    { country: "Египет", flag: "🇪🇬", from: "55 000", popular: true },
    { country: "ОАЭ", flag: "🇦🇪", from: "95 000", popular: false },
    { country: "Таиланд", flag: "🇹🇭", from: "75 000", popular: true },
    { country: "Мальдивы", flag: "🇲🇻", from: "150 000", popular: false },
    { country: "Греция", flag: "🇬🇷", from: "65 000", popular: false }
];

const BENEFITS_DATA = [
    {
        icon: "fa-sack-dollar",
        title: "Лучшие цены",
        description: "Работаем напрямую с туроператорами, без переплат и посредников"
    },
    {
        icon: "fa-shield-halved",
        title: "Безопасность",
        description: "Все партнеры проверены, договоры и страховки включены"
    },
    {
        icon: "fa-headset",
        title: "Поддержка 24/7",
        description: "Наши менеджеры на связи в любое время, в любой стране"
    },
    {
        icon: "fa-certificate",
        title: "Лицензия",
        description: "Имеем все необходимые лицензии и сертификаты"
    },
    {
        icon: "fa-bolt",
        title: "Быстрый подбор",
        description: "Подберем идеальный тур за 30 минут по вашим критериям"
    },
    {
        icon: "fa-heart",
        title: "Индивидуально",
        description: "Учтем все ваши пожелания для идеального отдыха"
    }
];

const STEPS_DATA = [
    {
        step: "01",
        icon: "fa-magnifying-glass",
        title: "Оставьте заявку",
        description: "Заполните форму или позвоните нам"
    },
    {
        step: "02",
        icon: "fa-comments",
        title: "Консультация",
        description: "Менеджер подберет варианты под ваш бюджет"
    },
    {
        step: "03",
        icon: "fa-file-signature",
        title: "Оформление",
        description: "Подготовим документы и забронируем тур"
    },
    {
        step: "04",
        icon: "fa-plane",
        title: "Полет!",
        description: "Наслаждайтесь вашим идеальным отдыхом"
    }
];

const EXPERTS_DATA = [
    {
        name: "Анна Петрова",
        position: "Эксперт по Турции",
        experience: "10 лет",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
        tours: "2500+",
        specialization: "Семейный отдых"
    },
    {
        name: "Михаил Сидоров",
        position: "Эксперт по Египту",
        experience: "8 лет",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
        tours: "1800+",
        specialization: "Дайвинг-туры"
    },
    {
        name: "Елена Козлова",
        position: "Эксперт по ОАЭ",
        experience: "12 лет",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
        tours: "3200+",
        specialization: "Роскошный отдых"
    },
    {
        name: "Дмитрий Волков",
        position: "Эксперт по Азии",
        experience: "9 лет",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
        tours: "2100+",
        specialization: "Экзотические туры"
    }
];

const OFFICES_DATA = [
    {
        name: "Центральный офис",
        address: "ул. Тверская, 15",
        metro: "Охотный ряд (2 мин)",
        phone: "+7 (495) 123-45-67",
        hours: "Пн-Пт: 9:00 - 20:00",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
    },
    {
        name: "Офис на юге",
        address: "ул. Профсоюзная, 85",
        metro: "Коньково (5 мин)",
        phone: "+7 (495) 234-56-78",
        hours: "Пн-Сб: 10:00 - 19:00",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop"
    },
    {
        name: "Офис на севере",
        address: "ул. Алтуфьевское ш., 1",
        metro: "Бибирево (3 мин)",
        phone: "+7 (495) 345-67-89",
        hours: "Пн-Пт: 9:00 - 19:00",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop"
    }
];

const REVIEWS_DATA = [
    {
        name: "Ольга и Сергей",
        tour: "Турция, Анталья",
        date: "июнь 2024",
        rating: 5,
        text: "Отличный отдых! Всё было организовано на высшем уровне. Отель просто супер, особенно понравилось питание. Ребята из ТурЭксперт подобрали идеальный вариант для нашей семьи с детьми.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop"
    },
    {
        name: "Александр",
        tour: "Египет, Шарм-эль-Шейх",
        date: "май 2024",
        rating: 5,
        text: "Впервые в Египте и остался под впечатлением! Менеджер Елена помогла с выбором отеля и рассказала про все нюансы. Дайвинг был просто невероятный. Обязательно вернусь!",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
        name: "Мария",
        tour: "Мальдивы",
        date: "апрель 2024",
        rating: 5,
        text: "Мечта сбылась! Мальдивы - это рай на земле. Спасибо команде ТурЭксперт за организацию идеального honeymoon. Вилла была потрясающая, прямо у воды. Рекомендую!",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    },
    {
        name: "Дмитрий с семьей",
        tour: "ОАЭ, Дубай",
        date: "март 2024",
        rating: 4,
        text: "Отличный семейный отдых! Дети в восторге от аквапарков и аттракционов. Отель класса люкс, сервис на высоте. Единственное - жарновато было, но это ожидаемо.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    },
    {
        name: "Наталья",
        tour: "Таиланд, Пхукет",
        date: "февраль 2024",
        rating: 5,
        text: "Волшебный Таиланд! Спасибо менеджеру Михаилу за отличную подборку. Остановка на острове Пхи-Пхи - это что-то невероятное. Фотографии не передают всей красоты!",
        image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop"
    }
];

// ============================================
// ФУНКЦИЯ ЗАМЕНЫ ПЕРЕМЕННЫХ
// ============================================
function replaceVariables() {
    const body = document.body.innerHTML;

    // Заменяем все переменные вида {{variable_name}}
    const newBody = body.replace(/\{\{(\w+)\}\}/g, (match, key) => {
        return CONFIG[key] || match;
    });

    document.body.innerHTML = newBody;
}

// ============================================
// МОБИЛЬНОЕ МЕНЮ
// ============================================
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    const header = document.getElementById('header');

    if (!hamburger || !nav) return;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Закрываем меню при клике на ссылку
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    // Закрываем меню при клике вне меню
    document.addEventListener('click', (e) => {
        if (!header.contains(e.target)) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        }
    });
}

// ============================================
// СЛАЙДЕРЫ
// ============================================
class Slider {
    constructor(wrapperId, prevBtnId, nextBtnId, options = {}) {
        this.wrapper = document.getElementById(wrapperId);
        this.prevBtn = document.getElementById(prevBtnId);
        this.nextBtn = document.getElementById(nextBtnId);
        this.currentIndex = 0;
        this.itemsPerView = options.itemsPerView || 3;
        this.gap = options.gap || 20;

        if (!this.wrapper) return;

        this.init();
    }

    init() {
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prev());
        }
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.next());
        }

        this.update();
    }

    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.update();
        }
    }

    next() {
        const maxIndex = Math.max(0, this.wrapper.children.length - this.itemsPerView);
        if (this.currentIndex < maxIndex) {
            this.currentIndex++;
            this.update();
        }
    }

    update() {
        const itemWidth = this.wrapper.children[0]?.offsetWidth || 0;
        const offset = this.currentIndex * (itemWidth + this.gap);
        this.wrapper.style.transform = `translateX(-${offset}px)`;

        // Обновляем состояние кнопок
        if (this.prevBtn) {
            this.prevBtn.style.opacity = this.currentIndex === 0 ? '0.5' : '1';
            this.prevBtn.style.pointerEvents = this.currentIndex === 0 ? 'none' : 'auto';
        }
    }
}

// ============================================
// ГЕНЕРАЦИЯ КОНТЕНТА
// ============================================
function generateTours() {
    const wrapper = document.getElementById('toursSliderWrapper');
    if (!wrapper) return;

    wrapper.innerHTML = TOURS_DATA.map(tour => `
        <div class="tour-card">
            ${tour.hot ? '<div class="tour-card__hot">Горящий тур</div>' : ''}
            <div class="tour-card__image">
                <img src="${tour.image}" alt="${tour.destination}">
                <div class="tour-card__rating">
                    <i class="fa-solid fa-star"></i>
                    ${tour.rating}
                </div>
            </div>
            <div class="tour-card__content">
                <h3 class="tour-card__destination">${tour.destination}</h3>
                <p class="tour-card__hotel">${tour.hotel}</p>
                <div class="tour-card__details">
                    <span><i class="fa-regular fa-calendar"></i> ${tour.dates}</span>
                    <span><i class="fa-regular fa-clock"></i> ${tour.duration}</span>
                </div>
                <div class="tour-card__price">
                    <div class="tour-card__current">${tour.price} ₽</div>
                    <div class="tour-card__old">${tour.oldPrice} ₽</div>
                    <div class="tour-card__discount">${tour.discount}</div>
                </div>
                <button class="btn btn--primary btn--full">Забронировать</button>
            </div>
        </div>
    `).join('');

    // Инициализируем слайдер
    new Slider('toursSliderWrapper', 'toursPrev', 'toursNext', { itemsPerView: 3 });
}

function generatePrices() {
    const grid = document.getElementById('pricesGrid');
    if (!grid) return;

    grid.innerHTML = PRICES_DATA.map(item => `
        <div class="price-card ${item.popular ? 'price-card--popular' : ''}">
            ${item.popular ? '<div class="price-card__badge">Популярное</div>' : ''}
            <div class="price-card__flag">${item.flag}</div>
            <h3 class="price-card__country">${item.country}</h3>
            <div class="price-card__value">от ${item.from} ₽</div>
            <button class="btn btn--outline btn--full">Смотреть туры</button>
        </div>
    `).join('');
}

function generateBenefits() {
    const grid = document.getElementById('benefitsGrid');
    if (!grid) return;

    grid.innerHTML = BENEFITS_DATA.map(item => `
        <div class="benefit-card">
            <div class="benefit-card__icon">
                <i class="fa-solid ${item.icon}"></i>
            </div>
            <h3 class="benefit-card__title">${item.title}</h3>
            <p class="benefit-card__description">${item.description}</p>
        </div>
    `).join('');
}

function generateSteps() {
    const container = document.getElementById('stepsContainer');
    if (!container) return;

    container.innerHTML = `
        ${STEPS_DATA.map((item, index) => `
            <div class="step-item">
                <div class="step-item__number">${item.step}</div>
                <div class="step-item__icon">
                    <i class="fa-solid ${item.icon}"></i>
                </div>
                <h3 class="step-item__title">${item.title}</h3>
                <p class="step-item__description">${item.description}</p>
                ${index < STEPS_DATA.length - 1 ? '<div class="step-item__arrow"><i class="fa-solid fa-arrow-right"></i></div>' : ''}
            </div>
        `).join('')}
    `;
}

function generateExperts() {
    const wrapper = document.getElementById('expertsSliderWrapper');
    if (!wrapper) return;

    wrapper.innerHTML = EXPERTS_DATA.map(expert => `
        <div class="expert-card">
            <div class="expert-card__image">
                <img src="${expert.image}" alt="${expert.name}">
            </div>
            <h3 class="expert-card__name">${expert.name}</h3>
            <p class="expert-card__position">${expert.position}</p>
            <div class="expert-card__meta">
                <span><i class="fa-solid fa-briefcase"></i> ${expert.experience}</span>
                <span><i class="fa-solid fa-plane"></i> ${expert.tours} туров</span>
            </div>
            <p class="expert-card__specialization">Специализация: ${expert.specialization}</p>
            <button class="btn btn--outline btn--full">Консультация</button>
        </div>
    `).join('');

    // Инициализируем слайдер
    new Slider('expertsSliderWrapper', 'expertsPrev', 'expertsNext', { itemsPerView: 3 });
}

function generateOffices() {
    const wrapper = document.getElementById('officesSliderWrapper');
    if (!wrapper) return;

    wrapper.innerHTML = OFFICES_DATA.map(office => `
        <div class="office-card">
            <div class="office-card__image">
                <img src="${office.image}" alt="${office.name}">
            </div>
            <div class="office-card__content">
                <h3 class="office-card__name">${office.name}</h3>
                <p class="office-card__address"><i class="fa-solid fa-location-dot"></i> ${office.address}</p>
                <p class="office-card__metro"><i class="fa-solid fa-train-subway"></i> ${office.metro}</p>
                <p class="office-card__phone"><i class="fa-solid fa-phone"></i> ${office.phone}</p>
                <p class="office-card__hours"><i class="fa-solid fa-clock"></i> ${office.hours}</p>
                <button class="btn btn--outline btn--full">На карте</button>
            </div>
        </div>
    `).join('');

    // Инициализируем слайдер
    new Slider('officesSliderWrapper', 'officesPrev', 'officesNext', { itemsPerView: 2 });
}

function generateReviews() {
    const wrapper = document.getElementById('reviewsSliderWrapper');
    if (!wrapper) return;

    wrapper.innerHTML = REVIEWS_DATA.map(review => `
        <div class="review-card">
            <div class="review-card__header">
                <div class="review-card__avatar">
                    <img src="${review.image}" alt="${review.name}">
                </div>
                <div class="review-card__info">
                    <h4 class="review-card__name">${review.name}</h4>
                    <p class="review-card__tour">${review.tour}, ${review.date}</p>
                </div>
            </div>
            <div class="review-card__rating">
                ${Array(review.rating).fill('<i class="fa-solid fa-star"></i>').join('')}
            </div>
            <p class="review-card__text">${review.text}</p>
        </div>
    `).join('');

    // Инициализируем слайдер
    new Slider('reviewsSliderWrapper', 'reviewsPrev', 'reviewsNext', { itemsPerView: 2 });
}

// ============================================
// ВАЛИДАЦИЯ ФОРМ
// ============================================
function initForms() {
    // Форма поиска тура
    const searchForm = document.getElementById('tourSearchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Здесь можно добавить логику отправки формы
            showModal();
        });
    }

    // Контактная форма
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Валидация
            const name = contactForm.querySelector('#name').value;
            const phone = contactForm.querySelector('#contact-phone').value;

            if (name.length < 2) {
                alert('Пожалуйста, введите корректное имя');
                return;
            }

            // Простая валидация телефона
            const phoneRegex = /^[\d\+\(\)\s\-]+$/;
            if (!phoneRegex.test(phone) || phone.length < 10) {
                alert('Пожалуйста, введите корректный номер телефона');
                return;
            }

            // Если валидация пройдена
            showModal();
            contactForm.reset();
        });
    }
}

// ============================================
// МОДАЛЬНОЕ ОКНО
// ============================================
function showModal() {
    const modal = document.getElementById('successModal');
    if (!modal) return;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function hideModal() {
    const modal = document.getElementById('successModal');
    if (!modal) return;

    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function initModal() {
    const closeBtn = document.getElementById('closeModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modal = document.getElementById('successModal');

    if (closeBtn) {
        closeBtn.addEventListener('click', hideModal);
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', hideModal);
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('modal__overlay')) {
                hideModal();
            }
        });
    }

    // Закрытие по ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideModal();
        }
    });
}

// ============================================
// СКРОЛЛ И АНИМАЦИИ
// ============================================
function initScroll() {
    // Плавная прокрутка к секциям
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Фиксированная шапка при скролле
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }

        lastScroll = currentScroll;
    });
}

// ============================================
// АНИМАЦИЯ ПРИ СКРОЛЛЕ
// ============================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Наблюдаем за всеми секциями
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// ============================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Заменяем переменные
    replaceVariables();

    // Инициализируем мобильное меню
    initMobileMenu();

    // Генерируем контент
    generateTours();
    generatePrices();
    generateBenefits();
    generateSteps();
    generateExperts();
    generateOffices();
    generateReviews();

    // Инициализируем формы
    initForms();

    // Инициализируем модальное окно
    initModal();

    // Инициализируем скролл
    initScroll();

    // Инициализируем анимации
    initScrollAnimations();

    // Устанавливаем минимальную дату для формы поиска
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

    console.log('🚀 ТурЭксперт Про - лендинг успешно загружен!');
});

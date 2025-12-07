const books = [
  {
    id: 'stardust',
    title: 'Stardust in the Attic',
    label: 'Calming',
    description: 'A gentle bedtime tale about a shy star who learns to glow.',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1455884981818-54cb785db6fc?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'forest-song',
    title: 'Forest Song',
    label: 'Adventure',
    description: 'Two siblings follow a singing firefly into a musical forest.',
    price: 11.5,
    image: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cloud-mail',
    title: 'Cloud Mail',
    label: 'Kindness',
    description: 'A tiny cloud delivers hand-written notes of kindness worldwide.',
    price: 10.0,
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'moon-market',
    title: 'Midnight Moon Market',
    label: 'Imagination',
    description: 'A hidden bazaar that opens only when the moon turns lavender.',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pocket-dragon',
    title: 'Pocket Dragon Post',
    label: 'Friendship',
    description: 'A little dragon becomes the most reliable postman in town.',
    price: 9.75,
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
  }
];

const i18n = {
  en: {
    eyebrow: 'Magical stories for curious minds',
    headline: 'Mint & lavender online bookshop for bedtime tales',
    subhead: 'Pick charming fairy tales, choose a subscription, and let the magic arrive in your inbox.',
    shop_now: 'Shop now',
    leave_review: 'Leave a review',
    catalog: 'Featured Fairy Tales',
    catalog_hint: 'Swipe through our growing collection — add to cart with one tap.',
    cart_title: 'Your cart',
    cart_total: 'Total',
    checkout: 'Checkout',
    how_it_works: 'How it works',
    step_select: 'Select your stories from the carousel.',
    step_choose: 'Choose a 6 or 12 month subscription.',
    step_pay: 'Pay securely via PayPal and receive updates by email.',
    secure_note_title: 'Security & anti-bot',
    secure_note_body: 'Honeypot fields, server-side validation, and rate-limited APIs keep checkout safe.',
    first_name: 'First name',
    last_name: 'Last name',
    email: 'Email',
    address: 'Mailing address',
    comments: 'Comment',
    subscription: 'Subscription',
    sub_6: '6 months — $25',
    sub_12: '12 months — $45',
    paypal_placeholder: 'PayPal button will appear here.',
    pay_now: 'Pay & send order',
    add_to_cart: 'Add to cart',
    review_title: 'Share your Amazon review',
    review_body: 'Leave a review and receive a bonus fairy tale by email.',
    review_link: 'Amazon review link',
    send_review: 'Send',
  },
  it: {
    eyebrow: 'Storie magiche per menti curiose',
    headline: 'Libreria online menta & lavanda per le fiabe della buonanotte',
    subhead: 'Scegli fiabe incantevoli, seleziona un abbonamento e ricevi la magia nella tua casella.',
    shop_now: 'Acquista ora',
    leave_review: 'Lascia una recensione',
    catalog: 'Fiabe in evidenza',
    catalog_hint: 'Scorri la collezione — aggiungi al carrello con un tocco.',
    cart_title: 'Il tuo carrello',
    cart_total: 'Totale',
    checkout: 'Checkout',
    how_it_works: 'Come funziona',
    step_select: 'Seleziona le storie dalla giostra.',
    step_choose: 'Scegli un abbonamento di 6 o 12 mesi.',
    step_pay: 'Paga in sicurezza con PayPal e ricevi aggiornamenti via email.',
    secure_note_title: 'Sicurezza e anti-bot',
    secure_note_body: 'Campi honeypot, validazione server e API con rate limit mantengono il checkout sicuro.',
    first_name: 'Nome',
    last_name: 'Cognome',
    email: 'Email',
    address: 'Indirizzo postale',
    comments: 'Commento',
    subscription: 'Abbonamento',
    sub_6: '6 mesi — $25',
    sub_12: '12 mesi — $45',
    paypal_placeholder: 'Il pulsante PayPal apparirà qui.',
    pay_now: 'Paga e invia l’ordine',
    add_to_cart: 'Aggiungi al carrello',
    review_title: 'Condividi la tua recensione Amazon',
    review_body: 'Lascia una recensione e ricevi una fiaba bonus via email.',
    review_link: 'Link alla recensione Amazon',
    send_review: 'Invia',
  },
  ru: {
    eyebrow: 'Волшебные истории для любознательных',
    headline: 'Мятно-лавандовый онлайн-магазин сказок',
    subhead: 'Выберите сказки, оформите подписку и получите магию на почту.',
    shop_now: 'Перейти к каталогу',
    leave_review: 'Оставить отзыв',
    catalog: 'Избранные сказки',
    catalog_hint: 'Листайте коллекцию и добавляйте книги в корзину в один клик.',
    cart_title: 'Ваша корзина',
    cart_total: 'Итого',
    checkout: 'Оформить заказ',
    how_it_works: 'Как это работает',
    step_select: 'Выберите истории в карусели.',
    step_choose: 'Укажите подписку на 6 или 12 месяцев.',
    step_pay: 'Оплатите через PayPal и получите уведомления на почту.',
    secure_note_title: 'Безопасность и защита от ботов',
    secure_note_body: 'Honeypot-поля, проверка на сервере и лимиты запросов защищают оплату.',
    first_name: 'Имя',
    last_name: 'Фамилия',
    email: 'Электронная почта',
    address: 'Почтовый адрес',
    comments: 'Комментарий',
    subscription: 'Подписка',
    sub_6: 'Полгода — $25',
    sub_12: 'Год — $45',
    paypal_placeholder: 'Кнопка PayPal появится здесь.',
    pay_now: 'Оплатить и отправить заказ',
    add_to_cart: 'Добавить в корзину',
    review_title: 'Поделитесь отзывом на Amazon',
    review_body: 'Оставьте отзыв и получите бонусную сказку по почте.',
    review_link: 'Ссылка на отзыв Amazon',
    send_review: 'Отправить',
  }
};

const cart = [];
const track = document.querySelector('#carouselTrack');
const template = document.querySelector('#bookCardTemplate');
const cartList = document.querySelector('#cartItems');
const cartTotal = document.querySelector('#cartTotal');
const checkoutModal = document.querySelector('#checkoutModal');
const reviewModal = document.querySelector('#reviewModal');

function renderBooks() {
  books.forEach((book) => {
    const card = template.content.cloneNode(true);
    card.querySelector('.card__image').src = book.image;
    card.querySelector('.card__image').alt = book.title;
    card.querySelector('.card__label').textContent = book.label;
    card.querySelector('.card__title').textContent = book.title;
    card.querySelector('.card__description').textContent = book.description;
    card.querySelector('.card__price').textContent = `$${book.price.toFixed(2)}`;
    card.querySelector('.add-to-cart').addEventListener('click', () => addToCart(book));
    track.appendChild(card);
  });
}

function addToCart(book) {
  const existing = cart.find((item) => item.id === book.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...book, quantity: 1 });
  }
  renderCart();
}

function removeFromCart(id) {
  const idx = cart.findIndex((item) => item.id === id);
  if (idx !== -1) cart.splice(idx, 1);
  renderCart();
}

function renderCart() {
  cartList.innerHTML = '';
  cart.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'cart-item';
    li.innerHTML = `
      <div class="cart-item__info">
        <strong>${item.title}</strong>
        <small>${item.quantity} × $${item.price.toFixed(2)}</small>
      </div>
      <button class="btn ghost" aria-label="Remove" aria-pressed="false">×</button>
    `;
    li.querySelector('button').addEventListener('click', () => removeFromCart(item.id));
    cartList.appendChild(li);
  });
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotal.textContent = `$${total.toFixed(2)}`;
}

function attachCarouselControls() {
  document.querySelector('#prevBook').addEventListener('click', () => track.scrollBy({ left: -260, behavior: 'smooth' }));
  document.querySelector('#nextBook').addEventListener('click', () => track.scrollBy({ left: 260, behavior: 'smooth' }));
}

function toggleModal(modal, open) {
  modal.setAttribute('aria-hidden', String(!open));
}

function applyTranslations(lang) {
  const dict = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll('.language-switcher button').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function validateHoneypot(formData) {
  return formData.get('website')?.trim() === '';
}

async function postJSON(url, payload) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error('Request failed');
  return response.json();
}

function setupForms() {
  document.querySelector('#checkoutForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (!validateHoneypot(formData)) return;
    const payload = Object.fromEntries(formData.entries());
    payload.cart = cart;
    try {
      await postJSON('/api/order', payload);
      alert('Order sent! You will receive an email confirmation.');
      toggleModal(checkoutModal, false);
    } catch (err) {
      console.error(err);
      alert('Unable to submit order. Please try again.');
    }
  });

  document.querySelector('#reviewForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (!validateHoneypot(formData)) return;
    const payload = Object.fromEntries(formData.entries());
    try {
      await postJSON('/api/review', payload);
      alert('Thank you! Your bonus story will arrive by email.');
      toggleModal(reviewModal, false);
    } catch (err) {
      console.error(err);
      alert('Unable to send review now.');
    }
  });
}

function initLanguageSwitcher() {
  document.querySelectorAll('.language-switcher button').forEach((btn) => {
    btn.addEventListener('click', () => applyTranslations(btn.dataset.lang));
  });
}

function initCTA() {
  document.querySelector('#shopNow').addEventListener('click', () => track.scrollIntoView({ behavior: 'smooth' }));
  document.querySelector('#checkoutBtn').addEventListener('click', () => toggleModal(checkoutModal, true));
  document.querySelector('#reviewPrompt').addEventListener('click', () => toggleModal(reviewModal, true));
  document.querySelectorAll('[data-close]').forEach((btn) => btn.addEventListener('click', () => toggleModal(btn.closest('.modal'), false)));
}

function init() {
  renderBooks();
  renderCart();
  attachCarouselControls();
  setupForms();
  initLanguageSwitcher();
  initCTA();
  applyTranslations('en');
}

init();

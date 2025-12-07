# FairyTales
commit
# FairyTales storefront

Одностраничный лендинг (mint + lavender) с каруселью карточек сказок, модальными окнами оформления заказа и формы отзыва. В комплекте – упрощённый Python/Flask API для приёма заказов/отзывов и PHP-заглушка на случай хостинга без Python.

## Структура проекта
- `public/` — фронтенд (HTML/CSS/JS).
  - `index.html` — разметка, модальные окна, шаблон карточек.
  - `styles.css` — мягкая мятно-фиолетовая тема, адаптивная сетка и карусель.
  - `scripts.js` — карусель, корзина, модалки, формы, трёхъязычный перевод (EN/IT/RU), honeypot от ботов.
- `backend/python/` — Flask API.
  - `app.py` — статическая выдача `public/`, POST `/api/order` и `/api/review`, запись в `data/orders.json`/`data/reviews.json`, TODO для e-mail и Google Sheets.
  - `requirements.txt` — зависимости (Flask).
- `backend/php/api.php` — лёгкая заглушка POST для PHP-хостинга (honeypot, TODO для SMTP/Sheets).
- `data/` — локальные JSON-логи заказов/отзывов (создаются автоматически).
- `assets/` — директория под изображения обложек (пока используется Unsplash-плейсхолдеры в JS).

## Что уже реализовано
- Карусель 5 карточек с кнопкой «Add to cart» и суммой корзины.
- Модальные окна «Checkout» и «Review», формы с honeypot-полем.
- Переключатель языков EN/IT/RU через словари i18n.
- PayPal-заглушка (`#paypalButtonContainer`) — готова к вставке реальной кнопки SDK.
- Базовый API `/api/order` и `/api/review`, пишет JSON-логи и проверяет honeypot.

## Безопасность и защита от ботов
- Honeypot-поля в формах.
- Серверные проверки обязательных полей.
- Отделённая точка для будущего rate limit/recaptcha (добавляется на уровне API gateway или Flask middleware).

## Запуск на Windows
1. Установите Python 3.11+ и Git.
2. Клонируйте репозиторий и перейдите в папку:
   ```powershell
   git clone <repo-url>
   cd FairyTales
   ```
3. Создайте и активируйте виртуальное окружение:
   ```powershell
   python -m venv .venv
   .\.venv\Scripts\Activate.ps1
   ```
4. Установите зависимости backend:
   ```powershell
   pip install -r backend\python\requirements.txt
   ```
5. Запустите Flask-сервер (обслуживает API и статику):
   ```powershell
   set FLASK_APP=backend/python/app.py
   set FLASK_ENV=development
   flask run --host=0.0.0.0 --port=5000
   ```
6. Откройте сайт: [http://localhost:5000](http://localhost:5000)

### PHP-вариант (если нет Python)
1. Установите PHP 8+.
2. Запустите встроенный сервер из корня проекта:
   ```powershell
   php -S localhost:8000 -t public backend\php\api.php
   ```
   или деплойте `public/` + `backend/php/api.php` на любой хостинг и укажите AJAX-URL `/backend/php/api.php` в `scripts.js`.

## Интеграция PayPal, почты и Google Sheets
- В блоке `#paypalButtonContainer` подключите PayPal JS SDK и отрендерьте кнопку с вашим client-id.
- В `backend/python/app.py` добавьте SMTP (например, через `smtplib` + переменные окружения) и Google Sheets API (service account + `gspread`).
- Для подсветки новых заказов в Google Sheets используйте условное форматирование по столбцу `createdAt` или статусу.

## Дальнейшие шаги
- Подставить реальные обложки в `assets/img` и обновить данные в `scripts.js`.
- Добавить reCAPTCHA/Turnstile и rate limit (Flask-Limiter или nginx).
- Вынести цены подписки в конфиг и синхронизировать с PayPal планами.
- Подключить отправку писем и запись в Google Sheets из API.

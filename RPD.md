я хочу закастомить домашнюю страницу в гугл хроме

Для такого сценария удобнее всего сделать собственную стартовую страницу (`new tab` или `home page`) как обычный React-проект и подключить её в Chrome через расширение.

Тебе нужна структура примерно такая:

* сверху/по центру — универсальная поисковая строка
* справа/слева селектор поисковика
* редактируемый горизонтальный список быстрых ссылок (youtube, github)
* остальная высота экрана — встроенный Google Calendar через iframe
* можно ставить темную, светлую, системную темы

Архитектура простая:

## Поисковые движки

Можно хранить конфиг:

```ts
const engines = {
  google: "https://www.google.com/search?q=",
  yandex: "https://yandex.ru/search/?text=",
  perplexity: "https://www.perplexity.ai/search?q=",
  deepseek: "https://chat.deepseek.com/search?q=",
  chatgpt: "https://chatgpt.com/?q="
};
```

При Enter:

```ts
window.location.href = engines[selected] + encodeURIComponent(query);
```

По умолчанию срабатывает автофокус на поисковую строку

---

## Google Calendar

Самый простой вариант — embed:

```html
<iframe
  src="https://calendar.google.com/calendar/embed?src=egogorka74@gmail.com"
  style="border:0"
  width="100%"
  height="100%"
></iframe>
```

Либо:

```html
https://calendar.google.com/calendar/u/0/r
```

Но iframe выглядит лучше для dashboard-стиля.

---

## Что я рекомендую

Сделать это как:

* React + Vite
* Tailwind, Shadcn, Lucide Icons
* Chrome Extension (override new tab)

Тогда:

* новая вкладка Chrome = твоя кастомная страница
* всё локально
* быстрый UI
* можно потом добавить:

  * вывод времени и даты
  * добавление собственных обоев или из коллекции unsplash, слайдшоу обоев или смена в зависимости от системной темы
  * возможность настраивать главную страницу
  * AI quick prompts
  * hotkeys
  * recent tabs

---

## Как подключить как New Tab

В `manifest.json`:

```json
{
  "manifest_version": 3,
  "name": "Custom Dashboard",
  "version": "1.0",
  "chrome_url_overrides": {
    "newtab": "index.html"
  }
}
```

После:

1. `chrome://extensions`
2. включить Developer Mode
3. Load unpacked
4. выбрать папку проекта

---

## UI-layout

Я бы сделал так:

```text
┌──────────────────────────────┐
│ [Google ▼] [ Search Input ]  │
├──────────────────────────────┤
│ [link icons] [edit link btn] │
├──────────────────────────────┤
│                              │
│        Google Calendar       │
│                              │
│                              │
└──────────────────────────────┘
```
В правом верхнем углу иконку шестеренки для настройки главной страницы
---

## Важный нюанс про ChatGPT / DeepSeek

Некоторые сайты:

* запрещают iframe
* имеют нестандартные query URL

Поэтому для них лучше просто делать redirect в новую вкладку:

```ts
window.open(url, "_self");
```

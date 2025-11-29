export const sections = [
    {
        id: 'problem',
        title: 'Проблема и Задача',
        icon: 'alert-circle',
        content: `
            <div class="grid md:grid-cols-5 gap-8">
                <div class="md:col-span-3">
                    <h3 class="text-xl font-bold text-slate-900 mb-4">Барьеры при продаже вещей (Fashion)</h3>
                    <p class="text-slate-600 mb-4 leading-relaxed">Процесс подачи объявления в категории «Одежда и обувь» часто прерывается из-за рутины. Пользователю нужно найти таблицу размеров, вспомнить точное название модели, определить состояние и придумать описание. Это занимает <strong>3-5 минут</strong>, что критично для сегмента C2C, где товары часто имеют низкий средний чек.</p>
                    <ul class="space-y-3 text-slate-600">
                        <li class="flex items-start gap-3">
                            <i data-lucide="clock-3" class="w-5 h-5 text-avito-blue shrink-0 mt-1"></i>
                            <div><strong>Трение ввода:</strong> Необходимость заполнять специфичные атрибуты (Бренд, Размер, Сезон, Состояние) вручную отпугивает "ленивых" продавцов.</div>
                        </li>
                        <li class="flex items-start gap-3">
                            <i data-lucide="help-circle" class="w-5 h-5 text-avito-blue shrink-0 mt-1"></i>
                            <div><strong>Неструктурированные данные:</strong> Пользователи пишут "размер по стельке 27см" в описании, но не указывают это в фильтрах, теряя трафик из поиска.</div>
                        </li>
                         <li class="flex items-start gap-3">
                            <i data-lucide="image-off" class="w-5 h-5 text-avito-blue shrink-0 mt-1"></i>
                            <div><strong>Качество контента:</strong> Отсутствие деталей о дефектах или оригинальности приводит к лишним вопросам в чате и низкому доверию (Trust & Safety).</div>
                        </li>
                    </ul>
                </div>
                <div class="md:col-span-2 bg-blue-50 rounded-xl p-6 border border-blue-100">
                    <h3 class="text-avito-blue font-bold mb-3 flex items-center gap-2"><i data-lucide="target" class="w-5 h-5"></i> Миссия ПродAI</h3>
                    <p class="text-slate-700 font-medium mb-3">Сделать продажу вещей такой же простой, как отправка голосового сообщения другу.</p>
                    <div class="text-xs text-slate-500 space-y-2">
                        <p><strong>Фокус-сегмент:</strong> Частные продавцы (C2C), Категория «Одежда, обувь и аксессуары».</p>
                        <p><strong>Цель:</strong> Снизить время подачи (Time-to-List) до < 1 минуты.</p>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 'solution',
        title: 'Решение: «Снимай и говори»',
        icon: 'wand-2',
        content: `
            <p class="text-center text-slate-600 max-w-2xl mx-auto mb-10">В рамках инициативы <strong>«ПродAI»</strong> мы внедряем мультимодальный автозаполнитель. Пользователь просто показывает кроссовки и называет цену.</p>
            <div class="grid gap-6 md:grid-cols-3 text-center">
                <div class="p-6 bg-white rounded-xl border border-slate-200 transition hover:border-avito-blue hover:shadow-lg">
                    <div class="flex items-center justify-center gap-3 mb-4">
                         <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-avito-blue"><i data-lucide="camera"></i></div>
                         <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-avito-blue"><i data-lucide="mic"></i></div>
                    </div>
                    <h4 class="font-bold text-slate-800 mb-2">1. Мультимодальный захват</h4>
                    <p class="text-sm text-slate-500">Продавец делает фото кроссовок и говорит: «Эти Nike Air Max, размер 42, состояние отличное, цена 5000 руб».</p>
                </div>
                <div class="p-6 bg-white rounded-xl border border-slate-200 transition hover:border-avito-blue hover:shadow-lg">
                    <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-avito-blue mx-auto mb-4"><i data-lucide="brain-circuit"></i></div>
                    <h4 class="font-bold text-slate-800 mb-2">2. Анализ ПродAI</h4>
                    <p class="text-sm text-slate-500">Vision-модель распознает силуэт Air Max и цвет. Audio-модель вычленяет размер, цену и состояние. LLM объединяет это в JSON.</p>
                </div>
                <div class="p-6 bg-white rounded-xl border border-slate-200 transition hover:border-avito-blue hover:shadow-lg">
                    <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-avito-blue mx-auto mb-4"><i data-lucide="check-circle-2"></i></div>
                    <h4 class="font-bold text-slate-800 mb-2">3. Публикация</h4>
                    <p class="text-sm text-slate-500">Черновик готов мгновенно. Категория, Бренд, Размер и Цена заполнены. Остается нажать «Разместить».</p>
                </div>
            </div>
        `
    },
    {
        id: 'architecture',
        title: 'Архитектура ПродAI',
        icon: 'cpu',
        content: `
            <p class="mb-6 text-slate-600 text-center max-w-3xl mx-auto">Решение использует гибридный пайплайн с параллельной обработкой (Parallel Streaming) для соблюдения SLA в <strong>5-10 секунд</strong>.</p>
            <div class="relative group cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-slate-50 mb-8" id="arch-img-container">
                <img src="https://placehold.co/1200x600/f1f5f9/334155/png?text=Architecture:+Input(Photo+Voice)+%3E+Vision(Brand/Color)+Audio(Size/Price)+%3E+Fusion+LLM+%3E+Item+Attributes"
                     alt="Диаграмма архитектуры ПродAI"
                     class="w-full object-cover transition duration-500 group-hover:scale-[1.02]">
                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span class="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold shadow-lg text-slate-800 flex items-center gap-2">
                        <i data-lucide="zoom-in" class="w-4 h-4"></i> Увеличить схему
                    </span>
                </div>
            </div>
            <div class="grid md:grid-cols-2 gap-6">
                <div class="p-6 bg-white rounded-lg border border-slate-200">
                    <h4 class="font-bold text-slate-800 mb-3 flex items-center gap-2"><i data-lucide="arrow-down-up" class="text-avito-blue w-4 h-4"></i> Поток данных</h4>
                    <ol class="list-decimal list-inside space-y-2 text-sm text-slate-600">
                        <li><strong>Клиент:</strong> Загрузка фото кроссовок + аудиострим.</li>
                        <li><strong>L1 Gateway:</strong> Классификация категории (Clip: "Shoes"). Маршрутизация на Fashion-воркеры.</li>
                        <li><strong>L2 Vision Expert:</strong> LLaVA / Qwen-VL (Fashion fine-tune) определяет бренд (Nike), модель (Air Max), цвет и видимый износ.</li>
                        <li><strong>L2 Audio Expert:</strong> Whisper v3 извлекает: {size: 42, price: 5000, condition: "excellent"}.</li>
                        <li><strong>L3 Fusion Core:</strong> LLM (GPT-4o-mini / DeepSeek) матчит "42" с сеткой бренда (US/EU) и формирует JSON.</li>
                    </ol>
                </div>
                 <div class="p-6 bg-white rounded-lg border border-slate-200">
                    <h4 class="font-bold text-slate-800 mb-3 flex items-center gap-2"><i data-lucide="server-cog" class="text-avito-blue w-4 h-4"></i> Технологический стек</h4>
                     <ul class="space-y-3 text-sm text-slate-600">
                        <li class="flex gap-2 items-start"><strong class="font-semibold text-slate-700 w-32 shrink-0">Frontend:</strong><span>MediaRecorder API, Canvas (image resize).</span></li>
                        <li class="flex gap-2 items-start"><strong class="font-semibold text-slate-700 w-32 shrink-0">Backend:</strong><span>Go (Orchestrator), Python (Inference).</span></li>
                        <li class="flex gap-2 items-start"><strong class="font-semibold text-slate-700 w-32 shrink-0">Vision:</strong><span>Qwen-VL-Chat (Int8) для детекции логотипов и тегов.</span></li>
                        <li class="flex gap-2 items-start"><strong class="font-semibold text-slate-700 w-32 shrink-0">ASR/NLP:</strong><span>Whisper V3 + Custom NER для извлечения размеров/цен.</span></li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        id: 'integration',
        title: 'Интеграция в экосистему',
        icon: 'git-merge',
        content: `
            <p class="text-center text-slate-600 max-w-2xl mx-auto mb-10">ПродAI усиливает существующие вертикали Avito новыми возможностями генеративного AI.</p>
            <div class="grid md:grid-cols-3 gap-6">
                <div class="p-6 bg-white rounded-lg border border-slate-200">
                    <h4 class="font-bold text-slate-800 mb-3 flex items-center gap-2"><i data-lucide="edit" class="text-avito-blue w-4 h-4"></i> 1. Smart Posting</h4>
                    <p class="text-sm text-slate-600 mb-3">Точка входа в категории "Личные вещи". Вместо анкеты — интерфейс камеры. Снижает Drop-off rate на этапе создания.</p>
                    <span class="text-xs font-bold uppercase text-green-600">Рост конверсии в листинг</span>
                </div>
                <div class="p-6 bg-white rounded-lg border border-slate-200">
                    <h4 class="font-bold text-slate-800 mb-3 flex items-center gap-2"><i data-lucide="shield-check" class="text-avito-blue w-4 h-4"></i> 2. Legit Check (Пре-скоринг)</h4>
                    <p class="text-sm text-slate-600 mb-3">Vision-модель проверяет фото на наличие запрещенных товаров или явных подделок (по качеству логотипа) перед модерацией.</p>
                    <span class="text-xs font-bold uppercase text-green-600">Безопасность сделки</span>
                </div>
                <div class="p-6 bg-white rounded-lg border border-slate-200">
                    <h4 class="font-bold text-slate-800 mb-3 flex items-center gap-2"><i data-lucide="search" class="text-avito-blue w-4 h-4"></i> 3. Поиск и Фильтры</h4>
                    <p class="text-sm text-slate-600 mb-3">Автоматическое заполнение фильтров (Размер: 42, Цвет: Белый) делает товар видимым для целевых покупателей.</p>
                    <span class="text-xs font-bold uppercase text-green-600">Рост ликвидности</span>
                </div>
            </div>
        `
    },
     {
        id: 'value',
        title: 'Ценность внедрения',
        icon: 'gem',
        content: `
            <div class="grid md:grid-cols-2 gap-8">
                <div class="p-6 bg-green-50 border border-green-200 rounded-xl">
                    <h3 class="text-xl font-bold text-green-800 mb-4 flex items-center gap-2"><i data-lucide="users" class="w-6 h-6"></i> Для пользователей</h3>
                     <ul class="space-y-4 text-green-900/80">
                        <li class="flex items-start gap-3">
                            <i data-lucide="rocket" class="w-5 h-5 shrink-0 mt-1"></i>
                            <div><strong>Скорость:</strong> Объявление готово за 1 минуту. Не нужно печатать текст на смартфоне.</div>
                        </li>
                        <li class="flex items-start gap-3">
                            <i data-lucide="check" class="w-5 h-5 shrink-0 mt-1"></i>
                            <div><strong>Точность:</strong> ПродAI сам определит категорию и подскажет, если цена сильно ниже рыночной.</div>
                        </li>
                         <li class="flex items-start gap-3">
                            <i data-lucide="trending-up" class="w-5 h-5 shrink-0 mt-1"></i>
                            <div><strong>Продажи:</strong> Структурированные объявления с полными характеристиками получают больше просмотров.</div>
                        </li>
                    </ul>
                </div>
                <div class="p-6 bg-blue-50 border border-blue-200 rounded-xl">
                     <h3 class="text-xl font-bold text-avito-blue mb-4 flex items-center gap-2"><i data-lucide="briefcase" class="w-6 h-6"></i> Для бизнеса (Avito)</h3>
                     <ul class="space-y-4 text-blue-900/80">
                        <li class="flex items-start gap-3">
                            <i data-lucide="database" class="w-5 h-5 shrink-0 mt-1"></i>
                            <div><strong>Structured Data:</strong> На 40% больше объявлений с заполненными полями «Бренд» и «Размер», что улучшает фасетный поиск.</div>
                        </li>
                        <li class="flex items-start gap-3">
                            <i data-lucide="user-check" class="w-5 h-5 shrink-0 mt-1"></i>
                            <div><strong>Retention:</strong> Уникальный UX (Voice+Vision) выделяет Avito среди конкурентов и повышает лояльность зумеров.</div>
                        </li>
                         <li class="flex items-start gap-3">
                            <i data-lucide="layers" class="w-5 h-5 shrink-0 mt-1"></i>
                            <div><strong>Content Quality:</strong> Снижение доли объявлений с описанием "продаю кроссы" без деталей.</div>
                        </li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        id: 'metrics',
        title: 'Ключевые метрики (KPI)',
        icon: 'bar-chart-3',
        content: `
            <div class="overflow-x-auto bg-white rounded-lg border border-slate-200">
                <table class="w-full text-sm text-left text-slate-600">
                    <thead class="text-xs text-slate-700 uppercase bg-slate-50">
                        <tr>
                            <th scope="col" class="px-6 py-3">Метрика</th>
                            <th scope="col" class="px-6 py-3">Цель ПродAI</th>
                            <th scope="col" class="px-6 py-3">Бенчмарк</th>
                            <th scope="col" class="px-6 py-3">Комментарий</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b hover:bg-slate-50 transition">
                            <th scope="row" class="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">Time-to-List</th>
                            <td class="px-6 py-4 font-bold text-green-600">< 60 сек</td>
                            <td class="px-6 py-4">~3-4 мин</td>
                            <td class="px-6 py-4">Время от старта до кнопки "Опубликовать".</td>
                        </tr>
                        <tr class="bg-white border-b hover:bg-slate-50 transition">
                            <th scope="row" class="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">Autofill Accuracy</th>
                            <td class="px-6 py-4 font-bold text-green-600">> 95%</td>
                            <td class="px-6 py-4">N/A</td>
                            <td class="px-6 py-4">Точность определения бренда и размера.</td>
                        </tr>
                        <tr class="bg-white border-b hover:bg-slate-50 transition">
                            <th scope="row" class="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">Filter Usage</th>
                            <td class="px-6 py-4 font-bold text-green-600">100%</td>
                            <td class="px-6 py-4">~60%</td>
                            <td class="px-6 py-4">Полнота заполнения полей (Размер, Бренд).</td>
                        </tr>
                        <tr class="bg-white hover:bg-slate-50 transition">
                            <th scope="row" class="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">Processing Latency</th>
                            <td class="px-6 py-4 font-bold text-green-600">< 5-7 сек</td>
                            <td class="px-6 py-4">N/A</td>
                            <td class="px-6 py-4">Быстрая магия для удержания внимания.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `
    },
    {
        id: 'risks',
        title: 'Риски и Митигация',
        icon: 'alert-triangle',
        content: `
            <div class="overflow-x-auto bg-white rounded-lg border border-slate-200">
                <table class="w-full text-sm text-left text-slate-600">
                    <thead class="text-xs text-slate-700 uppercase bg-slate-50">
                        <tr>
                            <th scope="col" class="px-6 py-3">Риск</th>
                            <th scope="col" class="px-6 py-3">Вероятность</th>
                            <th scope="col" class="px-6 py-3">Стратегия митигации</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b hover:bg-slate-50 transition">
                            <th scope="row" class="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">Ошибки распознавания (Галлюцинации)</th>
                            <td class="px-6 py-4"><span class="px-2 py-1 bg-red-100 text-red-700 rounded-md text-xs">Высокая</span></td>
                            <td class="px-6 py-4">
                                1. <strong>Confidence Score:</strong> Если модель не уверена в размере (видно плохо), поле остается пустым для ручного ввода.<br>
                                2. <strong>Human-in-the-loop:</strong> Просим подтвердить критичные поля.
                            </td>
                        </tr>
                        <tr class="bg-white border-b hover:bg-slate-50 transition">
                            <th scope="row" class="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">Шум и акцент в аудио</th>
                            <td class="px-6 py-4"><span class="px-2 py-1 bg-orange-100 text-orange-700 rounded-md text-xs">Средняя</span></td>
                            <td class="px-6 py-4">
                                1. <strong>Whisper Large v3:</strong> Отлично справляется с русским языком и акцентами.<br>
                                2. <strong>Context:</strong> Использование данных Vision для коррекции (если слышим "Адидас", а видим "Найк" -> приоритет Vision).
                            </td>
                        </tr>
                        <tr class="bg-white border-b hover:bg-slate-50 transition">
                            <th scope="row" class="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">Неверная категория</th>
                            <td class="px-6 py-4"><span class="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs">Низкая</span></td>
                            <td class="px-6 py-4">
                                Использование CLIP (Contrastive Language-Image Pre-training) для надежной классификации изображения товара до запуска тяжелых LLM.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `
    },
    {
        id: 'example',
        title: 'Сценарий: Продажа Кроссовок',
        icon: 'shopping-bag',
        content: `
            <p class="text-center text-slate-600 max-w-2xl mx-auto mb-10">User Journey: продажа ненужной пары обуви за 30 секунд.</p>
            <div class="bg-white rounded-xl border border-slate-200 p-6 md:p-8">
                <ol class="relative border-l border-slate-200 space-y-12">
                    <li class="ml-8">
                        <span class="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-white">
                            <i data-lucide="mouse-pointer-click" class="w-4 h-4 text-avito-blue"></i>
                        </span>
                        <h3 class="font-bold text-slate-800 mb-1">Шаг 1: Старт</h3>
                        <p class="text-sm text-slate-500">Пользователь нажимает «Разместить» и выбирает камеру.</p>
                    </li>
                    <li class="ml-8">
                        <span class="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-white">
                            <i data-lucide="video" class="w-4 h-4 text-avito-blue"></i>
                        </span>
                        <h3 class="font-bold text-slate-800 mb-1">Шаг 2: Фото и Голос</h3>
                        <p class="text-sm text-slate-500">Фотографирует кроссовки сбоку и надиктовывает:</p>
                        <blockquote class="mt-2 text-sm italic text-slate-600 border-l-2 border-avito-blue pl-3 py-1">"Эти Nike Air Max, размер 42, состояние отличное, цена 5000 руб. Носил пару раз в зале."</blockquote>
                    </li>
                    <li class="ml-8">
                        <span class="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-white">
                            <i data-lucide="loader" class="w-4 h-4 text-avito-blue animate-spin"></i>
                        </span>
                        <h3 class="font-bold text-slate-800 mb-1">Шаг 3: Магия ПродAI</h3>
                        <p class="text-sm text-slate-500">
                            • <strong>Vision:</strong> Бренд=Nike, Модель=Air Max 90, Цвет=White/Red.<br>
                            • <strong>Audio:</strong> Размер=42, Цена=5000, Состояние=Отличное.
                        </p>
                    </li>
                     <li class="ml-8">
                        <span class="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-white">
                            <i data-lucide="file-check-2" class="w-4 h-4 text-avito-blue"></i>
                        </span>
                        <h3 class="font-bold text-slate-800 mb-1">Шаг 4: Готовое объявление</h3>
                        <p class="text-sm text-slate-500">Поля заполнены. Пользователь видит превью и нажимает «Опубликовать».</p>
                         <div class="mt-3 p-4 bg-slate-50 border border-dashed rounded-lg space-y-2 text-sm">
                           <p><strong>Товар:</strong> Кроссовки Nike Air Max <i data-lucide="camera" class="inline w-3 h-3 text-slate-400"></i></p>
                           <p><strong>Размер:</strong> 42 EU <i data-lucide="mic" class="inline w-3 h-3 text-slate-400"></i></p>
                           <p><strong>Цена:</strong> 5 000 ₽ <i data-lucide="mic" class="inline w-3 h-3 text-slate-400"></i></p>
                           <p><strong>Состояние:</strong> Отличное <i data-lucide="mic" class="inline w-3 h-3 text-slate-400"></i></p>
                         </div>
                    </li>
                </ol>
            </div>
        `
    },

];

export const demoData = {
    resultTitle: "Nike Air Max, 42",
    resultSubtitle: "Данные извлечены из фото и голоса",
    loadingSteps: [
        "Загрузка медиа (Photo + Voice)...",
        "Vision: поиск объекта 'Обувь'...",
        "Vision: определение бренда (Nike)...",
        "Audio: транскрибация 'размер 42'...",
        "NLP: структурирование атрибутов...",
        "Проверка на соответствие (Validation)...",
        "Генерация описания..."
    ],
    fields: [
        { label: "Категория", value: "Одежда, обувь > Мужская обувь", confidence: 0.99, source: 'vision' },
        { label: "Бренд", value: "Nike", confidence: 0.99, source: 'vision' },
        { label: "Модель", value: "Air Max", confidence: 0.95, source: 'voice' },
        { label: "Размер", value: "42", confidence: 0.98, source: 'voice' },
        { label: "Цвет", value: "Белый / Красный", confidence: 0.92, source: 'vision' },
        { label: "Состояние", value: "Отличное", confidence: 0.96, source: 'voice' },
        { label: "Цена", value: "5 000 ₽", confidence: 0.99, source: 'voice' },
        { label: "Оригинал", value: "Да (Предварительно)", confidence: 0.85, source: 'vision' }
    ],
    description: "Продаю кроссовки Nike Air Max, размер 42. Цвет белый с красными элементами. Состояние отличное, носил пару раз. Цена 5000 руб. Возможен небольшой торг."
};

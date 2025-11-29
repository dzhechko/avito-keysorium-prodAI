export const sections = [
    {
        id: 'problem',
        title: 'Проблема и Задача',
        icon: 'alert-circle',
        content: `
            <div class="grid md:grid-cols-5 gap-8">
                <div class="md:col-span-3">
                    <h3 class="text-xl font-bold text-slate-900 mb-4">Сложность и "Холодный старт" при подаче</h3>
                    <p class="text-slate-600 mb-4 leading-relaxed">Текущий процесс подачи объявления (Create Item Flow, CIF) остаётся высоким барьером, особенно для частных продавцов в категории «Авто». Ручное заполнение множества технических параметров занимает в среднем <strong>3-5 минут</strong>. Этот процесс вызывает фрустрацию, провоцирует высокий процент отказов и создаёт эффект "холодного старта", когда пользователь откладывает продажу.</p>
                    <ul class="space-y-3 text-slate-600">
                        <li class="flex items-start gap-3">
                            <i data-lucide="clock-3" class="w-5 h-5 text-avito-blue shrink-0 mt-1"></i>
                            <div><strong>Потеря времени:</strong> Необходимость вспоминать и вводить десятки атрибутов (модификация, комплектация, VIN) снижает конверсию в публикацию.</div>
                        </li>
                        <li class="flex items-start gap-3">
                            <i data-lucide="database-zap" class="w-5 h-5 text-avito-blue shrink-0 mt-1"></i>
                            <div><strong>Неполнота данных:</strong> Пользователи пропускают необязательные поля, что снижает качество сниппета в выдаче и эффективность рекомендательных алгоритмов.</div>
                        </li>
                         <li class="flex items-start gap-3">
                            <i data-lucide="search-slash" class="w-5 h-5 text-avito-blue shrink-0 mt-1"></i>
                            <div><strong>Снижение ликвидности:</strong> Объявления с низким "качеством контента" получают меньше охватов, замедляя сделку и ухудшая общий UX платформы.</div>
                        </li>
                    </ul>
                </div>
                <div class="md:col-span-2 bg-blue-50 rounded-xl p-6 border border-blue-100">
                    <h3 class="text-avito-blue font-bold mb-3 flex items-center gap-2"><i data-lucide="target" class="w-5 h-5"></i> Миссия ПродAI</h3>
                    <p class="text-slate-700 font-medium mb-3">Создать интеллектуальный интерфейс, который сокращает время подачи объявления до минимума, сохраняя при этом эталонную точность данных.</p>
                    <div class="text-xs text-slate-500 space-y-2">
                        <p><strong>Фокус-сегмент:</strong> Частные продавцы (C2C), Категория «Авто».</p>
                        <p><strong>Цель:</strong> Трансформация процесса из "заполнения анкеты" в "интуитивный рассказ".</p>
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
            <p class="text-center text-slate-600 max-w-2xl mx-auto mb-10">В рамках инициативы <strong>«ПродAI»</strong> мы внедряем мультимодальный автозаполнитель. Пользователь больше не взаимодействует с формой напрямую — он просто показывает товар и рассказывает о нем.</p>
            <div class="grid gap-6 md:grid-cols-3 text-center">
                <div class="p-6 bg-white rounded-xl border border-slate-200 transition hover:border-avito-blue hover:shadow-lg">
                    <div class="flex items-center justify-center gap-3 mb-4">
                         <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-avito-blue"><i data-lucide="camera"></i></div>
                         <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-avito-blue"><i data-lucide="mic"></i></div>
                    </div>
                    <h4 class="font-bold text-slate-800 mb-2">1. Мультимодальный захват</h4>
                    <p class="text-sm text-slate-500">Продавец делает фото автомобиля и наговаривает описание: «Chevrolet Cruze 2018, пробег 85 тысяч, я второй владелец, есть зимняя резина, была царапина на бампере».</p>
                </div>
                <div class="p-6 bg-white rounded-xl border border-slate-200 transition hover:border-avito-blue hover:shadow-lg">
                    <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-avito-blue mx-auto mb-4"><i data-lucide="brain-circuit"></i></div>
                    <h4 class="font-bold text-slate-800 mb-2">2. Анализ ПродAI</h4>
                    <p class="text-sm text-slate-500">Система за 5-10 секунд обрабатывает потоки: Vision-модель считывает марку, цвет и дефекты. Voice-модель транскрибирует речь и извлекает структурированные данные (год, пробег, комплектация).</p>
                </div>
                <div class="p-6 bg-white rounded-xl border border-slate-200 transition hover:border-avito-blue hover:shadow-lg">
                    <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-avito-blue mx-auto mb-4"><i data-lucide="check-circle-2"></i></div>
                    <h4 class="font-bold text-slate-800 mb-2">3. Smart-форма</h4>
                    <p class="text-sm text-slate-500">Пользователь получает заполненный на 90% черновик. ПродAI подсвечивает неуверенные поля и предлагает проверить их, минимизируя риск ошибок.</p>
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
                <img src="https://placehold.co/1200x600/f1f5f9/334155/png?text=Architecture+Diagram:+Client+%3E+Gateway+%3E+Vision/Audio+Experts+%3E+Fusion+LLM+%3E+JSON"
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
                    <h4 class="font-bold text-slate-800 mb-3 flex items-center gap-2"><i data-lucide="arrow-down-up" class="text-avito-blue w-4 h-4"></i> Поток данных (Client-Server-LLM)</h4>
                    <ol class="list-decimal list-inside space-y-2 text-sm text-slate-600">
                        <li><strong>Клиент:</strong> Загрузка медиа на бэкенд. Optimistic UI отображает прогресс.</li>
                        <li><strong>L1 Gateway:</strong> Маршрутизация и классификация категории (CLIP/ViT).</li>
                        <li><strong>L2 Vision Expert:</strong> Fine-tuned LLaVA/Qwen-VL-Max (INT8) для анализа фото (VIN, номер, кузов).</li>
                        <li><strong>L2 Audio Expert:</strong> Whisper v3 (Large) + Hermes-2 для извлечения сущностей из голоса.</li>
                        <li><strong>L3 Fusion Core:</strong> GPT-4o / DeepSeek V2 агрегирует JSON, разрешает конфликты (фото > голос) и матчит атрибуты с таксономией Avito.</li>
                        <li><strong>Ответ:</strong> JSON с данными и Confidence Score для подсветки полей.</li>
                    </ol>
                </div>
                 <div class="p-6 bg-white rounded-lg border border-slate-200">
                    <h4 class="font-bold text-slate-800 mb-3 flex items-center gap-2"><i data-lucide="server-cog" class="text-avito-blue w-4 h-4"></i> Технологический стек</h4>
                     <ul class="space-y-3 text-sm text-slate-600">
                        <li class="flex gap-2 items-start"><strong class="font-semibold text-slate-700 w-32 shrink-0">Frontend:</strong><span>MediaRecorder API, Optimistic UI.</span></li>
                        <li class="flex gap-2 items-start"><strong class="font-semibold text-slate-700 w-32 shrink-0">Backend:</strong><span>Go/Python (FastAPI), gRPC.</span></li>
                        <li class="flex gap-2 items-start"><strong class="font-semibold text-slate-700 w-32 shrink-0">Inference:</strong><span>vLLM / TensorRT-LLM на GPU A100.</span></li>
                        <li class="flex gap-2 items-start"><strong class="font-semibold text-slate-700 w-32 shrink-0">Модели:</strong><span>Qwen-VL, Whisper V3, DeepSeek (Quantized INT8).</span></li>
                        <li class="flex gap-2 items-start"><strong class="font-semibold text-slate-700 w-32 shrink-0">Storage:</strong><span>PostgreSQL, PGVector (для поиска по атрибутам).</span></li>
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
            <p class="text-center text-slate-600 max-w-2xl mx-auto mb-10">ПродAI бесшовно встраивается в существующие процессы Avito, усиливая их за счет генеративных технологий.</p>
            <div class="grid md:grid-cols-3 gap-6">
                <div class="p-6 bg-white rounded-lg border border-slate-200">
                    <h4 class="font-bold text-slate-800 mb-3 flex items-center gap-2"><i data-lucide="edit" class="text-avito-blue w-4 h-4"></i> 1. Форма подачи (CIF)</h4>
                    <p class="text-sm text-slate-600 mb-3">Новая точка входа: кнопка <strong>«Заполнить через ПродAI»</strong> на экране выбора категории. Запускает интерфейс камеры и микрофона.</p>
                    <span class="text-xs font-bold uppercase text-green-600">Ускорение Time-to-List</span>
                </div>
                <div class="p-6 bg-white rounded-lg border border-slate-200">
                    <h4 class="font-bold text-slate-800 mb-3 flex items-center gap-2"><i data-lucide="shield-check" class="text-avito-blue w-4 h-4"></i> 2. Trust & Safety</h4>
                    <p class="text-sm text-slate-600 mb-3">Автоматическая кросс-валидация. Если голос говорит "не бита", а Vision видит вмятину — объявление маркируется для ручной модерации.</p>
                    <span class="text-xs font-bold uppercase text-green-600">Контроль качества</span>
                </div>
                <div class="p-6 bg-white rounded-lg border border-slate-200">
                    <h4 class="font-bold text-slate-800 mb-3 flex items-center gap-2"><i data-lucide="search" class="text-avito-blue w-4 h-4"></i> 3. Поиск и Рекомендации</h4>
                    <p class="text-sm text-slate-600 mb-3">Обогащение индекса скрытыми атрибутами ("зимняя резина", "панорама"), которые пользователи забывают указать вручную.</p>
                    <span class="text-xs font-bold uppercase text-green-600">Рост релевантности</span>
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
                            <div><strong>Скорость:</strong> Создание объявления занимает менее 2 минут. Исчезает страх перед сложной формой.</div>
                        </li>
                        <li class="flex items-start gap-3">
                            <i data-lucide="mouse-pointer-click" class="w-5 h-5 shrink-0 mt-1"></i>
                            <div><strong>Удобство:</strong> Естественный интерфейс ("покажи и скажи"), снижающий когнитивную нагрузку.</div>
                        </li>
                         <li class="flex items-start gap-3">
                            <i data-lucide="trending-up" class="w-5 h-5 shrink-0 mt-1"></i>
                            <div><strong>Эффективность:</strong> Заполненные объявления получают больше просмотров и продаются быстрее.</div>
                        </li>
                    </ul>
                </div>
                <div class="p-6 bg-blue-50 border border-blue-200 rounded-xl">
                     <h3 class="text-xl font-bold text-avito-blue mb-4 flex items-center gap-2"><i data-lucide="briefcase" class="w-6 h-6"></i> Для бизнеса (Avito)</h3>
                     <ul class="space-y-4 text-blue-900/80">
                        <li class="flex items-start gap-3">
                            <i data-lucide="database" class="w-5 h-5 shrink-0 mt-1"></i>
                            <div><strong>Enriched Data:</strong> Рост полноты атрибутов на 40-50%, что улучшает работу поисковых алгоритмов.</div>
                        </li>
                        <li class="flex items-start gap-3">
                            <i data-lucide="user-check" class="w-5 h-5 shrink-0 mt-1"></i>
                            <div><strong>Loyalty:</strong> "Вау-эффект" от использования AI повышает метрики удержания (Retention).</div>
                        </li>
                         <li class="flex items-start gap-3">
                            <i data-lucide="dollar-sign" class="w-5 h-5 shrink-0 mt-1"></i>
                            <div><strong>Cost Efficiency:</strong> Снижение нагрузки на модерацию за счет AI-прескоринга контента.</div>
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
                            <td class="px-6 py-4 font-bold text-green-600">< 2 минут</td>
                            <td class="px-6 py-4">~3-5 минут</td>
                            <td class="px-6 py-4">Ключевой показатель удобства.</td>
                        </tr>
                        <tr class="bg-white border-b hover:bg-slate-50 transition">
                            <th scope="row" class="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">Autofill Acceptance</th>
                            <td class="px-6 py-4 font-bold text-green-600">> 80%</td>
                            <td class="px-6 py-4">N/A</td>
                            <td class="px-6 py-4">Доля полей, принятых пользователем без правок.</td>
                        </tr>
                        <tr class="bg-white border-b hover:bg-slate-50 transition">
                            <th scope="row" class="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">Attribute Fill Rate</th>
                            <td class="px-6 py-4 font-bold text-green-600">> 90%</td>
                            <td class="px-6 py-4">~55%</td>
                            <td class="px-6 py-4">Полнота заполнения характеристик товара.</td>
                        </tr>
                        <tr class="bg-white border-b hover:bg-slate-50 transition">
                            <th scope="row" class="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">Conversion Uplift</th>
                             <td class="px-6 py-4 font-bold text-green-600">+20%</td>
                            <td class="px-6 py-4">Baseline</td>
                            <td class="px-6 py-4">Рост конверсии из поиска в контакт.</td>
                        </tr>
                        <tr class="bg-white hover:bg-slate-50 transition">
                            <th scope="row" class="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">Processing Latency</th>
                            <td class="px-6 py-4 font-bold text-green-600">< 10 секунд</td>
                            <td class="px-6 py-4">N/A</td>
                            <td class="px-6 py-4">SLA для сохранения "магии" UX.</td>
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
                            <th scope="col" class="px-6 py-3">Стратегия митигации (ПродAI)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b hover:bg-slate-50 transition">
                            <th scope="row" class="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">Галлюцинации LLM</th>
                            <td class="px-6 py-4"><span class="px-2 py-1 bg-red-100 text-red-700 rounded-md text-xs">Высокая</span></td>
                            <td class="px-6 py-4">
                                1. <strong>Confidence Score:</strong> Явная подсветка неуверенных данных.<br>
                                2. <strong>Ground Truth:</strong> Приоритет данных Vision (VIN, приборная панель) над голосом.
                            </td>
                        </tr>
                        <tr class="bg-white border-b hover:bg-slate-50 transition">
                            <th scope="row" class="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">Latency > 10 сек</th>
                            <td class="px-6 py-4"><span class="px-2 py-1 bg-orange-100 text-orange-700 rounded-md text-xs">Средняя</span></td>
                            <td class="px-6 py-4">
                                1. <strong>Optimistic UI:</strong> Асинхронное заполнение полей.<br>
                                2. <strong>Optimization:</strong> Квантизация моделей (INT8), vLLM, Streaming API.
                            </td>
                        </tr>
                        <tr class="bg-white border-b hover:bg-slate-50 transition">
                            <th scope="row" class="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">Privacy (Голос)</th>
                            <td class="px-6 py-4"><span class="px-2 py-1 bg-orange-100 text-orange-700 rounded-md text-xs">Средняя</span></td>
                            <td class="px-6 py-4">
                                1. <strong>Diarization:</strong> Удаление посторонних голосов.<br>
                                2. <strong>Policy:</strong> Прозрачное согласие на обработку аудио для заполнения.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `
    },
    {
        id: 'example',
        title: 'Сценарий: Продажа Авто',
        icon: 'car',
        content: `
            <p class="text-center text-slate-600 max-w-2xl mx-auto mb-10">User Journey: как ПродAI помогает частному продавцу создать идеальное объявление.</p>
            <div class="bg-white rounded-xl border border-slate-200 p-6 md:p-8">
                <ol class="relative border-l border-slate-200 space-y-12">
                    <li class="ml-8">
                        <span class="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-white">
                            <i data-lucide="mouse-pointer-click" class="w-4 h-4 text-avito-blue"></i>
                        </span>
                        <h3 class="font-bold text-slate-800 mb-1">Шаг 1: Старт</h3>
                        <p class="text-sm text-slate-500">Пользователь нажимает «Продать» и выбирает опцию <strong>«Ускорить с ПродAI»</strong>.</p>
                    </li>
                    <li class="ml-8">
                        <span class="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-white">
                            <i data-lucide="video" class="w-4 h-4 text-avito-blue"></i>
                        </span>
                        <h3 class="font-bold text-slate-800 mb-1">Шаг 2: Съемка и Рассказ</h3>
                        <p class="text-sm text-slate-500">Наводит камеру на авто и говорит:</p>
                        <blockquote class="mt-2 text-sm italic text-slate-600 border-l-2 border-avito-blue pl-3 py-1">"Продаю Chevrolet Cruze 2018 года. Пробег сто сорок пять тысяч. Я второй владелец, ПТС оригинал. 1.8 автомат. Была небольшая авария, но все починили."</blockquote>
                    </li>
                    <li class="ml-8">
                        <span class="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-white">
                            <i data-lucide="loader" class="w-4 h-4 text-avito-blue animate-spin"></i>
                        </span>
                        <h3 class="font-bold text-slate-800 mb-1">Шаг 3: Магия ПродAI (5-10 сек)</h3>
                        <p class="text-sm text-slate-500">
                            • <strong>Vision:</strong> Определяет "Chevrolet Cruze", белый седан, литые диски.<br>
                            • <strong>Audio:</strong> Извлекает: {год: 2018, пробег: 145000, владельцы: 2, дтп: true}.
                        </p>
                    </li>
                     <li class="ml-8">
                        <span class="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-white">
                            <i data-lucide="file-check-2" class="w-4 h-4 text-avito-blue"></i>
                        </span>
                        <h3 class="font-bold text-slate-800 mb-1">Шаг 4: Результат</h3>
                        <p class="text-sm text-slate-500">Форма заполнена. Поля "Состояние" и "ДТП" подсвечены для проверки.</p>
                         <div class="mt-3 p-4 bg-slate-50 border border-dashed rounded-lg space-y-2 text-sm">
                           <p><strong>Авто:</strong> Chevrolet Cruze (2018) <i data-lucide="mic" class="inline w-3 h-3 text-slate-400"></i></p>
                           <p><strong>Пробег:</strong> 145 000 км <i data-lucide="mic" class="inline w-3 h-3 text-slate-400"></i></p>
                           <p><strong>Цвет:</strong> Белый <i data-lucide="camera" class="inline w-3 h-3 text-slate-400"></i></p>
                           <p><strong>Состояние:</strong> <span class="bg-yellow-100/80 px-1 rounded text-yellow-700 font-medium">Битый / Ремонт</span> (AI обнаружил несоответствие)</p>
                         </div>
                    </li>
                </ol>
            </div>
        `
    },

];

export const demoData = {
    loadingSteps: [
        "Загрузка медиа в ПродAI...",
        "Vision: анализ геометрии кузова...",
        "Audio: транскрибация речи...",
        "NLP: извлечение атрибутов...",
        "Fusion: разрешение конфликтов...",
        "Генерация продающего описания...",
        "Финальная сборка объявления..."
    ],
    fields: [
        { label: "Категория", value: "Авто > Chevrolet > Cruze", confidence: 0.99, source: 'vision' },
        { label: "Год выпуска", value: "2018", confidence: 0.98, source: 'voice' },
        { label: "Пробег", value: "85 000 км", confidence: 0.95, source: 'voice' },
        { label: "Кузов", value: "Седан", confidence: 0.97, source: 'vision' },
        { label: "Цвет", value: "Белый", confidence: 0.92, source: 'vision' },
        { label: "Двигатель", value: "1.8 л / 141 л.с. / Бензин", confidence: 0.89, source: 'voice' },
        { label: "Коробка", value: "Автоматическая", confidence: 0.96, source: 'voice' },
        { label: "Владельцев", value: "2", confidence: 0.93, source: 'voice' },
        { label: "Состояние", value: "Не битый", confidence: 0.85, source: 'conflict' }
    ],
    description: "Продаю Chevrolet Cruze 2018 года. Автомобиль в белом цвете, кузов седан. Надежный двигатель 1.8 на автомате. Пробег 85 000 км, я второй владелец. Машина в хорошем техническом состоянии, есть комплект резины."
};

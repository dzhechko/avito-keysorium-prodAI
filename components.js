export function createSection(section) {
    const sectionEl = document.createElement('section');
    sectionEl.id = section.id;
    sectionEl.className = 'section-card animate-fade-in-up';
    sectionEl.style.animationDelay = '0.2s'; // dynamic delay handled by observer usually, simplifying here

    let innerHTML = `
        <div class="section-header collapsible-trigger" data-target="${section.id}-content">
            <h2 class="section-title">
                <div class="w-10 h-10 rounded-lg bg-blue-50 text-avito-blue flex items-center justify-center">
                    <i data-lucide="${section.icon}"></i>
                </div>
                ${section.title}
            </h2>
            <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 transition-transform duration-300" id="${section.id}-arrow"></i>
        </div>
        <div class="collapsible-content open" id="${section.id}-content">
            <div class="collapsible-inner section-content">
    `;

    if (section.type === 'table') {
        innerHTML += createMetricsTable(section.data);
    } else {
        innerHTML += section.content;
    }

    innerHTML += `
            </div>
        </div>
    `;

    sectionEl.innerHTML = innerHTML;
    return sectionEl;
}

function createMetricsTable(data) {
    const rows = data.map(row => `
        <tr>
            <td><span class="font-medium text-slate-800">${row.category}</span></td>
            <td>${row.metric}</td>
            <td><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">${row.target}</span></td>
            <td class="text-slate-500 text-xs">${row.desc}</td>
        </tr>
    `).join('');

    return `
        <div class="overflow-x-auto">
            <table class="avito-table" id="metrics-table">
                <thead>
                    <tr>
                        <th onclick="window.sortTable(0)">Категория <i data-lucide="arrow-up-down" class="inline w-3 h-3 ml-1"></i></th>
                        <th onclick="window.sortTable(1)">Метрика</th>
                        <th onclick="window.sortTable(2)">Цель</th>
                        <th onclick="window.sortTable(3)">Обоснование</th>
                    </tr>
                </thead>
                <tbody>
                    ${rows}
                </tbody>
            </table>
        </div>
    `;
}

export function renderDemoField(field) {
    const isMagic = field.confidence > 0.9;
    const iconHtml = isMagic ? `<i data-lucide="sparkles" class="w-3 h-3 text-avito-blue animate-pulse"></i>` : '';
    
    return `
        <div class="flex flex-col gap-1">
            <label class="text-xs font-bold text-slate-500 uppercase flex items-center gap-1">
                ${field.label} ${iconHtml}
            </label>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 font-medium flex items-center justify-between">
                <span>${field.value}</span>
                ${isMagic ? '<span class="text-[10px] bg-blue-100 text-avito-blue px-1.5 py-0.5 rounded font-bold">AUTO</span>' : ''}
            </div>
        </div>
    `;
}

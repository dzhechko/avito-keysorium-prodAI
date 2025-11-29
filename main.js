import { sections, demoData } from './data.js';

const DESKTOP_MENU = document.getElementById('desktop-menu');
const MOBILE_MENU = document.getElementById('mobile-menu');
const CONTENT_ROOT = document.getElementById('content-root');
const NAVBAR = document.getElementById('navbar');

function init() {
    renderNavigation();
    renderSections();
    setupEventListeners();
    lucide.createIcons();
}

function renderNavigation() {
    const navLinks = sections.map(section => 
        `<a href="#${section.id}" class="px-3 py-2 rounded-md hover:bg-slate-100 hover:text-avito-blue transition-colors nav-link" data-target="${section.id}">
            ${section.title}
        </a>`
    ).join('');

    DESKTOP_MENU.innerHTML = navLinks;
    MOBILE_MENU.innerHTML = navLinks;
}

function renderSections() {
    const sectionHTML = sections.map(section => `
        <section id="${section.id}" class="space-y-6 scroll-mt-20">
            <h2 class="text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                <i data-lucide="${section.icon}" class="w-7 h-7 text-avito-blue"></i>
                ${section.title}
            </h2>
            <div class="prose max-w-none prose-slate prose-p:leading-relaxed prose-li:leading-relaxed">
                ${section.content}
            </div>
        </section>
    `).join('');
    
    CONTENT_ROOT.innerHTML = sectionHTML;
}

function setupEventListeners() {

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    mobileMenuBtn.addEventListener('click', () => {
        MOBILE_MENU.classList.toggle('hidden');
        document.querySelector('#mobile-menu-btn i').setAttribute('data-lucide', MOBILE_MENU.classList.contains('hidden') ? 'menu' : 'x');
        lucide.createIcons();
    });


    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            MOBILE_MENU.classList.add('hidden');
            document.querySelector('#mobile-menu-btn i').setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        });
    });


    window.addEventListener('scroll', () => {
        NAVBAR.classList.toggle('shadow-md', window.scrollY > 10);
    });


    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[data-target="${id}"]`);
            if (entry.isIntersecting) {
                document.querySelectorAll('.nav-link.active').forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        });
    }, { rootMargin: "-20% 0px -80% 0px" });

    document.querySelectorAll('#content-root section').forEach(section => {
        observer.observe(section);
    });


    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const archImgContainer = document.getElementById('arch-img-container');

    if (archImgContainer) {
        archImgContainer.addEventListener('click', () => {
            lightboxImg.src = archImgContainer.querySelector('img').src;
            lightbox.classList.remove('hidden');
            lightbox.classList.add('flex');
            setTimeout(() => {
            lightboxImg.classList.remove('scale-95', 'opacity-0');
            }, 10);
        });
    }

    lightbox.addEventListener('click', () => {
        lightboxImg.classList.add('scale-95', 'opacity-0');
        setTimeout(() => {
            lightbox.classList.add('hidden');
            lightbox.classList.remove('flex');
        }, 300);
    });
    

    setupDemoModal();
}


function setupDemoModal() {
    const modal = document.getElementById('demo-modal');
    const modalContent = document.getElementById('demo-modal-content');
    const openBtns = [document.getElementById('hero-demo-btn')];
    const closeBtn = document.getElementById('close-modal');
    const backdrop = document.getElementById('demo-modal-backdrop');
    
    const stepUpload = document.getElementById('step-upload');
    const stepLoading = document.getElementById('step-loading');
    const stepResult = document.getElementById('step-result');
    const uploadTrigger = document.getElementById('upload-trigger');
    const loadingText = document.getElementById('loading-text');
    const demoResetBtn = document.getElementById('demo-reset');
    
    let loadingInterval;

    const openModal = () => {
        resetDemo();
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        setTimeout(() => {
            modalContent.classList.remove('scale-95', 'opacity-0');
        }, 10);
    };

    const closeModal = () => {
        modalContent.classList.add('scale-95', 'opacity-0');
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            clearInterval(loadingInterval);
        }, 300);
    };
    
    const startLoadingAnimation = () => {
        let step = 0;
        loadingText.textContent = demoData.loadingSteps[step];
        loadingInterval = setInterval(() => {
            step++;
            if (step < demoData.loadingSteps.length) {
                loadingText.style.opacity = 0;
                setTimeout(() => {
                    loadingText.textContent = demoData.loadingSteps[step];
                    loadingText.style.opacity = 1;
                }, 300);
            } else {
                clearInterval(loadingInterval);
                setTimeout(showResults, 500);
            }
        }, 1200);
    };

    const showResults = () => {
        const sourceIcons = {
            vision: 'camera',
            voice: 'mic',
            conflict: 'alert-triangle'
        };
        const sourceColors = {
            vision: 'text-purple-500',
            voice: 'text-blue-500',
            conflict: 'text-red-500'
        };

        const fieldsHTML = demoData.fields.map((field, index) => `
            <div class="flex items-center justify-between py-3 px-4 bg-slate-50 rounded-lg" style="animation: fade-in-up 0.5s ${index * 0.1}s both;">
                <span class="text-sm text-slate-500">${field.label}</span>
                <div class="flex items-center gap-2">
                    ${field.confidence < 0.9 ? `<span class="px-1.5 py-0.5 bg-yellow-100 text-yellow-700 font-bold text-[10px] rounded-full">ПРОВЕРИТЬ</span>` : ''}
                    <span class="text-sm font-semibold text-slate-800 text-right">${field.value}</span>
                    <i data-lucide="${sourceIcons[field.source]}" class="w-4 h-4 ${sourceColors[field.source]} shrink-0"></i>
                </div>
            </div>
        `).join('');

        const resultHTML = `
            <div class="space-y-4 animate-fade-in-up">
                <div class="p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                     <div class="flex gap-4">
                        <div class="w-24 h-24 bg-slate-100 rounded-lg overflow-hidden shrink-0 relative">
                            <img src="https://placehold.co/200x200/e2e8f0/64748b/png?text=Sneakers" alt="Preview" class="w-full h-full object-cover">
                        </div>
                        <div class="flex-1">
                            <div class="text-xs text-avito-green font-bold uppercase mb-1 flex items-center gap-1">
                                <i data-lucide="check-circle-2" class="w-3 h-3"></i> Распознано
                            </div>
                            <h4 class="font-bold text-slate-900 text-lg">${demoData.resultTitle || 'Товар определен'}</h4>
                            <p class="text-sm text-slate-500 mt-1">${demoData.resultSubtitle || 'Данные извлечены успешно'}</p>
                        </div>
                    </div>
                </div>
                <div class="space-y-2">${fieldsHTML}</div>
                <div class="p-4 bg-slate-50 rounded-lg mt-4">
                    <label class="text-xs font-bold text-slate-500">Сгенерированное описание:</label>
                    <p class="text-sm text-slate-700 mt-1">${demoData.description}</p>
                </div>
            </div>
        `;
        
        stepLoading.classList.add('hidden');
        stepResult.innerHTML = resultHTML;
        stepResult.classList.remove('hidden');
        demoResetBtn.disabled = false;
        lucide.createIcons();
    };

    const startDemoFlow = () => {
        demoResetBtn.disabled = true;
        stepUpload.classList.add('hidden');
        stepLoading.classList.remove('hidden');
        startLoadingAnimation();
    };

    const resetDemo = () => {
        clearInterval(loadingInterval);
        stepResult.classList.add('hidden');
        stepLoading.classList.add('hidden');
        stepUpload.classList.remove('hidden');
        stepResult.innerHTML = '';
        demoResetBtn.disabled = false;
    };

    openBtns.forEach(btn => btn.addEventListener('click', openModal));
    closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);
    uploadTrigger.addEventListener('click', startDemoFlow);
    demoResetBtn.addEventListener('click', resetDemo);
}

document.addEventListener('DOMContentLoaded', init);

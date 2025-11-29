import { demoData } from './data.js';
import { renderDemoField } from './components.js';

export function initInteractions() {

    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    });


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            mobileMenu.classList.add('hidden');
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    document.querySelectorAll('.collapsible-trigger').forEach(trigger => {
        trigger.addEventListener('click', () => {
            const targetId = trigger.getAttribute('data-target');
            const content = document.getElementById(targetId);
            const arrow = trigger.querySelector('.lucide-chevron-down');
            
            content.classList.toggle('open');
            arrow.style.transform = content.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    });


    const imgContainer = document.getElementById('arch-img-container');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    if(imgContainer) {
        imgContainer.addEventListener('click', () => {
            const img = imgContainer.querySelector('img');
            lightboxImg.src = img.src;
            lightbox.classList.remove('hidden');
        });
    }

    if(lightbox) {
        lightbox.addEventListener('click', () => {
            lightbox.classList.add('hidden');
        });
    }


    window.sortTable = (n) => {
        const table = document.getElementById("metrics-table");
        let rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        switching = true;
        dir = "asc"; 
        while (switching) {
            switching = false;
            rows = table.rows;
            for (i = 1; i < (rows.length - 1); i++) {
                shouldSwitch = false;
                x = rows[i].getElementsByTagName("TD")[n];
                y = rows[i + 1].getElementsByTagName("TD")[n];
                if (dir == "asc") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                } else if (dir == "desc") {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                switchcount ++;      
            } else {
                if (switchcount == 0 && dir == "asc") {
                    dir = "desc";
                    switching = true;
                }
            }
        }
    };
}

export function initDemo() {
    const modal = document.getElementById('demo-modal');
    const btns = [document.getElementById('hero-demo-btn')]; // add nav button if exists
    const closeBtn = document.getElementById('close-modal');
    const resetBtn = document.getElementById('demo-reset');
    const uploadTrigger = document.getElementById('upload-trigger');

    const stepUpload = document.getElementById('step-upload');
    const stepLoading = document.getElementById('step-loading');
    const stepResult = document.getElementById('step-result');
    const loadingText = document.getElementById('loading-text');
    const demoFields = document.getElementById('demo-fields');

    function openModal() {
        modal.classList.remove('hidden');
        resetDemo();
    }

    function closeModal() {
        modal.classList.add('hidden');
    }

    function resetDemo() {
        stepUpload.classList.remove('hidden');
        stepLoading.classList.add('hidden');
        stepResult.classList.add('hidden');
        demoFields.innerHTML = '';
    }

    function runSimulation() {
        stepUpload.classList.add('hidden');
        stepLoading.classList.remove('hidden');
        stepLoading.classList.add('flex');

        let step = 0;
        const interval = setInterval(() => {
            if (step >= demoData.loadingSteps.length) {
                clearInterval(interval);
                showResult();
            } else {
                loadingText.textContent = demoData.loadingSteps[step];
                loadingText.classList.add('animate-pulse');
                step++;
            }
        }, 800);
    }

    function showResult() {
        stepLoading.classList.add('hidden');
        stepLoading.classList.remove('flex');
        stepResult.classList.remove('hidden');
        stepResult.classList.add('animate-fade-in-up');


        let fieldsHtml = '';
        demoData.fields.forEach((field, idx) => {
            fieldsHtml += renderDemoField(field);
        });

        fieldsHtml += `
            <div class="mt-4">
                <label class="text-xs font-bold text-slate-500 uppercase">Описание (AI Generated)</label>
                <textarea class="w-full mt-1 p-3 bg-blue-50/50 border border-blue-100 rounded-lg text-sm text-slate-700 h-24 resize-none focus:outline-none focus:border-avito-blue transition">${demoData.description}</textarea>
            </div>
        `;
        demoFields.innerHTML = fieldsHtml;
        lucide.createIcons();
    }

    btns.forEach(btn => btn?.addEventListener('click', openModal));
    closeBtn.addEventListener('click', closeModal);
    document.getElementById('demo-modal-backdrop').addEventListener('click', closeModal);
    
    uploadTrigger.addEventListener('click', runSimulation);
    resetBtn.addEventListener('click', resetDemo);
}

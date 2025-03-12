const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // Adiciona ou remove a classe show-menu no menu de navegação
            nav.classList.toggle('show-menu');

            // Adiciona ou remove a classe show-icon no botão de toggle
            toggle.classList.toggle('show-icon');
        });

        // Remove as classes ao mudar de página
        window.addEventListener('beforeunload', () => {
            nav.classList.remove('show-menu');
            toggle.classList.remove('show-icon');
        });
    }
};

showMenu('nav-toggle', 'nav-menu');


document.addEventListener('DOMContentLoaded', () => {
    const toggleDropdown = (dropdown) => {
        const dropdownMenu = dropdown.querySelector('.dropdown__menu');
        const arrow = dropdown.querySelector('.dropdown__arrow');
        if (dropdownMenu.style.maxHeight) {
            dropdownMenu.style.maxHeight = null;
            arrow.style.transform = 'rotate(0deg)';
        } else {
            dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + "px";
            arrow.style.transform = 'rotate(180deg)';
        }
    };

    const toggleSubmenu = (submenu) => {
        const dropdownSubmenu = submenu.querySelector('.dropdown__submenu');
        const addIcon = submenu.querySelector('.dropdown__add');
        if (dropdownSubmenu.style.maxHeight) {
            dropdownSubmenu.style.maxHeight = null;
            addIcon.style.transform = 'rotate(0deg)';
        } else {
            dropdownSubmenu.style.maxHeight = dropdownSubmenu.scrollHeight + "px";
            addIcon.style.transform = 'rotate(45deg)';
        }
    };

    const dropdowns = document.querySelectorAll('.dropdown__item');
    dropdowns.forEach((dropdown) => {
        const dropdownArrow = dropdown.querySelector('.dropdown__arrow');
        if (dropdownArrow) {
            dropdownArrow.addEventListener('click', (event) => {
                event.stopPropagation(); // Evita o clique em outros elementos
                toggleDropdown(dropdown);
            });
        }
    });
    
});

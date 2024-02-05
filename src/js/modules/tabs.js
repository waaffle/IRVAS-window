const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    function hideTabContent(){
        tab.forEach(item => item.classList.remove(activeClass));
        content.forEach(item => item.style.display = 'none');
    }

    function showTabContent(i = 0){
        content[i].style.display = 'block';
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target && (target.classList.contains(tabSelector.slice(1)) || target.parentNode.classList.contains(tabSelector.slice(1)))){
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item){
                    hideTabContent();
                    showTabContent(i);
                }

            })
        }
    })
}

export default tabs;
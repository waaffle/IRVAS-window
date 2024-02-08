const modals = (isFulled1 = false, isFulled2 = false) => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true){

        const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector),
        windows = document.querySelectorAll('[data-modal]'),
        scroll = calcScroll();

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                windows.forEach((i) => {
                    i.style.display = "none";
                })
    
                modal.style.display = "block";
                document.body.classList.add('modal-open');
                document.body.style.marginRight = `${scroll}px`;
        })
        });

        

        close.addEventListener('click', () => {
            
            windows.forEach((i) => {
                i.style.display = "none";
            })

            modal.style.display = "none";
            document.body.classList.remove('modal-open');
            document.body.style.marginRight = '0px';
        })

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay){
                
                windows.forEach((i) => {
                    i.style.display = "none";
                })

                modal.style.display = "none";
                document.body.classList.remove('modal-open');
                document.body.style.marginRight = '0px';
            }
        })
    }

    function calcScroll(){
        let div = document.createElement('div');

        div.style.overflowY = 'scroll';
        div.style.width = '50px';
        div.style.height = '50px';

        // мы должны вставить элемент в документ, иначе размеры будут равны 0
        document.body.append(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;

        div.remove();
        return scrollWidth;
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    if (isFulled1){
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    }
    if (isFulled2){
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    }
    
    

    setTimeout(() => {
        let modal = document.querySelector('.popup');

        modal.style.display = "block";
        document.body.classList.add('modal-open');
    }, 60000);
}

export default modals;
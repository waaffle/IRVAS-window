const modals = (isFulled1 = false, isFulled2 = false) => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true){

        const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector),
        windows = document.querySelectorAll('[data-modal]');


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
        })
        });

        

        close.addEventListener('click', () => {
            
            windows.forEach((i) => {
                i.style.display = "none";
            })

            modal.style.display = "none";
            document.body.classList.remove('modal-open');
        })

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay){
                
                windows.forEach((i) => {
                    i.style.display = "none";
                })

                modal.style.display = "none";
                document.body.classList.remove('modal-open');
            }
        })
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
import checkNumInputs from "./checkNumInputs";
import modals from "./modals";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#height');
    checkNumInputs('#width');

    function bindActionToElems (event, elem, prop) {

        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                if (item.getAttribute('type') == 'checkbox'){
                    elem.forEach((box, j) => {
                        if (i == j) box.checked = true;
                        else box.checked = false;
                    })
                    i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Тёплое';
                    console.log(state);
                } else {
                state[prop] = item.value || i;
                console.log(state);
                }
                if (state['width'] && state['height']) {
                    modals(true);
                }
                if (state['profile']){
                    modals(true, true);
                }
            })
        })
    }
    
    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('input', windowHeight, 'height');
    
    bindActionToElems('input', windowType, 'type');
    bindActionToElems('input', windowProfile, 'profile');


};

export default changeModalState;
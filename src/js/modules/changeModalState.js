const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelector('#width'),
        windowHeight = document.querySelector('#height'),
        windowType = document.querySelector('#view_type'),
        windowProfile = document.querySelector('.checkbox');

    windowForm.forEach((item, i) => {
        item.addEventListener('click', () => {
            state.form = i;
        })
    })
 

};

export default changeModalState;
const images = (selector) => {
     const imgPopup = document.createElement('div'),
        bigImage = document.createElement('img'),
        workSection = document.querySelector('.works');

    imgPopup.classList.add('popup_img');

    bigImage.setAttribute('height', '450px');

    imgPopup.append(bigImage);
    workSection.append(imgPopup);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if(target && target.classList.contains('preview')){
            imgPopup.style.display = 'flex';
            document.body.classList.add('modal-open');
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
        }
    })

    imgPopup.addEventListener('click', (e) => {
        if (e.target === imgPopup){

            imgPopup.style.display = "none";
            document.body.classList.remove('modal-open');
        }
    })
}

export default images;
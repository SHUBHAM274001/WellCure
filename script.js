// const wrapper =document.querySelector('.wrapper');
// const loginlink =document.querySelector('.login-link');
// const registerLink =document.querySelector('.register-link');
// const btnpopup =document.querySelector('.btnLogin-popup');

// registerLink.addEventListener("click",()=>{
//     wrapper.classList.add('active');
// });
// loginlink.addEventListener("click",()=>{
//     wrapper.classList.remove('active');
// });
// btnpopup.addEventListener("click",()=>{
//     wrapper.classList.add('active-popup');
// });

let login =document.querySelector("button")

document.querySelectorAll('.accordion-headerr').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItemm = button.parentElement;

        // Close all open accordion items
        document.querySelectorAll('.accordion-itemm').forEach(item => {
            if (item !== accordionItemm) {
                item.classList.remove('active');
                item.querySelector('.accordion-contentt').style.maxHeight = null;
            }
        });

        // Toggle the clicked accordion
        const accordionContentt = accordionItemm.querySelector('.accordion-contentt');
        if (accordionItemm.classList.contains('active')) {
            accordionItemm.classList.remove('active');
            accordionContentt.style.maxHeight = null;
        } else {
            accordionItemm.classList.add('active');
            accordionContentt.style.maxHeight = accordionContentt.scrollHeight + 'px';
        }
    });
});

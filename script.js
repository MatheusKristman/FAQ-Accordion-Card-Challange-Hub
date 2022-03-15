const faqItem = document.querySelectorAll('.faq-item');
faqItem.forEach((question) => {
    const btn = question.querySelector('.btn')
    btn.addEventListener('click', () => {
        faqItem.forEach((item) => {
            if(item !== question){
                item.classList.remove('active')                
            }
        })
        question.classList.toggle('active');        
    })
    
})
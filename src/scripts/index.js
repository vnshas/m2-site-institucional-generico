function handleModalheader(){
    const button = document.querySelector(".button__header")
    const modalContainer = document.querySelector(".modalController")

    button.addEventListener("click", ()=>{
        modalContainer.showModal()

        closeModal()
    })
}

function handleModalfaq(){
    const button = document.querySelector(".button__faq")
    const modalContainer = document.querySelector(".modalController")

    button.addEventListener("click", ()=>{
        modalContainer.showModal()

        closeModal()
    })
}

function closeModal(){
    const closeModal = document.querySelector(".close__modal")
    const modalContainer = document.querySelector(".modalController")

    closeModal.addEventListener("click", () =>{
        modalContainer.close()
    })
}

handleModalheader()
handleModalfaq()
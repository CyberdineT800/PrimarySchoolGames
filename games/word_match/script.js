const words = document.querySelectorAll('.word');
const images = document.querySelectorAll('.image');

words.forEach(word => {
    word.addEventListener('dragstart', (e) => e.dataTransfer.setData('text', word.dataset.word));
});

images.forEach(image => {
    image.addEventListener('dragover', (e) => e.preventDefault());
    image.addEventListener('drop', (e) => {
        let draggedWord = e.dataTransfer.getData('text');
        if (draggedWord === image.dataset.word) {
            image.innerHTML += " ✅";
        } else {
            alert("Noto'g'ri, qayta urinib ko'ring!");
        }
    });
});

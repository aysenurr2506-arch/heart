// HTML elementlerini ID'leri ile seçiyoruz
const heart = document.getElementById('neonHeart');
const message = document.getElementById('message');

// Kalbe tıklama olayını dinliyoruz
heart.addEventListener('click', () => {
    // Mesajı görünür yapan 'visible' sınıfını ekliyoruz
    message.classList.add('visible');

    // (İsteğe bağlı) 5 saniye sonra mesajı tekrar gizliyoruz
    setTimeout(() => {
        message.classList.remove('visible');
    }, 5000); 
});

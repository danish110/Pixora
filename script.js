function uploadImage() {
    const input = document.getElementById('imageInput');
    const container = document.getElementById('imageContainer');

    if (input.files && input.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function (e) {
            const card = document.createElement('div');
            card.classList.add('card');

            const img = document.createElement('img');
            img.src = e.target.result;

            card.appendChild(img);
            container.appendChild(card);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var img = document.querySelector('.content img');
    img.addEventListener('click', function() {
        alert('iPhone 15 clicked!');
    });

    var specList = document.querySelectorAll('.specs li');
    for (var i = 0; i < specList.length; i++) {
        specList[i].addEventListener('mouseover', function() {
            this.style.backgroundColor = '#ddd';
        });
        specList[i].addEventListener('mouseout', function() {
            this.style.backgroundColor = '#f4f4f4';
        });
    }

    var features = document.querySelectorAll('.features p');
    for (var j = 0; j < features.length; j++) {
        features[j].addEventListener('mouseover', function() {
            this.style.backgroundColor = '#ccc';
        });
        features[j].addEventListener('mouseout', function() {
            this.style.backgroundColor = '#e9e9e9';
        });
    }

    var galleryImages = document.querySelectorAll('.image-container img');
    for (var k = 0; k < galleryImages.length; k++) {
        galleryImages[k].addEventListener('click', function() {
            alert('Gallery image clicked!');
        });
    }
});

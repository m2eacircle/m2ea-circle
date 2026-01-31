// Screenshot Lightbox Functionality
function openModal(img) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("modalCaption");
    
    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    captionText.innerHTML = img.alt;
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside the image
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("imageModal");
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal || event.target.className === 'modal-close') {
                closeModal();
            }
        });
    }
});

// Close on ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' || event.key === 'Esc') {
        closeModal();
    }
});

// Prevent modal close when clicking on the image itself
document.addEventListener('DOMContentLoaded', function() {
    var modalContent = document.getElementById("modalImage");
    if (modalContent) {
        modalContent.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    }
});

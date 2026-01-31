// Screenshot Lightbox Functionality
function openModal(img) {
    console.log('openModal called with:', img); // Debug
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("modalCaption");
    
    if (!modal || !modalImg || !captionText) {
        console.error('Modal elements not found');
        return;
    }
    
    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    captionText.innerHTML = img.alt;
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    console.log('Modal opened successfully'); // Debug
}

function closeModal() {
    console.log('closeModal called'); // Debug
    var modal = document.getElementById("imageModal");
    if (modal) {
        modal.style.display = "none";
        
        // Restore body scroll
        document.body.style.overflow = 'auto';
        console.log('Modal closed successfully'); // Debug
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('Lightbox initialized'); // Debug
    
    // Close modal when clicking on the modal background (not the image)
    var modal = document.getElementById("imageModal");
    if (modal) {
        modal.addEventListener('click', function(event) {
            // Only close if clicking the modal itself, not its children
            if (event.target === modal || event.target.className === 'modal-close') {
                closeModal();
            }
        });
    }
    
    // Prevent modal close when clicking on the image itself
    var modalContent = document.getElementById("modalImage");
    if (modalContent) {
        modalContent.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    }
});

// Close on ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' || event.key === 'Esc') {
        closeModal();
    }
});

console.log('Lightbox script loaded'); // Debug

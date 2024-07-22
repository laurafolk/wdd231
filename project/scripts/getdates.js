    //Gets the current year
    let currentYear = new Date().getFullYear();
    

    //Displays the current year in the HTML span element with id "currentYear"
    document.getElementById("currentYear").textContent = currentYear;

    //Gets the last modified date of the document
    let lastModifiedDate = document.lastModified;


    document.getElementById("lastModified").innerHTML = "Last Modified: " + lastModifiedDate;

    
    // Lazy loading images
    document.addEventListener("DOMContentLoaded", () => {
        const lazyImages = document.querySelectorAll('img.lazy');
    
        const lazyLoad = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        };
    
        const observer = new IntersectionObserver(lazyLoad);
    
        lazyImages.forEach(img => {
            observer.observe(img);
        });
    });
    
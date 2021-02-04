const printPDF = document.querySelector(".view-resume");

printPDF.style.display = "none";



// Scroll to top button: Using Intersection Observer API
// const topScrollCallback = (entries) => {
//     const [entry] = entries;
//     if (!entry.isIntersecting) scrollToTopBtn.classList.remove("showBtn");
//     else scrollToTopBtn.classList.add("showBtn");
//   };
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
            } else {
                entry.target.classList.remove("in-view");
            }
        });
    },
    {
        rootMargin: "40px",
        threshold: [0, 0.1, 1],
    }
);

const tags = document.querySelectorAll(".animation");

tags.forEach((tag) => {
    observer.observe(tag);
});

const sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0px";
}
function exitmenu() {
    sidemenu.style.right = "-200px";
}

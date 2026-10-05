/* =====================================================
   LOADING SCREEN
===================================================== */

let progress = 0;

const loader =
    document.getElementById("loader");

const loaderBar =
    document.getElementById("loaderBar");

const loaderPercent =
    document.getElementById("loaderPercent");


const loading =
    setInterval(() => {

        progress += Math.floor(
            Math.random() * 8
        ) + 2;

        if (progress >= 100) {

            progress = 100;

            clearInterval(loading);

            setTimeout(() => {

                loader.style.opacity = "0";

                loader.style.transition =
                    "opacity .6s";

                setTimeout(() => {

                    loader.style.display =
                        "none";

                }, 600);

            }, 300);

        }

        loaderBar.style.width =
            progress + "%";

        loaderPercent.textContent =
            progress + "%";

    }, 100);



/* =====================================================
   MOBILE MENU
===================================================== */

function toggleMenu() {

    const nav =
        document.getElementById("mainNav");

    nav.classList.toggle("open");

}


/* Close mobile nav */

document.querySelectorAll(
    "#mainNav a"
).forEach(link => {

    link.addEventListener(
        "click",
        () => {

            document
                .getElementById("mainNav")
                .classList
                .remove("open");

        }
    );

});



/* =====================================================
   COUNTER
===================================================== */

const counters =
    document.querySelectorAll(
        "[data-counter]"
    );


let counterStarted = false;


function startCounters() {

    if (counterStarted) return;

    counterStarted = true;

    counters.forEach(counter => {

        const target =
            Number(
                counter.dataset.counter
            );

        let current = 0;

        const increment =
            Math.max(
                1,
                Math.ceil(target / 80)
            );


        const timer =
            setInterval(() => {

                current += increment;

                if (current >= target) {

                    current = target;

                    clearInterval(timer);

                }

                counter.textContent =
                    current + "+";

            }, 25);

    });

}


/* =====================================================
   SCROLL OBSERVER
===================================================== */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    startCounters();

                }

            });

        },
        {
            threshold: .3
        }
    );


observer.observe(
    document.querySelector(".hero-stats")
);



/* =====================================================
   SERVICE FILTER
===================================================== */

const filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );

const services =
    document.querySelectorAll(
        ".service-card"
    );


filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filterButtons
                .forEach(btn =>
                    btn.classList
                        .remove("active")
                );


            button.classList
                .add("active");


            const filter =
                button.dataset.filter;


            services.forEach(service => {

                if (
                    filter === "all" ||
                    service.dataset.category
                    === filter
                ) {

                    service.classList
                        .remove("hide");

                }
                else {

                    service.classList
                        .add("hide");

                }

            });

        }
    );

});



/* =====================================================
   PROJECT SEARCH
===================================================== */

const projectSearch =
    document.getElementById(
        "projectSearch"
    );


projectSearch.addEventListener(
    "input",
    function () {

        const keyword =
            this.value
                .toLowerCase()
                .trim();


        document
            .querySelectorAll(
                ".project-card"
            )
            .forEach(card => {

                const name =
                    card.dataset.name
                        .toLowerCase();


                card.classList.toggle(
                    "search-hide",
                    keyword &&
                    !name.includes(keyword)
                );

            });

    }
);



/* =====================================================
   PROJECT DATABASE
===================================================== */

const projectData = [

    {
        title:
            "Overhaul Engine Hydrant 6 Cylinder",

        year:
            "2026",

        category:
            "MAINTENANCE",

        image:
            "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=1000&q=85",

        description:
            "Pekerjaan meliputi dismantling, inspection, cleaning, replacement component, assembly, testing dan commissioning engine hydrant."
    },


    {
        title:
            "Steel Structure Fabrication",

        year:
            "2025",

        category:
            "FABRICATION",

        image:
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=85",

        description:
            "Pekerjaan fabrication struktur baja berdasarkan drawing, material specification, welding procedure dan quality inspection."
    },


    {
        title:
            "Industrial Piping Installation",

        year:
            "2025",

        category:
            "PIPING",

        image:
            "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1000&q=85",

        description:
            "Pekerjaan instalasi piping, pipe support, valve installation, alignment dan testing system."
    },


    {
        title:
            "Fire Hydrant System",

        year:
            "2024",

        category:
            "FIRE PROTECTION",

        image:
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=85",

        description:
            "Instalasi sistem fire hydrant meliputi piping, hydrant equipment, pump system dan testing."
    },


    {
        title:
            "Industrial Pump Maintenance",

        year:
            "2024",

        category:
            "MECHANICAL",

        image:
            "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=1000&q=85",

        description:
            "Preventive maintenance rotating equipment, inspection, cleaning, alignment dan performance checking."
    },


    {
        title:
            "Equipment Installation",

        year:
            "2023",

        category:
            "INSTALLATION",

        image:
            "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1000&q=85",

        description:
            "Installation equipment mechanical beserta supporting structure, alignment, testing dan commissioning."
    }

];



function openProject(index) {

    const project =
        projectData[index];

    const modal =
        document.getElementById(
            "projectModal"
        );

    const content =
        document.getElementById(
            "modalContent"
        );


    content.innerHTML = `

        <img
            src="${project.image}"
            class="modal-image"
            alt="${project.title}"
        >

        <small
            style="
            color:#ff9d00;
            font-family:Orbitron;
            font-size:9px;
            "
        >
            ${project.year} //
            ${project.category}
        </small>

        <h2>
            ${project.title}
        </h2>

        <p>
            ${project.description}
        </p>

    `;


    modal.classList.add("active");

}



function closeProject() {

    document
        .getElementById("projectModal")
        .classList
        .remove("active");

}


document
    .getElementById("projectModal")
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target === this
            ) {

                closeProject();

            }

        }
    );



/* =====================================================
   FAQ
===================================================== */

function toggleFaq(button) {

    const item =
        button.parentElement;


    document
        .querySelectorAll(".faq-item")
        .forEach(other => {

            if (
                other !== item
            ) {

                other.classList
                    .remove("open");

            }

        });


    item.classList.toggle(
        "open"
    );


    const symbol =
        button.querySelector("span");


    symbol.textContent =
        item.classList.contains("open")
            ? "−"
            : "+";

}



/* =====================================================
   TESTIMONIAL
===================================================== */

const testimonials = [

    {
        text:
            "Pekerjaan dilakukan dengan baik, komunikasi tim responsif, dan pekerjaan selesai sesuai kebutuhan.",

        name:
            "PROJECT CLIENT",

        position:
            "Industrial Project"
    },

    {
        text:
            "Tim memiliki pemahaman teknis yang baik dan mampu memberikan solusi ketika terdapat kendala di lapangan.",

        name:
            "ENGINEERING CLIENT",

        position:
            "Mechanical Project"
    },

    {
        text:
            "Koordinasi antara engineering dan tim lapangan sangat membantu selama pekerjaan berlangsung.",

        name:
            "SITE CLIENT",

        position:
            "Construction Project"
    }

];


let testimonialIndex = 0;


function showTestimonial() {

    const item =
        testimonials[testimonialIndex];


    document.getElementById(
        "testimonialText"
    ).textContent = item.text;


    document.getElementById(
        "testimonialName"
    ).textContent = item.name;


    document.getElementById(
        "testimonialPosition"
    ).textContent = item.position;

}


function nextTestimonial() {

    testimonialIndex++;

    if (
        testimonialIndex >=
        testimonials.length
    ) {

        testimonialIndex = 0;

    }

    showTestimonial();

}


function previousTestimonial() {

    testimonialIndex--;

    if (
        testimonialIndex < 0
    ) {

        testimonialIndex =
            testimonials.length - 1;

    }

    showTestimonial();

}



/* =====================================================
   QUOTATION FORM
===================================================== */

const quoteForm =
    document.getElementById(
        "quoteForm"
    );


quoteForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "name"
            ).value;


        const company =
            document.getElementById(
                "company"
            ).value;


        const contact =
            document.getElementById(
                "contactData"
            ).value;


        const service =
            document.getElementById(
                "serviceSelect"
            ).value;


        const message =
            document.getElementById(
                "message"
            ).value;


        const result =
            document.getElementById(
                "formMessage"
            );


        result.textContent =
            "Permintaan berhasil dicatat. Tim kami akan menghubungi Anda.";


        showToast(
            "Quotation request berhasil!"
        );


        /*
            Membuka WhatsApp.

            GANTI NOMOR DI BAWAH
            dengan nomor WhatsApp perusahaan.
        */

        const phone =
            "6281234567890";


        const text =
            `
REQUEST QUOTATION

Nama: ${name}

Perusahaan: ${company}

Kontak: ${contact}

Jasa: ${service}

Deskripsi:
${message}
            `;


        const url =
            "https://wa.me/" +
            phone +
            "?text=" +
            encodeURIComponent(text);


        window.open(
            url,
            "_blank"
        );


        quoteForm.reset();

    }
);



/* =====================================================
   TOAST
===================================================== */

function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    toast.textContent =
        message;


    toast.classList
        .add("show");


    setTimeout(() => {

        toast.classList
            .remove("show");

    }, 3000);

}



/* =====================================================
   BACK TO TOP
===================================================== */

window.addEventListener(
    "scroll",
    () => {

        const button =
            document.getElementById(
                "backTop"
            );


        button.classList.toggle(
            "show",
            window.scrollY > 500
        );

    }
);


function scrollToTop() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}



/* =====================================================
   KEYBOARD
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closeProject();

        }

    }
);
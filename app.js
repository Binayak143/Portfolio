// Typing Effect
        const typingText = ["Front-end Developer ", "Web Developer ", ""];
        let i = 0;
        let j = 0;
        let currentText = "";
        let isDeleting = false;
        const typingElement = document.querySelector(".typing");

        function type() {
            if (i >= typingText.length) i = 0;
            const fullText = typingText[i];

            if (!isDeleting) {
                currentText = fullText.substring(0, j + 1);
                j++;
                if (j === fullText.length) {
                    isDeleting = true;
                    setTimeout(type, 1000);
                    return;
                }
            } else {
                currentText = fullText.substring(0, j - 1);
                j--;
                if (j === 0) {
                    isDeleting = false;
                    i++;
                }
            }

            typingElement.textContent = currentText;
            setTimeout(type, isDeleting ? 50 : 150);
        }

        type();

        // Dynamic Project Cards
        const projects = [
            {
                title: "Electric Bill Generator",
                description: "Responsive web app to calculate and generate electric bills with modern UI and neon theme.",
                link: "#"
            },
            {
                title: "Hotel Bill Generator",
                description: "Interactive hotel billing system to generate invoices with real-time calculations.",
                link: "#"
            },
            {
                title: "Result Publisher Software",
                description: "Web application to publish student exam results dynamically with a neon-themed dashboard.",
                link: "#"
            }
        ];

        const container = document.getElementById("projects-container");

        projects.forEach(project => {
            const col = document.createElement("div");
            col.className = "col-md-5 col-lg-4";

            col.innerHTML = `
            <div class="project-card">
                <h4>${project.title}</h4>
                <p>${project.description}</p>
                <a href="${project.link}" class="btn-view">View Project</a>
            </div>
        `;

            container.appendChild(col);
        });
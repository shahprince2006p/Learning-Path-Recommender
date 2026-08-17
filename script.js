const form = document.getElementById("learningForm");
const resultCard = document.getElementById("resultCard");
const studyTime = document.getElementById("studyTime");
const hours = document.getElementById("hours");

hours.innerText = studyTime.value;
studyTime.oninput = () => hours.innerText = studyTime.value;

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const interest = document.getElementById("interest").value;
    const level = document.querySelector('input[name="level"]:checked');

    if (!name || !interest || !level) {
        alert("Please fill all fields");
        return;
    }
// if all field in notfield
    let path = "";
// it is for tha path

    if (interest === "web" && level.value === "beginner")
        path = "HTML → CSS → JavaScript → Git → React → Projects";

    if (interest === "data" && level.value === "beginner")
        path = "Python → Statistics → Pandas → Visualization → Machine Learning";

    if (interest === "ai")
        path = "Python → Math → ML → Deep Learning → Projects";

    if (interest === "cyber")
        path = "Networking → Linux → Security Basics → Tools → SOC";

    if (interest === "app")
        path = "Programming → UI Design → Flutter / React Native → APIs";
// result card
    resultCard.innerHTML = `
        <div class="result-card">
            <h3>🚀 ${name}'s Learning Roadmap</h3>
            <div class="timeline">
                ${path.split("→").map(step => `<span>✅ ${step}</span>`).join("")}
            </div>
        </div>
    `;

    scrollToSection("result");
});

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

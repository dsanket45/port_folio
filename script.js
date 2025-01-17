document.getElementById("download-resume-btn").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "SanketDResume.pdf"; // Direct path to the resume file
    link.download = "SanketDResume.pdf"; // Name for the downloaded file
    link.style.display = "none"; // Hide the link
    document.body.appendChild(link); // Append the link to the document body
    link.click(); // Trigger the download
    document.body.removeChild(link); // Remove the link after download
});


function showContent(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');
    document.querySelector(`.tab[onclick="showContent('${tabId}')"]`).classList.add('active');
}



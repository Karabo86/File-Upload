let fileInput = document.getElementById("file-input");
let fileList = document.getElementById("files-list");
let numOfFiles = document.getElementById("num-of-files");

fileInput.addEventListener("change", () => {
    fileList.innerHTML = "";
    let filesCount = fileInput.files.length;
    numOfFiles.textContent = filesCount > 0 ? `${filesCount} File(s) Selected` : "No Files Chosen";

    for (let file of fileInput.files) {
        let reader = new FileReader();
        let listItem = document.createElement("li");
        let fileName = file.name;
        let fileSize = (file.size / 1024).toFixed(1); // Convert bytes to KB

        if (fileSize >= 1024) {
            fileSize = (fileSize / 1024).toFixed(1); // Convert KB to MB
            listItem.innerHTML = `<p>${fileName}</p><p>${fileSize} MB</p>`;
        } else {
            listItem.innerHTML = `<p>${fileName}</p><p>${fileSize} KB</p>`;
        }

        fileList.appendChild(listItem);
    }
});

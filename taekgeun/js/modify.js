window.addEventListener("load",() => {
    const succButton = document.getElementById("modify-success");
    const cancelButton = document.getElementById("cancel");

    
    succButton.onclick = () => {
        location.href = "my-page.html";
    }

    cancelButton.onclick = () => {
        location.href = "my-page.html";
    }
})
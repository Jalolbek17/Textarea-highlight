const textarea = document.querySelector("#textarea"), highlightsBox = document.querySelector(".highlights");

textarea.addEventListener("input", () => {
    highlightsBox.innerHTML = textarea.value.replace(/(?:(?<=\s)|^)#(\w*[A-Za-z_]+\w*)/g, '<mark class="hashtag">$&</mark>');
});
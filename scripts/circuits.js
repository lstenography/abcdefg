
function changeTheme() {
    const body = document.body;
    const dark_theme = document.getElementById("dark-theme");
    const light_theme = document.getElementById("light-theme");

    if(body.classList.contains(dark_theme)){
        body.classList.add(light_theme);
        body.classList.remove(dark_theme);
    }
}

changeTheme();
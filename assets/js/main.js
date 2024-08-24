const websiteCreationDate = 2024;
const defaultTheme = "theme_minimal";

function setThemeSheet(theme)
{
    const themesDir = "/assets/css/themes/";
    let selectedTheme;
    switch (theme)
    {
        case "theme_minimal": selectedTheme = "minimal.css"; break;
        case "theme_minimal_dark": selectedTheme = "minimal_dark.css"; break;
        case "theme_test": selectedTheme = "test.css"; break;
        default:
            console.warn("Tried to change theme style sheet to " + sheet + " but that theme is not handled!");
        return;
    }
    document.getElementById("site_theme_sheet").setAttribute("href", themesDir+selectedTheme)
}

function ready()
{
    let theme = window.localStorage.getItem("site_theme");
    if (theme == null)
    {
        window.localStorage.setItem("site_theme", defaultTheme);
        theme = window.localStorage.getItem("site_theme");
    }
    setThemeSheet(theme);

    let themeSelector = document.getElementById("site_theme_selector");
    themeSelector.value = theme;
    themeSelector.addEventListener("change", (e) => {
        window.localStorage.setItem("site_theme", themeSelector.value);
        theme = window.localStorage.getItem("site_theme");
        setThemeSheet(theme);
    });
}
document.addEventListener("DOMContentLoaded", ready);

window.addEventListener("load", () => {
    let cDate = document.getElementById("site_copyright_date");
    if (new Date().getFullYear() > websiteCreationDate)
        cDate.innerHTML = (websiteCreationDate + "-" + new Date().getFullYear());
    else
        cDate.innerHTML = websiteCreationDate;
});

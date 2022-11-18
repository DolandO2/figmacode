let spotlightCase = 1

const button = document.getElementsByClassName("dropdownButton");
let isWeb = false
let isSwift = false
let isJava = false
let isPython = false
let isC = false
hideStories()


function hideStories() {
    let activeDropdown = document.getElementsByClassName("activeDropdown");
    let reset = document.getElementsByClassName("stories");
    for (i = 0; i < reset.length; i++) {
        reset.item(i).style.display = "none";
    }
    for (i = 0; i < activeDropdown.length; i++) {
        activeDropdown[i].className = activeDropdown[i].className.replace("activeDropdown", "");
    }

}
function currentStorie(n) {
    switch (n) {
        case n = 1:
            isWeb = true
            button[0].className += " activeDropdown";
            break;
        case n = 2:
            isSwift = true
            button[1].className += " activeDropdown";
            break;
        case n = 3:
            isJava = true
            button[2].className += " activeDropdown";
            break;

        case n = 4:
            isPython = true
            button[3].className += " activeDropdown";
            break;

        case n = 5:
            isC = true
            button[4].className += " activeDropdown";
            break;

    }
}

function showStories(n) {
    let i;
    let web = document.getElementsByClassName("web");
    let swift = document.getElementsByClassName("swift");
    let java = document.getElementsByClassName("java");
    let python = document.getElementsByClassName("python");
    let c = document.getElementsByClassName("c");
    let reset = document.getElementsByClassName("stories");
    for (i = 0; i < web.length; i++) {
        if (isWeb) web.item(i).style.display = "initial";
    }
    for (i = 0; i < swift.length; i++) {
        if (isSwift) swift.item(i).style.display = "initial";

    }
    for (i = 0; i < java.length; i++) {
        if (isJava) java.item(i).style.display = "initial";

    }
    for (i = 0; i < python.length; i++) {
        if (isPython) python.item(i).style.display = "initial";

    }
    for (i = 0; i < c.length; i++) {
        if (isC) c.item(i).style.display = "initial";

    }
}



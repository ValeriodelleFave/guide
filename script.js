function createLinks() {
    const arr = [
        { name: "Portfolio", link: "https://valeriodellefave.github.io/" },
        { name: "Budget Manager", link: "https://valeriodellefave.github.io/budget-manager/" }
    ]
    for (const elem of arr) {
        document.getElementById("container").innerHTML += `<li><a href="${elem.link}">${elem.name}</a></li>`  
    }
}
createLinks();
function createAbout() {
    const contentDiv = document.querySelector("#content");

    // remove content from a previous page
    while (contentDiv.firstChild) {
      contentDiv.removeChild(contentDiv.lastChild);
    }
    contentDiv.className = "";
    contentDiv.classList.add("content-about");

    // add page title and container
    const aboutH1 = document.createElement("h1");
    aboutH1.textContent = "About";
    contentDiv.appendChild(aboutH1);
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");

    const spanAuthor = document.createElement("span");
    const aAuthor = document.createElement("a");
    const h2 = document.createElement("h2");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");

    spanAuthor.textContent = "Website created by Shannqa. Check out ";
    aAuthor.textContent = "my other projects."
    aAuthor.setAttribute("href", "https://shannqa.github.io/homepage/index.html");
    h2.textContent = "Resources";

    const resPhoto1 = document.createElement("a");
    resPhoto1.setAttribute("href", "https://unsplash.com/@patrick_schneider?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash");
    resPhoto1.textContent = "Photo by Patrick Schneider from Unsplash";

    const resPhoto2 = document.createElement("a");
    resPhoto2.setAttribute("href", "https://unsplash.com/@chrisliverani?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash");
    resPhoto2.textContent = "Photo by Chris Liverani from Unsplash";

    li1.appendChild(resPhoto1);
    li2.appendChild(resPhoto2);
    ul.appendChild(li1);
    ul.appendChild(li2);
    aboutContainer.appendChild(spanAuthor);
    aboutContainer.appendChild(aAuthor);
    aboutContainer.appendChild(h2);
    aboutContainer.appendChild(ul);
    contentDiv.appendChild(aboutContainer);
}
    export default createAbout;
// Resources: https://unsplash.com/photos/5xltWMpkN3E
// https://unsplash.com/photos/oCsaxvGCehM

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
    contentDiv.appendChild(aboutContainer);

const resPhoto1 = document.createElement("a");
resPhoto1.setAttribute("href", "https://unsplash.com/@patrick_schneider?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash");
resPhoto1.textContent = "Photo by Patrick Schneider from Unsplash";

const resPhoto2 = document.createElement("a");
resPhoto2.setAttribute("href", "https://unsplash.com/@chrisliverani?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash");
resPhoto2.textContent = "Photo by Chris Liverani from Unsplash";

aboutContainer.appendChild(resPhoto1);
aboutContainer.appendChild(resPhoto2);

}
// Photo by <a href="https://unsplash.com/@patrick_schneider?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Patrick Schneider</a> on <a href="https://unsplash.com/photos/5xltWMpkN3E?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
// Photo by <a href="https://unsplash.com/@chrisliverani?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Chris Liverani</a> on <a href="https://unsplash.com/photos/oCsaxvGCehM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
export default createAbout;
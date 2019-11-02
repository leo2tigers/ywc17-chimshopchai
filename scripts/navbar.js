/**
 * @param {string} label
 * @param {string} href 
 */
function setNavbarItem(label, href) {
    const navbarElement = document.getElementById('nav-item-prototype').cloneNode(true);
    const navbarElementLink = navbarElement.querySelector("a");
    console.dir(navbarElement);

    navbarElement.id = "";
    navbarElementLink.innerText = label;
    navbarElementLink.href = href;

    return navbarElement;
}

/**
 * @typedef NavbarItem
 * @type {object}
 * @property {string} label
 * @property {string} href
 */

/**
 * 
 * @param {NavbarItem[]} navbarItems 
 */
export function setNavbar(navbarItems) {
    const navbar = document.getElementById('header-navbar');
    navbarItems.map(item => setNavbarItem(item.label, item.href)).forEach(element => {
        navbar.appendChild(element);
    });
    document.getElementById('nav-item-prototype').remove();
}
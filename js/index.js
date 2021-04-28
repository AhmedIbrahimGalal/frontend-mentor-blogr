let isOpen = false;

function toggleMenu(e, toggleElement) {
  // stop The tag a behavior
  e.preventDefault();

  isOpen = !isOpen;

  let mobMenu = document.getElementById('mob-menu');

  if(isOpen) {
    mobMenu.style.display = 'flex';
    toggleElement.children[0].classList.remove('fa-bars');
    toggleElement.children[0].classList.add('fa-times');
  } else {
    mobMenu.style.display = 'none';
    toggleElement.children[0].classList.remove('fa-times');
    toggleElement.children[0].classList.add('fa-bars');
  }
}

function toggleDropdown(e, navlink) {
    // stop The tag a behavior
    e.preventDefault();

    let productDropdown = document.getElementById('product-dropdown');
    let companyDropdown = document.getElementById('company-dropdown');
    let connectDropdown = document.getElementById('connect-dropdown');

    const root = document.querySelector(":root");

    switch(navlink) {
      case 'product': {
        let displayVal = window.getComputedStyle(productDropdown, null).getPropertyValue("display");
        if(displayVal == 'none') {
          productDropdown.style.display = 'flex';
          root.style.setProperty("--mobProductLink", `"\\f077"`);

        } else {
          productDropdown.style.display = 'none';
          root.style.setProperty("--mobProductLink", `"\\f078"`);
        }
        companyDropdown.style.display = 'none';
        connectDropdown.style.display = 'none';
        root.style.setProperty("--mobCompanyLink", `"\\f078"`);
        root.style.setProperty("--mobConnectLink", `"\\f078"`);
        break;
      }
      case 'company': {
        let displayVal = window.getComputedStyle(companyDropdown, null).getPropertyValue("display");
        if(displayVal == 'none') {
          companyDropdown.style.display = 'flex';
          root.style.setProperty("--mobCompanyLink", `"\\f077"`);
        } else {
          companyDropdown.style.display = 'none';
          root.style.setProperty("--mobCompanyLink", `"\\f078"`);
        }
        productDropdown.style.display = 'none';
        connectDropdown.style.display = 'none';
        root.style.setProperty("--mobConnectLink", `"\\f078"`);
        root.style.setProperty("--mobProductLink", `"\\f078"`);
        break;
      }
      case 'connect': {
        let displayVal = window.getComputedStyle(connectDropdown, null).getPropertyValue("display");
        if(displayVal == 'none') {
          connectDropdown.style.display = 'flex';
          root.style.setProperty("--mobConnectLink", `"\\f077"`);
        } else {
          connectDropdown.style.display = 'none';
          root.style.setProperty("--mobConnectLink", `"\\f078"`);
        }
        productDropdown.style.display = 'none';
        companyDropdown.style.display = 'none';
        root.style.setProperty("--mobProductLink", `"\\f078"`);
        root.style.setProperty("--mobCompanyLink", `"\\f078"`);
        break;
      }
    }
}

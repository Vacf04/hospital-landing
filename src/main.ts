function initMenuMobile(menu: HTMLElement, menuButton: HTMLElement) {
  function activeMenu(event: MouseEvent) {
    if (event.currentTarget instanceof HTMLElement) {
      const isActive = event.currentTarget.classList.contains("active");
      document.documentElement.style.overflow = isActive ? "auto" : "hidden";
      event.currentTarget.classList.toggle("active", !isActive);
      menu.classList.toggle("active", !isActive);
    }
  }

  function handleClickOutside(event: MouseEvent) {
    if (event.target instanceof HTMLElement) {
      const isClickOutside =
        !event.target.closest(".menu") && !event.target.closest(".menu-button");
      const isLinkClick = event.target.closest(".menu a");

      if (isClickOutside || isLinkClick) {
        document.documentElement.style.overflow = "auto";
        menuButton.classList.remove("active");
        menu.classList.remove("active");
      }
    }
  }

  menuButton.addEventListener("click", activeMenu);
  document.documentElement.addEventListener("click", handleClickOutside);
}

const menu = document.querySelector(".menu") as HTMLElement;
const menuButton = document.querySelector(".menu-button") as HTMLElement;
initMenuMobile(menu, menuButton);

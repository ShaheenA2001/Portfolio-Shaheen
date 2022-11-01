/* MENU BUTTON */
const $openMenu = document.querySelector(".open-menu-button")
const $mainNav = document.querySelector(".main-nav")
const $closeMenu = document.querySelector(".close-menu-button")
const $linksNav = document.querySelectorAll(".main-nav a")

$openMenu.addEventListener("click", () => {
   $mainNav.classList.add("-active")
})

$closeMenu.addEventListener("click", () => {
   $mainNav.classList.remove("-active")
})

$linksNav.forEach((linkNav) => {
   linkNav.addEventListener("click", function() {
      $mainNav.classList.remove("-active")
   })
})

/* SKILLS BUTTONS */
const $skillButtons = document.querySelectorAll(".skill-button")

function selectSkill() {
   let $skillActive = this
   if ($skillActive.classList.contains("-active")) {
      $skillActive.classList.remove("-active")
   } else {
      $skillActive.classList.add("-active")
   }
}

$skillButtons.forEach((skillItem) => {
   skillItem.addEventListener("click", selectSkill)
})

/* PORTFOLIO CAROUSEL */
const $portfolioCarousel = document.querySelector(".glide.portfolio-carousel")

new Glide($portfolioCarousel, {
   type: "carousel",
   gap: 0,
   startAt: 1,
   perView: 1,
   autoplay: 3000,
   hoverpause: true,
   animationDuration: 1000
}).mount()


/* SCROOL EVENT */
const scrollEvent = () => {
   const $header = document.querySelector(".header")
   const $btnToTop = document.querySelector(".btn-totop")

   if (this.scrollY >= 50) {
      $header.classList.add("-scroll")
   } else {
      $header.classList.remove("-scroll")
   }

   if (this.scrollY >= 550) {
      $btnToTop.classList.add("-visible")
   } else {
      $btnToTop.classList.remove("-visible")
   }
}

window.addEventListener("scroll", scrollEvent)

/* SMOOTH SCROLL SECTION ACTIVE */
const $sections = document.querySelectorAll(".section[id]")

let sectionActive = () => {
   const $scroll_Y = window.pageYOffset

   $sections.forEach(current => {
      const $sectionHeight = current.offsetHeight
      const $sectionTop = current.offsetTop - 50
      $sectionId = current.getAttribute("id")

      if ($scroll_Y > $sectionTop && $scroll_Y <= $sectionTop + $sectionHeight) {
         document.querySelector(".main-nav a[href*=" + $sectionId + "]").classList.add("-active")
      } else {
         document.querySelector(".main-nav a[href*=" + $sectionId + "]").classList.remove("-active")
      }
   })
}

window.addEventListener("scroll", sectionActive)

/* DARK/LIGHT THEME */
const $themeButton = document.querySelector(".theme-button")
const $body = document.body
const $themeActive = window.localStorage.getItem("theme")

if ($themeActive === "dark") {
   $themeButton.classList.add("-dark-mode")
   $body.classList.add("dark-theme")
} else {
   $themeButton.classList.remove("-dark-mode")
   $body.classList.remove("dark-theme")
}

const toggleTheme = () => {
   let $darkMode = document.querySelector(".-dark-mode")

   if (!$darkMode) {
      $themeButton.classList.add("-dark-mode")
      $body.classList.add("dark-theme")
      localStorage.setItem("theme", "dark")
   } else {
      $themeButton.classList.remove("-dark-mode")
      $body.classList.remove("dark-theme")
      localStorage.setItem("theme", "light")
   }
}

$themeButton.addEventListener("click", toggleTheme)

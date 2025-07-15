class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <header class="header">
        <div class="logo">
            <a href="index.html">
                <img src="img/240-700px-CircuitAuction_main-Logo_rgb.webp" class="main-logo" alt="Circuit Auction">
                <img src="img/4.webp" class="small-logo" alt="Circuit Auction">
            </a>
        </div>
        <div class="mobile-menu-toggle">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <nav class="nav-links">        
            <a href="" class="nav-btn-purple" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/yoav-circuitauction/30min'});return false;">Schedule Demo</a>
            <a href="/">Home</a>
            <a href="about.html">About Us</a>
            <a href="features.html">Auction Features</a>
            <a href="collectibles.html">Collectibles</a>
            <a href="pricing.html">Pricing</a>
            <a href="faq.html">FAQ</a>
            <a href="#contact">Contact</a>
        </nav>
      </header>
    `;
  }

  // Connect the component to the DOM
  connectedCallback() {
    // This ensures the mobile menu toggle functionality works
    const mobileMenuToggle = this.querySelector('.mobile-menu-toggle');
    const navLinks = this.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
      mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
      });
    }
  }
}

customElements.define('header-component', HeaderComponent);
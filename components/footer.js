class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <footer>
        <div class="footer-content">
          <div class="footer-logo">
            <img src="img/4.png" alt="Circuit Auction">
          </div>
          <div class="footer-links">
            <div class="footer-links-column">
              <h4>Company</h4>
              <ul>
                <li><a href="about.html">About Us</a></li>
                <li><a href="demo.html">Contact</a></li>                
              </ul>
            </div>
            <div class="footer-links-column">
              <h4>Product</h4>
              <ul>
                <li><a href="features.html">Features</a></li>
                <li><a href="plans.html">Plans</a></li>
                <li><a href="faq.html">FAQ</a></li>
              </ul>
            </div>
            <div class="footer-links-column">
              <h4>Resources</h4>
              <ul>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="support.html">Support</a></li>
                <li><a href="terms.html">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} N.Z. Circuit Auction. All rights reserved.</p>
        </div>
      </footer>
    `;
  }
}
customElements.define('footer-component', FooterComponent);
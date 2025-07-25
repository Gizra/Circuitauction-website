<!-- footer.js -->
class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <footer>
        <div class="footer-content">
          <!-- Column 1: Company Information -->
          <div class="footer-company-info">
            <div class="footer-logo">
              <img src="img/logo-white.webp" alt="Circuit Auction">
            </div>
            <p class="footer-tagline">Empowering auction houses with our all-in-one, AI-powered auction management system</p>
            <div class="footer-contact-info">
              <p><i class="fa fa-map-marker"></i> 350 N. Orleans Street<br />
                    Suite 9000N Chicago, <br />IL 60654, USA</p>
              <p><i class="fa fa-phone"></i> +1-312-585-7625</p>
              <p><i class="fa fa-envelope"></i> info@circuitauction.com</p>
            </div>
            <div class="footer-social">
              <a href="https://www.facebook.com/people/Circuit-Action-AI/61570670905543/" class="social-icon"><i class="fa fa-facebook"></i></a>
              <a href="https://x.com/circuitauction" class="social-icon"><i class="fa fa-twitter"></i></a>
              <a href="https://www.linkedin.com/company/circuit-auction/" class="social-icon"><i class="fa fa-linkedin"></i></a>
              <a href="#" class="social-icon"><i class="fa fa-instagram"></i></a>
            </div>
          </div>
          
          <!-- Column 2: Navigation Links -->
          <div class="footer-nav">
            <h4>Site Navigation</h4>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="features.html">Auction Features</a></li>
              <li><a href="collectibles.html">Collectibles</a></li>
              <li><a href="faq.html">FAQ</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="terms.html">Terms & Privacy</a></li>
              <li><a href="auctioneers.html">auctioneers & auction houses</a></li>
              <li><a href="https://docs.circuitauction.com/main">Doc & user guide</a></li>
              
            </ul>
          </div>
          
          <!-- Column 3: Partnerships & Trust -->
          <div class="footer-partners">
            <h4>Trusted Partners</h4>
            
            <!-- Shipping Carriers -->
            <div class="partner-section">
              <h5>Shipping Partners</h5>
              <div class="partner-logos">
                <p>FedEx</p>
                <p>USPS</p>
                <p>DHL</p>
                <p>UPS</p>
              </div>
            </div>
            
            <!-- Payment Methods -->
            <div class="partner-section">
              <h5>Payment Methods</h5>
              <div class="partner-logos">
                <p>Visa</p>
                <p>Mastercard</p>
                <p>American Express</p>
                <p>PayPal</p>
              </div>
            </div>
            
            <!-- Trust Badges -->
            <div class="trust-badges">
              <div class="badge">
                <i class="fa fa-check-circle"></i>
                <span>Google Verified</span>
              </div>
              <div class="badge">
                <i class="fa fa-shield"></i>
                <span>AI Powered</span>
              </div>
              <div class="badge">
                <i class="fa fa-lock"></i>
                <span>Secure Transactions</span>
              </div>
            </div>
            
            <!-- CTA Button -->
            <a href="" class="cta-btn yellow scroll-reveal delay-2" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/yoav-circuitauction/30min'});return false;">
                <span class="qodef-btn-text">Book Your Demo Today</span>    
                <span class="qodef-btn-text-icon">
                    <i class="qodef-icon-simple-line-icon icon-arrow-right-circle "></i>
                </span>
            </a>
          </div>
        </div>
        
        <!-- Footer Bottom -->
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} N.Z. Circuit Auction. All rights reserved.</p>
          <div class="footer-bottom-links">
            <a href="terms.html">Terms of Service</a>
            <a href="sitemap.html">Sitemap</a>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', FooterComponent);
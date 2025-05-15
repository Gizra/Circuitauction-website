class ContactComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `      
      <section id="contact" class="section contact-section">
        <div class="pre-contact-cta">
          <p class="large-text"><span class="cup scroll-reveal">🏆</span> Bottom of Page Achievement Unlocked! <span class="cup scroll-reveal">🏆</span></p> 
          <p>You're officially auction-software curious. Let's turn that curiosity into your success – use the form below and we'll talk details."</p>
        </div>
        <h2 class="scroll-reveal">Write to Us</h2>        
        <div class="contact-wrapper">
          <div class="contact-container">
            <div class="contact-bg-left">
              <img src="img/left-contact.png" alt="Contact Background Left" class="scroll-reveal">
            </div>
            
            <div class="form-container">
              <form id="contactForm" class="scroll-reveal delay-2 contact-form">
                <div class="form-row">
                  <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="Olivia">
                  </div>
                  <div class="form-group">
                    <label for="company">Company/Organization <span class="required">*</span></label>
                    <input type="text" name="company" class="form-control" id="company" placeholder="Wilson" required>
                  </div>
                </div>
                
                <div class="form-row">
                  <div class="form-group">
                    <label for="email">Email <span class="required">*</span></label>
                    <input type="email" name="_replyto" class="form-control" id="email" placeholder="hello@reallygreatsite.com" required>                    
                  </div>
                  <div class="form-group">
                    <label for="phone">Phone</label>
                    <input type="tel" name="phone" class="form-control" id="phone" placeholder="+1 (212) 234-5678">
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea id="message" name="message" rows="5" placeholder="Type your message here"></textarea>
                </div>
                <input type="hidden" name="_subject" value="Circuit Auction Website Inquiry">
                <button type="submit" class="cta-button purple">Let's Talk</button>
              </form>
            </div>
            
            <div class="contact-bg-right">
              <img src="img/right-contact.png" alt="Contact Background Right" class="scroll-reveal">
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
customElements.define('contact-component', ContactComponent);
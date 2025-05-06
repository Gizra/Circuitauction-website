class ContactComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <section id="contact" class="section">
            <h2 class="scroll-reveal">Contact Us</h2>
            <p class="scroll-reveal delay-1">Get in touch with our team to learn more about our services and products.</p>
            <form id="contactForm" class="scroll-reveal delay-2 contact-form">
                <!-- Same form fields as before -->
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name">
                </div>
                <div class="form-group">
                    <label for="company">Company/Organization <span class="required">*</span></label>
                    <input type="text" name="company" class="form-control" id="company" required>
                </div>
                <div class="form-group">
                    <label for="email">Email <span class="required">*</span></label>
                    <input type="email" name="_replyto" class="form-control" id="email" required>
                </div>
                <div class="form-group">
                    <label for="phone">Phone</label>
                    <input type="tel" name="phone" class="form-control" id="phone">
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="5" placeholder="Your Message..."></textarea>
                </div>
                <input type="hidden" name="_subject" value="Circuit Auction Website Inquiry">
                <button type="submit" class="cta-button">Send Message</button>
            </form>
        </section>
    `;
  }
}
customElements.define('contact-component', ContactComponent);
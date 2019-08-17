import React from 'react';

export default class ContactForm extends React.Component {
    render() {
        return (
            <form name="contactForm" method="POST" netlify-honeypot="bot-field" data-netlify="true" id="contact-form"
              class="contact-form">
              <p class="screen-reader-text">
                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
              </p>
              <p class="form-row">
                <label class="form-label">Name</label>
                <input type="text" name="name" class="form-input" placeholder="Enter your name"/>
                <span class="input-focus" aria-hidden="true" />
              </p>
              <p class="form-row">
                <label class="form-label">Email</label>
                <input type="email" name="email" class="form-input" placeholder="Enter your email address"/>
                <span class="input-focus" aria-hidden="true" />
              </p>
              <p class="form-row">
                <label class="form-label">Message</label>
                <textarea name="message" class="form-textarea" rows="5" placeholder="Enter your message" />
                <span class="input-focus" aria-hidden="true" />
              </p>
              <input type="hidden" name="form-name" value="contactForm" />
              <p class="form-row form-submit">
                <button type="submit" class="button">Send Message</button>
              </p>
            </form>
        );
    }
}

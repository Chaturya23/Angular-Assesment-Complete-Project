import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  public sendEmail(e: Event) {
    e.preventDefault();
    
    emailjs.sendForm('service_rsbuyxf', 'template_pcdapck', e.target as HTMLFormElement, 'HcWJ3OLp4Eu4H4YIo')
      .then((result: EmailJSResponseStatus) => {
        alert('Message sent successfully!');
      }, (error) => {
        alert('Failed to send the message. Please try again.');
        console.error(error.text);
      });
  }
  

}

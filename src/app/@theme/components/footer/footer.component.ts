import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <div class="socials">
      <a href="https://il.linkedin.com/in/chenosipov" class="small"  target="_blank" >
      <i class="ion ion-social-linkedin small"></i>
      <small>Chen Osipov</small>
      </a>
    </div>
  `,
})
export class FooterComponent {
}

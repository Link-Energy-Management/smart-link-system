import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
    <small>COPYRIGHT © 2024 LINK ENERGY MANAGEMENT SERVICES - ALL RIGHTS RESERVED.</small>
    </span>
    <div class="socials">
      <a href="https://www.facebook.com/" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://www.x.com/" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://linkedin.com/" target="_blank" class="link-icon ion-social-linkedin"></a>
      <a href="https://linkenergymanagement.com/" target="_blank">
        <nb-icon icon="globe" style="margin-bottom: 2px"></nb-icon>
      </a>
    </div>
  `,
})
export class FooterComponent {
}

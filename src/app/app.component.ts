import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Data to HTML template from server
  app = {
    title: 'What\'s up',
    subtitle: 'Look what is happening around you and find plans, things to do and enjoy!',
    action: 'Find a plan!'
  };
  // Data from User service when reload the page
  user = {
    actual_location: 'Madrid',
    is_facebook_profile_upload: true,
    is_twitter_profile_upload: true,
    is_instagram_profile_upload: false,
  };
  // From Data service where reload the page
  plans = [
    { name: 'Parque del Retiro', address: 'Avda. independencia', latitude: 40.411214, longitude: -3.713434 },
    { name: 'Parque del Almendro', address: 'Avda. grande', latitude: 40.40212, longitude: -3.73423948 }
  ];

  on_action() {
    console.log('Click on action button');
  }

  show_alert() {
    if (!this.user.is_facebook_profile_upload || !this.user.is_instagram_profile_upload || !this.user.is_twitter_profile_upload) {
      return true;
    } else {
      return false;
    }
  }

}

import { OverlayModule } from '@angular/cdk/overlay';
import { Component, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [``],
})
export class AppComponent {
  isOpen = false;

  constructor(private router: Router) {}

  navigateToProfile() {
    this.router.navigate(['/user-profile']);
    this.isOpen = false;
  }

  logout() {
    this.isOpen = false;
    alert('logout');
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forChild([]),
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    OverlayModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}

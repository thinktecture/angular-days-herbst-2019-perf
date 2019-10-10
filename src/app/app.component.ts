import { ChangeDetectionStrategy, Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  get title() { console.log('CD'); return 'title'; }

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    requestAnimationFrame(() => this.ngOnInit());
  }
}

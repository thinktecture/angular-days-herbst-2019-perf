import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsyncComponent implements OnInit {
  title$ = of('foo').pipe(delay(3000));

  constructor() { }

  ngOnInit() {
  }

}

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  title = 'test';

  constructor(public cdRef: ChangeDetectorRef) {
    cdRef.detach();
  }

  ngOnInit() {
  }

}

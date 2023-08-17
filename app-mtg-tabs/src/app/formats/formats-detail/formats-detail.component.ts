import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-formats-detail',
  templateUrl: './formats-detail.component.html',
  styleUrls: ['./formats-detail.component.scss'],
})
export class FormatsDetailComponent  implements OnInit {

  id: string | null = "";

  constructor(route: ActivatedRouteSnapshot) {
    this.id = route.paramMap.get('id');
  }

  ngOnInit() {}

}

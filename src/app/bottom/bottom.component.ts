import { Component } from '@angular/core';
import { StyleService } from '../services/style.service';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css']
})
export class BottomComponent {
  constructor(private styleService: StyleService) { }
}

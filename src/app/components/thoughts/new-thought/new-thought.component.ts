import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-thought',
  templateUrl: './new-thought.component.html',
  styleUrls: ['./new-thought.component.css'],
})
export class NewThoughtComponent implements OnInit {
  thought = {
    id: '1',
    content: 'Learning Angular',
    authorship: 'dev',
    model: 'model1',
  };

  ngOnInit(): void {}
}

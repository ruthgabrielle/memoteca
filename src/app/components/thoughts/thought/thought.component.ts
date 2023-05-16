import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css'],
})
export class ThoughtComponent implements OnInit {
  @Input() thought = {
    content: 'Studying Angular',
    authorship: 'Ruthinha 100%',
    modelo: 'modelo3',
  };

  larguraPensamento(): string {
    if (this.thought.content.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
  ngOnInit(): void {}
}

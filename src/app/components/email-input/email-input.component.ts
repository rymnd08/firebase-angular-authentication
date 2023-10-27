import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.css']
})
export class EmailInputComponent {
  @Input() type = ''
  @Input() label = ''
  @Input() value = ''
  @Input() formControlName = ''
  @Input() placeholder = ''
}

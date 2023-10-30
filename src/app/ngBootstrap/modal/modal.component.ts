import { Component, Input, TemplateRef } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  	// add NgbModalConfig and NgbModal to the component providers
	providers: [NgbModalConfig, NgbModal],
  standalone: true
})
export class ModalComponent {
  @Input() btn! : string[]

  italic = '<i>Kunwari Icon to</i>'

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
		// customize default values of modals used by this component tree
		// config.backdrop = 'static';
		config.keyboard = false;
	}

	open(size: string, content: TemplateRef<any>) {
		this.modalService.open(content, {size});
	}
}

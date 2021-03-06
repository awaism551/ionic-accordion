// tslint:disable: member-ordering
// tslint:disable: no-debugger
// tslint:disable: only-arrow-functions
// tslint:disable: variable-name
// tslint:disable: no-shadowed-variable
// tslint:disable: prefer-for-of
// tslint:disable: jsdoc-format
// tslint:disable: indent

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mi-accordion',
  templateUrl: './mi-accordion.component.html',
  styleUrls: ['./mi-accordion.component.scss'],
})
export class MiAccordionComponent implements OnInit {

	/**
	 * The name of the technology that will be displayed as the title for the accordion header
	 * @public
	 * @property name
	 * @type {string}
	 */
	// @Input()
	// name: string;


	/**
	 * The description of the technology that will be displayed within the accordion body (when activated
	 * by the user)
	 * @public
	 * @property description
	 * @type {string}
	 */
	// @Input()
	// description: string;

	// @Input()
	// status: boolean;


	/**
	 * The official logo identifying the technology that will be displayed within the accordion body (when activated
	 * by the user)
	 * @public
	 * @property image
	 * @type {string}
	 */
	// @Input()
	// image: string;

	@Input()
	technology: any;


	/**
	 * The change event that will be broadcast to the parent component when the user interacts with the component's
	 * <ion-button> element
	 * @public
	 * @property change
	 * @type {EventEmitter}
	 */
	@Output()
	change: EventEmitter<string> = new EventEmitter<string>();


	/**
	 * Determines and stores the accordion state (I.e. opened or closed)
	 * @public
	 * @property isMenuOpen
	 * @type {boolean}
	 */
	// public isMenuOpen : boolean = false;

	constructor() { }

	ngOnInit() {}

	/**
	 * Allows the accordion state to be toggled (I.e. opened/closed)
	 * @public
	 * @method toggleAccordion
	 * @returns {none}
	 */
	// public toggleAccordion(status): void {
	// 	debugger;
	// 	console.log(status);
	// 	this.isMenuOpen = status === 'true' ? false : true;
	// }


	/**
	 * Allows the value for the  element to be broadcast to the parent component
	 * @public
	 * @method broadcastName
	 * @returns {none}
	 */
	public broadcastName(name: string): void {
		this.change.emit(name);
	}

}

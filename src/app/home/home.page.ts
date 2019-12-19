import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


/**
 * The data structure that will be used for supplying the accordion content
 * @public
 * @property technologies
 * @type {Array}
 */
public technologies : Array<{ name: string, description: string, image: string }> = [
    {
       name : 'Angular',
       description : 'Google\'s front-end development framework - default option for Ionic development',
       image: '/assets/images/angular-logo.png'
    },
    {
       name : 'VueJS',
       description : 'Latest cutting edge front-end development framework - can be enabled as an option for Ionic development',
       image: '/assets/images/vuejs-logo.png'
    },
    {
       name : 'React',
       description : 'Popular front-end development framework from Facebook- can be enabled as an option for Ionic development',
       image: 'assets/images/react-logo.png'
    }
];

	constructor() {}


	/**
	 * Captures and console logs the value emitted from the user depressing the accordion component's <ion-button> element
	 * @public
	 * @method captureName
	 * @param {any}		event 				The captured event
	 * @returns {none}
	 */
	public captureName(event: any) : void
	{
		console.log(`Captured name by event value: ${event}`);
	}

}
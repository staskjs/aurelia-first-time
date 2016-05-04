import { inject } from 'aurelia-framework';

@inject(Element)
export class LoginForm {
  login = '';
  password = '';

  constructor(element) {
	this.element = element;
  }

  submit() {
	let event = new CustomEvent('login', {
	  detail: {
		login: this.login,
		password: this.password,
	  },
	  bubbles: true,
	});

	console.log(this.login, this.password);
	this.element.dispatchEvent(event);
  }
}

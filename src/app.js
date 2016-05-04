export class App {
  message = 'Welcome to Aurelia!';

  onLogin(e) {
	console.log(`Submited login = ${e.detail.login} and password = ${e.detail.password}`);
  }
}

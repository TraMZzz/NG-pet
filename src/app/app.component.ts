/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig, Router} from '@angular/router-deprecated';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ],
  directives: [ ],
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('normalize.css')],
  template: `
    <pre>!!!!!!!!!!</pre>

  `
})
export class App {

}


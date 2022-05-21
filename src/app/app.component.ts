import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {

  constructor(private http: HttpClient) {
  }

  public onGetEntries() {
    // TODO this is just an example, remove/rewrite when actual code design is ready
    this.http.get('http://localhost:3000/entries', { observe: 'response' }).subscribe((resp) => {
      console.log(resp);
    });
  }

}

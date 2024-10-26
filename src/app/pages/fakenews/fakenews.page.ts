import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from 'src/app/services/api/api-connection.service';

@Component({
  selector: 'app-fakenews',
  templateUrl: './fakenews.page.html',
  styleUrls: ['./fakenews.page.scss'],
})
export class FakenewsPage implements OnInit {
  fakenews: any;

  constructor(private apiconnection: ApiConnectionService) { }

  ngOnInit() {

    const noticiasGuardadas = localStorage.getItem('noticias');

    if (noticiasGuardadas) {

      this.fakenews = JSON.parse(noticiasGuardadas);
    } else {

      this.apiconnection.respuestaAPi().subscribe(
        {
          next: (respuestaAPi: any) => {
            this.fakenews = respuestaAPi;
    
            localStorage.setItem('noticias', JSON.stringify(respuestaAPi));
          },
          error: (errorApi: any) => {
            console.error('error de api', errorApi);
          }
        }
      );
    }
  }
}

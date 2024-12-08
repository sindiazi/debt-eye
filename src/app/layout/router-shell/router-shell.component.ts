import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-router-shell',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './router-shell.component.html',
  styleUrl: './router-shell.component.scss'
})
export class RouterShellComponent {

}

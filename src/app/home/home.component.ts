import { Component, HostListener } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isVisible: boolean = false;

  
isShow:boolean=false
topPosTostartShowing:number=100
@HostListener('window:scroll')checkScroll(){
const scrollPosition= document.documentElement.scrollTop || document.body.scrollTop || 0

console.log('[scroll]',scrollPosition)
}

goPosition(){
  window.scroll({
    top:930,
    left:0,
    behavior:'smooth'
  })
  this.toggleContent()
}
toggleContent(): void {
  this.isVisible = !this.isVisible;
}

}
 
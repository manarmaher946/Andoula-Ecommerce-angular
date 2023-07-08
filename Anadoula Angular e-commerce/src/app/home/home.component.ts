import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ProductService } from 'src/Services/product.service';
import { CategoryService } from 'src/Services/category.service';
import { ShowSubcategoryService } from 'src/Services/show-subcategory.service';
import { HomeDiscountsService } from 'src/Services/home-discounts.service';
import { HomeProductsService } from 'src/Services/home-products.service';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss','./css/style.css','./css/style.min.css','./css/lightbox.css','./css/lightbox.min.css'],
  animations: [
    trigger('divAnimation', [
      state('initial', style({
        opacity: 0,
        transform: 'translateY(-50px)'
      })),
      state('final', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('initial => final', animate('500ms ease-in')),
      transition('final => initial', animate('500ms ease-out'))
    ])
  ]
  
  
})
export class HomeComponent implements OnInit    {

  videoPlayer: any;

  @ViewChild('myVideo') myVideo: any;
  videoTotalTime?: string;

  Products:any=[]
  Categories:any=[]
  subCategories:any=[]
  Discounts:any=[]
  errorMessage: any;
  constructor( private ProductService:ProductService , private CategoryService:CategoryService ,
     private ShowSubcategoryService:ShowSubcategoryService ,private HomeDiscountsService:HomeDiscountsService,
     private HomeProductsService:HomeProductsService){}




     ngAfterViewInit() {
      const videoElement: HTMLVideoElement = this.myVideo.nativeElement;
      videoElement.onloadedmetadata = () => {
        this.videoTotalTime = this.formatTime(videoElement.duration);
      };
    }
  
    formatTime(totalTimeInSeconds: number): string {
      const hours: number = Math.floor(totalTimeInSeconds / 3600);
      const minutes: number = Math.floor((totalTimeInSeconds % 3600) / 60);
      const seconds: number = Math.floor(totalTimeInSeconds % 60);
      
      return `${this.padNumber(hours)}:${this.padNumber(minutes)}:${this.padNumber(seconds)}`;
    }
  
    padNumber(num: number): string {
      return num.toString().padStart(2, '0');
    }






 

ngOnInit(): void {

  
    
this.HomeProductsService.ShowAllProducts().subscribe({
    next:(data:any)=>{
      this.Products = data.data
    console.log(this.Products)

    },
    error:(error:any)=>this.errorMessage = error
  });

  this.CategoryService.GetAllCategories().subscribe({
    next:(data:any)=>{
      this.Categories = data.data
    console.log(this.Categories)

    },
    error:(error:any)=>this.errorMessage = error
  });

  this.ShowSubcategoryService.ShowAllSubCategory().subscribe({
    next:(data:any)=>{
      this.subCategories = data.data
    console.log(this.subCategories)

    },
    error:(error:any)=>this.errorMessage = error
  });

  this.HomeDiscountsService.ShowAllDiscounts().subscribe({
    next:(data:any)=>{
      this.Discounts = data.data
    console.log(this.Discounts)

    },
    error:(error:any)=>this.errorMessage = error
  });

}


onTimeUpdate(event: Event,  startbtn:any) {
  const video = event.target as HTMLVideoElement;
  if (video.currentTime == video.duration) {
    startbtn.style.display = "block"

  }
}

playVideo(event:any, startbtn:any) {
  event.play();  
  startbtn.style.display = "none"

}
}
import { Component } from '@angular/core';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {

  Name = 'Mizan';
addtoCart :number = 0;

  product = {
    name: 'iPhone x',
    price : 999,
    color: 'Diamond Black',
    discount: 8.8,
    inStock: 5,
    pImage: "/assets/images/iPhone.jpg"
  }

  getDiscountedPrice(){
    return ( this.product.price - (this.product.price * this.product.discount/100)).toFixed(2);
  }

  onNameChange(event : any){

      this.Name = event.target.value;
       //this.Name =event.target.value;
     console.log(event.target.value);
    }

  addProduct(){
    if(this.addtoCart < this.product.inStock){
      this.addtoCart++;
    }
    
  }

  
  removeProduct(){
    if(this.addtoCart >0)
    this.addtoCart--;
  }


}

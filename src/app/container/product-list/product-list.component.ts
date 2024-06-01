import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products= [
    {
      id:1,
      name: 'Nike Joy Ride One',
      description:'',
      brand: 'NIKE',
      gender:'MALE',
      category: 'RUNNING',
      size: [7, 8, 9, 10, 11],
      color:['White', 'Blue', 'Black', 'Brown', 'Red'],
      price: 15205,
      discountPrice:0,
      is_in_inventory: true,
      items_left: 4,
      imageUrl: '/assets/images/nike-joyride-001.jpg',
      slug: 'nike react miller'
    },
    {
      id:2,
      name: 'Nike Joy Ride',
      description:'',
      brand: 'NIKE',
      gender:'FEMALE',
      category: 'RUNNING',
      size: [7, 8, 9, 10, 11],
      color:['White', 'Blue', 'Black', 'Brown', 'Red'],
      price: 1505,
      discountPrice: 1000,
      is_in_inventory: false,
      items_left: 4,
      imageUrl: '/assets/images/nike-joyride-002.jpg',
      slug: 'nike react miller'
    },
    {
      id:3,
      name: 'Nike Air Force',
      description:'',
      brand: 'NIKE',
      gender:'MALE',
      category: 'RUNNING',
      size: [7, 8, 9, 10, 11],
      color:['White', 'Blue', 'Black', 'Brown', 'Red'],
      price: 15205,
      discountPrice:0,
      is_in_inventory: true,
      items_left: 4,
      imageUrl: '/assets/images/nike-joyride-004.jpg',
      slug: 'nike react miller'
    },

    {
      id:4,
      name: 'Nike Joy Ride One',
      description:'',
      brand: 'NIKE',
      gender:'MALE',
      category: 'RUNNING',
      size: [7, 8, 9, 10, 11],
      color:['White', 'Blue', 'Black', 'Brown', 'Red'],
      price: 15205,
      discountPrice:0,
      is_in_inventory: true,
      items_left: 4,
      imageUrl: '/assets/images/nike-joyride-005.jpg',
      slug: 'nike react miller'
    },
    {
      id:5,
      name: 'Nike Joy Ride',
      description:'',
      brand: 'NIKE',
      gender:'FEMALE',
      category: 'RUNNING',
      size: [7, 8, 9, 10, 11],
      color:['White', 'Blue', 'Black', 'Brown', 'Red'],
      price: 1205,
      discountPrice: 1000,
      is_in_inventory: true,
      items_left: 4,
      imageUrl: '/assets/images/nike-joyride-006.jpg',
      slug: 'nike react miller'
    },
    {
      id:6,
      name: 'Nike Air Force',
      description:'',
      brand: 'NIKE',
      gender:'MALE',
      category: 'RUNNING',
      size: [7, 8, 9, 10, 11],
      color:['White', 'Blue', 'Black', 'Brown', 'Red'],
      price: 15205,
      discountPrice:0,
      is_in_inventory: true,
      items_left: 4,
      imageUrl: '/assets/images/nike-joyride-007.jpg',
      slug: 'nike react miller'
    }
  ];

totalProductCount = this.products.length;
totalProcuctInStock = this.products.filter( p => p.is_in_inventory === true).length;
totalProcuctOutOfStock = this.products.filter( p => p.is_in_inventory === false).length;

selectedFilterRadioButton : string = 'all';

onFilterChanged(value : string){  
  this.selectedFilterRadioButton = value;
}

}

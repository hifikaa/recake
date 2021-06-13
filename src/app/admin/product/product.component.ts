import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailComponent } from '../product-detail/product-detail.component';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  title:any;
  book:any={};
  books:any=[];
  constructor(
    public dialog:MatDialog
  ) {

  }

  ngOnInit(): void {
    this.title='Resep Kue';
    this.book={
      title:'resep kue nastar',
      author:'via',
      year:'2021',
    };
    this.getBooks();
  } 

  getBooks()
  {
    this.books=[
      {
        title:'resep kue nastar',
        author:'via',
        year:'2021'
      },
      {
        title:'resep kue kastangel',
        author:'via',
        year:'2021'
      }
    ];
  }

  productDetail(data: any,idx: any)
 {
   let dialog=this.dialog.open(ProductDetailComponent, {
     width:'400px',
     data:data
   });
   dialog.afterClosed().subscribe(res=>{
     if(res)
     {
        //jika idx=-1 (penambahan data baru) maka tambahkan data
       if(idx==-1)this.books.push(res);      
        //jika tidak maka perbarui data  
       else this.books[idx]=res; 
     }
   })
 }
 deleteProduct(idx: any)
 {
  var conf=confirm('Delete item?');
   if(conf)
   this.books.splice(idx,1);
 }
   
}

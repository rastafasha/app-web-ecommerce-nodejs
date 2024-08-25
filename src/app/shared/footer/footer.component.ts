import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/models/categoria.model';
import { Congeneral } from 'src/app/models/congeneral.model';
import { CategoryService } from 'src/app/services/category.service';
import { CongeneralService } from '../../services/congeneral.service';
import { ProductoService } from 'src/app/services/product.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  configuraciones: Congeneral[]=[];
  configuracion: Congeneral;
  categorias: Categoria[];
  categoria: Categoria;

  constructor(
    public configuracionService: CongeneralService,
    public activatedRoute: ActivatedRoute,
    public categoryService: CategoryService,
    public productoService: ProductoService,
  ) { }

  ngOnInit(): void {
    // this.obtenerConfiguracions();
    this.obtenerCategorias();
    this.activatedRoute.params.subscribe( ({id}) => this.obtenerConfiguracion(id));
  }

  obtenerCategorias(){
    return this.categoryService.getCategoriesActivas().subscribe(
      resp=>{
        this.categorias = resp;
        // console.log(this.categories);
      }
    )
  }

  obtenerConfiguracion(_id:string){
    this.configuracionService.getCongeneralById(_id).subscribe(
      resp=>{
        this.configuracion = resp;
        console.log(this.configuracion);
      }
    )
  }
  

  obtenerCategoriasByNombre(){
    return this.productoService.getProductoByCategoryName(this.categoria.nombre).subscribe(
      resp=>{
        this.categoria = resp;
        console.log(this.categoria);
      }
    )
  }

}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planta } from 'src/app/model/planta';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent {

  planta: Planta = {
    nome: "",
    exposicaoSol: "",
    germinacao: "",
    colheita: "",
    resumo: "",
    exposicaoSolResumo: "",
    irrigacao: "",
    imagem: "",
  };
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    const plantaJSON = this.route.snapshot.paramMap.get('planta');
    this.planta = JSON.parse(plantaJSON as string);
    console.log(this.planta)
    console.log(this.planta.nome)
  }
}

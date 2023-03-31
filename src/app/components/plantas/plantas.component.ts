import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Planta } from 'src/app/model/planta';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css']
})
export class PlantasComponent {

  planta: Planta[] = [
    {
      nome: "Alface",
      exposicaoSol: "08h/dia",
      germinacao: "07 dias",
      colheita: "90 dias",
      resumo: "Uma planta muito delicada e sensível. É possível produzi-la com facilidade em locais pequenos, desde que tenham um espaço mínimo de 20cm, e pelo menos 15cm de profundidade.",
      exposicaoSolResumo: "Pode variar com o clima. O ideal é que seja plantada em épocas em que o sol não é tão forte quanto no verão, mas o suficiente para crescerem bem. Se o sol estiver muito forte, colocá-la em um local sombreado até passar é a melhor solução.",
      irrigacao: "Evite jogar água sobre a planta, e umedeça os arredores. É importante manter um equilíbrio entre seco e encharcado, podendo variar em clima e a drenagem do seu vaso.",
      imagem: "../../../assets/pexels-nastyasensei-1199562 1.png"
    },
    {
      nome: "Morango",
      exposicaoSol: "06h/dia",
      germinacao: "14 dias",
      colheita: "60 dias",
      resumo: "O morango é uma fruta de fácil cultivo e pode ser produzido em vasos ou canteiros. É importante ter um solo rico em nutrientes e que seja bem drenado.",
      exposicaoSolResumo: "O morango precisa de sol, mas não pode ser exposto diretamente ao sol forte do meio-dia. O melhor horário para a exposição solar é pela manhã ou no final da tarde.",
      irrigacao: "O solo deve ser mantido sempre úmido, mas nunca encharcado. É importante regar regularmente, mas sem encharcar a planta.",
      imagem: "../../../assets/pexels-nastyasensei-119.png"
    },
    {
      nome: "Laranja",
      exposicaoSol: "06h/dia",
      germinacao: "14 dias",
      colheita: "365 dias",
      resumo: "A laranja é uma árvore frutífera que pode ser cultivada em vasos ou no solo. É importante ter um solo bem drenado e rico em nutrientes.",
      exposicaoSolResumo: "A laranja precisa de sol, mas não pode ser exposta diretamente ao sol forte do meio-dia. O melhor horário para a exposição solar é pela manhã ou no final da tarde.",
      irrigacao: "A laranjeira precisa de água regularmente, mas sem encharcar o solo. É importante regar regularmente, principalmente durante os meses mais quentes.",
      imagem: "../../../assets/pexels-nastyasensei-11.png"
    }, {nome: "Abóbora", exposicaoSol: "06h/dia", germinacao: "07 dias", colheita: "80-120 dias", resumo: "A abóbora é uma planta que pode crescer bastante e requer um espaço maior para ser cultivada. Ela é ideal para ser plantada em épocas mais quentes, e necessita de um solo rico em nutrientes e com boa drenagem.", exposicaoSolResumo: "A abóbora prefere exposição ao sol pela manhã, mas também tolera um pouco de sombra. Em épocas muito quentes, é recomendado que a planta seja protegida do sol direto nas horas mais quentes do dia.", irrigacao: "A abóbora necessita de bastante água para se desenvolver, porém é importante não encharcar o solo. O ideal é regar em dias alternados, mantendo o solo sempre úmido mas não encharcado.", imagem: "../../../assets/pexels-nastyss.png"}
  ]

  constructor(private router: Router) { }

  navegar(event: any) {

    const valor = (<HTMLImageElement>event.target).getAttribute('data-valor');

    if(valor == "alface") {

      this.router.navigate(['detalhes', JSON.stringify(this.planta[0])]);


    } else if(valor == "morango") {
      this.router.navigate(['detalhes', JSON.stringify(this.planta[1])]);
    } else if(valor == "laranja") {
      this.router.navigate(['detalhes', JSON.stringify(this.planta[2])]);
    } else if(valor == "abobora") {
      this.router.navigate(['detalhes', JSON.stringify(this.planta[3])]);
    }
  }

}

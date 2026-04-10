import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  resumo: any;

  chartPie: any;
  chartBar: any;

  constructor(private service: DashboardService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {

    this.service.getResumo().subscribe(res => {
      this.resumo = res;

      this.initPieChart(res);
      this.initBarChart(res);
    });
  }

  initPieChart(res: any) {
    this.chartPie = {
      series: [
        res.quantidadeAtual,
        res.mortos,
        res.defeitos
      ],
      chart: {
        type: 'pie',
        height: 350
      },
      labels: ['Vivos', 'Mortos', 'Defeitos']
    };
  }

  initBarChart(res: any) {
    this.chartBar = {
      series: [{
        name: 'Quantidade',
        data: [
          res.quantidadeAtual,
          res.mortos,
          res.defeitos
        ]
      }],
      chart: {
        type: 'bar',
        height: 350
      },
      xaxis: {
        categories: ['Vivos', 'Mortos', 'Defeitos']
      }
    };
  }

}

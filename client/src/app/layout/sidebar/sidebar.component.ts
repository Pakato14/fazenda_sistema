import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  collapsed = false;
  menuOpen: any = {};
  perfil_id: number = 0;

  menu = [
    {
      label: 'Cadastros',
      icon: 'fa-folder',
      roles: [1],
      children: [
        { label: 'Usuários', route: '/usuarios', icon: 'fa-user' },
        { label: 'Empresas', route: '/empresas', icon: 'fa-building' },
      ],
    },
    {
      label: 'Operacional',
      icon: 'fa-cogs',
      roles: [1,2,3],
      children: [
        { label: 'Lotes', route: '/lotes' },
        { label: 'Controle', route: '/controle' }
      ]
    }
  ];

  constructor(
      private serviceUser: UserService,
    ) { }

  ngOnInit(){
    const saved = localStorage.getItem('sidebar_collapsed');
    this.collapsed = saved === 'true';

    const user = this.serviceUser.getUser() || '{}';
    this.perfil_id = user._profile_id;
  }

  toggleSidebar() {
    this.collapsed = !this.collapsed;
    localStorage.setItem('sidebar_collapsed', String(this.collapsed));
  }

  toggleMenu(label: string) {
    this.menuOpen[label] = !this.menuOpen[label];
  }

  hasAccess(item: any) {
    return item.roles.includes(this.perfil_id);
  }
}

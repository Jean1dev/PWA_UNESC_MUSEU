import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Painel',  icon: 'ti-panel', class: '' },
    { path: 'usuario', title: 'Cadastro de Usuário',  icon: 'ti-user', class: '' },
    { path: 'animais', title: 'Cadastro de Animais',  icon: 'ti-map', class: '' },    
    { path: 'relatorio', title: 'Consulta QRCode',  icon: 'ti-map', class: '' },
    // { path: 'table', title: 'Table List',  icon: 'ti-view-list-alt', class: '' },
    // { path: 'typography', title: 'Typography',  icon: 'ti-text', class: '' },
    // { path: 'icons', title: 'Icons',  icon: 'ti-pencil-alt2', class: '' },
    
    // { path: 'notifications', title: 'Notifications',  icon: 'ti-bell', class: '' },
    // { path: 'upgrade', title: 'Upgrade to PRO',  icon: 'ti-export', class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

}

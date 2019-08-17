import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `<div class="headers bg-dark">
    <div  class="logo-section">
        APP LOGO
    </div>
    <div  class="options-section">
        <span>{{details.fullname}}</span> | <span class="logout">Sign out</span>
    </div>
</div>`
})
export class HeaderComponent {
    @Input() details: any;
    constructor(){}
}
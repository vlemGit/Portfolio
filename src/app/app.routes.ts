import { Routes} from '@angular/router';
import { MainComponent } from './template/main/main.component';
import { ProjectsComponent } from './template/projects/projects.component';
import { ToolsComponent } from './template/tools/tools.component';

export const routes: Routes = [
    { path: '', pathMatch:'full', redirectTo: 'home' },
    { path: 'home', component: MainComponent},
    { path: 'projects', component: ProjectsComponent},
    { path: 'tools', component: ToolsComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

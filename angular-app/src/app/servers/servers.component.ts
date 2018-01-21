import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent {
  allowAddServer = false;
  serverCreationStatus = 'no server created';
  serverName = 'init';
  serverCreated = false;
  servers = ['test', 'prod'];

  constructor(){
    setTimeout(() => {
      this.allowAddServer = true
    },2000)
  }

  ngOnInit(){
    
  }

  onCreateServer(){
    this.serverCreationStatus = 'server created ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName)
  }

  onUpdateServerName(event: any){
    this.serverName = event.target.value;
  }
}
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ipcMain } from 'electron';
import { usb, getDeviceList } from 'usb';

//https://dev.to/michaeljota/integrating-an-angular-cli-application-with-electron---the-ipc-4m18

@Component({
  standalone: true,
  selector: 'app-main-screen',
  templateUrl: 'main-screen.component.html',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class MainScreenComponent implements OnInit {
  ngOnInit(): void {
    const devices: usb.Device[] = getDeviceList();

    ipcMain.on('ping', (event) => {
      console.log('ping');
    });
  }
}

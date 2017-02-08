import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { DoclistRecord } from './doclistRecord';
import { Doclist } from './doclist';
import { TieappService } from "../../../tieapp.service";

@Component({
  selector: 'tieapp-doclist',
  templateUrl: './doclist.component.html',
  styleUrls: ['./doclist.component.css']
})
export class DoclistComponent implements OnInit {

  @Input() messageDetail;
  @Output() emitCurrentDocId = new EventEmitter<any>();
  @Input() currentDocId;
  @Output() emitAttachedFile = new EventEmitter<any>();
  file: File;
  detach = false;
  detachList = [];

  constructor(private _tieappService: TieappService) {

  }

  ngOnInit() {
  }

  onSelect(docId) {
    this.currentDocId = docId;
    this.emitCurrentDocId.emit(docId)
  }

  isHighlight(docId) {
    let styles = {
      'background-color': docId === this.currentDocId ? 'lightgreen' : '',
    };
    return styles;
  }

  onChange(event: EventTarget) {
    this.file = null;
    let text = "";
    let eventObj: MSInputMethodContext = <MSInputMethodContext>event;
    let target: HTMLInputElement = <HTMLInputElement>eventObj.target;
    let files: FileList = target.files;
    this.file = files[0];
    let reader = new FileReader();
    reader.onload = file => {
      let contents: any = file.target;
      text = contents.result;
      console.log(text);
      this._tieappService.postDoc(text)
        .subscribe(docData => {
          this.emitAttachedFile.emit(docData);
          //alert("docAttached: " + JSON.stringify(docData));
        });
    }
    reader.readAsText(this.file);
  }

  onClick(event: EventTarget) {
    let eventObj: MSInputMethodContext = <MSInputMethodContext>event;
    let target: HTMLInputElement = <HTMLInputElement>eventObj.target;
    target.value = null
  }

  onDetach() {
    // this.detach = true;
    alert("checked: " + this.detachList);
  }
  onConfirm() {
    // this.detach = false;
  }
  onCancel() {
    // this.detach = false;
  }
  onClickCheckBox(event) {
    // if the list contains the event value , remove it from the list
    if (this.detachList.length === 0) {
      this.detachList.push(event.target.value);
      alert("checked: " + event.target.value);
    } else {
      for (let valueItem of this.detachList) {
        if (event.target.value === valueItem) {
          alert("valueItem: " + valueItem + " event.target.value" + event.target.value)
          let i = this.detachList.indexOf(valueItem);
          this.detachList.splice(i, 1);
          alert("unchecked: " + event.target.value);
          return;
        }
      }
      this.detachList.push(event.target.value);
      alert("checked: " + event.target.value);
    }
  }
}

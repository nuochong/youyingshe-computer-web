export class EditorConfig {
  public width = '100%';
  public height = '100%';
  // public height = 'calc(100% - 85px)';
  public path = '../../../../assets/editor.md/lib/';
  public lineNumbers = false;         // 显示编辑器行号
  public codeFold = false;
  public searchReplace = true;
  public toolbar = true;
  public emoji = false;
  public info = false;
  public taskList = true;
  public tex = true;
  public readOnly = false;
  public tocm = true;
  public watch = false;
  public previewCodeHighlight = true;
  public saveHTMLToTextarea = true;
  public markdown = '';
  public flowChart = true;
  public syncScrolling = true;
  public sequenceDiagram = true;
  public imageUpload = true;
  public imageFormats = ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'webp'];
  public imageUploadURL = '';

  constructor() {
  }
}

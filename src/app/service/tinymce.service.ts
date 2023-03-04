import { Injectable } from "@angular/core";
import tinymce from "tinymce";


@Injectable(
    {
        providedIn:'root'
    })
export class TinyMCEService
{   option={plugins:'lists', fontsize_formats: "8pt 10pt 12pt 14pt 18pt 24pt 36pt",toolbar: 'undo fontsizeselect redo size numlist bullist bold underline italic indent outdent',keep_styles:true,inline:true,selector:'.editable,.editablex',menubar:false,valid_children : '+body[style],-body[div],p[strong|a|#text]',valid_elements:"*[*]",extended_valid_elements: 'span[style]'}
    constructor()
    {
        tinymce.init(this.option)
    }

    update()
    {
        tinymce.remove();
        setTimeout(()=>tinymce.init(this.option),100);
    }

}
import { OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";


export class Base  {
    
    protected activeLangue:any;
    protected router: Router;
    protected waitingOn: boolean = false;
    protected translate: TranslateService;

    protected constructor(router: Router,  translate: TranslateService) {
        this.router = router; this.translate = translate;
        this.updateLangue();
        this.translate.setDefaultLang(this.activeLangue);
    }
    
    updateLangue() {
        var langue = JSON.parse(localStorage.getItem('langue') as any)
        if (langue == null) {
            localStorage.setItem('langue', JSON.stringify({ fr: 0, en: 1 }));
            this.activeLangue = "en";
        }else{
            this.activeLangue = (langue?.fr && langue.fr == 1)  ? "fr" : ((langue?.en && langue.en == 1) ? "en" : "en")
        }
        
    }

    isFrench(){
        return this.activeLangue == "fr";
    }

    isEnglish(){
        return this.activeLangue == "en";
    }

    translateFromFile(source:any,key:string){
        return source[key];
    }

     }
(function(){var a="sproutcore/standard_theme";if(!SC.BUNDLE_INFO){throw"SC.BUNDLE_INFO is not defined!"
}if(SC.BUNDLE_INFO[a]){return}SC.BUNDLE_INFO[a]={requires:["sproutcore/empty_theme"],styles:["/static/sproutcore/standard_theme/en/8b65428a7dcfa2226586b487bde1bf11560de2aa/stylesheet-packed.css","/static/sproutcore/standard_theme/en/8b65428a7dcfa2226586b487bde1bf11560de2aa/stylesheet.css"],scripts:["/static/sproutcore/standard_theme/en/8b65428a7dcfa2226586b487bde1bf11560de2aa/javascript-packed.js"]}
})();Helloone=SC.Application.create({NAMESPACE:"Helloone",VERSION:"0.1.0",store:SC.Store.create().from(SC.Record.fixtures)});
Helloone.mainPage=SC.Page.design({mainPane:SC.MainPane.design({childViews:"labelView".w(),labelView:SC.LabelView.design({layout:{centerX:0,centerY:0,width:200,height:18},textAlign:SC.ALIGN_CENTER,tagName:"h1",value:"Welcome to SproutCore!"})})});
Helloone.main=function main(){Helloone.getPath("mainPage.mainPane").append()};function main(){Helloone.main()
};
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function ($) {
    
  Drupal.printPage = function(){

  };
  
  Drupal.behaviors.addPrintBtn = {
      attach: function(context, settings) {
          var container = $("form.openseadragon-container");
          var toggleBtn = $("button[title='Toggle full page']");
          var printBtnExisting = $("#printBtn");
          var printBtn = $('<img id="printBtn" src="'+Drupal.settings.islandora_internet_archive_bookreader.image_path+'" alt="Print me" >').click(function(){
              //alert(Drupal.settings.islandora_internet_archive_bookreader.image_path);
              var url = Drupal.getPageImgUrlByIslandoraId();
              Drupal.openPrintWindow(url, "to_print", "width=500,height=800,_blank");
          });
          
          if(toggleBtn && container){
              if(!printBtnExisting || printBtnExisting.length === 0){                  
                  toggleBtn.after(printBtn);
              }
              
          }
      }
  };
  

})(jQuery);
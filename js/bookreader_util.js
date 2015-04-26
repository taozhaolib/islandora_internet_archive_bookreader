/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function ($) {
    
    Drupal.openPrintWindow = function(url, name, specs) {
        var printWindow = window.open(url, name, specs);
        var printAndClose = function () {
          if (printWindow.document.readyState == 'complete') {
            clearInterval(sched);
            printWindow.print();
            printWindow.close();
         }
        }  
          var sched = setInterval(printAndClose, 200);
    };
    
    Drupal.getIslandoraIdInfoByUrl = function(){
        var currentUrl = document.URL;
        var islandoraIdArr = currentUrl.split("//")[1];
        islandoraIdArr = islandoraIdArr.split("#/datastream")[0];
        islandoraIdArr = islandoraIdArr.split("/");
        var info = new Object;
        info.islandoraId = islandoraIdArr[islandoraIdArr.length-1].split("#")[0];
        info.baseUrl = islandoraIdArr[0];
        return info;
    };
  
    Drupal.getPageImgUrlByIslandoraId = function(){
        var info = Drupal.getIslandoraIdInfoByUrl();
        return "http://"+info.baseUrl+"/islandora/object/"+info.islandoraId+"/datastream/JPG/view";
    };
  
    Drupal.getPageUrlByIslandoraId = function(){

  };
  
})(jQuery);
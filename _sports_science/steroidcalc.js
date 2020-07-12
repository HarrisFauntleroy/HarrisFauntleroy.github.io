$("#plot-button").click(function () { 

    var time;
    
    $(".single-compound-div").each(function() {    
      var schedule = $(this).find('.schedule').val();
      if(schedule=="0.5"){
          time = 4;
      }else{
          time  =2;
      }
      })
    
      var days=$("#length").val()*7;
      var ajax= [];
      for (var i = 0; i < days; i++) {
          if(time==4){
          ajax.push(i);
          ajax.push(i+0.25);
          ajax.push(i+0.5);
          ajax.push(i+0.75);
          }else{
             ajax.push(i);
              ajax.push(i+0.5); 
          }
          
      };
      $('#cycle-container').highcharts({
          chart: {
              type: 'area'
          },
          title: {
              text: 'Release mg/day'
          },
          xAxis: {
              categories: ajax
          },
          yAxis: {
              title: {
                  text: 'Milligrams'
              }
          },
          series: [
          
          ]
      });
    
      var chart = $('#cycle-container').highcharts();
    
    
    var arrayCom=[];
    var cont=0;
    
    var comData=[];
    for (var i = 0; i < ajax.length; i++) {
          comData.push(0); 
      };
    
    $(".single-compound-div").each(function() {
      
      
    
      var dose = $(this).find('.dose').val();
      var compound = $(this).find('.compound').val();
      var compoundform = $(this).find('.compound-form').val();
      var schedule = $(this).find('.schedule').val();
      var from = $(this).find('.from').val();
      var to = $(this).find('.to').val();
    
      var half;
      var efect;
      if(compound=="testosterone"){
          if(compoundform=="suspension"){
              half=0.5;
              efect=1;
          }else if(compoundform=="propionate"){
             half=0.8; 
             efect=0.8;
          }else if(compoundform=="phenylpropionate"){
             half=1.5; 
             efect=0.66;
          }else if(compoundform=="isocaproate"){
             half=4.0; 
             efect=0.72;
          }else if(compoundform=="enanthate"){
             half=4.5; 
             efect=0.7;
          }else if(compoundform=="cypionate"){
             half=5.0;
             efect=0.69; 
          }else if(compoundform=="decanoate"){
             half=7.5; 
             efect=0.62;
          }else if(compoundform=="undecanoate"){
             half=20.9; 
             efect=0.61;
          }
      }else if(compound=="trenbolone"){
         if(compoundform=="suspension"){
              half=0.5;
              efect=1;
          }else if(compoundform=="enanthate"){
             half=4.5; 
             efect=0.7;
          }else if(compoundform=="acetate"){
             half=1; 
             efect=0.87;
          } 
      }else if(compound=="masteron"){
         if(compoundform=="propionate"){
              half=0.8;
              efect=0.8;
          }else if(compoundform=="enanthate"){
             half=4.5;
             efect=0.7; 
          }
      }else if(compound=="nandrolone"){
         if(compoundform=="phenylpropionate"){
              half=1.5;
              efect=0.67;
          }else if(compoundform=="decanoate"){
             half=7.5; 
             efect=0.64;
          }
      }else if(compound=="equipoise"){
          half=14;   
          efect=0.61;    
      }else if(compound=="primobolan"){
         if(compoundform=="oral"){
              half=0.2083;
              efect=1;
          }else if(compoundform=="injectable"){
             half=4.5;
             efect=0.7; 
          }
      }else if(compound=="halotestin"){
           half=0.2916; 
           efect=1;
      }else if(compound=="anadrol"){
           half=0.5833; 
           efect=1;
      }else if(compound=="dianabol"){
           half=0.2083; 
           efect=1;
      }else if(compound=="turinabol"){
           half=0.6666; 
           efect=1;
      }else if(compound=="winstrol"){
         if(compoundform=="oral"){
              half=0.3333;
              efect=1;
          }else if(compoundform=="injectable"){
             half=1; 
             efect=0.87;
          }
      }else if(compound=="anavar"){
           half=0.4166; 
           efect=1;
      }else if(compound=="superdrol"){
           half=0.4166; 
           efect=1;
      }else if(compound=="dnp"){
         if(compoundform=="crystal"){
              half=1.5;
              efect=0.75;
          }else if(compoundform=="powder"){
             half=1.5; 
             efect=1;
          }
      }else if(compound=="aromasin"){
           half=1; 
           efect=1;
      }else if(compound=="arimidex"){
           half=1.95; 
           efect=1;
      }
      
    
    
      var start=parseInt(from)*7-7;
      var differenceInDays=(parseInt(to)*7)-start;
    
      
    
      if(jQuery.inArray(compound, arrayCom) !== -1){
          
          //encuentra, añade        
          //arrayCom.push(compound);
          //( Exp(-(dia  ) * LN( 2 ) / half )* dose * weigh * LN( 2 )/ E$4,2)
          switch(schedule) {
              case "0.5":
                   for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 0; y < (differenceInDays*time) ; y+=(0.5*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                              var temp;
                              if(isNaN(comData[i+y+(start*time)])){
                                  temp=0;
                              }else{
                                  temp=comData[i+y+(start*time)];
                              }
                              var totalDailyDose=dailyDose+temp;
                              if(isNaN(totalDailyDose)){
    
                              }else{
                                  totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                              }
    
                           }; 
                      }      
               break;
              case "1":
                  for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 0; y < (differenceInDays*time) ; y+=(parseInt(schedule)*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                              var temp;
                              if(isNaN(comData[i+y+(start*time)])){
                                  temp=0;
                              }else{
                                  temp=comData[i+y+(start*time)];
                              }
                              var totalDailyDose=dailyDose+temp;
                              if(isNaN(totalDailyDose)){
    
                              }else{
                                  totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                              }
                               
                               
                           }; 
                      } 
              break;
              case "2":
                  for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 0; y < (differenceInDays*time) ; y+=(parseInt(schedule)*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                               var temp;
                              if(isNaN(comData[i+y+(start*time)])){
                                  temp=0;
                              }else{
                                  temp=comData[i+y+(start*time)];
                              }
                              var totalDailyDose=dailyDose+temp;
                              if(isNaN(totalDailyDose)){
    
                              }else{
                                  totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                              }
                              
                           }; 
                      } 
              break;
              case "3":
                  for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 0; y < (differenceInDays*time) ; y+=(parseInt(schedule)*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                              var temp;
                              if(isNaN(comData[i+y+(start*time)])){
                                  temp=0;
                              }else{
                                  temp=comData[i+y+(start*time)];
                              }
                              var totalDailyDose=dailyDose+temp;
                              if(isNaN(totalDailyDose)){
    
                              }else{
                                  totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                              }
                              
                           }; 
                      } 
              break;
              case "3.5":
                  for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 0; y < (differenceInDays*time) ; y+=(parseFloat(schedule)*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                              var temp;
                              if(isNaN(comData[i+y+(start*time)])){
                                  temp=0;
                              }else{
                                  temp=comData[i+y+(start*time)];
                              }
                              var totalDailyDose=dailyDose+temp;
                              if(isNaN(totalDailyDose)){
    
                              }else{
                                  totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                              }
                              
                           }; 
                      } 
              break;
              case "4":
                 for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 0; y < (differenceInDays*time) ; y+=(parseInt(schedule)*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                               var temp;
                              if(isNaN(comData[i+y+(start*time)])){
                                  temp=0;
                              }else{
                                  temp=comData[i+y+(start*time)];
                              }
                              var totalDailyDose=dailyDose+temp;
                              if(isNaN(totalDailyDose)){
    
                              }else{
                                  totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                              }
                              
                           }; 
                      } 
              break;
              case "5":
                  for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 0; y < (differenceInDays*time) ; y+=(parseInt(schedule)*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                               var temp;
                              if(isNaN(comData[i+y+(start*time)])){
                                  temp=0;
                              }else{
                                  temp=comData[i+y+(start*time)];
                              }
                              var totalDailyDose=dailyDose+temp;
                              if(isNaN(totalDailyDose)){
    
                              }else{
                                  totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                              }
                              
                           }; 
                      } 
              break;
              case "6":
                 for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 0; y < (differenceInDays*time) ; y+=(parseInt(schedule)*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                               var temp;
                              if(isNaN(comData[i+y+(start*time)])){
                                  temp=0;
                              }else{
                                  temp=comData[i+y+(start*time)];
                              }
                              var totalDailyDose=dailyDose+temp;
                              if(isNaN(totalDailyDose)){
    
                              }else{
                                  totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                              }
                              
                           }; 
                      } 
              break;
              case "7":
                 for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 0; y < (differenceInDays*time) ; y+=(parseInt(schedule)*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                               var temp;
                              if(isNaN(comData[i+y+(start*time)])){
                                  temp=0;
                              }else{
                                  temp=comData[i+y+(start*time)];
                              }
                              var totalDailyDose=dailyDose+temp;
                              if(isNaN(totalDailyDose)){
    
                              }else{
                                  totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                              }
                              
                           }; 
                      } 
              break;
              case "10":
                 for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 0; y < (differenceInDays*time) ; y+=(parseInt(schedule)*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                               var temp;
                              if(isNaN(comData[i+y+(start*time)])){
                                  temp=0;
                              }else{
                                  temp=comData[i+y+(start*time)];
                              }
                              var totalDailyDose=dailyDose+temp;
                              if(isNaN(totalDailyDose)){
    
                              }else{
                                  totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                              }
                              
                           }; 
                      } 
              break;
              case "14":
                  for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 0; y < (differenceInDays*time) ; y+=(parseInt(schedule)*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                               var temp;
                              if(isNaN(comData[i+y+(start*time)])){
                                  temp=0;
                              }else{
                                  temp=comData[i+y+(start*time)];
                              }
                              var totalDailyDose=dailyDose+temp;
                              if(isNaN(totalDailyDose)){
    
                              }else{
                                  totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                              }
                              
                           }; 
                      } 
              break;
              case "21":
                  for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 0; y < (differenceInDays*time) ; y+=(parseInt(schedule)*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                              var temp;
                              if(isNaN(comData[i+y+(start*time)])){
                                  temp=0;
                              }else{
                                  temp=comData[i+y+(start*time)];
                              }
                              var totalDailyDose=dailyDose+temp;
                              if(isNaN(totalDailyDose)){
    
                              }else{
                                  totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                              }
                              
                           }; 
                      } 
              break;
              case "28":
                  for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 0; y < (differenceInDays*time) ; y+=(parseInt(schedule)*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                              var temp;
                              if(isNaN(comData[i+y+(start*time)])){
                                  temp=0;
                              }else{
                                  temp=comData[i+y+(start*time)];
                              }
                              var totalDailyDose=dailyDose+temp;
                              if(isNaN(totalDailyDose)){
    
                              }else{
                                  totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                              }
                              
                           }; 
                      } 
              break;
              case "35":
                  for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 0; y < (differenceInDays*time) ; y+=(parseInt(schedule)*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                              var temp;
                              if(isNaN(comData[i+y+(start*time)])){
                                  temp=0;
                              }else{
                                  temp=comData[i+y+(start*time)];
                              }
                              var totalDailyDose=dailyDose+temp;
                              if(isNaN(totalDailyDose)){
    
                              }else{
                                  totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                              }
                              
                           }; 
                      } 
              break;
              case "42":
                  for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 0; y < (differenceInDays*time) ; y+=(parseInt(schedule)*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                              var temp;
                              if(isNaN(comData[i+y+(start*time)])){
                                  temp=0;
                              }else{
                                  temp=comData[i+y+(start*time)];
                              }
                              var totalDailyDose=dailyDose+temp;
                              if(isNaN(totalDailyDose)){
    
                              }else{
                                  totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                              }
                              
                           }; 
                      } 
              break;
              case "49":
                  for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 0; y < (differenceInDays*time) ; y+=(parseInt(schedule)*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                              var temp;
                              if(isNaN(comData[i+y+(start*time)])){
                                  temp=0;
                              }else{
                                  temp=comData[i+y+(start*time)];
                              }
                              var totalDailyDose=dailyDose+temp;
                              if(isNaN(totalDailyDose)){
    
                              }else{
                                  totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                              }
                              
                           }; 
                      } 
              break;
              case "56":
                  for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 0; y < (differenceInDays*time) ; y+=(parseInt(schedule)*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                              var temp;
                              if(isNaN(comData[i+y+(start*time)])){
                                  temp=0;
                              }else{
                                  temp=comData[i+y+(start*time)];
                              }
                              var totalDailyDose=dailyDose+temp;
                              if(isNaN(totalDailyDose)){
    
                              }else{
                                  totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                              }
                              
                           }; 
                      } 
              break;
              case "mon":
                 for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 0; y < (differenceInDays*time) ; y+=(7*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                               var temp;
                              if(isNaN(comData[i+y+(start*time)])){
                                  temp=0;
                              }else{
                                  temp=comData[i+y+(start*time)];
                              }
                              var totalDailyDose=dailyDose+temp;
                              if(isNaN(totalDailyDose)){
    
                              }else{
                                  totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                              }
                              
                           }; 
                      } 
              break;
              case "tue":
                  for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 1*time; y < (differenceInDays*time) ; y+=(7*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                               var temp;
                              if(isNaN(comData[i+y+(start*time)])){
                                  temp=0;
                              }else{
                                  temp=comData[i+y+(start*time)];
                              }
                              var totalDailyDose=dailyDose+temp;
                              if(isNaN(totalDailyDose)){
    
                              }else{
                                  totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                              }
                              
                           }; 
                      } 
              break;
              case "wed":
                  for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 2*time; y < (differenceInDays*time) ; y+=(7*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                               var temp;
                              if(isNaN(comData[i+y+(start*time)])){
                                  temp=0;
                              }else{
                                  temp=comData[i+y+(start*time)];
                              }
                              var totalDailyDose=dailyDose+temp;
                              if(isNaN(totalDailyDose)){
    
                              }else{
                                  totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                              }
                              
                           }; 
                      } 
              break;
              case "thu":
                  for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 3*time; y < (differenceInDays*time) ; y+=(7*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                               var temp;
                              if(isNaN(comData[i+y+(start*time)])){
                                  temp=0;
                              }else{
                                  temp=comData[i+y+(start*time)];
                              }
                              var totalDailyDose=dailyDose+temp;
                              if(isNaN(totalDailyDose)){
    
                              }else{
                                  totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                              }
                              
                           }; 
                      } 
              break;
              case "fri":
                  for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 4*time; y < (differenceInDays*time) ; y+=(7*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                               var temp;
                              if(isNaN(comData[i+y+(start*time)])){
                                  temp=0;
                              }else{
                                  temp=comData[i+y+(start*time)];
                              }
                              var totalDailyDose=dailyDose+temp;
                              if(isNaN(totalDailyDose)){
    
                              }else{
                                  totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                              }
                              
                           }; 
                      } 
              break;
              case "sat":
                  for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 5*time; y < (differenceInDays*time) ; y+=(7*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                               var temp;
                              if(isNaN(comData[i+y+(start*time)])){
                                  temp=0;
                              }else{
                                  temp=comData[i+y+(start*time)];
                              }
                              var totalDailyDose=dailyDose+temp;
                              if(isNaN(totalDailyDose)){
    
                              }else{
                                  totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                              }
                              
                           }; 
                      } 
              break;
              case "sun":
                  for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 6*time; y < (differenceInDays*time) ; y+=(7*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                               var temp;
                              if(isNaN(comData[i+y+(start*time)])){
                                  temp=0;
                              }else{
                                  temp=comData[i+y+(start*time)];
                              }
                              var totalDailyDose=dailyDose+temp;
                              if(isNaN(totalDailyDose)){
    
                              }else{
                                  totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                              }
                              
                           }; 
                      } 
              break;
              }   
    
          //chart.addSeries({                        
         // name: compound,
         // data: comData
         // });
    
              var comData2=comData.slice();
            
              var j=0;
              while(chart.series[j]){
                  if(chart.series[j].name==compound){
                  chart.series[j].setData(comData);    
                  }
                  j++;
              }
         comData=comData2.slice();
             
    
      }else{
          //no encuentra, crea
          arrayCom.push(compound);
    
              comData=[];
    
          for (var i = 0; i < ajax.length; i++) {
          comData.push(0); 
           };
          //( Exp(-(dia  ) * LN( 2 ) / half )* dose * weigh * LN( 2 )/ E$4,2)
          switch(schedule) {
              case "0.5":
                   for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 0; y < (differenceInDays*time) ; y+=(0.5*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                               var totalDailyDose=dailyDose+comData[i+y+(start*time)];
                               totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                           }; 
                      }      
               break;
              case "1":
                  for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 0; y < (differenceInDays*time) ; y+=(parseInt(schedule)*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                               var totalDailyDose=dailyDose+comData[i+y+(start*time)];
                               totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                           }; 
                      } 
              break;
              case "2":
                  for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 0; y < (differenceInDays*time) ; y+=(parseInt(schedule)*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                               var totalDailyDose=dailyDose+comData[i+y+(start*time)];
                               totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                           }; 
                      } 
              break;
              case "3":
                  for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 0; y < (differenceInDays*time) ; y+=(parseInt(schedule)*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                               var totalDailyDose=dailyDose+comData[i+y+(start*time)];
                               totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                           }; 
                      } 
              break;
              case "3.5":
                  for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 0; y < (differenceInDays*time) ; y+=(parseFloat(schedule)*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                              var temp;
                              if(isNaN(comData[i+y+(start*time)])){
                                  temp=0;
                              }else{
                                  temp=comData[i+y+(start*time)];
                              }
                              var totalDailyDose=dailyDose+temp;
                              if(isNaN(totalDailyDose)){
    
                              }else{
                                  totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                              }
                              
                           }; 
                      } 
              break;
              case "4":
                 for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 0; y < (differenceInDays*time) ; y+=(parseInt(schedule)*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                               var totalDailyDose=dailyDose+comData[i+y+(start*time)];
                               totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                           }; 
                      } 
              break;
              case "5":
                 for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 0; y < (differenceInDays*time) ; y+=(parseInt(schedule)*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                               var totalDailyDose=dailyDose+comData[i+y+(start*time)];
                               totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                           }; 
                      } 
              break;
              case "6":
                 for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 0; y < (differenceInDays*time) ; y+=(parseInt(schedule)*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                               var totalDailyDose=dailyDose+comData[i+y+(start*time)];
                               totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                           }; 
                      } 
              break;
              case "7":
                  for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 0; y < (differenceInDays*time) ; y+=(parseInt(schedule)*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                               var totalDailyDose=dailyDose+comData[i+y+(start*time)];
                               totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                           }; 
                      } 
              break;
              case "10":
                 for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 0; y < (differenceInDays*time) ; y+=(parseInt(schedule)*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                               var temp;
                              if(isNaN(comData[i+y+(start*time)])){
                                  temp=0;
                              }else{
                                  temp=comData[i+y+(start*time)];
                              }
                              var totalDailyDose=dailyDose+temp;
                              if(isNaN(totalDailyDose)){
    
                              }else{
                                  totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                              }
                              
                           }; 
                      } 
              break;
              case "14":
                 for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 0; y < (differenceInDays*time) ; y+=(parseInt(schedule)*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                               var totalDailyDose=dailyDose+comData[i+y+(start*time)];
                               totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                           }; 
                      } 
              break;
              case "21":
                  for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 0; y < (differenceInDays*time) ; y+=(parseInt(schedule)*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                               var totalDailyDose=dailyDose+comData[i+y+(start*time)];
                               totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                           }; 
                      } 
              break;
              case "28":
                  for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 0; y < (differenceInDays*time) ; y+=(parseInt(schedule)*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                               var totalDailyDose=dailyDose+comData[i+y+(start*time)];
                               totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                           }; 
                      } 
              break;
              case "35":
                  for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 0; y < (differenceInDays*time) ; y+=(parseInt(schedule)*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                               var totalDailyDose=dailyDose+comData[i+y+(start*time)];
                               totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                           }; 
                      } 
              break;
              case "42":
                  for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 0; y < (differenceInDays*time) ; y+=(parseInt(schedule)*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                               var totalDailyDose=dailyDose+comData[i+y+(start*time)];
                               totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                           }; 
                      } 
              break;
              case "49":
                  for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 0; y < (differenceInDays*time) ; y+=(parseInt(schedule)*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                               var totalDailyDose=dailyDose+comData[i+y+(start*time)];
                               totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                           }; 
                      } 
              break;
              case "56":
                  for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 0; y < (differenceInDays*time) ; y+=(parseInt(schedule)*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                               var totalDailyDose=dailyDose+comData[i+y+(start*time)];
                               totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                           }; 
                      } 
              break;
              case "mon":
                 for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 0; y < (differenceInDays*time) ; y+=(7*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                               var totalDailyDose=dailyDose+comData[i+y+(start*time)];
                               totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                           }; 
                      } 
              break;
              case "tue":
                 for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 1*time; y < (differenceInDays*time) ; y+=(7*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                               var totalDailyDose=dailyDose+comData[i+y+(start*time)];
                               totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                           }; 
                      } 
              break;
              case "wed":
                 for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 2*time; y < (differenceInDays*time) ; y+=(7*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                               var totalDailyDose=dailyDose+comData[i+y+(start*time)];
                               totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                           }; 
                      } 
              break;
              case "thu":
                  for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 3*time; y < (differenceInDays*time) ; y+=(7*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                               var totalDailyDose=dailyDose+comData[i+y+(start*time)];
                               totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                           }; 
                      } 
              break;
              case "fri":
                  for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 4*time; y < (differenceInDays*time) ; y+=(7*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                               var totalDailyDose=dailyDose+comData[i+y+(start*time)];
                               totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                           }; 
                      } 
              break;
              case "sat":
                 for (var i = 0; i < (ajax.length-(start*time)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 5*time; y < (differenceInDays*time) ; y+=(7*time)) {
                              if((i+y+(start*time))>=ajax.length){
                                  break;
                              }
                               var totalDailyDose=dailyDose+comData[i+y+(start*time)];
                               totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*time)]=totalDailyDose;
                           }; 
                      } 
              break;
              case "sun":
                  for (var i = 0; i < (ajax.length-(start*2)); i++) {
                      var dailyDose= Math.exp(-ajax[i]*Math.log(2)/half)*dose*efect*Math.log(2)/half;
                      dailyDose= +dailyDose.toFixed(2); 
                          for (var y = 6*time; y < (differenceInDays*2) ; y+=(7*time) ){
                              if((i+y+(start*2))>=ajax.length){
                                  break;
                              }
                               var totalDailyDose=dailyDose+comData[i+y+(start*2)];
                               totalDailyDose= +totalDailyDose.toFixed(2);
                               comData[i+y+(start*2)]=totalDailyDose;
                           }; 
                      }
              break;
              }       
          chart.addSeries({                        
          name: compound,
          data: comData
          });
          
      }
    
         });
    
    
          
    
          chart.redraw();
    
    
    });
    
    
    
    
      $(function() {
          $('.compound').val('-');
          $('.dose').val('');
          $('#share-url').val('');
          $("#length").prop('disabled', false);
          $('.select-on-focus').focus(function() {
              this.select();
          });
          $('.select-on-focus').mouseup(function(e) {
              e.preventDefault();
          });
      });
    
      $.handleCompoundChange = function() {
          $('.compound').change(function() {
              var compoundDiv = $(this).closest('.compound-row').children('.compound-form-div');
              var scheduleRow = $(this).closest('.compound-row').siblings('.compound-schedule-row');
              var fromSelect = scheduleRow.find('select.from');
              var toSelect = scheduleRow.find('select.to');
    
              if ($(this).val() == '-') {
              }
              else if ($(this).val() == 'testosterone') {
                  compoundDiv.html('<select class="compound-form"><option value="suspension">Suspension</option><option value="propionate">Propionate</option><option value="phenylpropionate">Phenylpropionate</option><option value="isocaproate">Isocaproate</option><option value="enanthate">Enanthate</option><option value="cypionate">Cypionate</option><option value="decanoate">Decanoate</option><option value="undecanoate">Undecanoate</option></select>');
                  compoundDiv.show();
              }
              else if ($(this).val() == 'trenbolone') {
                  compoundDiv.html('<select class="compound-form"><option value="suspension">Suspension</option><option value="acetate">Acetate</option><option value="enanthate">Enanthate</option></select>');
                  compoundDiv.show();
              }
              else if ($(this).val() == 'masteron') {
                  compoundDiv.html('<select class="compound-form"><option value="propionate">Propionate (standard)</option><option value="enanthate">Enanthate</option></select>');
                  compoundDiv.show();
              }
              else if ($(this).val() == 'nandrolone') {
                  compoundDiv.html('<select class="compound-form"><option value="phenylpropionate">Phenylpropionate (NPP)</option><option value="decanoate">Decanoate (Deca Durabolin)</option></select>');
                  compoundDiv.show();
              }
              else if ($(this).val() == 'equipoise') {
                  compoundDiv.html('<select class="compound-form"><option value="standard">Standard</option></select>');
                  compoundDiv.hide();
              }
              else if ($(this).val() == 'primobolan') {
                  compoundDiv.html('<select class="compound-form"><option value="oral">Oral</option><option value="injectable">Injectable</option></select>');
                  compoundDiv.show();
              }
              else if ($(this).val() == 'halotestin') {
                  compoundDiv.html('<select class="compound-form"><option value="standard">Standard</option></select>');
                  compoundDiv.hide();
              }
              else if ($(this).val() == 'anadrol') {
                  compoundDiv.html('<select class="compound-form"><option value="standard">Standard</option></select>');
                  compoundDiv.hide();
              }
              else if ($(this).val() == 'dianabol') {
                  compoundDiv.html('<select class="compound-form"><option value="standard">Standard</option></select>');
                  compoundDiv.hide();
              }
              else if ($(this).val() == 'turinabol') {
                  compoundDiv.html('<select class="compound-form"><option value="standard">Standard</option></select>');
                  compoundDiv.hide();
              }
              else if ($(this).val() == 'winstrol') {
                  compoundDiv.html('<select class="compound-form"><option value="oral">Oral</option><option value="injectable">Injectable</option></select>');
                  compoundDiv.show();
              }
              else if ($(this).val() == 'anavar') {
                  compoundDiv.html('<select class="compound-form"><option value="standard">Standard</option></select>');
                  compoundDiv.hide();
              }
              else if ($(this).val() == 'superdrol') {
                  compoundDiv.html('<select class="compound-form"><option value="standard">Standard</option></select>');
                  compoundDiv.hide();
              }
              else if ($(this).val() == 'dnp') {
                  compoundDiv.html('<select class="compound-form"><option value="crystal">Crystal</option><option value="powder">Powder</option></select>');
                  compoundDiv.show();
              }
              else if ($(this).val() == 'aromasin') {
                  compoundDiv.html('<select class="compound-form"><option value="standard">Standard</option></select>');
                  compoundDiv.hide();
              }
              else if ($(this).val() == 'arimidex') {
                  compoundDiv.html('<select class="compound-form"><option value="standard">Standard</option></select>');
                  compoundDiv.hide();
              }
    
              $("#length").prop('disabled', true);
    
              fromSelect.empty();
              toSelect.empty();
              for (var i = 0; i < $('#length').val(); i++) {
                  fromSelect.append($('<option></option>').attr('value', i+1).text('Week ' + (i+1)));
                  toSelect.append($('<option></option>').attr('value', i+1).text('Week ' + (i+1)));
              }
    
              scheduleRow.show();
              $('#button-row').show();
          })
      };
      $.handleCompoundChange();
      
      $('#add-compound-button').click(function() {
          $('#button-row').hide();
          $('.single-compound-div:last').clone().insertAfter('.single-compound-div:last');
          $('.single-compound-div:last').children('.compound-schedule-row').hide();
          $('.single-compound-div:last').find('.compound-form-div').hide();
          $('.single-compound-div:last').find('.dose').val('');
          $.handleCompoundChange();
      });
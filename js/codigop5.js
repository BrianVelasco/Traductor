/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    var pingles;
    var pespañol;
    pespañol = new Array();
    pespañol=['hola','mañana','es','viernes','perro','gato','el','blanco'];
    var aux;
    var tam;
    var texto;
    var letra;
    var palabra="";
    
    pingles = new Array();
    pingles=['hello','tomorrow','is','friday','dog','cat','the','white'];
   $("#ei").click(function(){
       var trad="";
       var cnt;
       aux = new Array();
       texto =$("#area").val();
       texto = texto.toLowerCase();
       tam = texto.length;
       for(k=1;k<=tam;k++){
           letra = texto.substring(k,k-1);
           if(letra!=" "){
               palabra = palabra+letra;
           }
           else{
               if(palabra!=""){
                   aux.push(palabra);
                   palabra="";
                
               }
               
           }
           if(tam==k){
               aux.push(palabra);
                palabra="";
           }
       }  
        for(i=0;i<aux.length;i++){
            for(j=0;j<pespañol.length;j++){
                if(aux[i]==pespañol[j]){
                    trad = trad+pingles[j]+" ";
                    j = pespañol.length;
                }
                
            }
            if(j==pespañol.length){
                trad = trad+"*";
            }
        }
        //alert(trad);
        $("#traduccion").val(trad);
           
       
   }); 
   $("#ie").click(function(){
       var trad="";
       var cnt;
       aux = new Array();
       texto =$("#area").val();
       texto = texto.toLowerCase();
       tam = texto.length;
       for(k=1;k<=tam;k++){
           letra = texto.substring(k,k-1);
           if(letra!=" "){
               palabra = palabra+letra;
           }
           else{
               if(palabra!=""){
                   aux.push(palabra);
                   palabra="";
                
               }
               
           }
           if(tam==k){
               aux.push(palabra);
                palabra="";
           }
       }  
        for(i=0;i<aux.length;i++){
            for(j=0;j<pingles.length;j++){
                if(aux[i]==pingles[j]){
                    trad = trad+pespañol[j]+" ";
                    j = pingles.length;
                }
                
            }
            if(j==pingles.length){
                trad = trad+"*";
            }
        }
        //alert(trad);
        $("#traduccion").val(trad);
   });
   $("#vd").click(function(){
       $("#dic").html("<table border='1' id='tab'><thead><tr><th>Español</th><th>Ingles</th></tr></thead><tbody>");
       for(j=0;j<pespañol.length;j++){
            $("#tab").append("<tr ><td>"+pespañol[j]+"</td><td>"+pingles[j]+"</td></tr></tbody></table>");
               
        }
       
   
       
       
   });
   $("#ip").click(function(){
       $("#dic").html("<form>Ingrese palabra en español<input type='text' id='esp' ><br>Ingrese Traduccion<input type='text' id='ing'><br><input type='button' id='bin' value='Ingresar'></form>");
       $("#bin").click(function(){
           var español, ingles;
           español = $("#esp").val();
           español=español.toLowerCase();
           ingles = $("#ing").val();
           ingles=ingles.toLowerCase();
           pespañol.push(español);
           pingles.push(ingles);
           alert("Ingreso Exitoso");
           $("#dic").html("<table border='1' id='tab'><thead><tr><th>Español</th><th>Ingles</th></tr></thead><tbody>");
                            for(j=0;j<pespañol.length;j++){
                            $("#tab").append("<tr><td>"+pespañol[j]+"</td><td>"+pingles[j]+"</td></tr></tbody></table>");
                        }
           
               
               
               
           
        
       });
   });
   $("#mp").click(function(){
       $("#dic").html("<form>Ingrese palabra a modificar<input type='text' id='mod' ><br>Ingrese modificacion<input type='text' id='modi' ><br><input type='button' id='modif' value='Modificar'></form>");
       $("#modif").click(function(){
           var modificar,pingresada;
           pingresada= $("#mod").val();
           pingresada=pingresada.toLowerCase(),
           modificar = $("#modi").val();
           modificar = modificar.toLowerCase();
           for(i=0;i<pespañol.length;i++){
               if(pingresada==pespañol[i]){
                   pespañol[i]=modificar;
                   alert("Modificacion Exitosa");
                   $("#dic").html("<table border='1' id='tab'><thead><tr><th>Español</th><th>Ingles</th></tr></thead><tbody>");
                    for(j=0;j<pespañol.length;j++){
                    $("#tab").append("<tr><td>"+pespañol[j]+"</td><td>"+pingles[j]+"</td></tr></tbody></table>");
                    }
               }
               else{
                   for(j=0;j<pingles.length;j++){
                       if(pingresada==pingles[j]){
                            pingles[j]=modificar;
                            alert("Modificacion Exitosa");
                            $("#dic").html("<table border='1' id='tab'><thead><tr><th>Español</th><th>Ingles</th></tr></thead><tbody>");
                            for(j=0;j<pespañol.length;j++){
                            $("#tab").append("<tr><td>"+pespañol[j]+"</td><td>"+pingles[j]+"</td></tr></tbody></table>");
                        }
                        }
                        
                   }
               }
           }
           
               
               
               
           
        
       });
   });
   $("#ep").click(function (){
       $("#dic").html("<form>Ingrese palabra a Eliminar<input type='text' id='eli' ><br><input type='button' id='eliminar' value='Eliminar'>");
       $("#eliminar").click(function(){
            var eliminar;
            eliminar=$("#eli").val();
            eliminar=eliminar.toLowerCase();
            for(i=0;i<pespañol.length;i++){
                if(eliminar ==pespañol[i]){
                    pespañol.splice(i,1);
                    pingles.splice(i,1);
                    alert("Eliminacion Exitosa");
                    $("#dic").html("<table border='1'id='tab'><thead><tr><th>Español</th><th>Ingles</th></tr></thead><tbody>");
                            for(j=0;j<pespañol.length;j++){
                            $("#tab").append("<tr><td>"+pespañol[j]+"</td><td>"+pingles[j]+"</td></tr></tbody></table>");
                        }
                }
                else{
                    for(j=0;j<pingles.length;j++){
                        if(eliminar == pingles[j]){
                            pingles.splice(j,1);
                            pespañol.splice(j,1);
                            alert("Eliminacion Exitosa");
                            $("#dic").html("<table border='1' id='tab'><thead><tr><th>Español</th><th>Ingles</th></tr></thead><tbody>");
                            for(j=0;j<pespañol.length;j++){
                            $("#tab").append("<tr><td>"+pespañol[j]+"</td><td>"+pingles[j]+"</td></tr></tbody></table>");
                        }
                        }
                    }
                }
            }
                
            });
        
   });
});


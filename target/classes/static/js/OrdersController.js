

var frontEnd = (function () {
   var orders;


  var getOrders =  function () {
         network.getOrdersRequest;
  };

   var getCurrentOrders = function () {
          return orders;
    };
  var setOrders = function (ord) {
          orders=ord;
    };
  var getSpecificPrice = function (id) {
           return network.getPrice(id);
      };

  return {
        getOrders: getOrders,
        setOrders: setOrders,
        getCurrentOrders: getCurrentOrders
  };

})();

 function showOrdersByTable(){
     frontEnd.getOrders;
      /*for(var order=0;order<frontEnd.getCurrentOrders.length;order++){
                  var orderArrayHeader = ["Product","Quantity","Price"];
                  var body = document.getElementById("orders");
                         tbl  = document.createElement("table");
                     tbl.setAttribute("class","table table-striped");
                     tbl.setAttribute("id", order);

                     for(var clave in frontEnd.getCurrentOrders[order].orderAmountsMap){
                                   frontEnd.getSpecificPrice(clave);

                         var tr = tbl.insertRow();
                                 var td = tr.insertCell();
                                 td.appendChild(document.createTextNode(clave));
                                 td = tr.insertCell();
                                 td.appendChild(document.createTextNode(frontEnd.getCurrentOrders[order].orderAmountsMap[clave]));
                                 td = tr.insertCell();
                                 td.appendChild(document.createTextNode(product.price));
                     }
                     body.appendChild(tbl);
                     tbl=document.getElementById(order);
                     var header = tbl.createTHead();
                     var row = header.insertRow(0);
                     for(var i = 0; i <orderArrayHeader.length ; i++){
                        var cell = row.insertCell(i);
                        cell.outerHTML ="<th scope='col'>"+ orderArrayHeader[i]+"<th>";}
                     row.deleteCell(5);
                     row.deleteCell(4);
                     row.deleteCell(3);
                     txt = document.createTextNode('\x0A');
                     tbl.appendChild(txt);

                 }*/


}
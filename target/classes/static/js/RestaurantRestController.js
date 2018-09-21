

var orderss=[];
var network = (function () {
     var resp;
   var _searchOrders =  function () {
            axios.get( "http://localhost:8080/orders")
                    .then(function (response) {
                           resp=response.data
                           frontEnd.setOrders(resp);


                    })
                    .catch(function (error) {
                      console.log('There is a problem with our servers. We apologize for the inconvince, please try again later', error.message);
                    })
                    .finally(function () {
                        frontEnd.setOrders(resp);

                    });
  };

  var _searchPrice=  function (p){
           axios.get( "http://localhost:8080/orders/"+p)
                  .then( function (response) {
                       //resp=response.data
                  })
                  .catch(function (error) {
                    console.log('There is a problem with our servers. We apologize for the inconvince, please try again later', error.message);;
                  })
                  .then(function () {
                   return resp;
                  });
   };

  var getOrdersRequest =  function () {

        _searchOrders();

  };
  var getPrice = function (id) {
         return _searchPrice(id);
    };

  return {
        getOrdersRequest: getOrdersRequest,
        getPrice: getPrice
  };

})();
var product="";
	 async function loadOrders(){
         await getOrdersRequest();


	}

	function addOrder(newOrder){
	    orderss.push(newOrder);
	}

	function removeOrderById(id){
    	   var elem = document.getElementById(id);
            elem.parentNode.removeChild(elem);

    	}

     async function getOrdersRequest(){

          await axios.get( "http://localhost:8080/orders")
           .then(function (response) {
                 orders=response.data
                 return orders;
           })
           .catch(function (error) {
             console.log('There is a problem with our servers. We apologize for the inconvince, please try again later', error.message);
           })
           .then(function () {
           });

    }
   /* async function getPrice(product) {
      try {
        const response = await axios.get( "http://localhost:8080/orders/"+product);
        product= response.data;
      } catch (error) {
        console.error(error);
      }
    }*/
     async function getPrice(p){
          await axios.get( "http://localhost:8080/orders/"+p)
                   .then( function (response) {
                        product=response.data
                   })
                   .catch(function (error) {
                     console.log('There is a problem with our servers. We apologize for the inconvince, please try again later', error.message);;
                   })
                   .then(function () {
                     // always executed
                   });
    }









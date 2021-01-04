'use strict';

angular.module('meanstackApp')
  .factory('Products', function () {
    var last_id = 5;
    var example_products = [
      {id: 1, title: 'Product 1', price: 123.45, quantity: 10, description: 'Lorem ipsum dolor sit amet'},
      {id: 2, title: 'Product 2', price: 123.45, quantity: 10, description: 'Lorem ipsum dolor sit amet'},
      {id: 3, title: 'Product 3', price: 123.45, quantity: 10, description: 'Lorem ipsum dolor sit amet'},
      {id: 4, title: 'Product 4', price: 123.45, quantity: 10, description: 'Lorem ipsum dolor sit amet'},
      {id: 5, title: 'Product 5', price: 123.45, quantity: 10, description: 'Lorem ipsum dolor sit amet'}
    ];

    return {
      query: function(){
        return example_products;
      },

      get: function(product){
        for(var i=0; i< example_products.length; i++) {
          if(example_products[i].id == product.id)
            return example_products[i];
        }
        return null;
      },

      delete: function(product){
        for(var i=0; i< example_products.length; i++) {
          if(example_products[i].id == product.id){
            example_products.splice(i, 1);
            return true;
          }
        }
        return false;
      },

      create: function(product){
        product.id = ++last_id;
        example_products.push(product);
      },

      update: function(product){
        var item = this.get(product);
        if(!item) return false;

        item.title = product.title;
        item.price = product.price;
        item.quantity = product.quantity;
        item.description = product.description;
        return true
      }
    };
  });

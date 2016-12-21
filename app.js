(function () {
  'use strict';

  angular.module('ToDoApp', [])
         .controller('ToDoListAddController', ToDoListAddController)
         .controller('ToDoListShowController', ToDoListShowController)
         .service('ToDoListService', ToDoListService);

  ToDoListAddController.$inject = ['ToDoListService'];
  function ToDoListAddController(ToDoListService) {
    var item = this;

    item.itemName = '';

    item.addItem = function () {
      ToDoListService.addItem(item.itemName);
      item.itemName = '';
    };
  }

  ToDoListShowController.$inject = ['ToDoListService'];
  function ToDoListShowController(ToDoListService) {
    var showList = this;

    showList.items = ToDoListService.getItems();

    showList.removeItem = function (itemIndex) {
      ToDoListService.removeItem(itemIndex);
    };
  }

  function ToDoListService() {
    var service = this;

    // List of items
    var items = [];

    service.addItem = function (itemName) {
      var item = {
        name: itemName
      };

      items.push(item);
    };

    service.removeItem = function (itemIdex) {
      items.splice(itemIdex, 1);
    };

    service.getItems = function () {
      return items;
    };
  }

})();

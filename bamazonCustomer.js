var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Tagteam221!",
  database: "bamazon_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  displayItems();
});


function displayItems() {

  connection.query('SELECT * FROM bamazon_db.products', function (error, results, fields) { 

   var table = new Table({
    head: ['Item_id', 'Product Name', 'Department Name', 'Price', 'Stock Quantity']
    , colWidths: [10, 23, 23, 10, 20]
  });

   for (var i = 0; i < results.length; i ++ ) {
    table.push(
      [results[i].item_id, results[i].product_name, results[i].department_name, results[i].price, results[i].stock_quantity]
      );
  }
//displays the table
  console.log(table.toString(results));

});
purchase();
}

// function to prompt user with two messages.  ID of the product and how many unit

function purchase() {
  // prompt for info about the item being put up for auction
  inquirer
  .prompt([{
    name: "item_id",
    type: "input",
    message: "What is the item id you would like to purchase?",
  },

  {
    name: "stock_quantity",
    type: "input",
    message: "How many units would you like to purchase?",
    validate: function(value) {
      if (isNaN(value) === false) {
        return true;
      }
      return false;
    }
  }]).then(function(answer){
    var chosenId = answer.item_id - 1;
    // var chosenProduct = results[chosenId];
    var chosenQuantity = answer.stock_quantity;
    connection.query('SELECT * FROM bamazon_db.products WHERE ?',
    {
      item_id: answer.item_id
    }, function (error, results, fields) {
      console.log(results[0])
      if (chosenQuantity < results[0].stock_quantity) {
        console.log("Your total for " + "(" + answer.stock_quantity + ")" + " - " + results[0].product_name + " is: " + results[0].price.toFixed(2) * chosenQuantity);

        connection.query("UPDATE products SET ? WHERE ?", [{
          stock_quantity: results[0].stock_quantity - chosenQuantity
        }, {
          item_id: results[0].item_id
        }], function(err, results) {
          console.log(err);
          // purchase();
        });
      } else {
        console.log("Sorry, insufficient Quanity at this time. All we have is " + results[0].stock_quantity + " in our Inventory.");
        purchase();
      }
    });
  });
}



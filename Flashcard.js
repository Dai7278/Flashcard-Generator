// dependency for inquirer npm package
var inquirer = require("inquirer");
var fs = require("fs");

// constructor function for creating flash cards
var BasicCard = function(front, back) {
  this.front = true;
  this.back = true;
};

  inquirer.prompt([
    {
      question: this.front;
      anwser: this.back;
    }
  ]).then(function(answer) {
      if (this.front === true) {
        inquirer.prompt([
          {
            quesiton: "Who built the first skyscrapper?";
            answer: "William Le Baron Jenney";
          }
        ])
      }
  });

var Cloze-Deleted = function(text, cloze) {
 this.text = true;
 this.cloze = true;
};

  this.cloze_deleted = function() {
    if (this.text === false) {
    console.log ("no cloze deletion");
    this.text = true;
    this.cloze = false;
    } else {
      this.text++;
      concole.log("cloze deletion");
    }
  };

  this.partial_text = function() {
    if (this.cloze === true) {
      console.log ("partial text");
    } else {
      this.cloze++;
    }
  };

  this.full_text = function() {
    if (this.cloze === false) {
      console.log ("full text");
    } else {
      this.cloze++;
    }
  };

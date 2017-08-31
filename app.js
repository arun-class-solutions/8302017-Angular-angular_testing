var app = angular.module("testApp", ["ngResource"]);

app.factory("TestFactory", function() {
    var factory = {};

    factory.sayHello = function() {
        alert("Hello World!");
    }

    return factory;
});

// Person "Model"
app.factory("Person", function($resource) {
    // var factory = {};

    // factory.getAll = function() {
    //     return $http
    //     .get("http://myapi-profstream.herokuapp.com/api/bc9626/persons");
    // }

    // return factory;

    // Return an object (using the $resource service) that has CRUD methods for the /persons resource
    return $resource("http://myapi-profstream.herokuapp.com/api/bc9626/persons/:id", {
        id: "@id"
    }, {
        update: {
            method: "PUT"
        }
    });
});

// Attach controller to module to enable our app's functionality
app.controller("testController", function($scope, TestFactory, Person) {
    // Call sayHello from OUR factory (service)
    TestFactory.sayHello();

    // Click event handler for button
    $scope.showInput = function() {
        // Show in the console the user input from the data-bound input field
        console.log($scope.userInput);
    }

    // Use AJAX to pull user data from the API and attach them to the scope
    // $http
    // .get("http://myapi-profstream.herokuapp.com/api/bc9626/persons")
    
    // Use the resource we set up above to query the API
    Person
    .query(function(users) {
        $scope.users = users;
    }, function(err) {
        console.log(err);
    });
    // .then(function(users) {
    //     // Assign data coming from the API to the scope
    //     $scope.users = users.data;
    // }, function(err) {
    //     console.log(err);
    // });

    // $scope.users = [
    //     {
    //         firstname: "Bob",
    //         lastname: "Jones",
    //         username: "bjones",
    //         email: "bjones@gmail.com"
    //     },
    //     {
    //         firstname: "John",
    //         lastname: "Smith",
    //         username: "jsmith",
    //         email: "jsmith@gmail.com"
    //     }
    // ];
});
var app = angular.module("testApp", []);

// Attach controller to module to enable our app's functionality
app.controller("testController", function($scope, $http) {
    // Click event handler for button
    $scope.showInput = function() {
        // Show in the console the user input from the data-bound input field
        console.log($scope.userInput);
    }

    // Use AJAX to pull user data from the API and attach them to the scope
    $http
    .get("http://myapi-profstream.herokuapp.com/api/bc9626/persons")
    .then(function(users) {
        // Assign data coming from the API to the scope
        $scope.users = users.data;
    }, function(err) {
        console.log(err);
    });

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
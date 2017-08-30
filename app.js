var app = angular.module("testApp", []);

// Attach controller to module to enable our app's functionality
app.controller("testController", function($scope) {
    // Click event handler for button
    $scope.showInput = function() {
        // Show in the console the user input from the data-bound input field
        console.log($scope.userInput);
    }

    $scope.users = [
        {
            firstname: "Bob",
            lastname: "Jones",
            username: "bjones",
            email: "bjones@gmail.com"
        },
        {
            firstname: "John",
            lastname: "Smith",
            username: "jsmith",
            email: "jsmith@gmail.com"
        }
    ];
});
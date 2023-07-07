var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,
  
    ships: [
      { locations: [0, 0, 0], hits: ["", "", ""] },
      { locations: [0, 0, 0], hits: ["", "", ""] },
      { locations: [0, 0, 0], hits: ["", "", ""] },
    ],
  
    fire: function (guess) {
      for (var i = 0; i < this.numShips; i++) {
        var ship = this.ships[i];
        var index = ship.locations.indexOf(guess);
        if (ship.hits[index] === "bang") {
          view.displayMessage("You already hit this one");
          return true;
        } else if (index >= 0) {
          ship.hits[index] = "bang";
          view.displayHit(guess);
          view.displayMessage("whaay well done you hit it!");
          if (this.isSunk(ship)) {
            view.displayMessage("crap you sunk my ship");
            this.shipsSunk++;
          }
          return true;
        }
      }
      view.displayMiss(guess);
      view.displayMessage("It's a miss!");
      return false;
    },
    isSunk: function (ship) {
        for (i = 0; i < this.shipLength; i++) {
          if (ship.hits[i] !== "hit") {
            return false;
          }
        }
        return true;
      },
    
      generateShipLocations: function () {
        var locations;
        for (var i = 0; i < this.numShips; i++) {
          do {
            locations = this.generateShip();
          } while (this.collision(locations));
          this.ships[i].locations = locations;
        }
        console.log(" isSunk: function (ship) {
            for (i = 0; i < this.shipLength; i++) {
              if (ship.hits[i] !== "hit") {
                return false;
              }
            }
            return true;
          },
        
          generateShipLocations: function () {
            var locations;
            for (var i = 0; i < this.numShips; i++) {
              do {
                locations = this.generateShip();
              } while (this.collision(locations));
              this.ships[i].locations = locations;
            }
            console.log("Ship Table");
            console.log(this.ships);
          }, 
        console.log(this.ships);
      },
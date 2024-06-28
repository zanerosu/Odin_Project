import { Ship } from "../ship";
import { Gameboard } from "../gameboard";

describe("Ship Class and Methods", () => {
  it("New ship object with specified length", () => {
    const ship = new Ship(10);
    expect(ship.length).toBe(10);
    expect(ship.hitCount).toBe(0);
    expect(ship.sunk).toBe(false);
  });

  it("Increment hitCount when hit method is called", () => {
    const ship = new Ship(5);
    ship.hit();
    expect(ship.hitCount).toBe(1);
  });

  it("Set sunk to true when hitCount equals length", () => {
    const ship = new Ship(2);
    ship.hit();
    ship.hit();
    ship.isSunk();
    expect(ship.sunk).toBe(true);
  });

  it("Not set sunk to true when hitCount is less than length", () => {
    const ship = new Ship(3);
    ship.hit();
    ship.isSunk();
    expect(ship.sunk).toBe(false);
  });
});

describe("Gameboard placeShip Method", () => {
  it("Ship placed onto gameboard at correct position and orientation (Vertical)", () => {
    const ship = new Ship(3);
    const gameboard = new Gameboard();
    gameboard.placeShip(0, 0, ship, "vertical");
    expect(gameboard.board).toStrictEqual([
      [ship, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ship, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ship, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });

  it("Ship placed onto gameboard at correct position and orientation (Horizontal)", () => {
    const ship = new Ship(3);
    const gameboard = new Gameboard();
    gameboard.placeShip(0, 0, ship, "horizontal");
    expect(gameboard.board).toStrictEqual([
      [ship, ship, ship, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });

  it("Ship placed onto gameboard exceeds row and column bounds", () => {
    const ship = new Ship(3);
    const gameboard = new Gameboard();
    expect(gameboard.placeShip(10, 10, ship, "horizontal")).toBe(
      "Invalid Position!"
    );
  });

  it("Ship placed onto gameboard exceeds horizontal bounds", () => {
    const ship = new Ship(3);
    const gameboard = new Gameboard();
    expect(gameboard.placeShip(0, 8, ship, "horizontal")).toBe(
      "Ship exceeds horizontal bounds!"
    );
  });

  it("Ship placed onto gameboard exceeds vertical bounds", () => {
    const ship = new Ship(3);
    const gameboard = new Gameboard();
    expect(gameboard.placeShip(8, 0, ship, "vertical")).toBe(
      "Ship exceeds vertical bounds!"
    );
  });

  it("Invalid orientation provided", () => {
    const ship = new Ship(3);
    const gameboard = new Gameboard();
    expect(gameboard.placeShip(8, 0, ship, "left")).toBe(
      "Invalid Orientation!"
    );
  });

  it("Ships added to ships attribute list for gameboard.", () => {
    const ship1 = new Ship(3);
    const ship2 = new Ship(2);
    const gameboard = new Gameboard();
    gameboard.placeShip(0, 0, ship1, "vertical")
    gameboard.placeShip(0, 3, ship2, "horizontal")

    expect(gameboard.ships).toStrictEqual(
      [ship1, ship2]
    );
  });
  
});

describe("Gameboard recieveAttack Method", () => {
  it("Attack out of bounds", () => {    
    const gameboard = new Gameboard();

    expect(gameboard.recieveAttack(11, 11)).toBe("Attack out of bounds!");
  });

  it("Attack previously shot coordinate", () => {
    const gameboard = new Gameboard();
    gameboard.recieveAttack(1, 1);

    expect(gameboard.recieveAttack(1, 1)).toBe("Shot already taken at these coordinates!");
  });

  it("Attack ship. Ship hitCount increments, and 'X' is placed on the board.", () => {
    const ship = new Ship(3);
    const gameboard = new Gameboard();
    gameboard.placeShip(0, 0, ship, "vertical")
    gameboard.recieveAttack(0, 0);

    expect(ship.hitCount).toBe(1);
    expect(gameboard.board[0][0]).toBe("X");
  });

  it("Gameboard ships list updates with hit information.", () => {
    const ship1 = new Ship(3);
    const ship2 = new Ship(2);
    const gameboard = new Gameboard();
    //Create two ships at 0, 0 and 0, 3 respectively
    gameboard.placeShip(0, 0, ship1, "vertical")
    gameboard.placeShip(0, 3, ship2, "horizontal")


    //Hit ship1 once, and ship2 twice
    gameboard.recieveAttack(0, 0);
    gameboard.recieveAttack(0, 3);
    gameboard.recieveAttack(0, 4);
    
    expect(gameboard.ships[0].hitCount).toBe(1);
    expect(gameboard.ships[1].hitCount).toBe(2);
    expect(ship2.sunk).toBe(true);
    expect(ship1.sunk).toBe(false);
  });

});

describe("Gameboard checkAllSunk Method", () =>{
    it("One ship sunk, other still standing", () => {
        const ship1 = new Ship(3);
        const ship2 = new Ship(2);
        const gameboard = new Gameboard();

        //Create two ships at 0, 0 and 0, 3 respectively
        gameboard.placeShip(0, 0, ship1, "vertical")
        gameboard.placeShip(0, 3, ship2, "horizontal")

        gameboard.recieveAttack(0, 0); //Attacks ship1
        gameboard.recieveAttack(0, 3); //Attacks ship2
        gameboard.recieveAttack(0, 4); //Attacks and sinks ship2

        expect(gameboard.allSunk).toBe(false);
    })

    it("All ships are sunk", () => {
        const ship1 = new Ship(3);
        const ship2 = new Ship(2);
        const gameboard = new Gameboard();

        //Create two ships at 0, 0 and 0, 3 respectively
        gameboard.placeShip(0, 0, ship1, "vertical")
        gameboard.placeShip(0, 3, ship2, "horizontal")

        gameboard.recieveAttack(0, 0); //Attacks ship1
        gameboard.recieveAttack(1, 0); //Attacks ship1
        gameboard.recieveAttack(2, 0); //Attacks and sinks ship1

        gameboard.recieveAttack(0, 3); //Attacks ship2
        gameboard.recieveAttack(0, 4); //Attacks and sinks ship2

        expect(gameboard.allSunk).toBe(true);
    })
});
import {Ship} from '../ship'
import { Gameboard } from '../gameboard';

describe('Ship Class and Methods', () => {
    it('New ship object with specified length', () => {
        const ship = new Ship(10);
        expect(ship.length).toBe(10);
        expect(ship.hitCount).toBe(0);
        expect(ship.sunk).toBe(false);
    });

    it('Increment hitCount when hit method is called', () => {
        const ship = new Ship(5);
        ship.hit();
        expect(ship.hitCount).toBe(1);
    });

    it('Set sunk to true when hitCount equals length', () => {
        const ship = new Ship(2);
        ship.hit();
        ship.hit();
        ship.isSunk();
        expect(ship.sunk).toBe(true);
    });

    it('Not set sunk to true when hitCount is less than length', () => {
        const ship = new Ship(3);
        ship.hit();
        ship.isSunk();
        expect(ship.sunk).toBe(false);
    });
});

describe('Gameboard Ship Placing Methods', () => {
    it('Ship placed onto gameboard at correct position and orientation (Vertical)', () => {
        const ship = new Ship(3);
        const gameboard = new Gameboard;
        gameboard.placeShip(0, 0, ship, 'vertical')
        expect(gameboard.board).toStrictEqual(
            [
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
            ]
        )
    });

    it('Ship placed onto gameboard at correct position and orientation (Horizontal)', () => {
        const ship = new Ship(3);
        const gameboard = new Gameboard;
        gameboard.placeShip(0, 0, ship, 'horizontal')
        expect(gameboard.board).toStrictEqual(
            [
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
            ]
        )
    });

    it('Ship placed onto gameboard exceeds row and column bounds', () => {
        const ship = new Ship(3);
        const gameboard = new Gameboard;
        expect(gameboard.placeShip(10, 10, ship, 'horizontal')).toBe("Invalid Position!");
    });

    it('Ship placed onto gameboard exceeds horizontal bounds', () => {
        const ship = new Ship(3);
        const gameboard = new Gameboard;
        expect(gameboard.placeShip(0, 8, ship, 'horizontal')).toBe("Ship exceeds horizontal bounds!");
    });

    it('Ship placed onto gameboard exceeds vertical bounds', () => {
        const ship = new Ship(3);
        const gameboard = new Gameboard;
        expect(gameboard.placeShip(8, 0, ship, 'vertical')).toBe("Ship exceeds vertical bounds!");
    });

    it('Invalid orientation provided', () => {
        const ship = new Ship(3);
        const gameboard = new Gameboard;
        expect(gameboard.placeShip(8, 0, ship, 'left')).toBe("Invalid Orientation!");
    });


});
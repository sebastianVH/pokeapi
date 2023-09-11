/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);
const pokemon = {
  name: 'Pikachu',
  image:"",
  hp:0,
  attack:0,
  defense:0,
};

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));
  describe('GET /pokemons', () => {
    it('should get 200', () =>
      agent.get('/pokemons').expect(200)
    );
    it('throw an error if data is missing', () => {
      agent.post(Pokemon.create({name: "Pikachu"})).expect(true)
    });
  });
  describe('GET /pokemons/1',() => {
    it('should get 200', () => {
      agent.get('/pokemons/1').expect(200) 
    })
  })
  describe('GET /pokemons/0', () => {
    it('should return a error', () => {
      agent.get('/pokemons/0').expect(400)
    });
  });
  describe('GET /pokemons?name=...', () => {
    it('should return a Pokemon when name is valid', () => {
      agent.get('/pokemons?name=cubon').expect(200)
    });
    
  });
  
});

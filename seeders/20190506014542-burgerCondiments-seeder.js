'use strict';

// This seeder file populates the join table for burgers and condiments
module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('burgerCondiments', [{ // 50/50 Burger
            burger_id: 1,
            condiment_id: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 1,
            condiment_id: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 1,
            condiment_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 1,
            condiment_id: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, { // 50/50 Kangaroo Burger
            burger_id: 2,
            condiment_id: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 2,
            condiment_id: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 2,
            condiment_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 2,
            condiment_id: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, { // Carolina Burger
            burger_id: 3,
            condiment_id: 28,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 3,
            condiment_id: 29,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 3,
            condiment_id: 19,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 3,
            condiment_id: 17,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 3,
            condiment_id: 9,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, { // Teriyaki Burger
            burger_id: 4,
            condiment_id: 33,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 4,
            condiment_id: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 4,
            condiment_id: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 4,
            condiment_id: 17,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, { // The Loaded Angus Steakhouse Burger
            burger_id: 5,
            condiment_id: 11,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 5,
            condiment_id: 7,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 5,
            condiment_id: 8,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, { // The Wisconsin Butter Burger
            burger_id: 6,
            condiment_id: 27,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 6,
            condiment_id: 12,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 6,
            condiment_id: 9,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, { // Classic Cheese Burger
            burger_id: 7,
            condiment_id: 9,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 7,
            condiment_id: 22,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 7,
            condiment_id: 20,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 7,
            condiment_id: 21,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 7,
            condiment_id: 23,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 7,
            condiment_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 7,
            condiment_id: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 7,
            condiment_id: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 7,
            condiment_id: 18,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 7,
            condiment_id: 17,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 7,
            condiment_id: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 7,
            condiment_id: 19,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, { // Luther Burger
            burger_id: 8,
            condiment_id: 9,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 8,
            condiment_id: 22,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 8,
            condiment_id: 20,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 8,
            condiment_id: 21,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 8,
            condiment_id: 23,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 8,
            condiment_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 8,
            condiment_id: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 8,
            condiment_id: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 8,
            condiment_id: 18,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 8,
            condiment_id: 17,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 8,
            condiment_id: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 8,
            condiment_id: 19,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, { // Australasian Burger
            burger_id: 9,
            condiment_id: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 9,
            condiment_id: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 9,
            condiment_id: 12,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 9,
            condiment_id: 13,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 9,
            condiment_id: 14,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 9,
            condiment_id: 15,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 9,
            condiment_id: 20,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, { // Chili Burger
            burger_id: 10,
            condiment_id: 28,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 10,
            condiment_id: 20,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 10,
            condiment_id: 17,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 10,
            condiment_id: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, { // Buffalo Burger
            burger_id: 11,
            condiment_id: 9,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 11,
            condiment_id: 22,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 11,
            condiment_id: 20,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 11,
            condiment_id: 21,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 11,
            condiment_id: 23,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 11,
            condiment_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 11,
            condiment_id: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 11,
            condiment_id: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 11,
            condiment_id: 18,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 11,
            condiment_id: 17,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 11,
            condiment_id: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 11,
            condiment_id: 19,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, { // Bøfsandwich
            burger_id: 12,
            condiment_id: 18,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 12,
            condiment_id: 25,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 12,
            condiment_id: 26,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 12,
            condiment_id: 16,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 12,
            condiment_id: 17,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, { // California Burger
            burger_id: 13,
            condiment_id: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 13,
            condiment_id: 9,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 13,
            condiment_id: 22,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 13,
            condiment_id: 20,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 13,
            condiment_id: 21,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 13,
            condiment_id: 23,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 13,
            condiment_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 13,
            condiment_id: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 13,
            condiment_id: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 13,
            condiment_id: 18,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 13,
            condiment_id: 17,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 13,
            condiment_id: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 13,
            condiment_id: 19,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, { // Hamdog
            burger_id: 14,
            condiment_id: 9,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 14,
            condiment_id: 20,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 14,
            condiment_id: 16,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 14,
            condiment_id: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 14,
            condiment_id: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 14,
            condiment_id: 17,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, { // Slugburger
            burger_id: 15,
            condiment_id: 17,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 15,
            condiment_id: 19,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 15,
            condiment_id: 16,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 15,
            condiment_id: 9,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, { // Slopper
            burger_id: 16,
            condiment_id: 35,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 16,
            condiment_id: 9,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 16,
            condiment_id: 22,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 16,
            condiment_id: 20,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 16,
            condiment_id: 21,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 16,
            condiment_id: 23,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 16,
            condiment_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 16,
            condiment_id: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 16,
            condiment_id: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 16,
            condiment_id: 18,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 16,
            condiment_id: 17,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 16,
            condiment_id: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 16,
            condiment_id: 19,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, { // BBQ Burger
            burger_id: 17,
            condiment_id: 24,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 17,
            condiment_id: 17,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 17,
            condiment_id: 9,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, { // Salmon Burger
            burger_id: 18,
            condiment_id: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 18,
            condiment_id: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 18,
            condiment_id: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 18,
            condiment_id: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 18,
            condiment_id: 19,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, { // Curry Burger
            burger_id: 19,
            condiment_id: 37,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 19,
            condiment_id: 30,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 19,
            condiment_id: 17,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 19,
            condiment_id: 31,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, { // Rice Burger
            burger_id: 20,
            condiment_id: 9,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 20,
            condiment_id: 22,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 20,
            condiment_id: 20,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 20,
            condiment_id: 21,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 20,
            condiment_id: 23,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 20,
            condiment_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 20,
            condiment_id: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 20,
            condiment_id: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 20,
            condiment_id: 18,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 20,
            condiment_id: 17,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 20,
            condiment_id: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 20,
            condiment_id: 19,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, { // Rice Burger (Korean Variant)
            burger_id: 21,
            condiment_id: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 21,
            condiment_id: 9,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 21,
            condiment_id: 20,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 21,
            condiment_id: 17,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 21,
            condiment_id: 34,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, { // Bacon Cheese Burger
            burger_id: 22,
            condiment_id: 9,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 22,
            condiment_id: 22,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 22,
            condiment_id: 20,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 22,
            condiment_id: 21,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 22,
            condiment_id: 23,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 22,
            condiment_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 22,
            condiment_id: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 22,
            condiment_id: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 22,
            condiment_id: 18,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 22,
            condiment_id: 17,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 22,
            condiment_id: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 22,
            condiment_id: 19,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, { // Hawaii Burger
            burger_id: 23,
            condiment_id: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 23,
            condiment_id: 33,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 23,
            condiment_id: 14,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 23,
            condiment_id: 38,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 23,
            condiment_id: 27,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 23,
            condiment_id: 39,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 23,
            condiment_id: 17,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 23,
            condiment_id: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, { // Naan Burger
            burger_id: 24,
            condiment_id: 9,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 24,
            condiment_id: 22,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 24,
            condiment_id: 20,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 24,
            condiment_id: 21,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 24,
            condiment_id: 23,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 24,
            condiment_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 24,
            condiment_id: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 24,
            condiment_id: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 24,
            condiment_id: 18,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 24,
            condiment_id: 17,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 24,
            condiment_id: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 24,
            condiment_id: 19,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, { // Jucy Lucy
            burger_id: 25,
            condiment_id: 9,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 25,
            condiment_id: 22,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 25,
            condiment_id: 20,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 25,
            condiment_id: 21,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 25,
            condiment_id: 23,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 25,
            condiment_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 25,
            condiment_id: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 25,
            condiment_id: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 25,
            condiment_id: 18,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 25,
            condiment_id: 17,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 25,
            condiment_id: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 25,
            condiment_id: 19,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, { // Kimchi Burger
            burger_id: 26,
            condiment_id: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 26,
            condiment_id: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 26,
            condiment_id: 24,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 26,
            condiment_id: 40,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, { //Veggie Burger
            burger_id: 27,
            condiment_id: 9,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 27,
            condiment_id: 22,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 27,
            condiment_id: 20,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 27,
            condiment_id: 21,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 27,
            condiment_id: 23,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 27,
            condiment_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 27,
            condiment_id: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 27,
            condiment_id: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 27,
            condiment_id: 18,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 27,
            condiment_id: 17,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 27,
            condiment_id: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 27,
            condiment_id: 19,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, { // Classic Steak Burger
            burger_id: 28,
            condiment_id: 9,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 28,
            condiment_id: 8,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 28,
            condiment_id: 22,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 28,
            condiment_id: 20,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 28,
            condiment_id: 21,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 28,
            condiment_id: 23,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 28,
            condiment_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 28,
            condiment_id: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 28,
            condiment_id: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 28,
            condiment_id: 18,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 28,
            condiment_id: 17,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 28,
            condiment_id: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            burger_id: 28,
            condiment_id: 19,
            createdAt: new Date(),
            updatedAt: new Date(),
        },], {});
    }

    // down: (queryInterface, Sequelize) => {
    //     // return queryInterface.bulkDelete('BurgerCondiments', null, {});
    // }
};
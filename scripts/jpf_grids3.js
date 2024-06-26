"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Review Assignment
   
   File: jpf_grids3.js

   Variables
   =========

   hitori1Rating, hitori2Rating, hitori3Rating
      Text string containing the Hitori puzzle rating

   hitori1Numbers, hitori2Numbers, hitori3Numbers
      Multidimensional array containing a Hitori puzzle
      numbers

   hitori1Blocks, hitori2Blocks, hitori3Blocks
      Multidimensional array containing the location of 
      the blocks within the Hitori puzzles
  	
*/

const hitori1Rating = "Easy";
const hitori1Numbers =
    [
        [1, 3, 4, 2, 3],
        [5, 2, 1, 3, 2],
        [1, 4, 4, 1, 5],
        [3, 1, 5, 1, 2],
        [1, 3, 1, 5, 1]
    ];

const hitori1Blocks =
    [
        [' ', '#', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', '#'],
        ['#', ' ', '#', ' ', ' '],
        [' ', ' ', ' ', '#', ' '],
        ['#', ' ', '#', ' ', ' ']
    ];


const hitori2Rating = "Medium";
const hitori2Numbers =
    [
        [4, 3, 2, 1, 5, 4, 2],
        [5, 2, 3, 3, 4, 1, 2],
        [3, 1, 6, 2, 3, 6, 5],
        [5, 2, 7, 5, 6, 3, 6],
        [4, 7, 2, 3, 2, 6, 6],
        [2, 7, 5, 6, 3, 7, 1],
        [3, 5, 6, 5, 1, 1, 3]
    ];

const hitori2Blocks =
    [
        ['#', ' ', ' ', ' ', ' ', ' ', '#'],
        [' ', '#', ' ', '#', ' ', ' ', ' '],
        [' ', ' ', '#', ' ', '#', ' ', ' '],
        ['#', ' ', ' ', ' ', ' ', ' ', '#'],
        [' ', ' ', '#', ' ', ' ', '#', ' '],
        [' ', '#', ' ', ' ', ' ', ' ', ' '],
        ['#', ' ', ' ', '#', ' ', '#', ' ']
    ];


const hitori3Rating = "Hard";
const hitori3Numbers =
    [
        [2, 4, 3, 8, 6, 8, 9, 3, 5],
        [4, 3, 6, 9, 4, 3, 8, 2, 2],
        [5, 9, 7, 6, 2, 6, 3, 8, 2],
        [3, 2, 7, 5, 2, 9, 9, 7, 3],
        [8, 1, 9, 6, 3, 9, 4, 2, 6],
        [9, 1, 2, 3, 3, 4, 7, 7, 1],
        [7, 3, 6, 2, 4, 8, 6, 1, 9],
        [1, 2, 3, 9, 9, 2, 4, 4, 8],
        [3, 5, 8, 4, 6, 1, 2, 8, 6]
    ];

const hitori3Blocks =
    [
        [' ', ' ', '#', ' ', ' ', '#', ' ', ' ', ' '],
        [' ', '#', ' ', ' ', '#', ' ', ' ', '#', ' '],
        [' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#'],
        ['#', ' ', '#', ' ', '#', ' ', '#', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', '#'],
        [' ', '#', ' ', ' ', '#', ' ', ' ', '#', ' '],
        [' ', ' ', '#', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', '#', ' ', '#', ' ', ' ', '#', ' ', ' '],
        [' ', ' ', ' ', ' ', '#', ' ', ' ', '#', ' ']
    ];
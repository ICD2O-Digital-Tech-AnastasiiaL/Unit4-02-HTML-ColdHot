// Copyright (c) 2025 Anastasiia Lebedenko All rights reserved
//
// Created by: Anastasiia Lebedenko
// Created on: April 2025
// This file contains the JS functions for index.html

"use strict";
/**
 * This function makes random numbers and user has to guess
 */
function calculateTemperature() {
  const MAX = 50;
    const MIN = -50;
  
  // Get users temperature
  let userTemperature = parseInt(document.getElementById('temperature').value);
    
  // Compare the randoms guess

  if (userTemperature > 10) {

    // Display
    document.getElementById('answers').innerHTML = 'It is warm enough to wear a simple outfit with no coat!'
  }

  else if (userTemperature < 10) {

    // Display
    document.getElementById('answers').innerHTML = 'It is not warm, dress warmly outside to make sure that you are not going to get sick'

  }
  
}
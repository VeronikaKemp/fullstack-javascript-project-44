#!/usr/bin/env node

import { rules, getQuestionandAnswer } from '../src/games/progression.js';
import gameLogic from '../src/index.js';

gameLogic(rules, getQuestionandAnswer);

//Code to make the button on the html page work
var button = document.getElementById("begin_quiz");
var output = document.getElementById("output");
button.addEventListener('click', function(event) {
        var finalOutput = Main();
        output.innerHTML = finalOutput;
        event.preventDefault();
});

function Main () {
  var hyperlink = "";
  var output = "";
  var suggestion = "";
  // all the possibilities
  //listed in alphabetical order
  var AllPossibleChoices = [
    "2001: A Space Odyssey",
    "30 for 30: Winning Time: Reggie Miller vs the New York Knicks",
    "The Adventures of Sharkboy and Lavagirl",
    "Alvin and the Chipmunks meet Frankenstein",
    "Arrow",
    "Batman 1989",
    "Batman Begins",
    "The Benchwarmers",
    "Brain Games",
    "Braveheart",
    "Breaking Bad",
    "Bruce Almighty",
    "Cheers",
    "Dinotrux",
    "Django Unchained",
    "Ferris Buller's Day Off",
    "Firefly",
    "The Flash",
    "Forrest Gump",
    "Good Will Hunting",
    "Gotham",
    "Inglourious Basterds",
    "Kill Bill: Vol 1",
    "Kill Bill: Vol 2",
    "Merlin",
    "Mulan",
    "The Office (US)",
    "Parks and Recreation",
    "The Patriot",
    "Penquins of Madagascar: The Movie",
    "Phineas and Ferb",
    "Prison Break",
    "Pulp Fiction",
    "The Reef",
    "Reservoir Dogs",
    "Rocky",
    "Rocky IV",
    "Robin Hood: Prince of Thieves",
    "Silence of the Lambs",
    "The Sixth Sense",
    "Sonic Underground",
    "Spy Kids",
    "Star Trek: The Original Series",
    "Star Trek: The Next Generation",
    "The Terminator",
    "Treasure Planet",
    "The Walking Dead",
    "We Were Soldiers"
  ];
  
  //the link to the IMDb page about the shows and movies the 
  //the indices are the same as the all possible suggestions array
  //ie inex 0 links to the same movie
  var AllPossibleHyperlinks = [
    "http://www.imdb.com/title/tt0062622/?ref_=fn_al_tt_4",
    "http://www.imdb.com/title/tt1501757/?ref_=fn_al_tt_1",
    "http://www.imdb.com/title/tt0424774/?ref_=nv_sr_1",
    "http://www.imdb.com/title/tt0424774/?ref_=nv_sr_1",
    "http://www.imdb.com/title/tt2193021/?ref_=nv_sr_1",
    "http://www.imdb.com/title/tt0096895/?ref_=fn_al_tt_1",
    "http://www.imdb.com/title/tt0372784/?ref_=nv_sr_2",
    "http://www.imdb.com/title/tt0437863/?ref_=nv_sr_2",
    "http://www.imdb.com/title/tt2078690/?ref_=nv_sr_3",
    "http://www.imdb.com/title/tt0112573/?ref_=nv_sr_1",
    "http://www.imdb.com/title/tt0903747/?ref_=nv_sr_2",
    "http://www.imdb.com/title/tt0315327/?ref_=nv_sr_1",
    "http://www.imdb.com/title/tt0083399/?ref_=fn_al_tt_1",
    "http://www.imdb.com/title/tt1396212/?ref_=nv_sr_1",
    "http://www.imdb.com/title/tt1853728/?ref_=nv_sr_1",
    "http://www.imdb.com/title/tt0091042/?ref_=nv_sr_1",
    "http://www.imdb.com/title/tt0303461/?ref_=nv_sr_1",
    "http://www.imdb.com/title/tt3107288/?ref_=nv_sr_1",
    "http://www.imdb.com/title/tt0109830/?ref_=nv_sr_1",
    "http://www.imdb.com/title/tt0119217/?ref_=nv_sr_2",
    "http://www.imdb.com/title/tt3749900/?ref_=nv_sr_1",
    "http://www.imdb.com/title/tt0361748/?ref_=nv_sr_1",
    "http://www.imdb.com/title/tt0266697/?ref_=nv_sr_4",
    "http://www.imdb.com/title/tt0378194/?ref_=nv_sr_2",
    "http://www.imdb.com/title/tt1199099/?ref_=nv_sr_1",
    "http://www.imdb.com/title/tt0120762/?ref_=nv_sr_6",
    "http://www.imdb.com/title/tt0386676/?ref_=nv_sr_1",
    "http://www.imdb.com/title/tt1266020/?ref_=nv_sr_4",
    "http://www.imdb.com/title/tt0187393/?ref_=nv_sr_1",
    "http://www.imdb.com/title/tt1911658/?ref_=nv_sr_1",
    "http://www.imdb.com/title/tt0852863/?ref_=nv_sr_1",
    "http://www.imdb.com/title/tt0455275/?ref_=nv_sr_2",
    "http://www.imdb.com/title/tt0110912/?ref_=nv_sr_1",
    "http://www.imdb.com/title/tt0820142/?ref_=nv_sr_2",
    "http://www.imdb.com/title/tt0105236/?ref_=nv_sr_2",
    "http://www.imdb.com/title/tt0075148/?ref_=nv_sr_1",
    "http://www.imdb.com/title/tt0089927/?ref_=nv_sr_2",
    "http://www.imdb.com/title/tt0102798/?ref_=nv_sr_3",
    "http://www.imdb.com/title/tt0102926/?ref_=nv_sr_3",
    "http://www.imdb.com/title/tt0167404/?ref_=nv_sr_1",
    "http://www.imdb.com/title/tt0230804/?ref_=fn_al_tt_1",
    "http://www.imdb.com/title/tt0227538/?ref_=nv_sr_1",
    "http://www.imdb.com/title/tt0060028/?ref_=nv_sr_5",
    "http://www.imdb.com/title/tt0092455/?ref_=nv_sr_1",
    "http://www.imdb.com/title/tt0088247/?ref_=nv_sr_2",
    "http://www.imdb.com/title/tt0133240/?ref_=nv_sr_2",
    "http://www.imdb.com/title/tt1520211/?ref_=nv_sr_1",
    "http://www.imdb.com/title/tt0277434/?ref_=nv_sr_1",
  ];
  
  if (AskIfUserWantsToWatch() === "NO") {
    output = "<h1>What are you doing on this application if you don't want to watch something on Netflix!?!</h1>";
  } else {
    if (AskAreThereChildren() === "YES") {
      if (AskIfUserWillBeWatchingWithTheKids() === "YES") {
        if (PromptForDisney() === "YES") {
          if (AskTVOrMovie() === "TV") {
            suggestion = AllPossibleChoices[30];
            hyperlink = AllPossibleHyperlinks[30];
          }else {
            suggestion = AllPossibleChoices[25];
            hyperlink = AllPossibleHyperlinks[25];
          }
        } else {
          if (DetermineTreasurePlanetOrPenquiunsOfMadagascar() === "SPY") {
            suggestion = AllPossibleChoices[29];
            hyperlink = AllPossibleHyperlinks[29];
          } else {
            suggestion = AllPossibleChoices[45];
            hyperlink = AllPossibleHyperlinks[45];
          }
        }
      } else {
        if (AskIfThereAreToddlers() === "YES") {
          if (AskTVOrMovie() === "TV") {
            suggestion = AllPossibleChoices[13];
            hyperlink = AllPossibleHyperlinks[13];
          } else {
            suggestion = AllPossibleChoices[33];
            hyperlink = AllPossibleHyperlinks[33];
          }
        } else {
          if (PromptForAnimatedFeature() === "YES") {
            if (AskTVOrMovie() === "TV") {
              suggestion = AllPossibleChoices[40];
              hyperlink = AllPossibleHyperlinks[40];
            } else {
              suggestion = AllPossibleChoices[3];
              hyperlink = AllPossibleHyperlinks[3];
            }    
          } else {
            if (AskSpyKidsOrSharkBoyandLavaGirl() === "SPY") {
              suggestion = AllPossibleChoices[41];
              hyperlink = AllPossibleHyperlinks[41];
            } else {
              suggestion = AllPossibleChoices[2];
              hyperlink = AllPossibleHyperlinks[2];
            }
          }
        }
      }
    } else {
      if (AskTVOrMovie() === "TV") {
        if (PromptForTVDrama() === "YES") {
          if (PromptForSuperHeroShow() === "YES") {
            if (AskPoliceOrSuperHeroes === "POLICE") {
              suggestion = AllPossibleChoices[20];
              hyperlink = AllPossibleHyperlinks[20];
            } else {
              if (AskIfTheWantAVigilante() === "YES") {
                suggestion = AllPossibleChoices[4];
                hyperlink = AllPossibleHyperlinks[4];
              } else {
                suggestion = AllPossibleChoices[17];
                hyperlink = AllPossibleHyperlinks[17];
              }
            }
          } else {
            if (PromptForGritty() === "YES") {
              if (PromptForCrimeShow() === "YES") {
                if (AskBreakingBadOrPrisonBreak() === "Yes") {
                  suggestion = AllPossibleChoices[31];
                  hyperlink = AllPossibleHyperlinks[31];
                } else {
                  suggestion = AllPossibleChoices[10];
                  hyperlink = AllPossibleHyperlinks[10];
                }
              } else {
                suggestion = AllPossibleChoices[46];
                hyperlink = AllPossibleHyperlinks[46];
              }
            } else {
              if (AskSciFiOrFantasy() === "SCIFI") {
                suggestion = AllPossibleChoices[16];
                hyperlink = AllPossibleHyperlinks[16];
              } else {
                suggestion = AllPossibleChoices[24];
                hyperlink = AllPossibleHyperlinks[24];
              }
            }
          }
        } else {
          if (PromptForSitcom() === "YES") {
            if (Ask1980sOr2000s() === "1980") {
              suggestion = AllPossibleChoices[12];
              hyperlink = AllPossibleHyperlinks[12];
            } else {
              if (AskOfficeOrParksAndRec() === "YES") {
                suggestion = AllPossibleChoices[26];
                hyperlink = AllPossibleHyperlinks[26];
              } else {
                suggestion = AllPossibleChoices[27];
                hyperlink = AllPossibleHyperlinks[27];
              }
            }
          } else {
            if (AskForBrainGames() === "YES") {
              suggestion = AllPossibleChoices[8];
              hyperlink = AllPossibleHyperlinks[8];
            } else {
              if (AskStarTrekTOSorTNG() === "SHATNER") {
                suggestion = AllPossibleChoices[42];
                hyperlink = AllPossibleHyperlinks[42];
              } else {
                suggestion = AllPossibleChoices[43];
                hyperlink = AllPossibleHyperlinks[43];
              }
            }
          }
        }
      } else {
        if (PromptForTarentino() === "YES") {
          if (PromptForHistoryMovie() === "YES") {
            if (AskWWIIOrWestern() === "WWII") {
              suggestion = AllPossibleChoices[21];
              hyperlink = AllPossibleHyperlinks[21];
            } else {
              suggestion = AllPossibleChoices[14];
              hyperlink = AllPossibleHyperlinks[14];
            }
          } else {
            if (AskGunsOrSwords() === "GUNS") {
              if (AskSamJacksonOrSteveBuscemi() === "SAM") {
                suggestion = AllPossibleChoices[32];
                hyperlink = AllPossibleHyperlinks[32];
              } else {
                suggestion = AllPossibleChoices[34];
                hyperlink = AllPossibleHyperlinks[34];
              }
            } else {
              if (PromptForKillBillVolOne() === "YES") {
                suggestion = AllPossibleChoices[23];
                hyperlink = AllPossibleHyperlinks[23];
              } else {
                suggestion = AllPossibleChoices[22];
                hyperlink = AllPossibleHyperlinks[22];
              }
            }
          }
        } else {
          if (PromptForSports() === "YES") {
            if (PromptForSportsDocumentary() === "YES") {
              suggestion = AllPossibleChoices[1];
              hyperlink = AllPossibleHyperlinks[1];
            } else {
              if (AskRockyOneOrRocky4() === "CARL") {
                suggestion = AllPossibleChoices[35];
                hyperlink = AllPossibleHyperlinks[35];
                
              } else {
                suggestion = AllPossibleChoices[36];
                hyperlink = AllPossibleHyperlinks[36];
              }
            }
          } else {
            if (PromptForMelGibson() === "YES") {
              if (PromptForAmericanMainCharacter() === "YES") {
                if (AskPatriotOrWeWereSoldiers() === "VIETNAM") {
                  suggestion = AllPossibleChoices[47];
                  hyperlink = AllPossibleHyperlinks[47];
                } else {
                  suggestion = AllPossibleChoices[28];
                  hyperlink = AllPossibleHyperlinks[28];
                }
              } else {
                suggestion = AllPossibleChoices[9];
                hyperlink = AllPossibleHyperlinks[29];
              }
            } else {
              if (PromptForComedy() === "YES") {
                if (PromptForJimCarry() === "YES") {
                  suggestion = AllPossibleChoices[11];
                  hyperlink = AllPossibleHyperlinks[11];
                } else {
                  suggestion = AllPossibleChoices[7];
                  hyperlink = AllPossibleHyperlinks[7];
                }
              } else {
                if (PromptForBatman() === "YES") {
                  if (AskNolanOrBurton() === "CHRIS") {
                    suggestion = AllPossibleChoices[6];
                    hyperlink = AllPossibleHyperlinks[6];
                  } else {
                    suggestion = AllPossibleChoices[5];
                    hyperlink = AllPossibleHyperlinks[5];
                  }
                } else {
                  if (PromptForFeelGoodMovie() === "YES") {
                    if (PromptForRatedR() === "YES") {
                      suggestion = AllPossibleChoices[19];
                      hyperlink = AllPossibleHyperlinks[19];
                    } else {
                      if (AskForrestOrFeris() === "NAIVE") {
                        suggestion = AllPossibleChoices[18];
                        hyperlink = AllPossibleHyperlinks[18];
                      } else {
                        suggestion = AllPossibleChoices[17];
                        hyperlink = AllPossibleHyperlinks[17];
                      }
                    }
                  } else {
                    if (PromptForTheFuture() === "YES") {
                      if (AskSpaceOrTime() === "SPACE") {
                       suggestion = AllPossibleChoices[0];
                       hyperlink = AllPossibleHyperlinks[0];
                      } else {
                        suggestion = AllPossibleChoices[44];
                        hyperlink = AllPossibleHyperlinks[44];
                      }
                    } else {
                      if (PromptForRobinHood() === "YES") {
                        suggestion = AllPossibleChoices[37];
                        hyperlink = AllPossibleHyperlinks[37];
                      } else {
                        if (AskGhostsOrPsycho() === "GHOST") {
                          suggestion = AllPossibleChoices[39];
                          hyperlink = AllPossibleHyperlinks[39];
                        } else {
                          suggestion = AllPossibleChoices[38];
                          hyperlink = AllPossibleHyperlinks[38];
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } // output begins
    output = "<h3>You should try watching</h3><h1>" + suggestion +
    "</h1><h2>Click the link below to visit the IMDb page for " + suggestion +
    "</h2><h2><a href=\"" + hyperlink + "\">" + suggestion + "IMDb Page" +
    "</a><h2><h2>Or refresh page to take the quiz again.</h2>";
  }
 
  
  return(output);
}
//End Main Function

// the best function 
//it takes its inputs from the questions and all the questions call it
//it converts and makes sure the user input is valid and then determines what they input
function GetAnswer(input, optionOne, optionTwo) {
  input = input.toUpperCase();
  if (input !== "1" && input !== optionOne && input !== "2" && input !== optionTwo) {
      alert("Invalid input. Please try again.");
      return(true);
    } else {
      if (input === "1" || input === optionOne) {
        return(optionOne);
      } else {
        return(optionTwo);
      }
  }
}


//All These functions are the Questions that are asked to the user
function AskIfUserWantsToWatch() {
  var choiceOne = "YES";
  var choiceTwo = "NO";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Do you want to watch something on Netflix?\n\n1: Yes\n2: No");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function AskAreThereChildren() {
  var choiceOne = "YES";
  var choiceTwo = "NO";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Will there be children watching?\n\n1: Yes\n2: No");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function AskIfUserWillBeWatchingWithTheKids() {
  var choiceOne = "YES";
  var choiceTwo = "NO";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Will you be watching with the kids?\n\n1: Yes\n2: No");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function AskTVOrMovie() {
  var choiceOne = "TV";
  var choiceTwo = "MOVIE";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Would you like to watch a Television Show or a Movie?\n\n1: TV \n2: Movie");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function PromptForDisney() {
  var choiceOne = "YES";
  var choiceTwo = "NO";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Do you want to watch something by Disney?\n\n1: Yes\n2: No");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function DetermineTreasurePlanetOrPenquiunsOfMadagascar() {
  var choiceOne = "SPY";
  var choiceTwo = "ADVENTURE";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Would you like to watch a movie spy movie or an adventure movie?\n\n1: Spy \n2: Adventure");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function AskIfThereAreToddlers() {
  var choiceOne = "YES";
  var choiceTwo = "NO";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Are the children watching toddlers?\n\n1: Yes\n2: No");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function PromptForAnimatedFeature() {
  var choiceOne = "YES";
  var choiceTwo = "NO";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Would you like the children to watch an animated film?\n\n1: Yes\n2: No");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function AskSpyKidsOrSharkBoyandLavaGirl() {
  var choiceOne = "SPY";
  var choiceTwo = "ADVENTURE";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Would you like your kids to watch a spy movie or an adventure movie?\n\n1: Spy \n2: Adventure");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function PromptForTVDrama() {
  var choiceOne = "YES";
  var choiceTwo = "NO";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Would you like to watch a TV Drama?\n\n1: Yes\n2: No");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function PromptForSuperHeroShow() {
  var choiceOne = "YES";
  var choiceTwo = "NO";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Would you like to watch a superhero show?\n\n1: Yes\n2: No");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function AskPoliceOrSuperHeroes() {
  var choiceOne = "POLICE";
  var choiceTwo = "SUPERHEROES";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Would you like the show to focus on the police or actual superheroes?\n\n1: Police\n2: Superheroes");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function AskIfTheWantAVigilante() {
  var choiceOne = "YES";
  var choiceTwo = "NO";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Would you like the hero to be a vigilante:\n\n1: Yes\n2: No");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function PromptForGritty() {
  var choiceOne = "YES";
  var choiceTwo = "NO";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Would you like to watch a gritty TV show?\n\n1: Yes\n2: No");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function PromptForCrimeShow() {
  var choiceOne = "YES";
  var choiceTwo = "NO";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Would you like to watch a crime TV show?\n\n1: Yes\n2: No");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function AskBreakingBadOrPrisonBreak() {
  var choiceOne = "YES";
  var choiceTwo = "NO";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Would you like to watch a conspiracy TV show?\n\n1: Yes\n2: No");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function AskSciFiOrFantasy() {
  var choiceOne = "SCIFI";
  var choiceTwo = "FANTASY";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Would you like to watch science fiction or fantasy?\n\n1: SciFi\n2: Fantasy");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function PromptForSitcom() {
  var choiceOne = "YES";
  var choiceTwo = "NO";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Would you like to watch a sitcom?\n\n1: Yes\n2: No");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function Ask1980sOr2000s() {
  var choiceOne = "1980";
  var choiceTwo = "2000";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Would you like to watch a show from the 1980's or the 2000's?\n\n1: 1980\n2: 2000");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function AskOfficeOrParksAndRec() {
  var choiceOne = "YES";
  var choiceTwo = "NO";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Would you like to watch a show that takes place in the government?\n\n1: Yes\n2: No");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function AskForBrainGames() {
  var choiceOne = "YES";
  var choiceTwo = "NO";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Would you like to watch a education television show?\n\n1: Yes\n2: No");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function AskStarTrekTOSorTNG() {
  var choiceOne = "SHATNER";
  var choiceTwo = "STEWART";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Would you rather watch a show starring William Shatner or Patrick Stewart?\n\n1: Shatner\n2: Stewart");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function PromptForTarentino() {
  var choiceOne = "YES";
  var choiceTwo = "NO";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Would you like to watch a film by Quentin Tarentino?\n\n1: Yes\n2: No");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function PromptForHistoryMovie() {
  var choiceOne = "YES";
  var choiceTwo = "NO";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Would you like to watch a film set in 'history'?\n\n1: Yes\n2: No");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}
  
function AskWWIIOrWestern() {
  var choiceOne = "WWII";
  var choiceTwo = "WESTERN";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Would you like to watch a World War 2 film or a western?\n\n1: WWII\n2: Western");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function AskGunsOrSwords() {
  var choiceOne = "GUNS";
  var choiceTwo = "SWORDS";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Would you like the primary weapons to be guns or swords?\n\n1: Guns\n2: Swords");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function AskSamJacksonOrSteveBuscemi() {
  var choiceOne = "SAM";
  var choiceTwo = "STEVE";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Would you rather watch a show starring Samuel L. Jackson or Steve Buscemi?\n\n1: Sam\n2: Steve");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function PromptForKillBillVolOne() {
  var choiceOne = "YES";
  var choiceTwo = "NO";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Have You Seen Kill Bill: Vol. 1?\n\n1: Yes\n2: No");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function PromptForSports() {
  var choiceOne = "YES";
  var choiceTwo = "NO";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Do you want to watch something about sports?\n\n1: Yes\n2: No");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function PromptForSportsDocumentary() {
  var choiceOne = "YES";
  var choiceTwo = "NO";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Do you want to watch a sports documentary?\n\n1: Yes\n2: No");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function AskRockyOneOrRocky4() {
  var choiceOne = "CARL";
  var choiceTwo = "DOLPH";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Would you rather watch a movie with Carl Weathers or Dolph Lundgren?\n\n1: Carl\n2: Dolph");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function PromptForMelGibson() {
  var choiceOne = "YES";
  var choiceTwo = "NO";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Would you like to watch a movie starring Mel Gibson?\n\n1: Yes\n2: No");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function PromptForAmericanMainCharacter() {
  var choiceOne = "YES";
  var choiceTwo = "NO";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Would you like the main characters to be American?\n\n1: Yes\n2: No");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function AskPatriotOrWeWereSoldiers() {
  var choiceOne = "VIETNAM";
  var choiceTwo = "REVOLUTIONARY";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Which war would you rather watch?\n\n1: Vietnam\n2: Revolutionary");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function PromptForComedy() {
  var choiceOne = "YES";
  var choiceTwo = "NO";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Would you like to watch a comedy?\n\n1: Yes\n2: No");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function PromptForJimCarry() {
  var choiceOne = "YES";
  var choiceTwo = "NO";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Would you like to watch a movie starring Jim Carry?\n\n1: Yes\n2: No");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function PromptForBatman() {
  var choiceOne = "YES";
  var choiceTwo = "NO";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Would you like to watch a movie with Batman?\n\n1: Yes\n2: No");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function AskNolanOrBurton() {
  var choiceOne = "CHRIS";
  var choiceTwo = "TIM";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Would you like to watch a film by Christopher Nolan or Tim Burton?\n\n1: Chris\n2: Tim");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function PromptForFeelGoodMovie() {
  var choiceOne = "YES";
  var choiceTwo = "NO";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Would you like to watch a feel good movie?\n\n1: Yes\n2: No");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function PromptForRatedR() {
  var choiceOne = "YES";
  var choiceTwo = "NO";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Would you like the movie to be Rated 'R'?\n\n1: Yes\n2: No");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function AskForrestOrFeris() {
  var choiceOne = "NAIVE";
  var choiceTwo = "MISCHIEF";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Would you like the main character to be naive and innocent or a mischief maker?\n\n1: Naive\n2: Mischief");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function PromptForTheFuture() {
  var choiceOne = "YES";
  var choiceTwo = "NO";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Would you like the movie to be about the future?\n\n1: Yes\n2: No");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function AskSpaceOrTime() {
  var choiceOne = "SPACE";
  var choiceTwo = "TIME";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Would you like the movie to be about space travel or time travel?\n\n1: Space\n2: Time");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function PromptForRobinHood() {
  var choiceOne = "YES";
  var choiceTwo = "NO";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("How about history?\n\n1: Yes\n2: No");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}

function AskGhostsOrPsycho() {
  var choiceOne = "GHOST";
  var choiceTwo = "PSYCHO";
  var answer;
  var userInput = "";
  
  do {
    userInput = prompt("Would you like the movie to be about ghosts or a psychopath?\n\n1: Ghost\n2: Psycho");
    answer = GetAnswer(userInput, choiceOne, choiceTwo);
  } while (answer === true);
  return(answer);
}
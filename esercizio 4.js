function iniziali(stringa) {

return console.log(stringa.split(" ").map(el => el[0]+".").join(" "));

};
iniziali(`Michele Federica Claudia`);

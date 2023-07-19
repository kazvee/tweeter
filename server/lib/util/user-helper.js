"use strict";

const Chance      = require("chance"),
      chance      = new Chance();

const md5 = require('md5');


module.exports = {
  generateRandomUser: () => {
    const gender    = chance.gender();
    const firstName = chance.first({gender: gender});
    const lastName  = chance.last();
    const userName  = firstName + " " + lastName;
    
    let userHandle = "@";
    if (Math.random() > 0.5) {
      let prefix    = chance.prefix({gender: gender});
      prefix = prefix.replace(".", "");
      userHandle += prefix
    }

    userHandle += lastName;

    if (Math.random() > 0.5) {
      const suffix = Math.round(Math.random() * 100);
      userHandle += suffix;
    }
   
    const avatars = {
    
      Female: ["https://i.imgur.com/1exUqyt.png","https://i.imgur.com/XkKBjwX.png","https://i.imgur.com/4mk6Xqr.png","https://i.imgur.com/JgROeKL.png", "https://i.imgur.com/vC205al.png"],
      Male: ["https://i.imgur.com/n2cPfO6.png","https://i.imgur.com/2Y1D55u.png","https://i.imgur.com/UXxjrcf.png","https://i.imgur.com/M0nQyy5.png", "https://i.imgur.com/fSXPdQN.png"]
    
    }
    
    const avatarArray = avatars[gender]
    const userAvatar = avatarArray[Math.floor(Math.random()*avatarArray.length)]
  

    return {
      name: userName,
      handle: userHandle,
      avatars: userAvatar
    };
  }
};
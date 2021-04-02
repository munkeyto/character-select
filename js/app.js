  // character data
  const characters = {
    blanka: {name: "BLANKA", portrait: "blanka", flag: "br"},
    ryu: {name: "RYU", portrait: "ryu", flag: "jp"},
    boxer: {name: "BALROG", portrait: "boxer", flag: "us"},
    cammy: {name: "CAMMY", portrait: "cammy", flag: "gb"},
    chunli: {name: "CHUN-LI", portrait: "chunli", flag: "cn"},
    claw: {name: "VEGA", portrait: "claw", flag: "es"},
    deejay: {name: "DEEJAY", portrait: "deejay", flag: "jm"},
    dhalsim: {name: "DHALSIM", portrait: "dhalsim", flag: "in"},
    dictator: {name: "M. BISON", portrait: "dictator", flag: "th"},
    ehonda: {name: "E. HONDA", portrait: "ehonda", flag: "jp"},
    feilong: {name: "FEI LONG", portrait: "feilong", flag: "hk"},
    guile: {name: "GUILE", portrait: "guile", flag: "us"},
    ken: {name: "KEN", portrait: "ken", flag: "us"},
    ryu: {name: "RYU", portrait: "ryu", flag: "jp"},
    sagat: {name: "SAGAT", portrait: "sagat", flag: "th"},
    thawk: {name: "T. HAWK", portrait: "thawk", flag: "mx"},
    zangief: {name: "ZANGIEF", portrait: "zangief", flag: "ru"},
  }
  
  // insertCoin
  
  const iconToggleOn = document.getElementById('icon-toggle-on');
  const iconToggleOff = document.getElementById('icon-toggle-off');
  const themeToggles = document.querySelectorAll('.theme-toggle');
  let count = 0;
  
  const themeAudio = new Audio('assets/sounds/theme.mp3');
  themeAudio.volume = 0.6;
  const playMenuTheme = () => {
    if (count === 0) {
      count = 1;
      themeAudio.play();
      themeAudio.loop = true;
      iconToggleOff.classList.add('hide')
      iconToggleOn.classList.remove('hide');
    } else {
      count = 0;
      themeAudio.pause();
      iconToggleOn.classList.add('hide')
      iconToggleOff.classList.remove('hide');
    }
  }
  
  const characterIcons = document.querySelectorAll('.charSrc');
  
  const playerOneImg = document.getElementById('player-one-img');
  const playerOneName = document.getElementById('player-one-name');
  const playerOneFlag = document.getElementById('player-one-flag');
  
  const getNameString = (character) => {
    let imgSrc = character.getAttribute('src'); 
    const regexp = /\w+(?=\.gif)/;
    let nameString = imgSrc.match(regexp)[0];
    return nameString;
  }

  const getCharObjInfo = (nameString) => {
    const charImg = characters[nameString].portrait;
    const charName = characters[nameString].name;
    const charFlag = characters[nameString].flag;
    
    playerOneImg.innerHTML = `<img class="img-char" src="assets/images/portrait/${charImg}.gif" alt="${charName}">`
    playerOneName.innerHTML = `<p>${charName}</p>`
    playerOneFlag.innerHTML = `<img class="flag" src="https://www.countryflags.io/${charFlag}/flat/64.png">`
  }

  const hoverAudio = new Audio('assets/sounds/hoverSelect.wav');
  const playHoverAudio = () => {
    hoverAudio.currentTime = 0;
    hoverAudio.play();
  }

  const selectAudio = new Audio('assets/sounds/clickSelect.wav');
  const playSelectAudio = () => {
    selectAudio.currentTime = 0;
    selectAudio.play();
  }

  // event listeners
  characterIcons.forEach(character => character.addEventListener('mouseenter', () => {
    playHoverAudio();
    getCharObjInfo(getNameString(character));
  }));

  characterIcons.forEach(character => character.addEventListener('click', () => {
    playSelectAudio();
    console.log('test');
  }));

  themeToggles.forEach(toggle => toggle.addEventListener('click', playMenuTheme));
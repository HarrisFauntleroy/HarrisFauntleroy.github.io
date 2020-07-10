
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('color-mode', 'dark');
    }
    else {
        document.documentElement.setAttribute('color-mode', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(e) {
  if (e.target.checked) {
      document.documentElement.setAttribute('color-mode', 'dark');
      localStorage.setItem('theme', 'dark'); //add this
  }
  else {
      document.documentElement.setAttribute('color-mode', 'light');
      localStorage.setItem('theme', 'light'); //add this
  }    
}


const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('color-mode', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}


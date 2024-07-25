document.getElementById('theme').onclick = function () { 
    document.getElementById('theme_css').href = '../resources/theme2.css';
    document.getElementById('theme_css').innerText = 'Switch theme to Default';
    document.getElementById('theme').id = 'theme2';
};

document.getElementById('theme2').onclick = function () { 
    document.getElementById('theme_css').href = '../resources/theme.css';
    document.getElementById('theme_css').innerText = 'Switch theme to Dark Mode';
    document.getElementById('theme2').id = 'theme';
};


var promoBar = document.createElement('div'),
    promoStyles = {
        height: '48px', color: '#FFFFFF', textShadow: '#666 0 1px 0',
        background: '#34495e', textAlign: 'center', position: 'fixed',
        width: '100%', maxWidth: '100%', top: '0',
        left: '0', zIndex: '1000', paddingTop: '20px',
        fontFamily: '"trebuchet ms", sans-serif',
        fontSize: '30px', lineHeight: '25px'
    };
for(var k in promoStyles) {
    promoBar.style[k] = promoStyles[k];
}
promoBar.innerHTML = [
    '<a href="https://mobirise.com/extensions/kit/?utm_source=wow_ny22_ad&utm_medium=banner&utm_campaign=wow_ny22_ad" target="_blank" style="border-style: none; text-decoration: none">',
       // '<font style="color:#FFF">',
       //     '<b>HAPPY HOLIDAYS</b>',
        '</font>',
        '<font style="color:#f94924">',
            '<b>98% OFF</b>',
        '</font>',
        '<font style="color:#FFF">',
            '<b>No-Code Website Builder Kit!</b>',
        '</font>',
    '</a>'
].join(' ');
document.body.style.paddingTop = '90px';
document.body.appendChild(promoBar);

/* From https://time.is/time_zones */
const utcCountry = {
    '-720': [
        ['Baker Island', 'U.S. Minor Outlying Islands'],
        ['Howland Island', 'U.S. Minor Outlying Islands'],
    ],
    '-660': [
        ['Pago Pago', 'American Samoa'],
        ['Alofi', 'Niue'],
        ['Itascatown pre-WW2', 'U.S. Minor Outlying Islands'],
    ],
    '-600': [
        ['Avarua', 'Cook Islands'],
        ['French Polynesia', 'Papeete'],
        ['Millersville - pre-WW2 settlement', 'U.S. Minor Outlying Islands']
        ['Hawaii', 'United States'],
        ['Honolulu', 'United States'],
    ],
    '-570': [
        ['Atuona', 'French Polynesia'],
    ],
    '-540': [
        ['Rikitea', 'French Polynesia'],
        ['Alaska', 'United States'],
    ],
    '-480': [
        ['Adamstown', 'Pitcairn Islands'],
        ['Alaska', 'United States'],
        ['Anchorage', 'United States'],
    ],
    '-420': [
        ['todo', 'todo'],
    ],
    '-360': [
        ['todo', 'todo'],
    ],
    '-300': [
        ['todo', 'todo'],
    ],
    '-240': [
        ['todo', 'todo'],        
    ],
    '-180': [
        ['todo', 'todo'],
    ],
    '-150': [
        ['Newfoundland and Labrador', 'Canada'],
        ['St Johns', 'Canada'],
    ],
    '-120': [
        [null, 'Brazil'],
        ['Saint-Pierre', 'Saint Pierre and Miquelon'],
        [null, 'South Georgia and South Sandwich Islands'],
    ],
    '-60': [
        ['Ponta Delgada', 'Azores'],
        ['Praia', 'Cape Verde'],
        ['Ittoqqortoormiit', 'Greenland'],
    ],
    '0': [
        ['todo', 'todo'],
    ],
    '60': [
        ['todo', 'todo'],
    ],
    '120': [
        ['todo', 'todo'],
    ],
    '180': [
        ['todo', 'todo'],
    ],
    '210': [
        ['Isfahan', 'Iran'],
        ['Karaj', 'Iran'],
        ['Mashhad', 'Iran'],
        ['Qom', 'Iran'],
        ['Shiraz', 'Iran'],
        ['Tabriz', 'Iran'],
        ['Tehran', 'Iran'],
    ],
    '240': [
        ['todo', 'todo'],
    ],
    '270': [
        ['Kabul', 'Afghanistan'],
        ['Kandahar', 'Afghanistan'],
        ['Mazari Sharif', 'Afghanistan'],
    ],
    '300': [
        ['todo', 'todo'],
    ],
    '330': [
        ['todo', 'todo'],
    ],
    '345': [
        ['Biratnagur', 'Nepal'],
        ['Kathmandu', 'Nepal'],
        ['Pokhara', 'Nepal'],
    ],
    '360': [
        ['todo', 'todo'],
    ],
    '390': [
        [null, 'Cocos [Keeling] Islands'],
        ['Naypyidaw', 'Myanmar'],
        ['Yangon', 'Myanmar'],
    ],
    '420': [
        ['todo', 'todo'],
    ],
    '480': [
        ['todo', 'todo'],
    ],
    '525': [
        [null, 'Australia'],
    ],
    '540': [
        ['todo', 'todo'],
    ],
    '570': [
        ['Darwin', 'Australia'],
        ['Northern Territory', 'Australia'],
    ],
    '600': [
        ['todo', 'todo'],
    ],
    '630': [
        ['Adelaide', 'Australia'],
        ['Adelaide Hills', 'Australia'],
        ['South Australia', 'Australia'],
    ],
    '660': [
        ['todo', 'todo'],
    ],
    '720': [
        ['todo', 'todo'],
    ],
    '780': [
        [null, 'Kiribati'],
        ['Auckland', 'Australia'],
        ['Wellington', 'Australia'],
        ["Nuku'alofa", 'Tonga'],
    ],
    '825': [
        [null, 'New Zealand'],
    ],
    '840': [
        ['Tabwakea Village', 'Kiribati'],
        ['Apia', 'Samoa'],
    ],
};

function getAllUTCOffsets() {
    /* Get list of all UTC offsets. */
    return Object.keys(utcCountry);
}

function getClosestUTCOffsetTo(moment)

function getCityCountryUTC(utc) {
    /* Get random city, country from utcCountry object. */
    if (utc in utcCountry) {
        zone = utcCountry[utc];
        return zone[Math.floor(Math.random() * zone.length)];
    } else {
        return null;
    }
}
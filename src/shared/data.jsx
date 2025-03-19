let navs = [
    {'href': '/', 'label': 'Inicio',},
    {'href': '/weatherNews', 'label':'News'},
    {'href': '/wikiWeather', 'label': 'WikiWeather'},
    {'href': '/profile', 'label':'Profile'}
]

let articles = [
    {
        'img': './src/assets/img/news_img/houston-img.png', 
        'title': 'Glaciar in problems with global warm', 
        'content': 'Having new things with the hottest year in the history, the glaciars get melt with the hight temperatures.'
    },
    {
        'img': './src/assets/img/news_img/festival-verde-4 1.png', 
        'title': 'New convention in argentina about recycling', 
        'content': 'Applying new ways to get a city cleaner, a new convention has made.'
    }
]

let stateWeather = {
        'iconWeather': './src/assets/img/weather_img/PartlyCloudy.png',
        'titleWeather': 'Partly Cloudly',
        'degrees': '38°',
        'humidity': '25%',
        'windVelocity': '25 km/h',
}




export {navs,articles, stateWeather}
const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/katlyn-giberson-OkhcMbf3vQ0-unsplash.jpg'
      }, {
          name: 'Coding Cat Cafe',
          city: 'Phoenix',
          state: 'AZ',
          cuisines: 'Coffee, Bakery',
          pic: '/images/nathan-dumlao-6VhPY27jdps-unsplash.jpg'
      }]
      
    res.render('places/index', {places})
})

module.exports = router
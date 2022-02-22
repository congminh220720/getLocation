const findMyState = () => {
  const status  = document.querySelector('.status')

  const success = (postion) => {
    const latitude = postion.coords.latitude
    const longtitude = postion.coords.longtitude

    const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longtitude}&localityLanguage=en`

    fetch(geoApiUrl).then((res) =>{
      return res.json()
    }).then((data) => {
      
      console.log(data)
    })

  }

  const error = () => {
    status.textContent = 'Unable to retireve your location'
  }
  


  navigator.geolocation.getCurrentPosition(success,error);

}



document.querySelector('.find-state').addEventListener('click', findMyState)



const findMyState = () => {
  const status  = document.querySelector('.status')

  const options = {
    enableHighAccuracy: true,
    timeout: 6000,
    maximumAge: 0
  };

  const success = (postion) => {
    const latitude = postion.coords.latitude
    const longtitude = postion.coords.longitude
    const location = latitude.toString() + ',' + longtitude.toString();

    console.log('Location:',location)
    console.log(postion)

    status.textContent = `${location}`


    const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longtitude}&localityLanguage=en`

    fetch(geoApiUrl).then((res) =>{
      return res.json()
    }).then((data) => {
      
      console.log('detail:',data)
    })

  }

  const error = () => {
    status.textContent = 'Unable to retireve your location'
  }
  navigator.geolocation.getCurrentPosition(success,error,options);

}
document.querySelector('.find-state').addEventListener('click', findMyState)



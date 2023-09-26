let bootstrap = require('bootstrap')

const CONF = {
  start: new Date('2023-09-30 07:00:00'),
  end: new Date('2023-09-30 22:00:00'),
}

window.NOW = new Date()

function initMap() {
  const myLatLng = { lat: 45.4640236, lng: 10.5340366 }
  const map = new google.maps.Map(document.getElementById('map-venue'), {
    zoom: 12,
    mapId: 'debe6a4b65bb50c1',
    center: myLatLng,
  })

  // Info window content
  var contentString = `
    <div class="text-dark">
      <div class="fs-6 mb-1 fw-bold">Hotel Desenzano</div>
      <div class="address mb-3">
        Via Nazario Sauro, 29, 25015<br>
        Desenzano del Garda BS
      </div>
      <div class="phone mb-1"><a href="tel:+39 030 9141414">+39 030 9141414</a></div>
      <div class="email mb-1"><a href="mailto:info@hoteldesenzano.it">info@hoteldesenzano.it</a></div>
      <div class="website mb-3"><a target="_blank" href="https://hoteldesenzano.it/">https://hoteldesenzano.it</a></div>

      <a target="_blank" href="https://www.google.com/maps/place/Hotel+Desenzano/@45.4640236,10.5340366,17z/data=!4m13!1m2!2m1!1sHotel+Desenzano+Viale+Cavour,+40%2F42,+25015+Desenzano+del+Garda+BS%E2%80%A2030+914+1414!3m9!1s0x4781944f67d390b5:0x144967ddcd5953e9!5m2!4m1!1i2!8m2!3d45.4640236!4d10.5362253!15sClBIb3RlbCBEZXNlbnphbm8gVmlhbGUgQ2F2b3VyLCA0MC80MiwgMjUwMTUgRGVzZW56YW5vIGRlbCBHYXJkYSBCU-KAojAzMCA5MTQgMTQxNJIBBWhvdGVs4AEA!16s%2Fg%2F1td31x9_">
        Details and directions
      </a>
    </div>
  `

  // Add info window
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  })

  // The marker, positioned at selected location
  const marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Googleplex (CodexWorld)',
  })

  // Marker click event: open info window
  google.maps.event.addListener(marker, 'click', function () {
    infowindow.open(map, marker)
  })

  // Open info window on load
  infowindow.open(map, marker)
}

window.initMap = initMap

function getDateFromTime(time) {
  const [hours, minutes] = time.split(':')
  return new Date(CONF.start).setHours(Number(hours), Number(minutes))
}

function refreshSlotStatus(slot, [startDate, endDate], now) {
  slot.classList.remove('current')
  slot.classList.remove('future')
  slot.classList.remove('past')

  if (startDate <= now && now <= endDate) {
    slot.classList.add('current')
  } else if (now < endDate) {
    slot.classList.add('future')
  } else if (startDate < now) {
    slot.classList.add('past')
  }
}

function refreshScheduleStatus(now) {
  const timeslots = document.querySelectorAll('.timeslot')

  timeslots.forEach(timeslot => {
    const [startTime, endTime] = timeslot.innerHTML.split(' - ')
    const startDate = getDateFromTime(startTime)
    const endDate = getDateFromTime(endTime)

    const slot = timeslot.parentElement

    refreshSlotStatus(slot, [startDate, endDate], now)
  })
}

function scrollToCurrentSlot() {
  document
    .querySelector('.slot.current')
    ?.scrollIntoView({ block: 'start', inline: 'nearest' })
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.sponsor-level').forEach(level => {
    const sponsors = Array.from(level.querySelectorAll('.sponsor')).sort(
      () => Math.random() - 0.5,
    )
    level.innerHTML = ''
    sponsors.forEach(s => level.appendChild(s))
  })

  if (CONF.start <= window.NOW && window.NOW <= CONF.end) {
    setInterval(() => refreshScheduleStatus(window.NOW), 10_000)
    refreshScheduleStatus(window.NOW)
    scrollToCurrentSlot()
  }
})

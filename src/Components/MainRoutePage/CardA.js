import React from 'react'
import "../../Helper.css"
import moment from 'moment'

const CardA = (props) => {
  const unpark = (event) => {
    props.setParkingSlots((prevState) => {
      let modifiedParking = prevState.entryPointA.map(function(slot) {
            if (slot.name == event.target.attributes["data-name"].nodeValue) {
              console.log('condtion selected slot', event.target.attributes["data-name"].nodeValue)
              slot.availability = true
            }
            return slot;
          });
      return ({...prevState, modifiedParking })
    })
  };
  return (
    <div>
      {props.parkingSlots.entryPointA.map((slot) =>
        <>
        {JSON.stringify(slot.availability)}
          <div class="card" key={props.parkingSlots.id}>
            <div class={!slot.availability ? `card-content #8bc34a #e57373 red lighten-2` : `card-content #8bc34a light-green`}>
              <div className='text-align-center'>
                Slot Name: {slot.name}
              </div>
              <div>
                <div>
                  Plate No: {slot.plate}
                </div>
                <div>
                  Size: {slot.size}
                </div>
                <div>
                  Time Started: {moment(slot.timeStarted).format("hh:mm:ss YYYY-MM-DD")}
                </div>
                {slot.availability == true
                ?
                <div>
                  Availabitlity: Available
                </div>
                :
                <div>
                  Availabitlity: Occupied
                </div>
                }
              </div>
              {slot.availability == false &&
                <div className='d-flex-center pad-top-10'>
                  <a class="waves-effect waves-light btn-small #b71c1c red darken-4" onClick={unpark} data-name={slot.name}>Unpark</a>
                </div>
              }
            </div>

          </div>
        </>
      )}   
    </div>
  )
}

export default CardA
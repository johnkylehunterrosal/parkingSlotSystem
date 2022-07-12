import React from 'react'
import "../../Helper.css"
import moment from 'moment'
const CardC = (props) => {
  return (
    <div>
      {props.parkingSlots.entryPointC.map((slot) =>
        <>
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
                  <a class="waves-effect waves-light btn-small #b71c1c red darken-4">Unpark</a>
                </div>
              }
            </div>

          </div>
        </>
      )}   
    </div>
  )
}

export default CardC
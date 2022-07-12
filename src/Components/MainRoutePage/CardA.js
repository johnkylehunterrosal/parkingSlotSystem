import React, { useState } from 'react'
import "../../Helper.css"
import moment from 'moment'
import Modal, {closeStyle} from 'simple-react-modal';

const CardA = (props) => {
  const [isUnparking, setIsUnparking] = useState(false);
  const [parkingDetails, setParkingDetails] = useState({});
  const [hoursRendered, setHoursRendered] = useState(0);
  const [finalPrice, setFinalPrice] = useState(40)
  const openUnparkModal = (event) => {
    setIsUnparking(true);
    let selectedParkingSlot = props.parkingSlots.entryPointA.find((slot) => {
      return event.target.attributes["data-name"].nodeValue == slot.name
    })
    setParkingDetails(selectedParkingSlot);

    // computing hours 
    const startTime = moment(selectedParkingSlot.timeStarted)
    const endTime = moment( + Date.now())
    const duration = moment.duration(endTime.diff(startTime))
    const hours = duration.hours()
    setHoursRendered(hours)

    // computing final price
    let total = 40;
    
    if(hours < 4) {
      total = Math.abs(hours * 40)
    } else {
      total = Math.abs(hours * selectedParkingSlot.price)
    }
    if (duration.days() == 1) {
      total = Math.abs(total + 5000);
    }
    if (total == 0) {
      total = 40
    }
    setFinalPrice(total)
  };
  const okPaid = () => {
    props.setParkingSlots((prevState) => {
      let modifiedParking = prevState.entryPointA.map(function(slot) {
            if (slot.name ==parkingDetails.name) {
              console.log('condtion selected slot', parkingDetails.name)
              slot.availability = true
            }
            return slot;
          });
      return ({...prevState, modifiedParking });
    })
    setIsUnparking(false)

  }
  return (
    <div>
      {props.parkingSlots.entryPointA.map((slot) =>
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
                  <a class="waves-effect waves-light btn-small #b71c1c red darken-4" onClick={openUnparkModal} data-name={slot.name}>Unpark</a>
                </div>
              }
            </div>
            <Modal show={isUnparking}>
             <div className='text-align-center'>
                      Slot Name: {parkingDetails.name}
                    </div>
                    <div>
                      <div>
                        Plate No: {parkingDetails.plate}
                      </div>
                      <div>
                        Size: {parkingDetails.size}
                      </div>
                      <div>
                        Time Started: {moment(parkingDetails.timeStarted).format("hh:mm:ss YYYY-MM-DD")}
                      </div>
                      <div>
                    Time Ended: {moment().format("hh:mm:ss YYYY-MM-DD")}
                    </div>
                      <div>
                      Hours Rendered: {hoursRendered}
                      </div>
                      <div>
                    Price per Hour: {parkingDetails.price}
                    </div>
                      <div>
                    <b>Total Price to pay: {finalPrice}</b>
                    </div>
                    <br/>
                      <a class="waves-effect waves-light btn-small #b71c1c green darken-4" onClick={okPaid}>Ok - Paid</a>
                    </div>
            </Modal>
          </div>
        </>
      )}   
    </div>
  )
}

export default CardA
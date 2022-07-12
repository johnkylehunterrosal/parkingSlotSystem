import React, {useState} from 'react'
import CardA from './CardA'
import CardB from './CardB'
import CardC from './CardC'
import moment from 'moment'
import Modal, {closeStyle} from 'simple-react-modal'

const ParkingSlots = (props) => {
 
  // ------------------------------------------------------------>
   // Declaration of State
  const [carInformation, setCarInformation] = useState({
    name : "", plate: "" , size : "", availability : false, entryPoint: ""
  })
  const handlePlate = (e) => setCarInformation (prevState => {
    return {...prevState, plate: e.target.value} 
  })
  const handleSize = (e) => setCarInformation (prevState => {
    return {...prevState,size : e.target.value} 
  })
  const handleEntryPoint = (e) => setCarInformation (prevState => {
    return {...prevState,entryPoint : e.target.value} 
  })
  const [isSumbmitForm, setIsSubmitForm] = useState(false);
  const [hasErrors, setHasErrors] = useState('')
  // const [duration, setDuration] = useState("")
// ---------------------------------------------------------------->

// ------------------------------------------------------------------->
// parkButton: Checks Availability nearest parking per entrypoint
  const openSubmitForm = (e) => setCarInformation(prevState => {
    setIsSubmitForm(true)
    computeTime(carInformation.timeStarted)
    // if (typeof carInformation.plate === 'undefined') {
    //   setHasErrors('ERROR : no plate number input')
    // } 
    if (carInformation.entryPoint === "A") {
      let carResult = {}
      const nearestAvailableParkingSmall = props.parkingSlots.entryPointA.find(nearestSlot => nearestSlot.size == carInformation.size && nearestSlot.availability === true)
      console.log(nearestAvailableParkingSmall)
      // todo : what if Entry point A is full
      if (typeof nearestAvailableParkingSmall === 'undefined') {
        let nearestAvailableParkingMedium = props.parkingSlots.entryPointA.find(nearestSlot => nearestSlot.size  == 'Medium' && nearestSlot.availability === true)
        if (typeof nearestAvailableParkingMedium === 'undefined') {
          let nearestAvailableParkingLarge = props.parkingSlots.entryPointA.find(nearestSlot => nearestSlot.size  == 'Large' && nearestSlot.availability === true)
          if (typeof nearestAvailableParkingLarge === 'undefined') {
            console.error('no parking found now on Entrypoint A')
          } else {
            //save it on large
            console.log('has chosen large', nearestAvailableParkingSmall)
            carResult = nearestAvailableParkingLarge
          }
        } else {
          // save it on medium
          console.log('has chosen medium', nearestAvailableParkingSmall)
          carResult = nearestAvailableParkingMedium
        }
      } else {
        console.log('has chosen small', nearestAvailableParkingSmall)
        carResult = nearestAvailableParkingSmall;
      }
      return {...prevState, name : carResult.name, timeStarted : +Date.now(), availability : false}
    }
    else if (carInformation.entryPoint === "B") {
      let carResult = {}
      const nearestAvailableParkingSmall = props.parkingSlots.entryPointB.find(nearestSlot => nearestSlot.size == carInformation.size && nearestSlot.availability === true)
      console.log(nearestAvailableParkingSmall)
      // todo : what if Entry point A is full
      if (typeof nearestAvailableParkingSmall === 'undefined') {
        let nearestAvailableParkingMedium = props.parkingSlots.entryPointB.find(nearestSlot => nearestSlot.size  == 'Medium' && nearestSlot.availability === true)
        if (typeof nearestAvailableParkingMedium === 'undefined') {
          let nearestAvailableParkingLarge = props.parkingSlots.entryPointB.find(nearestSlot => nearestSlot.size  == 'Large' && nearestSlot.availability === true)
          if (typeof nearestAvailableParkingLarge === 'undefined') {
            console.error('no parking found now on Entrypoint A')
          } else {
            //save it on large
            console.log('has chosen large', nearestAvailableParkingSmall)
            carResult = nearestAvailableParkingLarge
          }
        } else {
          // save it on medium
          console.log('has chosen medium', nearestAvailableParkingSmall)
          carResult = nearestAvailableParkingMedium
        }
      } else {
        console.log('has chosen small', nearestAvailableParkingSmall)
        carResult = nearestAvailableParkingSmall;
      }
      return {...prevState, name : carResult.name, timeStarted : +Date.now()}
    }
    else if (carInformation.entryPoint === "C") {
      let carResult = {}
      const nearestAvailableParkingSmall = props.parkingSlots.entryPointC.find(nearestSlot => nearestSlot.size == carInformation.size && nearestSlot.availability === true)
      console.log(nearestAvailableParkingSmall)
      // todo : what if Entry point A is full
      if (typeof nearestAvailableParkingSmall === 'undefined') {
        let nearestAvailableParkingMedium = props.parkingSlots.entryPointC.find(nearestSlot => nearestSlot.size  == 'Medium' && nearestSlot.availability === true)
        if (typeof nearestAvailableParkingMedium === 'undefined') {
          let nearestAvailableParkingLarge = props.parkingSlots.entryPointC.find(nearestSlot => nearestSlot.size  == 'Large' && nearestSlot.availability === true)
          if (typeof nearestAvailableParkingLarge === 'undefined') {
            console.error('no parking found now on Entrypoint A')
          } else {
            //save it on large
            console.log('has chosen large', nearestAvailableParkingSmall)
            carResult = nearestAvailableParkingLarge
          }
        } else {
          // save it on medium
          console.log('has chosen medium', nearestAvailableParkingSmall)
          carResult = nearestAvailableParkingMedium
        }
      } else {
        console.log('has chosen small', nearestAvailableParkingSmall)
        carResult = nearestAvailableParkingSmall;
      }
      return {...prevState, name : carResult.name, timeStarted : +Date.now()}
    } else {
      console.log('error no entry point')
      setHasErrors('ERROR : no entry point selected');
    }
  })
  const closeSubmitForm = (e) => setCarInformation(prevState => {
    setIsSubmitForm(false)
    return{...prevState, plate: "", size : "", entryPoint : "", timeStarted : "", name : ""}
    })
  const computeTime = (computeTime) => {
    return moment(computeTime).format("hh:mm:ss YYYY-MM-DD")
  }
  const occupySlotA = () => {
      const saveSlot = props.parkingSlots.entryPointA.find(slot => slot.name == carInformation.name)
      const updateEntryPointA = props.parkingSlots.entryPointA.map(slot =>  {
        if (slot.name == saveSlot.name) {
          slot = carInformation
        }
        return slot
      })
      props.setParkingSlots(prevState => {
      const modified = prevState; 
      modified.entryPointA = updateEntryPointA
      return {...prevState, modified}
      })
      setCarInformation(prevState => {
        return{...prevState, plate: "", size : "", entryPoint : "", timeStarted : "", name : "", price : 40}
      })
      setIsSubmitForm(false)
  }
  const occupySlotB = () => {
      const saveSlot = props.parkingSlots.entryPointB.find(slot => slot.name == carInformation.name)
      const updateEntryPointB = props.parkingSlots.entryPointB.map(slot =>  {
        if (slot.name == saveSlot.name) {
          slot = carInformation
        }
        return slot
      })
      props.setParkingSlots(prevState => {
      const modified = prevState; 
      modified.entryPointB = updateEntryPointB
      return {...prevState, modified }
      })
      setCarInformation(prevState => {
        return{...prevState, plate: "", size : "", entryPoint : "", timeStarted : "", name : "", price : 40}
      })
      setIsSubmitForm(false)
  }
  const occupySlotC = () => {
      const saveSlot = props.parkingSlots.entryPointC.find(slot => slot.name == carInformation.name)
      const updateEntryPointC = props.parkingSlots.entryPointC.map(slot =>  {
        if (slot.name == saveSlot.name) {
          slot = carInformation
        }
        return slot
      })
      props.setParkingSlots(prevState => {
      const modified = prevState; 
      modified.entryPointC = updateEntryPointC
      return {...prevState, modified }
      })
      setCarInformation(prevState => {
        return{...prevState, plate: "", size : "", entryPoint : "", timeStarted : "", name : ""}
      })
      setIsSubmitForm(false)
  }
  // const startTime = moment(carInformation.timeStarted
    // const endTime = moment(Date.now())
    // const duration = moment.duration(endTime.diff(startTime))
    // const hours = duration.hours()
    // const minutes = duration.minutes()
    // const seconds = duration.seconds()
    // debugger
    // setDuration(""+ hours  + ":" + minutes + ":" + seconds)
  
  return (
    <div className='parking-slots'>
      { hasErrors && <div style={{height : '30px', backgroundColor : '#fc6567', color : 'white', textAlign : 'center'}}> {hasErrors} </div>}
      <div className='container'>
        <div class="input-field plate-no">
          <textarea id="textarea1" class="materialize-textarea" value={carInformation && carInformation.plate || ""} onChange={handlePlate}></textarea>
            <label for="textarea1">Enter Plate No: </label>
        </div>
        <div className='size'>
          <select class="browser-default" onChange={handleSize} value={carInformation &&  carInformation.size  || ""}>
            <option value="" disabled selected>Select Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className='entry-point'>
          <select class="browser-default" onChange={handleEntryPoint} value={carInformation && carInformation.entryPoint}>
            <option value="" disabled selected>Select Entry Point</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </div>
    </div>
    <div className='button-holder'>
      <a class="waves-effect waves-light btn-small #8bc34a light-green" onClick={openSubmitForm}>Park</a> 
      <Modal show={isSumbmitForm}>
      <div className='submit-form-holder' style={{marginTop : '50px'}}>
      {isSumbmitForm &&
        <div class="card-content">
            <div className='d-flex-row'>
            <div className='width-48per'>
              <div>
                Go to Slot: {carInformation.name}
              </div>
              <div>
                Size: {carInformation && carInformation.size}
              </div>
            </div>
            <div className='width-52per'>
              <div>
                Plate No: {carInformation && carInformation.plate}
              </div>
              <div>
                Time Started: {computeTime(carInformation.time)}
              </div>
            </div>
            </div>
            <div className="d-flex-center pad-top-20">
              <a class="waves-effect waves-light btn-small #b71c1c red darken-4 mar-right-20" onClick={closeSubmitForm}>Cancel</a>
              {carInformation.entryPoint == "A" ?
                <a class="waves-effect waves-light btn-small #8bc34a light-green mar-right-20" onClick={occupySlotA}>Sumbit A</a> 
                : 
                  (carInformation.entryPoint == "B") ? 
                    <a class="waves-effect waves-light btn-small #8bc34a light-green mar-right-20" onClick={occupySlotB}>Sumbit B</a> 
                    :
                    (carInformation.entryPoint == "C") &&
                    <a class="waves-effect waves-light btn-small #8bc34a light-green mar-right-20" onClick={occupySlotC}>Sumbit C</a> 
              }  
            </div>
        </div>
      }
    </div>
      </Modal>

      
    </div>
    
    <div className='slots'>
      <div className='slot-a'>
        <h3 className='text-align-center'> Entry Point A </h3>
        <div className='slot'>
          <CardA parkingSlots={props.parkingSlots} setParkingSlots={props.setParkingSlots}/>
        </div>
      </div>
      <div className='slot-b'>
        <h3 className='text-align-center'> Entry Point B </h3>
        <div className='slot'>
          <CardB parkingSlots={props.parkingSlots} setParkingSlots={props.setParkingSlots}/>
        </div>
      </div>
      <div className='slot-c'>
        <div className='slot'>
          <h3 className='text-align-center'> Entry Point C </h3>
          <CardC parkingSlots={props.parkingSlots} setParkingSlots={props.setParkingSlots}/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ParkingSlots
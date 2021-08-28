import './RegisterForm.css'
import RegisterFormData from './data/RegisterFormData'
import { register } from 'react-scroll/modules/mixins/scroller'

export const RegisterForm = () => {

  const mapGroups = RegisterFormData.groups.map((item) => {
    return (
      <option value={item} key={item}>
        {item}
      </option>
    )
  })

  return (
    <form action="">
      <label htmlFor="">{RegisterFormData.name}<input name="name" type="text" placeholder={RegisterFormData.placeholderName}></input></label>

      <label htmlFor="">{RegisterFormData.personNumber}<input required name="personNumber" type="text" placeholder={RegisterFormData.placeholderPersonNumber}></input></label>

      <label htmlFor="">{RegisterFormData.phone}<input required name="phone" type="text" placeholder={RegisterFormData.placeholderPhone}></input></label>

      <label htmlFor="">{RegisterFormData.email}<input required name="email" type="text" placeholder={RegisterFormData.placeholderEmail}></input></label>

      <label htmlFor="">{RegisterFormData.adress}<input required name="adress" type="text" placeholder={RegisterFormData.placeholderAdress}></input></label>

      <label htmlFor="">{RegisterFormData.zipCode}<input required name="zipCode" type="text" placeholder={RegisterFormData.placeholderZipCode}></input></label>

      <label htmlFor="">{RegisterFormData.city}<input required name="city" type="text" placeholder={RegisterFormData.placeholderCity}></input></label>

      <div className="margin-10vw-auto"></div>

      <p>{RegisterFormData.children}</p>

      <label htmlFor="">{RegisterFormData.parent}<input name="parent" type="text" placeholder={RegisterFormData.placeholderName} className=""></input></label>

      <label htmlFor="">{RegisterFormData.parentPhone}<input name="parentPhone" type="text" placeholder={RegisterFormData.placeholderPhone}></input></label>

      {/* <div className="margin-10vw-auto"></div> */}

      <label htmlFor="">
        {RegisterFormData.choseGroup}
        <select name="selectGroup" id="select-group" className="select-group  font-grey">
          {mapGroups}
        </select>
      </label>

      <div className="register-form-checkboxes">
        <label htmlFor="" className="row-1"><input type="checkbox" name="accept-gdpr" id="acceptGDPR" required /><p>{RegisterFormData.acceptGDPR}</p></label>
        <label htmlFor=""><input type="checkbox" name="acceptPolicy" id="accept-policy" required /><p>{RegisterFormData.acceptPolicy}</p></label>
      </div>

      {/* <div className="margin-10vw-auto"></div> */}

      <div className="margin-10vw-auto"></div>

      <div className="register-form-button-wrapper">
        <button type="submit">{RegisterFormData.send}</button>
        <button type="reset">{RegisterFormData.reset}</button>
      </div>
    </form>
  )
}

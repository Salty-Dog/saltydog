import React, { Component } from 'react'
import './index.js'

import Data from '../Data.js'
import User from '../User.js'

export default class Proposal extends Component {
  render() {
    return (
      <div className="proposal">
        <h2>Your Personalized Proposal</h2>
        <p>
          Email: {User.email}
        </p>
        <div className="eventDetails">
          <p>
            Guest Count: {Data.guestCount}
          </p>
          <h4>Do you have a venue?</h4>
          <p>
            {Data.venue}
          </p>
          <h4>Event Details</h4>
          <p>
            Date: {Data.eventDate}
          </p>
          <p>
            Time of Day: {Data.eventTime}
          </p>
        </div>
        <div className="cateringDetails">
          <h4>Catering Details</h4>
          <p>
            Beer/ Wine Service: {Data.beerWineService}
          </p>
          <p>
            Full Bar: {Data.fullBar}
          </p>
          <p>
            Passed Hors D'oeuvres: {Data.passedOrderves}
          </p>
          <p>
            Chef Attended Stations: {Data.chefAttendedStations}
          </p>
          <p>
            Plated Dinner: {Data.platedDinner}
          </p>
          <p>
            Buffet Dinner: {Data.buffetDinner}
          </p>
          <p>
            Individual Desserts: {Data.individualDesserts}
          </p>
        </div>
        <div className="rentalServices">
          <p>
            Essential Rental Services: {Data.essentialRentalServices}
          </p>
          <p>
            Premium Rental Services: {Data.premiumRentalServices}
          </p>
        </div>
        <h2>
          Your Current Quote: <strong>$45,450</strong>
        </h2>
      </div>
    )
  }
}

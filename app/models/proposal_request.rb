class ProposalRequest < ApplicationRecord
  after_create :transmitter

  def transmitter
    session = Capybara::Session.new(:poltergeist)

    session.visit "http://saltblockhospitality.com/intake-form-plan/"

    session.fill_in('field44589333', with: self.request.email)

    session.fill_in('field44589331-first', with: self.request.name)
    session.fill_in('field44589331-last', with: self.request.lastname)
    session.fill_in('field44589332', with: self.request.phone)
    session.fill_in('field44589333', with: self.request.email)

    time = self.request.time

    session.select('12', from: 'field52854717H')
    session.select('00', from: 'field52854717I')
    session.select('PM', from: 'field52854717A')

    session.fill_in('field44589335', with: self.request.location)
    session.fill_in('field44589337', with: self.request.party_size)
    session.fill_in('field44589338', with: self.request.occasion)

    session.check('Bar Services')
    session.check('Event Design')
    session.check('Rentals')

    session.execute_script("document.querySelector('.fsSubmitButton').click()")
  end
end

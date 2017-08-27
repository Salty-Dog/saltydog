require 'capybara'
require 'phantomjs'
require 'capybara/poltergeist'

def transmitter(data)

session = Capybara::Session.new(:poltergeist)

session.visit "http://saltblockhospitality.com/intake-form-plan/"

session.fill_in('field44589333', with: data.request.email)

session.fill_in('field44589331-first', with: data.request.name)
session.fill_in('field44589331-last', with: data.request.lastname)
session.fill_in('field44589332', with: data.request.phone
session.fill_in('field44589333', with: data.request.email)

time = data.request.time

session.select('12', from: 'field52854717H')
session.select('00', from: 'field52854717I')
session.select('PM', from: 'field52854717A')

session.fill_in('field44589335', with: data.request.location)
session.fill_in('field44589337', with: data.request.party_size)
session.fill_in('field44589338', with: data.request.occasion)

session.check('Bar Services')
session.check('Event Design')
session.check('Rentals')

session.execute_script("document.querySelector('.fsSubmitButton').click()")

# # sleep 1
# session.save_and_open_screenshot('response.png', full: true)
#
# if session.has_content?("Thank you")
#   puts "Submitted"
# else
#   puts "Error"
# end

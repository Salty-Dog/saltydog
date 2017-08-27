require 'capybara'
require 'phantomjs'
require 'capybara/poltergeist'

session = Capybara::Session.new(:poltergeist)

session.visit "http://saltblockhospitality.com/intake-form-plan/"

session.fill_in('field44589333', with: 'foo@example.com')

session.fill_in('field44589331-first', with: 'bob')
session.fill_in('field44589331-last', with: 'jones')
session.fill_in('field44589332', with: '(813) 555-1212')
session.fill_in('field44589333', with: 'bob@example.com')

session.select('12', from: 'field52854717H')
session.select('00', from: 'field52854717I')
session.select('PM', from: 'field52854717A')

session.fill_in('field44589335', with: 'a')
session.fill_in('field44589337', with: '20')
session.fill_in('field44589338', with: 'b')

session.check('Bar Services')
session.check('Event Design')
session.check('Rentals')

session.execute_script("document.querySelector('.fsSubmitButton').click()")

# if session.has_content?("Thank you")
#   puts "Submitted"
# else
#   puts "Error"
# end
#
# sleep 1
# session.save_and_open_screenshot('response.png', full: true) 

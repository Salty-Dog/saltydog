require 'test_helper'

class ProposalRequestsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get proposal_requests_create_url
    assert_response :success
  end

end

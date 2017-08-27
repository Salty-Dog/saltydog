class ProposalRequestsController < ApiController
  def create
    

    @proposal_request = ProposalRequest.new(request: request.body)

    if @proposal_request.save
      render json: @proposal_request.to_json
    end
  end
end

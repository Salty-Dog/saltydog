require_relative './models/proposal_requests'
require 'json'

file = File.read('Data.json')

data_hash = JSON.parse(file)

ProposalRequest.create(request: data_hash)

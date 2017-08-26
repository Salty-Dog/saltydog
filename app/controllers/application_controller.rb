class ApplicationController < ActionController::Base
  protect_from_forgery

  def fallback_index_html
    puts "***********Hit Fallback Route*************"
    render file: 'public/index.html'
  end
end

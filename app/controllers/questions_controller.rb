class QuestionsController < ApplicationController

  def index
    @questions = Question.all.includes(:answer_options).all

    render json: @questions.to_json
  end
end

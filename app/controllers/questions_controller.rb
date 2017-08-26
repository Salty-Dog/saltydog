class QuestionsController < ApplicationController

  def index
    @questions = Question.all.includes(:answer_options).all



    render json: @questions.to_json(include: { answer_options: { only: [:option, :low, :high] }

                                             })
  end

  def show
    @question = Question.find(params[:id])

    render json: @question.to_json(include: { answer_options: { only: [:option, :low, :high] }

                                            })
  end
end

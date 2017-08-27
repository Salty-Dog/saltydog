if Rails.env == "development"
  puts "Reset Database"
  Rake::Task['db:migrate:reset'].invoke
end

AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?

COUNT = 10

puts "making questions"
questions = []
COUNT.times do |n|
  questions << Question.create(body: "#{Faker::Hipster.words(3).join(" ")}?",
                               order: n)
end

puts "making answer_options"
questions.each_with_index do |question, index|
  optionCount = index < 5 ? 2 : 3
  optionCount.times do
    question.answer_options.build(option: Faker::Hipster.words(2).join(" "),
                                low: index + 1,
                                high: index + 3).save
  end
end

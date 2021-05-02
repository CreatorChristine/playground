uni_orientation_arr = ['check closing date for accepting assessment entry forms and fees (Assessment Centre) - 2+ months before London deadline', 'download TalkCampus', 'contact Assessment Center to find location, fees, and exam date', 'read statutes, ordinances, and regulations']

uni_quality_check = ['check what shows on the diploma', 'check transfer process with Goldsmiths']

puts 'orientation check'
uni_orientation_arr.each_with_index do |task, index|
    puts "#{index + 1}. #{task}"
end

puts ''
puts 'quality check'
uni_quality_check.each_with_index do |task, index|
    puts "#{index + 1}. #{task}"
end


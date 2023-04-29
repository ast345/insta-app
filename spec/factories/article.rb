FactoryBot.define do
	factory :article do
		sentence {Faker::Lorem.characters(number: 30)}

        after(:build) do |article|
            article.photos.attach(io: File.open('spec/fixtures/files/IMG_1016.JPG'), filename: 'IMG_1016.JPG', content_type: 'image/jpg')
        end
	end
end
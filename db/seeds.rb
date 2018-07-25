# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Tribe.destroy_all
User.destroy_all

stanley = User.create(username: "stanley",  password: "stanley001")

druids = Tribe.create(tribe_name: "Druids", body_paint: "yellow", crest: "http://www.createmepink.com/wp-content/uploads/st/thumb-stock-illustration-vector-bull-cow-skull-horns-texas-themed-logo-image.jpg", village: "southgate E-5")

Character.create(user_id: stanley.id, tribe_id: druids.id, character_name: "cratum", status: "peasant", weapon: "http://flyff-wiki.webzen.com/images/0/04/Angels_Sword.png", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyKAbEHNaAP6Iawo470QXix-miB6iA9ufV39Rj7t3ufYj1ujKH")

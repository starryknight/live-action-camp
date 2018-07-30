# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Tribe.destroy_all
User.destroy_all
Character.destroy_all

stanley = User.create(username: "stanley",  password: "stanley001")
mwai = User.create(username: "Mwai",  password: "mwai001")
school = User.create(username: "School",  password: "school001")

druids = Tribe.create(tribe_name: "Druids", body_paint: "yellow", crest: "http://www.createmepink.com/wp-content/uploads/st/thumb-stock-illustration-vector-bull-cow-skull-horns-texas-themed-logo-image.jpg", village: "southgate E-5")
drogaans = Tribe.create(tribe_name: "drogaans", body_paint: "red", crest: "http://1.bp.blogspot.com/-TMfcZCt5_NY/TaWnGLhI64I/AAAAAAAAF-0/KzpXdpwDQmU/s1600/Targaryen-logo.gif", village: "southgate E-4")
sloths = Tribe.create(tribe_name: "sloths", body_paint: "blue", crest: "https://images-na.ssl-images-amazon.com/images/I/41yYu0ji5GL._SX355_.jpg", village: "North field")

Character.create(user_id: stanley.id, tribe_id: druids.id, character_name: "cratum", status: "peasant", weapon: "http://flyff-wiki.webzen.com/images/0/04/Angels_Sword.png", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyKAbEHNaAP6Iawo470QXix-miB6iA9ufV39Rj7t3ufYj1ujKH")
Character.create(user_id: stanley.id, tribe_id: drogaans.id, character_name: "skull", status: "peasant", weapon: "http://flyff-wiki.webzen.com/images/0/04/Angels_Sword.png", avatar: "https://img.zergnet.com/2987435_300.jpg")
Character.create(user_id: mwai.id, tribe_id: druids.id, character_name: "mambama", status: "peasant", weapon: "http://flyff-wiki.webzen.com/images/0/04/Angels_Sword.png", avatar: "https://www.crownpaints.co.ke/blog/wp-content/uploads/2012/08/face-painted-kikuyu-woman-300x300.jpg")
Character.create(user_id: school.id, tribe_id: sloths.id, character_name: "grownkid", status: "king", weapon: "http://flyff-wiki.webzen.com/images/0/04/Angels_Sword.png", avatar: "https://render.fineartamerica.com/images/rendered/search/print/images/artworkimages/medium/1/sloth-taylan-apukovska.jpg")

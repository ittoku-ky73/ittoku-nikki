# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Post.create!([
    {
        title: 'Next.js + Ruby on Rails + Dockerでブログサイトを作る'
    },
    {
        title: 'Reactはよくわからない'
    },
    {
        title: 'Ruby on Railsなら多少わかる'
    },
    {
        title: 'TailwindCSSは使わない'
    }
]);

# app.rb
require 'sinatra'
require 'sinatra/activerecord'

# Configure database connection
set :database, { adapter: "sqlite3", database: "todo_app.db" }

# Models
class Todo < ActiveRecord::Base
  belongs_to :category
end

class Category < ActiveRecord::Base
  has_many :todos
end

# API routes
get '/todos' do
  todos = Todo.all
  todos.to_json
end

post '/todos' do
  todo = Todo.create(params[:todo])
  todo.to_json
end

put '/todos/:id' do |id|
  todo = Todo.find_by(id: id)
  todo.update(params[:todo])
  todo.to_json
end

delete '/todos/:id' do |id|
  todo = Todo.find_by(id: id)
  todo.destroy
end

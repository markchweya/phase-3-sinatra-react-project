class CategoriesController < ApplicationController
    get '/categories' do
      categories = Category.all
      categories.to_json
    end
  
  
    post '/categories' do
      category = Category.new(params)
      if category.save
        { message: 'Category created successfully!' }.to_json
      else
        { error: 'Error creating category' }.to_json
      end
    end
  
    delete '/categories/:id' do
      category = Category.find_by(id: params[:id])
      if category
        category.destroy
        { message: 'Category deleted successfully!' }.to_json
      else
        { error: 'Category not found' }.to_json
      end
    end
  
    patch '/categories/:id' do
      category = Category.find_by(id: params[:id])
      if category
        if category.update(params)
          { message: 'Category updated successfully!' }.to_json
        else
          { error: 'Error updating category' }.to_json
        end
      else
        { error: 'Category not found' }.to_json
      end
    end
  
    get '/categories/:id' do
      category = Category.find_by(id: params[:id])
      if category
        
        category.to_json
      else
        { error: 'Category not found' }.to_json
      end
    end
  end
  
  # / get contacts -- get request
  # /add --> add contacts -- Post Request
  # /update/:id --> edit a contact
  #  /delete/:id --> delete a contact
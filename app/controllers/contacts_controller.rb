class ContactsController < ApplicationController

    get "/contacts" do
      contacts = Contact.all
      contacts.to_json
    end
  
  
  
    get '/contacts/:id' do
      contact = Contact.find_by(id: params[:id])
      if contact
        contact.to_json
      else
        { error: 'Contact not found' }.to_json
      end
    end
  
  
    delete '/contacts/:id' do
      contact = Contact.find_by(id: params[:id])
      if contact && contact.destroy
        { message: 'Contact deleted successfully!' }.to_json
      else
        { error: 'Error deleting contact' }.to_json
      end
    end
  
  
    patch '/contacts/:id' do
      contact = Contact.find_by(id: params[:id])
      if contact && contact.update(params)
        { message: 'Contact updated successfully!' }.to_json
      else
        { error: 'Error updating contact' }.to_json
      end
    end
  
    post '/contacts' do
      contact = Contact.new(params)
      if contact.save
        { message: 'Contact created successfully!' }.to_json
      else
        { error: 'Error creating contact' }.to_json
      end
    end
  end
require_relative './application_controller.rb'

class AddressesController < ApplicationController

  get '/addresses' do
    addresses = Address.all
    addresses.to_json
  end

  get '/addresses/:id' do
    address = Address.find_by(id: params[:id])
    if address
      address.to_json
    else
      { error: 'Address not found' }.to_json
    end
  end

  post '/addresses' do
    address = Address.new(params)
    if address.save
      { message: 'Address created successfully!' }.to_json
    else
      { error: 'Error creating address' }.to_json
    end
  end
end
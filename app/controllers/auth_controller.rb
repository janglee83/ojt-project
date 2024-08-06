class AuthController < ApplicationController
  include ResponseHelper
  def index
    response_handler = ResponseHandler.new(nil, format: :inertia, component: 'auth/AuthLogin')
    formatted_response = response_handler.format
    response_inertia formatted_response
  end

  def signUp
    response_handler = ResponseHandler.new(nil, format: :inertia, component: 'auth/AuthSignUp')
    formatted_response = response_handler.format
    response_inertia formatted_response
  end
end

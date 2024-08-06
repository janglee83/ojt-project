# frozen_string_literal: true
module Api
  class AuthController < ApplicationController
    before_action :find_user, only: :login
    rescue_from ActiveRecord::RecordNotFound, with: :handle_record_not_found

    def login
      if @user&.authenticate(login_params[:password])
        @token = encode_token(user_id: @user.id)
        render json: { token: @token }, status: :ok
      else
        render json: { message: 'Invalid credentials' }, status: :unauthorized
      end
    end

    def sign_up
      # Implement sign-up logic here
    end

    private

    def find_user
      @user = User.find_by(email: login_params[:email])
      raise ActiveRecord::RecordNotFound unless @user
    end

    def login_params
      params.require(:auth).permit(:email, :password)
    end

    def handle_record_not_found
      return unless request.format.json?

      render json: { message: "User doesn't exist" }, status: :unauthorized
    end
  end
end

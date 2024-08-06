# frozen_string_literal: true

class ApplicationController < ActionController::Base
  def encode_token(payload)
    JWT.encode(payload, ENV['TOKEN_SECRET'])
  end

  def decoded_token
    header = request.headers['Authorization']
    return unless header

    token = header.split(' ')[1]
    begin
      JWT.decode(token, ENV['TOKEN_SECRET'], true, algorithm: 'HS256')
    rescue JWT::DecodeError
      nil
    end
  end

  def current_user
    return unless decoded_token

    user_id = decoded_token[0]['user_id']
    @user = User.find_by(id: user_id)

  end

  def authorized
    return unless current_user.nil?
    return unless request.format.json?

    render json: { message: 'Please log in' }, status: :unauthorized
  end
end

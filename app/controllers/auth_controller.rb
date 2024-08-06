class AuthController < ApplicationController
  def index
    render inertia: 'auth/AuthLogin'
  end

  def signUp
    render inertia: 'auth/AuthSignUp'
  end
end

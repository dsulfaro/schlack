class Api::SessionsController < ApplicationController

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if user.nil?
      render json: "Invalid Credentials"
    else
      login!(user)
      redirect_to user_url(user)
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!(@user)
      render: json {}
    else
      render json: ["Nobody signed in"], status: 404
    end
  end

end

# $.ajax({
#   method: 'POST',
#   url: '/api/users',
#   data: {username: 'dsulfaro', password: '123456', fname: 'dan', lname: 'sulfaro'},
#   success: data => console.log(data),
#   error: err => console.log(data)
#   })

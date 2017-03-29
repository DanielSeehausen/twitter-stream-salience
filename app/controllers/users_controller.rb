class UsersController < ActionController::Base
  protect_from_forgery with: :exception

  def show
    user_id = params[:twitter_handle]
    user_obj = $client.user('realDonaldTrump')
    

  end

end

Rails.application.routes.draw do

  get '/users/:twitter_handle/show', to: "users#show"

end

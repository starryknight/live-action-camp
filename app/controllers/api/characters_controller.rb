class Api::CharactersController < ApplicationController
  def index
      if params[:user_id]
          @user = User.find(params[:user_id])
          @characters = @user.characters
          render json: @characters
      else
          @tribe = Tribe.find(params[:tribe_id])
          @characters = @tribe.characters
          render json: @characters
      end
  end

  def create
    @tribe = Tribe.find(params[:tribe_id])
#   @character = @tribe.characters.create(character_params) 
    @character = Character.create!(character_params)

    render json: @character
  end
  
  def show
  @character = Character.find(params[:id])
  render json: @character
  end

  def update
  @character = Character.find(params[:id])
  @character.update!(character_params)

  render json: @character
  end
  
  def destroy
  @character = Character.find(params[:id]).destroy
  render status: :ok
  end
  
  private
  
  def character_params
      params.require(:character).permit(:character_name, :status, :weapon, :avatar, :tribe_id).merge(user_id: params[:user_id])
  end
end
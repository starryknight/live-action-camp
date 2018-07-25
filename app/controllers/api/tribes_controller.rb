class Api::TribesController < ApplicationController
    def index
    @tribes = tribe.all
    render json: @tribes
    end

    def show
    @tribe = Tribe.find(params[:id])
    render json: @tribe
    end
    
end
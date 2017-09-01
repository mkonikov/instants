class Api::MessagesController < ApplicationController

  def create

    @message = Message.new(message_params)
    @message.author = current_user

    if @message.save
      ActionCable.server.broadcast "direct_messages_#{@message.recipient_id}",
                               content:  message.body
     end
end


  end

  private

  def message_params
    params.permit(:message).require(:recipient_id, :body)
  end
end

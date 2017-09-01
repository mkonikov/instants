class DmChannel < ApplicationCable::Channel
  def subscribed
    stream_from "direct_messages_#{params[:recipient_id]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end

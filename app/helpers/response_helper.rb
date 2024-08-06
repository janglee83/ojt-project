module ResponseHelper
  def response_inertia(formatted_response)
    render inertia: formatted_response[:component], props: formatted_response[:props]
  end
end

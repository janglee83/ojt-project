# frozen_string_literal: true

class ResponseHandler
  def initialize(data, options = {})
    @data = data
    @options = options
  end

  def format
    case @options[:format]
    when :json
      format_json
    when :inertia
      format_inertia
    else
      format_default
    end
  end

  private

  def format_json
    @data.as_json
  end

  def format_inertia
    {
      component: @options[:component],
      props: @data
    }
  end

  def format_default
    @data.to_s
  end
end

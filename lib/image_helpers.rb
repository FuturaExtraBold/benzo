module ImageHelpers

  def srcset_image_tag(options={})
    "<img class='#{options[:class]}' srcset='#{options[:url]}@2x.#{options[:type]} 2x' src='#{options[:url]}.#{options[:type]}' alt='#{options[:alt]}' data-index='#{options[:index]}'>"
  end

  def srcset_image_tag_with_type(options={})
    "<img class='#{options[:class]}' srcset='#{options[:retina_image]} 2x' src='#{options[:regular_image]}' alt='#{options[:alt]}'>"
  end

end

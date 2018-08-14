module ImageHelpers

  def srcset_image_tag_lazy_load(options={})
    "<img class='#{options[:class]}' srcset='' data-srcset='#{options[:url]}@2x.#{options[:type]} 2x' src='' data-src='#{options[:url]}.#{options[:type]}' alt='#{options[:alt]}' data-index='#{options[:index]}'>"
  end

end

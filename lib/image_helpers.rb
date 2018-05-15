module ImageHelpers

  def srcset_image_tag(options={})
    "<img class='#{options[:class]}' srcset='#{options[:url]}@2x.#{options[:type]} 2x, #{options[:url]}.#{options[:type]} 1x' src='#{options[:url]}.#{options[:type]}' alt='#{options[:alt]}' data-index='#{options[:index]}'>"
  end

  def srcset_image_tag_with_type(options={})
    "<img class='#{options[:class]}' srcset='#{options[:retina_image]} 2x, #{options[:regular_image]} 1x' src='#{options[:regular_image]}' alt='#{options[:alt]}'>"
  end

  def retina_background_image(options={})
    "background-image: url(#{options[:regular_image]});
     @media only screen and (-webkit-min-device-pixel-ratio: 2),
            only screen and (min--moz-device-pixel-ratio: 2),
            only screen and (-o-min-device-pixel-ratio: 2/1),
            only screen and (min-device-pixel-ratio: 2),
            only screen and (min-resolution: 192dpi),
            only screen and (min-resolution: 2dppx) {
              background-image: url(#{options[:retina_image]});
            }"
  end

end

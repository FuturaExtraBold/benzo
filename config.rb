require "lib/image_helpers"

helpers ImageHelpers

helpers do
  def custom_page_classes
    if yield_content(:page_classes) != nil
      page_classes.gsub("_", "-") + " " + yield_content(:page_classes)
    else
      page_classes.gsub("_", "-")
    end
  end
end

page "/*.xml", layout: false
page "/*.json", layout: false
page "/*.txt", layout: false

activate :directory_indexes
activate :asset_hash

# Root templates
%w[
  index
  overwatch
  wow
].each_with_index do |name|
  proxy "/#{name}.html", "/templates/root/#{name}.html", ignore: true
end

# Development
configure :development do
  set :canonical, "http://localhost:4567"
end

configure :build do
  set :canonical, "https://benhays.me"
  activate :minify_css
  activate :minify_javascript
  activate :gzip
  activate :autoprefixer do |config|
    config.browsers = ["last 3 versions", "Explorer >= 10"]
  end
end

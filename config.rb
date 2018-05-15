page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

activate :asset_hash
activate :directory_indexes
activate :sprockets

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :gzip
  activate :autoprefixer do |config|
    config.browsers = ['last 3 versions', 'Explorer >= 10']
  end
end

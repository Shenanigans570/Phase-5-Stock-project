class Favorite < ApplicationRecord
  belongs_to :investor
  belongs_to :stock
end

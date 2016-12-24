class User < ApplicationRecord

  validates :password_digest, presence: true
  validates :session_token, presence: true, uniqueness: true
  validates :username, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :fname, :lname, presence: true
end

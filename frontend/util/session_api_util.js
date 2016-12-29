export const signup = (user, success, error) => {(
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {user},
    success: success,
    error: error
  })
)};

export const login = (user, success, error) => {(
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {user},
    success: success,
    error: error
  })
)};

export const logout = (error) => {(
  $.ajax({
    method: 'DELETE',
    url: '/api/session',
    error: error
  })
)};

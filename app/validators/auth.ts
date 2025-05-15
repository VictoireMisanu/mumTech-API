import vine from '@vinejs/vine'

const password = vine.string().minLength(8)

export const createAccountValidator = vine.compile(
  vine.object({
  
    user_name: vine.string(),
    user_firstname: vine.string(),
    user_email: vine.string().email().normalizeEmail(),
    user_password: password
  
  })
)

export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().email().normalizeEmail(),
    password,
  })
)

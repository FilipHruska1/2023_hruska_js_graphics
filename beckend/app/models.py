from pydantic import BaseModel

class User(BaseModel):
    id: int
    email: str
    hashed_password: str
    disabled: bool
    levels: int

class FormData(BaseModel):
    email: str
    plainpassword: str

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: str
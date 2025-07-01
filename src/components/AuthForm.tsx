import React from 'react'

interface AuthFormProps {
  title: string
  children?: React.ReactNode
}

const AuthForm: React.FC<AuthFormProps> = ({ title, children }) => (
  <div className="max-w-md mx-auto bg-white rounded-lg shadow p-8 mt-12">
    <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
    {children}
  </div>
)

export default AuthForm 
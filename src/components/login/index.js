import { useState } from 'react'
import { useNavigate } from 'react-router'
import { client, setTokenInHeaders } from '../../service'
import './style.css'
import { useTranslation } from 'react-i18next'

export const Login = () => {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mentorName, setMentorName] = useState('')
  const navigate = useNavigate()

  const handleChangeEmail = ({ target }) => {
    setEmail(target.value)
  }

  const handleChangePassword = ({ target }) => {
    setPassword(target.value)
  }

  const handleChangeMentorName = ({ target }) => {
    setMentorName(target.value)
    localStorage.setItem('mentorName', target.value)
  }

  const handlerClick = async (event) => {
    event.preventDefault()
    const user = {
      email, password
    }

    if (email === '' || email === undefined || password === '' || password === undefined) {
      return alert(t('login.fillAlert'))
    }

    try {
      const response = await client.post('/login', user)
      const { data: { accessToken, user: { role } } } = response

      if (accessToken) {
        localStorage.setItem('token', accessToken)
        localStorage.setItem('role', role)
        setTokenInHeaders(accessToken)
        navigate('/hiring-process')
      }
    } catch (error) {
      console.log(error)
      alert(t('login.userPwdAlert'))
    }
  }

  return (
    <div className="login-form">
      <div>
        <label>
          <input onChange={handleChangeEmail} value={email} type="email" placeholder="Email@email.com"></input>
        </label>
        <label>
          <input onChange={handleChangePassword} value={password} type="password" placeholder={t('login.password')}></input>
        </label>
        <label>
          <input onChange={handleChangeMentorName} value={mentorName} type="text" placeholder={t('login.mentorName')}></input>
        </label>
      </div>
      <button onClick={handlerClick}>{t('login.loginButton')}</button>
    </div>
  )
}

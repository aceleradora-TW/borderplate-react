import { React, useState } from 'react'
import Select from '../../../../components/select'

export const Score = () => {
  // const score = {
  //   score
  // }
  const handleSubmit = () => {
    const id = exercise.evaluation.id
    client.patch(`evaluation/${id}`, evaluation)
    alert('Atualizado com sucesso!')
    history.back()
  }

  const handleTextArea = (event) => {
    setFeedback(event.target.value)
  }

  const [setScore] = useState('')
  const handleScore = (event) => {
    setScore(event.target.value)
  }

  return (
    <div className="form-group">
      < Select
        label="Nota:"
        placeholder="Escolha uma nota"
        onChange={handleScore}
        options={
          [
            { label: 0, value: 0 },
            { label: 1, value: 1 },
            { label: 2, value: 2 },
            { label: 3, value: 3 },
            { label: 4, value: 4 },
            { label: 5, value: 5 }
          ]} ></Select >

      <textarea label="mensagem" className="form-control" id="message-text" onChange={handleTextArea} ></textarea>
      <PrimaryButton text="Enviar avaliação" onClick={handleSubmit} />
    </div>
  )
}

import { React, useState } from 'react'
import Select from '../../../../components/select'
import { client } from '../../../../service'
import SucessButton from '../../../../components/buttons/sucess'

export const Type = () => {
  const [exerciseType, setExerciseType] = useState()
  const [exerciseTypeSelected, setExerciseTypeSelected] = useState(false)
  const [setDisableEvaluationButton] = useState(true)

  const id = window.location.pathname.split('/')[2]

  const handleTypeSubmit = () => {
    client.patch(`exercise/${id}`, { type: exerciseType })
  }

  return (

    <div className='select-container'>
      <Select
        onChange={({ target }) => {
          setExerciseType(target.value)
          setExerciseTypeSelected(true)
        }}
        label="Tipo:"
        placeholder="Escolha uma opção"
        options={[
          { label: 'Backend', value: 'Backend' },
          { label: 'Frontend', value: 'Frontend' },
          { label: 'Fullstack', value: 'Fullstack' }
        ]} />

      {exerciseTypeSelected
        ? <SucessButton text="Alterar" onClick={() => {
          setExerciseTypeSelected(false)
          setDisableEvaluationButton(false)
          handleTypeSubmit()
          alert('Alterado com sucesso!')
        }} />
        : null}
    </div>

  )
}

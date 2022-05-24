import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Modal } from '../../../../components/modal'
// import { buttonStyle } from './style'

export const RegisterModal = () => {
  return (
    <div>
      <Modal
        icon={faPlus}
        label="Importar"
        title='Cadastrar nova mentora'
        classe='button primary'
        text='Cadastrar uma nova mentora'

      />
    </div>
  )
}

/* <form>
      <InputText name="name" label={t('hiringProcess.form.name')} onChange={handleChange} />
      <InputDate name="startDate" label={t('hiringProcess.form.startDate')} onChange={handleChange} />
      <InputDate name="endDate" label={t('hiringProcess.form.endDate')} onChange={handleChange} />
      <InputText name="description" label={t('hiringProcess.form.description')} onChange={handleChange} />
      <PrimaryButton text={t('hiringProcess.form.submitButton')} onClick={sendHiringProcess}>
        Enviar
      </PrimaryButton>
    </form>
*/

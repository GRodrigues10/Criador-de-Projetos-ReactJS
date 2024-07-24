import Input from '../Form/Input';
import Select from '../Form/Select';
import SubmitButton from '../Form/SubmitButton';
import styles from './ProjectForm.module.css'

function ProjectForm({btnText}){
    return(<>

                <form className={styles.form}>

                    <Input type='text' text='Nome do projeto' name='name' placeholder='Insira o nome do projeto...'/>


                    <Input type='number' text='Orçamento do Projeto' name='budget' placeholder='Insira o valor total...'/>

                    <Select text='Selecione a Categoria' name='category_id'/>

                    <SubmitButton text={btnText}/>

                </form>

           </>)
}

export default ProjectForm;
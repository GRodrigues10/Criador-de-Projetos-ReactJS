function ProjectForm(){
    return(<>

                <form>

                    <div><input type="text" placeholder="Insira um nome para o projeto..." /></div>
                    <div><input type="number" placeholder="Insira o orçamento total..." /></div>
                    <div>
                        <select name="category_id" id="">
                            <option disabled>Selecione a Categoria</option>
                        </select>
                    </div>

                    <div><input type="submit" value='Criar Projeto' /></div>

                </form>

           </>)
}

export default ProjectForm;
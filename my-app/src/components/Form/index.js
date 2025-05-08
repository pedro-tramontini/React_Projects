import styles from "./Form.module.css"
import Category, {categories} from "../Category"
import { useState } from "react";

function Form() {
    const [ url, setUrl ] = useState('')    
    const [ category, setCategory ] = useState('')    
    const [ videos, setVideos ] = useState([])
    const [ errors, setErrors] = useState('')

    function valideUrl(url) {
        const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/

        if(!regex.test(url) || url.length < 43) {
            setErrors('ERRO: URL inválida')
            return false
        } else {
            return url.substring(32, 43)
        }
    }


    function onSave(e) {
        e.preventDefault();
        
        //validar Category
        if(!category || category === '-') {
            setErrors('ERRO: Escolha uma categoria')
            return
        } else {
            setErrors('')            
        }
        
        //validar URL
        const urlVideo = valideUrl(url)
        if(urlVideo && category) {
            //salvar os dados
             // guardar a url e a category
        const newVideo = {url, category}
        setVideos([...videos, newVideo])
        localStorage.setItem('videos', JSON.stringify([...videos, newVideo]))
        // limpar o formulário
        setUrl('')
        setCategory('')
        } else {
            setErrors('ERRO: URL inválida')
        }
    }

    return(
        <section className={styles.container}>
            <h2>Cadastro de vídeo</h2>
            <form onSubmit={onSave}>
                <div>
                    <label>URL do vídeo</label>
                    <input 
                        type="text"
                        placeholder="Digite a URL do vídeo..."
                        required="required"
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                        minLength="43"
                        maxLength="43"
                    />
                </div>
                <div>
                    <label>Categoria</label>
                    <select
                        required="required"
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                    
                    >
                    <option value="-">Selecionar Categoria</option>
                    {categories.map(item => (<option value={item}>{item}</option>))}
                    </select>

                </div>
                <div>
                    <button>Cadastrar</button>
                </div>

                {errors ? <div className={styles.erro}> <span>{errors}</span></div> : null}

                {/* <div className={styles.erro}>
                    { errors }
                </div> */}
            </form>
        </section>
        
    );
}

export default Form;
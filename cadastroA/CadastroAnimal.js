import styles from './CadastroAnimal.css';

function App(){
    return (
        <section className={styles.container}>
            <h2>Cadastro de Animal</h2>
            <form>
                <div>
                    <label>Nome do tutor</label>
                    <input
                        type="text"
                        placeholder="Digite o nome completo"
                        required="required" 
                    />
                </div>
                <div>
                    <label>Tipo do animal</label>
                    <select id="tipoAnimal">
                        <option value="-">Selecione o tipo do animal</option>
                        <option value="-">Cachorro</option>
                        <option value="-">Gato</option>
                    </select>
                </div>
                <div>
                    <label>Idade do animal</label>
                    <input
                        type="interger"
                        placeholder="Digite a idade"
                        required="required" 
                    />
                </div>
                <div>
                    <label>Porte do animal</label>
                    <select>
                        <option value="-">Selecione o porte</option>
                        <option value="-">P</option>
                        <option value="-">M</option>
                        <option value="-">G</option>
                    </select>
                </div>
                <div>
                    <label>Raça</label>
                    <input
                        type="text"
                        placeholder="Digite a raça"
                        required="required" 
                    />
                </div>
                <div>
                    <label>Informações adicionais</label>
                    <input
                        type="text"
                        placeholder="Informações adicionais"
                        required={false} 
                    />
                </div>
                <div>
                    <button>Cadastrar</button>
                </div>
            </form>
        </section>
        
    );
}
export default App;

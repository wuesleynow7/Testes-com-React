import styles from "./styles.module.scss"


export default function SignUp(){
    return(
        <div className={styles.container}>
            <h2>Cadastre-se</h2>
            
            <form>
                
            <input type="text" placeholder="Insira seu nome"/>
            <input type="text" placeholder="Insira seu e-mail"/>
            <input type="text" placeholder="Insira seu senha"/>
            <button>Sing Up</button>

            </form>

        </div>
    );
}